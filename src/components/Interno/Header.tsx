"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Bell,
  Settings,
  User,
  LogOut,
  Menu,
  X,
  ChevronDown,
  // Home,
  // BarChart3,
  // Users,
  // Calendar,
  // Package,
  // MessageSquare,
  HelpCircle,
  Maximize2,
  Minimize2,
} from "lucide-react"
import { useTheme } from "../../global/Theme-context"

interface InternalHeaderProps {
  userName?: string
  userAvatar?: string
  notifications?: number
  onMenuToggle?: (isOpen: boolean) => void
  onLogout?: () => void
  onProfileClick?: () => void
  onSettingsClick?: () => void
  breadcrumbs?: Array<{ label: string; href?: string }>
}

const InternalHeader = ({
  userName = "João Silva",
  userAvatar,
  notifications = 3,
  onMenuToggle,
  onLogout,
  onProfileClick,
  onSettingsClick,
  breadcrumbs = [{ label: "Dashboard" }],
}: InternalHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  // const [searchValue, setSearchValue] = useState("")
  const { currentTheme: theme } = useTheme()

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsProfileOpen(false)
      setIsNotificationsOpen(false)
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  // Mock notifications data
  const notificationsList = [
    { id: 1, title: "Novo agendamento", message: "Cliente agendou para hoje às 14h", time: "5 min" },
    { id: 2, title: "Pagamento recebido", message: "Pagamento de R$ 150,00 confirmado", time: "10 min" },
    { id: 3, title: "Avaliação recebida", message: "Cliente deixou 5 estrelas", time: "1h" },
  ]

  // Quick actions menu
  // const quickActions = [
  //   { icon: Home, label: "Dashboard", href: "/dashboard" },
  //   { icon: Calendar, label: "Agendamentos", href: "/agendamentos" },
  //   { icon: Users, label: "Clientes", href: "/clientes" },
  //   { icon: Package, label: "Produtos", href: "/produtos" },
  //   { icon: BarChart3, label: "Relatórios", href: "/relatorios" },
  //   { icon: MessageSquare, label: "Mensagens", href: "/mensagens" },
  // ]

  const handleMenuToggle = () => {
    const newState = !isMenuOpen
    setIsMenuOpen(newState)
    onMenuToggle?.(newState)
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 w-full border-b backdrop-blur-md"
      style={{
        backgroundColor: `${theme.colors.background}95`,
        borderColor: `${theme.colors.secondary}30`,
        boxShadow: `0 1px 3px ${theme.colors.secondary}20`,
      }}
    >
      <div className="flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={handleMenuToggle}
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{
              backgroundColor: "transparent",
            }}
            whileHover={{
              backgroundColor: `${theme.colors.primary}10`,
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <X size={20} style={{ color: theme.colors.primary }} />
                ) : (
                  <Menu size={20} style={{ color: theme.colors.primary }} />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* Breadcrumbs */}
          <nav className="hidden md:flex items-center space-x-2">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && (
                  <span className="mx-2 text-sm" style={{ color: theme.colors.textSecondary }}>
                    /
                  </span>
                )}
                <span
                  className={`text-sm font-medium ${
                    index === breadcrumbs.length - 1 ? "" : "hover:underline cursor-pointer"
                  }`}
                  style={{
                    color: index === breadcrumbs.length - 1 ? theme.colors.text : theme.colors.textSecondary,
                    fontFamily: theme.fonts.body,
                  }}
                >
                  {crumb.label}
                </span>
              </div>
            ))}
          </nav>
        </div>

        {/* Center Section - Search */}
        {/* <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
              style={{ color: theme.colors.textSecondary }}
            />
            <input
              type="text"
              placeholder="Buscar..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2"
              style={{
                backgroundColor: theme.colors.cardBackground,
                borderColor: `${theme.colors.secondary}40`,
                color: theme.colors.text,
                fontFamily: theme.fonts.body,
              }}
              onFocus={(e) => {
                e.target.style.borderColor = theme.colors.primary
                e.target.style.boxShadow = `0 0 0 2px ${theme.colors.primary}20`
              }}
              onBlur={(e) => {
                e.target.style.borderColor = `${theme.colors.secondary}40`
                e.target.style.boxShadow = "none"
              }}
            />
          </div>
        </div> */}

        {/* Right Section */}
        {!isMenuOpen && (
          <div className="flex items-center gap-5">
            {/* Fullscreen Toggle */}
            <motion.button
              onClick={toggleFullscreen}
              className="hidden md:flex p-2 rounded-lg transition-colors"
              whileHover={{
                backgroundColor: `${theme.colors.primary}10`,
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              {isFullscreen ? (
                <Minimize2 size={18} style={{ color: theme.colors.primary }} />
              ) : (
                <Maximize2 size={18} style={{ color: theme.colors.primary }} />
              )}
            </motion.button>

            {/* Notifications */}
            <div className="relative">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsNotificationsOpen(!isNotificationsOpen)
                  setIsProfileOpen(false)
                }}
                className="relative p-2 rounded-lg transition-colors"
                whileHover={{
                  backgroundColor: `${theme.colors.primary}10`,
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Bell size={18} style={{ color: theme.colors.primary }} />
                {notifications > 0 && (
                  <motion.span
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: theme.colors.primary,
                      color: theme.colors.buttonText,
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    {notifications > 9 ? "9+" : notifications}
                  </motion.span>
                )}
              </motion.button>

              {/* Notifications Dropdown */}
              <AnimatePresence>
                {isNotificationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-80 rounded-lg shadow-lg border z-50"
                    style={{
                      backgroundColor: theme.colors.cardBackground,
                      borderColor: `${theme.colors.secondary}30`,
                    }}
                  >
                    <div className="p-4 border-b" style={{ borderColor: `${theme.colors.secondary}20` }}>
                      <h3 className="font-semibold" style={{ color: theme.colors.text }}>
                        Notificações
                      </h3>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {notificationsList.map((notification) => (
                        <motion.div
                          key={notification.id}
                          className="p-3 border-b last:border-b-0 hover:bg-opacity-50 cursor-pointer"
                          style={{ borderColor: `${theme.colors.secondary}10` }}
                          whileHover={{ backgroundColor: `${theme.colors.primary}05` }}
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <p className="font-medium text-sm" style={{ color: theme.colors.text }}>
                                {notification.title}
                              </p>
                              <p className="text-xs mt-1" style={{ color: theme.colors.textSecondary }}>
                                {notification.message}
                              </p>
                            </div>
                            <span className="text-xs" style={{ color: theme.colors.textSecondary }}>
                              {notification.time}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="p-3 border-t" style={{ borderColor: `${theme.colors.secondary}20` }}>
                      <button
                        className="w-full text-sm font-medium py-2 rounded-md transition-colors"
                        style={{
                          color: theme.colors.primary,
                          backgroundColor: `${theme.colors.primary}10`,
                        }}
                      >
                        Ver todas as notificações
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Settings */}
            <motion.button
              onClick={onSettingsClick}
              className="p-2 rounded-lg transition-colors"
              whileHover={{
                backgroundColor: `${theme.colors.primary}10`,
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Settings size={18} style={{ color: theme.colors.primary }} />
            </motion.button>

            {/* User Profile */}
            <div className="relative">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsProfileOpen(!isProfileOpen)
                  setIsNotificationsOpen(false)
                }}
                className="flex items-center gap-2 p-2 rounded-lg transition-colors"
                whileHover={{ backgroundColor: `${theme.colors.primary}10` }}
              >
                <div className="flex items-center gap-2">
                  {userAvatar ? (
                    <img
                      src={userAvatar || "/placeholder.svg"}
                      alt={userName}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: theme.colors.primary }}
                    >
                      <User size={16} style={{ color: theme.colors.buttonText }} />
                    </div>
                  )}
                  <span className="hidden md:block font-medium text-sm" style={{ color: theme.colors.text }}>
                    {userName}
                  </span>
                  <ChevronDown
                    size={14}
                    className={`hidden md:block transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""}`}
                    style={{ color: theme.colors.textSecondary }}
                  />
                </div>
              </motion.button>

              {/* Profile Dropdown */}
              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-56 rounded-lg shadow-lg border z-50"
                    style={{
                      backgroundColor: theme.colors.cardBackground,
                      borderColor: `${theme.colors.secondary}30`,
                    }}
                  >
                    <div className="p-3 border-b" style={{ borderColor: `${theme.colors.secondary}20` }}>
                      <p className="font-medium" style={{ color: theme.colors.text }}>
                        {userName}
                      </p>
                      <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                        Administrador
                      </p>
                    </div>

                    <div className="py-2">
                      <motion.button
                        onClick={onProfileClick}
                        className="w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors"
                        whileHover={{ backgroundColor: `${theme.colors.primary}10` }}
                        style={{ color: theme.colors.text }}
                      >
                        <User size={16} />
                        Meu Perfil
                      </motion.button>

                      <motion.button
                        onClick={onSettingsClick}
                        className="w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors"
                        whileHover={{ backgroundColor: `${theme.colors.primary}10` }}
                        style={{ color: theme.colors.text }}
                      >
                        <Settings size={16} />
                        Configurações
                      </motion.button>

                      <motion.button
                        className="w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors"
                        whileHover={{ backgroundColor: `${theme.colors.primary}10` }}
                        style={{ color: theme.colors.text }}
                      >
                        <HelpCircle size={16} />
                        Ajuda
                      </motion.button>
                    </div>

                    <div className="border-t py-2" style={{ borderColor: `${theme.colors.secondary}20` }}>
                      <motion.button
                        onClick={onLogout}
                        className="w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors"
                        whileHover={{ backgroundColor: `${theme.colors.primary}10` }}
                        style={{ color: theme.colors.primary }}
                      >
                        <LogOut size={16} />
                        Sair
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}

      </div>

      {/* Mobile Quick Actions */}
      {/* <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t"
            style={{
              backgroundColor: theme.colors.cardBackground,
              borderColor: `${theme.colors.secondary}30`,
            }}
          >
            <div className="p-4">
              <div className="grid grid-cols-3 gap-3">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={index}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg transition-colors"
                    whileHover={{ backgroundColor: `${theme.colors.primary}10` }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <action.icon size={20} style={{ color: theme.colors.primary }} />
                    <span className="text-xs font-medium" style={{ color: theme.colors.text }}>
                      {action.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </motion.header>
  )
}

export default InternalHeader

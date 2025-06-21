"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Home,
  Calendar,
  Users,
  Package,
  BarChart3,
  Settings,
  MessageSquare,
  CreditCard,
  FileText,
  UserCheck,
  Scissors,
  Clock,
  Star,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  // HelpCircle,
  UsersRound,
  CalendarDays,
  PanelsTopLeft,
  ChartNoAxesCombined,
} from "lucide-react"
import { useNavigate, useLocation } from "react-router"
import { useTheme } from "../../global/Theme-context"

interface MenuItem {
  id: string
  label: string
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }> // Accepts size prop
  path: string
  badge?: number
  subItems?: MenuItem[]
}

interface InternalSidebarProps {
  isOpen: boolean
  onToggle: (isOpen: boolean) => void
}

const InternalSidebar = ({ isOpen, onToggle }: InternalSidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const { currentTheme: theme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

  // Menu items configuration
  const menuItems: MenuItem[] = [
    {
      id: "home",
      label: "Home",
      icon: Home,
      path: "/",
    },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: ChartNoAxesCombined,
      path: "/dashboard",
    },
    {
      id: "agendamentos",
      label: "Agendamentos",
      icon: Calendar,
      path: "/agendamentos",
      badge: 3,
      subItems: [
        { id: "agenda-hoje", label: "Hoje", icon: Clock, path: "/agendamentos/hoje" },
        { id: "agenda-semana", label: "Esta Semana", icon: Calendar, path: "/agendamentos/semana" },
        { id: "agenda-historico", label: "Histórico", icon: FileText, path: "/agendamentos/historico" },
      ],
    },
    {
      id: "clientes",
      label: "Clientes",
      icon: Users,
      path: "/clientes",
      subItems: [
        { id: "clientes-ativos", label: "Ativos", icon: UserCheck, path: "/clientes/ativos" },
        { id: "clientes-todos", label: "Todos", icon: Users, path: "/clientes/todos" },
        { id: "clientes-avaliacoes", label: "Avaliações", icon: Star, path: "/clientes/avaliacoes" },
      ],
    },
    {
      id: "servicos",
      label: "Serviços",
      icon: Scissors,
      path: "/servicos/lista",
      subItems: [
        { id: "servicos-lista", label: "Lista de Serviços", icon: Scissors, path: "/servicos/lista" },
        { id: "servicos-categorias", label: "Categorias", icon: Package, path: "/servicos/categorias" },
      ],
    },
    {
      id: "produtos",
      label: "Produtos",
      icon: Package,
      path: "/produtos",
      subItems: [
        { id: "produtos-estoque", label: "Estoque", icon: Package, path: "/produtos/estoque" },
        { id: "produtos-vendas", label: "Vendas", icon: TrendingUp, path: "/produtos/vendas" },
      ],
    },
    {
      id: "colaboradores",
      label: "Colaboradores",
      icon: UsersRound,
      path: "/colaboradores",
      subItems: [
        { id: "colaboradores-estoque", label: "Ativos", icon: UserCheck, path: "/colaboradores/ativos" },
        { id: "colaboradores-vendas", label: "Plano de horário", icon: CalendarDays, path: "/colaboradores/planoshorario" },
      ],
    },
    {
      id: "financeiro",
      label: "Financeiro",
      icon: CreditCard,
      path: "/financeiro",
      subItems: [
        { id: "financeiro-receitas", label: "Receitas", icon: TrendingUp, path: "/financeiro/receitas" },
        { id: "financeiro-despesas", label: "Despesas", icon: CreditCard, path: "/financeiro/despesas" },
        { id: "financeiro-relatorios", label: "Relatórios", icon: FileText, path: "/financeiro/relatorios" },
      ],
    },
    {
      id: "relatorios",
      label: "Relatórios",
      icon: BarChart3,
      path: "/relatorios",
    },
    {
      id: "mensagens",
      label: "Mensagens",
      icon: MessageSquare,
      path: "/mensagens",
      badge: 5,
    },
    {
      id: "configuracoes",
      label: "Configurações",
      icon: Settings,
      path: "/configuracoes",
      subItems: [
        { id: "configuracoes-landingpages", label: "Landing Pages", icon: PanelsTopLeft, path: "/configuracoes/landingpages" },
        { id: "configuracoes-estoque", label: "Estoque", icon: Package, path: "/configuracoes/estoque" },
        { id: "configuracoes-colaboradores", label: "Colaboradores", icon: UsersRound, path: "/configuracoes/colaboradores" },
        { id: "configuracoes-financeiros", label: "Financeiro", icon: CreditCard, path: "/configuracoes/financeiros" },
      ],
    },
  ]

  const bottomMenuItems: MenuItem[] = [
    // {
    //   id: "configuracoes",
    //   label: "Configurações",
    //   icon: Settings,
    //   path: "/configuracoes",
    // },
    // {
    //   id: "ajuda",
    //   label: "Ajuda",
    //   icon: HelpCircle,
    //   path: "/ajuda",
    // },
  ]

  // Toggle expanded items
  const toggleExpanded = (itemId: string) => {
    if (!isOpen) return // Don't expand if sidebar is collapsed

    setExpandedItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  // Check if item is active
  const isItemActive = (item: MenuItem): boolean => {
    if (location.pathname === item.path) return true
    if (item.subItems) {
      return item.subItems.some((subItem) => location.pathname === subItem.path)
    }
    return false
  }

  // Handle navigation
  const handleNavigation = (path: string) => {
    navigate(path)
  }

  // Close expanded items when sidebar collapses
  useEffect(() => {
    if (!isOpen) {
      setExpandedItems([])
    }
  }, [isOpen])

  // Sidebar variants for animation
  const sidebarVariants = {
    expanded: {
      width: "280px",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    collapsed: {
      width: "80px",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  }

  const contentVariants = {
    expanded: {
      opacity: 1,
      transition: { duration: 0.2, delay: 0.1 },
    },
    collapsed: {
      opacity: 0,
      transition: { duration: 0.1 },
    },
  }

  const renderMenuItem = (item: MenuItem, isSubItem = false) => {
    const isActive = isItemActive(item)
    const isExpanded = expandedItems.includes(item.id)
    const hasSubItems = item.subItems && item.subItems.length > 0

    return (
      <div key={item.id}>
        <motion.div
          className={`relative flex items-center gap-5 px-3 py-4 mx-2 rounded-full cursor-pointer transition-all duration-200 ${
            isSubItem ? "ml-4" : ""
          }`}
          style={{
            backgroundColor: isActive
              ? `${theme.colors.primary}15`
              : hoveredItem === item.id
                ? `${theme.colors.primary}08`
                : "transparent",
            borderLeft: isActive && !isSubItem ? `3px solid ${theme.colors.primary}` : "3px solid transparent",
            borderRight: "3px solid transparent"
          }}
          onClick={() => {
            if (hasSubItems && isOpen) {
              toggleExpanded(item.id)
            } else {
              handleNavigation(item.path)
            }
          }}
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
          whileHover={{ x: isOpen ? 2 : 0 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Icon */}
          <div className={isOpen?"flex-shrink-0 ml-2 relative":"flex w-full justify-center relative"}>
            <item.icon
              size={20}
              style={{
                color: isActive ? theme.colors.primary : theme.colors.textSecondary,
              }}
            />
            {/* Badge */}
            {item.badge && item.badge > 0 && (
              <motion.span
                className="absolute -top-1 -right-2 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.buttonText,
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                {item.badge > 9 ? "9+" : item.badge}
              </motion.span>
            )}
          </div>

          {/* Label and Arrow (only when expanded) */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="flex items-center justify-between flex-1 min-w-0"
                variants={contentVariants}
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
              >
                <span
                  className={`font-medium text-sm truncate ${isSubItem ? "text-xs" : ""}`}
                  style={{
                    color: isActive ? theme.colors.primary : theme.colors.text,
                    fontFamily: theme.fonts.body,
                  }}
                >
                  {item.label}
                </span>

                {/* Expand/Collapse Arrow */}
                {hasSubItems && (
                  <motion.div animate={{ rotate: isExpanded ? 90 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronRight size={16} style={{ color: theme.colors.textSecondary }} />
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tooltip for collapsed state */}
          <AnimatePresence>
          {!isOpen && hoveredItem === item.id && (
            <motion.div
              className="absolute left-full ml-5 px-4 py-1 rounded-full shadow-lg z-50 whitespace-nowrap"
              style={{
                backgroundColor: theme.colors.cardBackground,
                color: theme.colors.text,
                border: `1px solid ${theme.colors.secondary}30`,
              }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
            >
              <span className="text-sm font-medium">{item.label}</span>
              {item.badge && item.badge > 0 && (
                <span
                  className="ml-2 px-1.5 py-0.5 rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.buttonText,
                  }}
                >
                  {item.badge}
                </span>
              )}
            </motion.div>
          )}
          </AnimatePresence>
        </motion.div>

        {/* Sub Items */}
        {hasSubItems && isOpen && (
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="ml-4 mt-1 space-y-1">
                  {item.subItems?.map((subItem) => renderMenuItem(subItem, true))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    )
  }

  return (
    <motion.aside
      className="relative flex flex-col h-full border-r shadow-sm"
      style={{
        backgroundColor: theme.colors.cardBackground,
        borderColor: `${theme.colors.secondary}30`,
      }}
      variants={sidebarVariants}
      animate={isOpen ? "expanded" : "collapsed"}
      initial={false}
    >
      {/* Toggle Button */}
      <motion.button
        className="absolute -right-4 top-4 w-10 h-10 rounded-full border shadow-md flex items-center justify-center z-20"
        style={{
          backgroundColor: theme.colors.background,
          borderColor: `${theme.colors.secondary}30`,
        }}
        onClick={() => onToggle(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <ChevronLeft size={20} style={{ color: theme.colors.primary }} />
        ) : (
          <ChevronRight size={20} style={{ color: theme.colors.primary }} />
        )}
      </motion.button>

      {/* Logo/Brand Area */}
      <div className="p-4 border-b" style={{ borderColor: `${theme.colors.secondary}20` }}>
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: theme.colors.primary }}
          >
            <Scissors size={18} style={{ color: theme.colors.buttonText }} />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div variants={contentVariants} initial="collapsed" animate="expanded" exit="collapsed">
                <h2
                  className="font-bold text-lg"
                  style={{
                    color: theme.colors.text,
                    fontFamily: theme.fonts.heading,
                  }}
                >
                  Admin
                </h2>
                <p className="text-xs" style={{ color: theme.colors.textSecondary }}>
                  Painel de Controle
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 py-4 ">
        <nav className="space-y-1">{menuItems.map((item) => renderMenuItem(item))}</nav>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t py-4" style={{ borderColor: `${theme.colors.secondary}20` }}>
        <nav className="space-y-1">{bottomMenuItems.map((item) => renderMenuItem(item))}</nav>
      </div>

      {/* User Info (when expanded) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="p-4 border-t"
            style={{ borderColor: `${theme.colors.secondary}20` }}
            variants={contentVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: theme.colors.primary }}
              >
                <span className="text-sm font-bold" style={{ color: theme.colors.buttonText }}>
                  JS
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate" style={{ color: theme.colors.text }}>
                  João Silva
                </p>
                <p className="text-xs truncate" style={{ color: theme.colors.textSecondary }}>
                  Administrador
                </p>
                
              </div>
              <p className="text-xs truncate" style={{ color: theme.colors.textSecondary }} > Versão 1.0.0 </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.aside>
  )
}

export default InternalSidebar

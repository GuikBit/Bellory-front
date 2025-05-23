"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Facebook,
  Instagram,
  Phone,
  Menu,
  X,
  ShoppingCart,
  ChevronDown,
  User,
  Search,
  Heart,
  MapPin,
  Clock,
  Flower,
  Calendar,
} from "lucide-react"
import { useTheme } from "../../contexts/Theme-context"
import Logo3D from "../Fragments/Logo3D"


interface HeaderProps {
  cartItemCount?: number
  onThemeToggle?: () => void
}

const FemininoEleganteHeader = ({ cartItemCount = 0 }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { currentTheme: theme } = useTheme()

  // Detectar scroll para mudar a aparência do header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  // Navegação principal
  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Serviços",
      path: "/servicos",
      dropdown: [
        { name: "Corte de Cabelo", path: "/servicos/corte" },
        { name: "Tratamentos", path: "/servicos/tratamentos" },
        { name: "Coloração", path: "/servicos/coloracao" },
      ],
    },
    { name: "Produtos", path: "/produtos" },
    {
      name: "Planos",
      path: "/planos",
      dropdown: [
        { name: "Plano Básico", path: "/planos/basico" },
        { name: "Plano Plus", path: "/planos/plus" },
      ],
    },
    { name: "Sobre", path: "/sobre" },
  ]

  // Redes sociais
  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com/suabebearia" },
    { icon: Instagram, url: "https://instagram.com/suabebearia" },
    { icon: Phone, url: "tel:+5511999999999" },
  ]

  // Animações
  const headerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeInOut" } },
  }

  const dropdownVariants = {
    closed: { opacity: 0, y: -5, height: 0, transition: { duration: 0.2 } },
    open: { opacity: 1, y: 0, height: "auto", transition: { duration: 0.3, staggerChildren: 0.05 } },
  }

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  }

  // Elementos decorativos
  const decorElements = [
    { top: "10%", left: "5%", size: "w-2 h-2", delay: 0 },
    { top: "20%", right: "10%", size: "w-3 h-3", delay: 0.5 },
    { top: "70%", left: "15%", size: "w-2 h-2", delay: 1 },
    { top: "40%", right: "5%", size: "w-1 h-1", delay: 1.5 },
  ]

  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={headerVariants}
      className="w-full z-50 transition-all duration-300 sticky top-0"
      style={{
        background: scrolled
          ? `rgba(${theme.isDark ? "18, 18, 18, 0.95" : "255, 255, 255, 0.95"})`
          : theme.colors.background,
        borderBottom: `1px solid ${theme.colors.secondary}30`,
        boxShadow: scrolled ? "0 4px 10px rgba(0, 0, 0, 0.05)" : "none",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      {/* Elementos decorativos */}
      {decorElements.map((elem, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${elem.size} hidden md:block`}
          style={{
            top: elem.top,
            left: elem.left,
            right: elem.right,
            backgroundColor: `${theme.colors.primary}30`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.2, 1],
            opacity: [0, 0.8, 0.5],
          }}
          transition={{
            delay: elem.delay,
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 3,
          }}
        />
      ))}

      <div className="container mx-auto px-4">
        {/* Top bar with contact info and social links */}
        <div
          className="hidden lg:flex justify-end items-center py-3 text-sm transition-all duration-300"
          style={{
            color: theme.colors.textSecondary,
            height: scrolled ? "0px" : "auto",
            opacity: scrolled ? 0 : 1,
            overflow: "hidden",
          }}
        >
          <div className="flex items-center space-x-6 mr-6">
            <div className="flex items-center">
              <Phone size={14} className="mr-2" style={{ color: theme.colors.primary }} />
              <span className="italic">(11) 99999-9999</span>
            </div>
            <div className="flex items-center">
              <MapPin size={14} className="mr-2" style={{ color: theme.colors.primary }} />
              <span className="italic">Rua dos Cabelos, 123</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300"
                style={{ color: theme.colors.textSecondary }}
                whileHover={{ scale: 1.1, color: theme.colors.primary }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={14} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Main navigation bar */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="relative overflow-hidden rounded-full border-2 p-1.5 cursor-pointer"
              style={{ borderColor: theme.colors.secondary }}
            >
              <motion.div
                className="w-9 h-9 flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Logo3D scale={0.9} />
              </motion.div>
            </div>
            <div>
              <h1
                className="text-xl font-serif italic"
                style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}
              >
                Beauty<span style={{ color: theme.colors.primary }}>Salon</span>
              </h1>
              <div className="text-xs italic" style={{ color: theme.colors.textSecondary }}>
                Elegância & Sofisticação
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <motion.div
                  className="flex items-center"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.div
                    className="px-2 py-1 font-medium text-base relative group cursor-pointer"
                    style={{
                      color: activeDropdown === item.name ? theme.colors.primary : theme.colors.text,
                      fontFamily: theme.fonts.body,
                    }}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown
                        size={14}
                        className={`ml-1 inline-block transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`}
                      />
                    )}

                    {/* Underline animation */}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 transition-all duration-300"
                      style={{
                        background: theme.colors.primary,
                      }}
                    />
                  </motion.div>

                  {/* Dropdown menu */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          className="absolute top-full left-0 mt-1 py-2 rounded-md shadow-md min-w-[200px] z-20"
                          style={{
                            background: theme.colors.background,
                            border: `1px solid ${theme.colors.secondary}20`,
                          }}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={dropdownVariants}
                        >
                          {item.dropdown.map((subItem, subIndex) => (
                            <motion.div
                              key={subIndex}
                              className="block px-4 py-2 hover:bg-opacity-5 transition-colors duration-200 cursor-pointer"
                              style={{
                                color: theme.colors.text,
                                fontFamily: theme.fonts.body,
                              }}
                              variants={itemVariants}
                              whileHover={{ x: 2, backgroundColor: `${theme.colors.primary}10` }}
                            >
                              {subItem.name}
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Favorites */}
            <motion.button
              className="p-2 rounded-full transition-colors duration-300 hidden md:flex"
              style={{
                backgroundColor: "transparent",
              }}
              whileHover={{ scale: 1.05, backgroundColor: `${theme.colors.primary}10` }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart size={18} style={{ color: theme.colors.primary }} />
            </motion.button>

            {/* Shopping Cart */}
            <motion.div className="relative">
              <motion.button
                className="p-2 rounded-full transition-colors duration-300"
                style={{
                  backgroundColor: "transparent",
                }}
                whileHover={{ scale: 1.05, backgroundColor: `${theme.colors.primary}10` }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingCart size={18} style={{ color: theme.colors.primary }} />
                {cartItemCount > 0 && (
                  <motion.span
                    className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: theme.colors.primary, color: theme.colors.buttonText }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    {cartItemCount}
                  </motion.span>
                )}
              </motion.button>
            </motion.div>

            {/* User Profile */}
            <motion.button
              className="p-2 rounded-full transition-colors duration-300 hidden md:flex"
              style={{
                backgroundColor: "transparent",
              }}
              whileHover={{ scale: 1.05, backgroundColor: `${theme.colors.primary}10` }}
              whileTap={{ scale: 0.95 }}
            >
              <User size={18} style={{ color: theme.colors.primary }} />
            </motion.button>

            {/* Appointment Button - Desktop */}
            <motion.button
              className="hidden md:flex items-center px-5 py-1.5 rounded-full font-medium transition-colors duration-300 border"
              style={{
                background: "transparent",
                color: theme.colors.primary,
                borderColor: theme.colors.primary,
              }}
              whileHover={{
                scale: 1.02,
                backgroundColor: `${theme.colors.primary}10`,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar size={16} className="mr-2" />
              Agendar
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden p-2 rounded-full transition-colors duration-300"
              style={{
                backgroundColor: "transparent",
              }}
              whileHover={{ scale: 1.05, backgroundColor: `${theme.colors.primary}10` }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? "close" : "open"}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? (
                    <X size={20} style={{ color: theme.colors.primary }} />
                  ) : (
                    <Menu size={20} style={{ color: theme.colors.primary }} />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden overflow-hidden"
            style={{
              background: theme.colors.background,
              borderTop: `1px solid ${theme.colors.secondary}30`,
            }}
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <div key={index}>
                    <div
                      className="flex items-center justify-between py-2 border-b"
                      style={{
                        borderColor: `${theme.colors.secondary}30`,
                      }}
                      onClick={() => {
                        if (item.dropdown) {
                          setActiveDropdown(activeDropdown === item.name ? null : item.name)
                        }
                      }}
                    >
                      <span
                        className="font-medium cursor-pointer"
                        style={{
                          color: activeDropdown === item.name ? theme.colors.primary : theme.colors.text,
                          fontFamily: theme.fonts.body,
                        }}
                      >
                        {item.name}
                      </span>
                      {item.dropdown && (
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                          style={{
                            color: activeDropdown === item.name ? theme.colors.primary : theme.colors.text,
                          }}
                        />
                      )}
                    </div>

                    {/* Mobile Dropdown */}
                    {item.dropdown && (
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            className="pl-4 overflow-hidden"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={dropdownVariants}
                          >
                            {item.dropdown.map((subItem, subIndex) => (
                              <motion.div
                                key={subIndex}
                                className="block py-2 transition-colors duration-200"
                                style={{
                                  color: theme.colors.textSecondary,
                                  fontFamily: theme.fonts.body,
                                }}
                                variants={itemVariants}
                              >
                                <Flower
                                  size={12}
                                  className="inline-block mr-2"
                                  style={{ color: theme.colors.primary }}
                                />
                                {subItem.name}
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-6 flex justify-center">
                <motion.button
                  className="w-full py-3 px-4 rounded-full font-medium transition-colors duration-300 flex items-center justify-center border"
                  style={{
                    background: "transparent",
                    color: theme.colors.primary,
                    borderColor: theme.colors.primary,
                    fontFamily: theme.fonts.body,
                  }}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: `${theme.colors.primary}10`,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Calendar size={18} className="mr-2" />
                  Agendar Horário
                </motion.button>
              </div>

              <div className="mt-4 flex justify-center">
                <motion.button
                  className="w-full py-3 px-4 rounded-full font-medium transition-colors duration-300 flex items-center justify-center border mt-2"
                  style={{
                    background: theme.colors.primary,
                    color: theme.colors.buttonText,
                    borderColor: theme.colors.primary,
                    fontFamily: theme.fonts.body,
                  }}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: adjustColor(theme.colors.primary, -10),
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <User size={18} className="mr-2" />
                  Login / Cadastro
                </motion.button>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <motion.div
                  className="flex flex-col items-center justify-center p-3 rounded-md border"
                  style={{
                    borderColor: `${theme.colors.primary}30`,
                  }}
                  whileHover={{ scale: 1.05, borderColor: theme.colors.primary }}
                >
                  <ShoppingCart size={18} style={{ color: theme.colors.primary }} />
                  <span className="mt-1 text-xs" style={{ color: theme.colors.text }}>
                    Carrinho
                  </span>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center justify-center p-3 rounded-md border"
                  style={{
                    borderColor: `${theme.colors.primary}30`,
                  }}
                  whileHover={{ scale: 1.05, borderColor: theme.colors.primary }}
                >
                  <Heart size={18} style={{ color: theme.colors.primary }} />
                  <span className="mt-1 text-xs" style={{ color: theme.colors.text }}>
                    Favoritos
                  </span>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center justify-center p-3 rounded-md border"
                  style={{
                    borderColor: `${theme.colors.primary}30`,
                  }}
                  whileHover={{ scale: 1.05, borderColor: theme.colors.primary }}
                >
                  <Search size={18} style={{ color: theme.colors.primary }} />
                  <span className="mt-1 text-xs" style={{ color: theme.colors.text }}>
                    Buscar
                  </span>
                </motion.div>
              </div>

              <div className="mt-6 pt-4 border-t text-sm" style={{ borderColor: `${theme.colors.secondary}20` }}>
                <div className="flex flex-col space-y-2" style={{ color: theme.colors.textSecondary }}>
                  <div className="flex items-center">
                    <Phone size={14} className="mr-2" style={{ color: theme.colors.primary }} />
                    <span>(11) 99999-9999</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2" style={{ color: theme.colors.primary }} />
                    <span>Rua dos Cabelos, 123</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2" style={{ color: theme.colors.primary }} />
                    <span>Seg-Sex: 9h-19h | Sáb: 9h-17h</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

// Função para ajustar a cor (escurecer/clarear)
function adjustColor(color: string, percent: number) {
  // Converter hex para RGB
  let r = Number.parseInt(color.substring(1, 3), 16)
  let g = Number.parseInt(color.substring(3, 5), 16)
  let b = Number.parseInt(color.substring(5, 7), 16)

  // Ajustar valores
  r = Math.max(0, Math.min(255, r + percent))
  g = Math.max(0, Math.min(255, g + percent))
  b = Math.max(0, Math.min(255, b + percent))

  // Converter de volta para hex
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

export default FemininoEleganteHeader

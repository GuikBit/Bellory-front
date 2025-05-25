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
  Hexagon,
  ArrowRight,
  Twitter,
  Zap,
} from "lucide-react"
import { useTheme } from "../../contexts/Theme-context"
// import Logo3D from "../Fragments/Logo3D"
import { useNavigate } from "react-router"
import ThemeSwitcherDropdown from "../Fragments/SelectTheme"

interface HeaderProps {
  cartItemCount?: number
  onThemeToggle?: () => void
}

const MasculinoModernoHeader = ({ cartItemCount = 0 }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const { currentTheme: theme } = useTheme()
  const navigate = useNavigate();
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
        { name: "Corte de Cabelo", path: "/servicos" },
        { name: "Barba", path: "/servicos" },
        { name: "Tratamentos", path: "/servicos" },
      ],
    },
    { name: "Produtos", path: "/produtos" },
    {
      name: "Planos",
      path: "/planos",
      dropdown: [
        { name: "Plano Básico", path: "/planos" },
        { name: "Plano Plus", path: "/planos" },
      ],
    },
    { name: "Sobre", path: "/sobre" },
  ]

  // Redes sociais
  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com/suabebearia" },
    { icon: Instagram, url: "https://instagram.com/suabebearia" },
    { icon: Twitter, url: "https://twitter.com/suabebearia" },
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

  const searchVariants = {
    closed: { width: "40px", transition: { duration: 0.3 } },
    open: { width: "300px", transition: { duration: 0.3 } },
  }

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
        boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.15)" : "none",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Top bar with contact info and social links */}
        <div
          className="hidden lg:flex justify-between items-center py-3 text-sm transition-all duration-300"
          style={{
            color: theme.colors.textSecondary,
            height: scrolled ? "0px" : "auto",
            opacity: scrolled ? 0 : 1,
            overflow: "hidden",
          }}
        >
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <MapPin size={16} className="mr-2" style={{ color: theme.colors.primary }} />
              <span>Rua dos Cabelos, 123</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" style={{ color: theme.colors.primary }} />
              <span>Seg-Sex: 9h-19h | Sáb: 9h-17h</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 relative group"
                style={{ color: theme.colors.textSecondary }}
                whileHover={{ scale: 1.1, color: theme.colors.primary }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={16} />
              </motion.a>
            ))}
            <div className="h-6 w-px mx-2" style={{ backgroundColor: `${theme.colors.primary}30` }}></div>
            <div className="flex items-center">
              <Phone size={16} className="mr-2" style={{ color: theme.colors.primary }} />
              <span>(11) 99999-9999</span>
            </div>
          </div>
        </div>

        {/* Main navigation bar */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative overflow-hidden rounded-md p-1 cursor-pointer">
              <motion.div
                className="w-12 h-12 flex items-center justify-center overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  rotateY: 180,
                  transition: { duration: 0.5 },
                }}
              >
                {/* <Logo3D scale={1.2} /> */}
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r opacity-0 hover:opacity-30 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(45deg, ${theme.colors.primary}50, transparent)`,
                }}
              />
            </div>
            <div>
              <h1
                className="text-2xl font-bold tracking-tight"
                style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}
              >
                BARBER<span style={{ color: theme.colors.primary }}>SHOP</span>
              </h1>
              <div className="text-xs tracking-widest" style={{ color: theme.colors.textSecondary }}>
                ESTILO & PRECISÃO
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <motion.div
                  className="flex items-center"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.div
                    className="px-3 py-2 font-medium text-base relative group cursor-pointer"
                    style={{
                      color:
                        activeDropdown === item.name
                          ? theme.colors.primary
                          : theme.isDark
                            ? "rgb(229, 229, 229)"
                            : "rgb(64, 64, 64)",
                      fontFamily: theme.fonts.body,
                    }}
                    whileHover={{ y: -1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => {
                      e.preventDefault()
                      navigate(item.path)
                    }}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown
                        size={14}
                        className={`ml-1 inline-block transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`}
                      />
                    )}
                  </motion.div>

                  {/* Dropdown menu */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          className="absolute top-full left-0 mt-1 py-2 rounded-md shadow-lg min-w-[200px] z-20"
                          style={{
                            background: theme.colors.background,
                            border: `1px solid ${theme.colors.primary}30`,
                          }}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={dropdownVariants}
                        >
                          {item.dropdown.map((subItem, subIndex) => (
                            <motion.div
                              key={subIndex}
                              className="block px-4 py-2 hover:bg-opacity-10 transition-colors duration-200 cursor-pointer"
                              style={{
                                color: theme.colors.text,
                                fontFamily: theme.fonts.body,
                              }}
                              onClick={(e) => {
                                e.preventDefault()
                                navigate(subItem.path)
                                setActiveDropdown(null)
                              }}
                              variants={itemVariants}
                              whileHover={{ x: 3, backgroundColor: `${theme.colors.primary}10` }}
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
            <ThemeSwitcherDropdown />
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-5">
            {/* Search */}
            <AnimatePresence>
              <motion.div
                className="relative hidden md:flex items-center"
                initial="closed"
                animate={searchOpen ? "open" : "closed"}
                variants={searchVariants}
              >
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  className="w-full h-10 pl-10 pr-4 rounded-md focus:outline-none transition-all duration-300"
                  style={{
                    backgroundColor: theme.isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                    color: theme.colors.text,
                    opacity: searchOpen ? 1 : 0,
                  }}
                />
                <Search
                  size={20}
                  className="absolute left-3 cursor-pointer"
                  style={{ color: theme.colors.primary }}
                  onClick={() => setSearchOpen(!searchOpen)}
                />
              </motion.div>
            </AnimatePresence>

            {/* Favorites */}
            <motion.button
              className="p-2 rounded-md transition-colors duration-300 hidden md:flex"
              style={{
                backgroundColor: "transparent",
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: theme.isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart size={20} style={{ color: theme.colors.primary }} />
            </motion.button>

            {/* Shopping Cart */}
            <motion.div className="relative">
              <motion.button
                className="p-2 rounded-md transition-colors duration-300"
                style={{
                  backgroundColor: "transparent",
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: theme.isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {navigate('/carrinho')}}
              >
                <ShoppingCart size={20} style={{ color: theme.colors.primary }} />
                {cartItemCount > 0 && (
                  <motion.span
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
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
              className="p-2 rounded-md transition-colors duration-300 hidden md:flex"
              style={{
                backgroundColor: "transparent",
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: theme.isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <User size={20} style={{ color: theme.colors.primary }} />
            </motion.button>

            {/* Login Button - Desktop */}
            <motion.button
              className="hidden md:flex items-center px-5 py-2 rounded-md font-medium transition-colors duration-300"
              style={{
                background: theme.colors.primary,
                color: theme.colors.buttonText,
              }}
              whileHover={{
                scale: 1.05,
                background: adjustColor(theme.colors.primary, -10),
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {navigate('/login')}}
            >
              <span>Login</span>
              <ArrowRight size={16} className="ml-2" />
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden p-2 rounded-md transition-colors duration-300"
              style={{
                backgroundColor: "transparent",
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: theme.isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
              }}
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
              borderTop: `1px solid ${theme.isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
            }}
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="container mx-auto px-4 py-4">
              {/* Search in mobile */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  className="w-full h-10 pl-10 pr-4 rounded-md focus:outline-none"
                  style={{
                    backgroundColor: theme.isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                    color: theme.colors.text,
                  }}
                />
                <Search
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                  style={{ color: theme.colors.primary }}
                />
              </div>

              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <div key={index}>
                    <div
                      className="flex items-center justify-between py-2 border-b"
                      style={{
                        borderColor: theme.isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
                      }}
                      onClick={() => {
                        if (item.dropdown) {
                          setActiveDropdown(activeDropdown === item.name ? null : item.name)
                        }else {
                          navigate(item.path)
                        }
                      }}
                    >
                      <span
                        className="font-medium cursor-pointer"
                        style={{
                          color:
                            activeDropdown === item.name
                              ? theme.colors.primary
                              : theme.isDark
                                ? "rgb(229, 229, 229)"
                                : "rgb(64, 64, 64)",
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
                            color:
                              activeDropdown === item.name
                                ? theme.colors.primary
                                : theme.isDark
                                  ? "rgb(229, 229, 229)"
                                  : "rgb(64, 64, 64)",
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
                                  color: theme.isDark ? "rgb(178, 178, 178)" : "rgb(102, 102, 102)",
                                  fontFamily: theme.fonts.body,
                                }}
                                variants={itemVariants}
                                onClick={(e) => {
                                  e.preventDefault()
                                  navigate(subItem.path)
                                }}
                              >
                                <Hexagon size={8} className="inline-block mr-2 fill-current" />
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
                  className="w-full py-3 px-4 rounded-md font-medium transition-colors duration-300 flex items-center justify-center"
                  style={{
                    background: theme.colors.primary,
                    color: theme.colors.buttonText,
                    fontFamily: theme.fonts.body,
                  }}
                  whileHover={{
                    scale: 1.02,
                    background: adjustColor(theme.colors.primary, -10),
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {navigate('/login')}}
                >
                  <Zap size={18} className="mr-2" />
                  Login / Cadastro
                </motion.button>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <motion.div
                  className="flex flex-col items-center justify-center p-3 rounded-md"
                  style={{
                    backgroundColor: theme.isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                  }}
                  onClick={() => {navigate('/carrinho')}}
                  whileHover={{ scale: 1.05, backgroundColor: `${theme.colors.primary}20` }}
                >
                  <ShoppingCart size={20} style={{ color: theme.colors.primary }} />
                  <span className="mt-1 text-xs" style={{ color: theme.colors.text }}>
                    Carrinho
                  </span>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center justify-center p-3 rounded-md"
                  style={{
                    backgroundColor: theme.isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: `${theme.colors.primary}20` }}
                >
                  <Heart size={20} style={{ color: theme.colors.primary }} />
                  <span className="mt-1 text-xs" style={{ color: theme.colors.text }}>
                    Favoritos
                  </span>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center justify-center p-3 rounded-md"
                  style={{
                    backgroundColor: theme.isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: `${theme.colors.primary}20` }}
                >
                  <User size={20} style={{ color: theme.colors.primary }} />
                  <span className="mt-1 text-xs" style={{ color: theme.colors.text }}>
                    Perfil
                  </span>
                </motion.div>
              </div>

              <div
                className="mt-6 pt-4 border-t text-sm"
                style={{ borderColor: theme.isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}
              >
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

export default MasculinoModernoHeader

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
  MapPin,
  Clock,
  Crown,
  Twitter,
} from "lucide-react"
import { useTheme } from "../../../global/Theme-context"
// import Logo3D from "../Fragments/Logo3D"
import { useNavigate } from "react-router"
import ThemeSwitcherDropdown from "../../Fragments/SelectTheme"

interface HeaderProps {
  cartItemCount?: number
  onThemeToggle?: () => void
}

const MasculinoClassicoHeader = ({ cartItemCount = 0 }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
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
    { name: "HOME", path: "/" },
    {
      name: "SERVIÇOS",
      path: "/servicos",
      dropdown: [
        { name: "Corte de Cabelo", path: "/servicos" },
        { name: "Barba", path: "/servicos" },
        { name: "Tratamentos", path: "/servicos" },
      ],
    },
    { name: "PRODUTOS", path: "/produtos" },
    {
      name: "PLANOS",
      path: "/planos",
      dropdown: [
        { name: "Plano Básico", path: "/planos" },
        { name: "Plano Plus", path: "/planos" },
      ],
    },
    { name: "SOBRE", path: "/sobre" },
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

  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={headerVariants}
      className="w-full z-50 transition-all duration-300 sticky top-0"
      style={{
        background: theme.colors.background,
        borderBottom: `2px solid ${theme.colors.primary}`,
      }}
    >
      <div className="container mx-auto px-4">
        {/* Top bar with contact info and social links */}
        <div
          className="hidden lg:flex justify-between items-center py-2 text-sm border-b transition-all duration-300"
          style={{
            color: theme.colors.textSecondary,
            borderColor: "rgb(229, 229, 229)",
            height: scrolled ? "0px" : "auto",
            opacity: scrolled ? 0 : 1,
            overflow: "hidden",
          }}
        >
          <div className="flex items-center">
            <span className="font-serif uppercase tracking-wider">TRADIÇÃO EM BARBEARIA DESDE 1995</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone size={14} className="mr-2" style={{ color: theme.colors.primary }} />
              <span>(11) 99999-9999</span>
            </div>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{ color: theme.colors.textSecondary }}
                  whileHover={{ color: theme.colors.primary }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Main navigation bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            className="flex flex-col items-center md:flex-row md:gap-3 mb-4 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative overflow-hidden cursor-pointer mb-2 md:mb-0">
              <motion.div
                className="w-12 h-12 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* <Logo3D scale={1.2} /> */}
              </motion.div>
            </div>
            <div className="text-center md:text-left">
              <h1
                className="text-xl font-serif font-bold"
                style={{ color: theme.colors.primary, fontFamily: theme.fonts.heading }}
              >
                BARBERSHOP
              </h1>
              <div className="flex items-center justify-center md:justify-start">
                <div className="h-[1px] w-6" style={{ background: theme.colors.secondary }}></div>
                <Crown className="mx-1" style={{ color: theme.colors.secondary }} size={12} />
                <div className="h-[1px] w-6" style={{ background: theme.colors.secondary }}></div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <motion.div
                  className="flex items-center"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.div
                    className="px-5 py-3 font-serif text-base uppercase tracking-wide relative group border-r border-neutral-200 last:border-r-0 cursor-pointer"
                    style={{
                      color: activeDropdown === item.name ? theme.colors.primary : theme.colors.text,
                      fontFamily: theme.fonts.heading,
                    }}
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
                          className="absolute top-full left-0 mt-0 py-2 shadow-md min-w-[200px] z-20"
                          style={{
                            background: theme.colors.background,
                            borderTop: `2px solid ${theme.colors.primary}`,
                          }}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={dropdownVariants}
                        >
                          {item.dropdown.map((subItem, subIndex) => (
                            <motion.div
                              key={subIndex}
                              className="block px-5 py-2 hover:bg-neutral-100 transition-colors duration-200 font-serif cursor-pointer"
                              style={{
                                color: theme.colors.text,
                                fontFamily: theme.fonts.body,
                              }}
                              variants={itemVariants}
                              onClick={(e) => {
                                e.preventDefault()
                                navigate(subItem.path)
                                setActiveDropdown(null)
                              }}
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
          <div className="flex items-center space-x-6">
            {/* Shopping Cart */}
            <motion.div className="relative">
              <motion.button
                className="p-2 border-r border-neutral-200 pr-6 transition-colors duration-300"
                style={{
                  backgroundColor: "transparent",
                }}
                whileHover={{ color: theme.colors.primary }}
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

            {/* Login Button - Desktop */}
            <motion.button
              className="hidden md:flex items-center px-6 py-2 font-serif uppercase tracking-wide transition-colors duration-300"
              style={{
                background: theme.colors.primary,
                color: theme.colors.buttonText,
              }}
              whileHover={{
                background: adjustColor(theme.colors.primary, -10),
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {navigate('/login')}}
            >
              Login
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden p-2 transition-colors duration-300"
              style={{
                backgroundColor: "transparent",
              }}
              whileHover={{ color: theme.colors.primary }}
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
              borderTop: `1px solid rgb(229, 229, 229)`,
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
                      className="flex items-center justify-between py-2 border-b border-neutral-200"
                      onClick={() => {
                        if (item.dropdown) {
                          setActiveDropdown(activeDropdown === item.name ? null : item.name)
                        }else {
                          navigate(item.path)
                        }
                      }}
                    >
                      <span
                        className="font-serif uppercase tracking-wide cursor-pointer"
                        style={{
                          color: activeDropdown === item.name ? theme.colors.primary : theme.colors.text,
                          fontFamily: theme.fonts.heading,
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
                                className="block py-2 transition-colors duration-200 font-serif"
                                style={{
                                  color: theme.colors.textSecondary,
                                  fontFamily: theme.fonts.body,
                                }}
                                variants={itemVariants}
                                onClick={(e) => {
                                  e.preventDefault()
                                  navigate(subItem.path)
                                }}
                              >
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
                  className="w-full py-3 px-4 font-serif uppercase tracking-wide transition-colors duration-300 flex items-center justify-center"
                  style={{
                    background: theme.colors.primary,
                    color: theme.colors.buttonText,
                    fontFamily: theme.fonts.heading,
                  }}
                  whileHover={{
                    background: adjustColor(theme.colors.primary, -10),
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {navigate('/login')}}
                >
                  Login / Cadastro
                </motion.button>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200 text-sm">
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

              <div className="mt-6 flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300"
                    style={{ color: theme.colors.textSecondary }}
                    whileHover={{ color: theme.colors.primary }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
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

export default MasculinoClassicoHeader

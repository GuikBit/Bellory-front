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
  Sparkles,
  Star,
  Twitter,
  Youtube,
} from "lucide-react"
import { useTheme } from "../../contexts/Theme-context"
import Logo3D from "../Fragments/Logo3D"

interface HeaderProps {
  cartItemCount?: number
  onThemeToggle?: () => void
}

const FemininoModernoHeader = ({ cartItemCount = 0 }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeNavItem, setActiveNavItem] = useState("Home")
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
        { name: "Unhas", path: "/servicos/unhas" },
      ],
    },
    { name: "Produtos", path: "/produtos" },
    {
      name: "Planos",
      path: "/planos",
      dropdown: [
        { name: "Plano Básico", path: "/planos/basico" },
        { name: "Plano Plus", path: "/planos/plus" },
        { name: "Plano Premium", path: "/planos/premium" },
      ],
    },
    { name: "Blog", path: "/blog" },
    { name: "Sobre", path: "/sobre" },
  ]

  // Redes sociais
  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com/suabebearia" },
    { icon: Instagram, url: "https://instagram.com/suabebearia" },
    { icon: Twitter, url: "https://twitter.com/suabebearia" },
    { icon: Youtube, url: "https://youtube.com/suabebearia" },
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
  const sparkleElements = [
    { top: "10%", left: "5%", delay: 0, size: 16 },
    { top: "15%", right: "10%", delay: 1.5, size: 12 },
    { top: "60%", left: "15%", delay: 0.8, size: 14 },
    { top: "30%", right: "20%", delay: 2, size: 10 },
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
          : `linear-gradient(135deg, ${theme.colors.background}, ${theme.colors.secondary}20)`,
        boxShadow: scrolled ? "0 4px 15px rgba(0, 0, 0, 0.08)" : "none",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      {/* Elementos decorativos */}
      {sparkleElements.map((elem, index) => (
        <motion.div
          key={index}
          className="absolute hidden md:block"
          style={{
            top: elem.top,
            left: elem.left,
            right: elem.right,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            delay: elem.delay,
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 3,
          }}
        >
          <Sparkles size={elem.size} style={{ color: `${theme.colors.primary}70` }} />
        </motion.div>
      ))}

      <div className="container mx-auto px-4">
        {/* Top bar with social links and contact */}
        <div
          className="hidden lg:flex justify-between items-center py-3 text-sm transition-all duration-300"
          style={{
            color: theme.colors.textSecondary,
            height: scrolled ? "0px" : "auto",
            opacity: scrolled ? 0 : 1,
            overflow: "hidden",
          }}
        >
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 p-1.5 rounded-full"
                style={{
                  color: theme.colors.text,
                  background: `${theme.colors.primary}20`,
                }}
                whileHover={{
                  scale: 1.1,
                  background: theme.colors.primary,
                  color: theme.colors.buttonText,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={14} />
              </motion.a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <motion.div
              className="flex items-center px-3 py-1 rounded-full"
              style={{ background: `${theme.colors.secondary}20` }}
              whileHover={{ background: `${theme.colors.secondary}40` }}
            >
              <Search size={14} className="mr-2" style={{ color: theme.colors.primary }} />
              <span>Buscar</span>
            </motion.div>
            <div className="flex items-center">
              <Phone size={14} className="mr-2" style={{ color: theme.colors.primary }} />
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
            <div
              className="relative overflow-hidden rounded-xl border-2 p-1 cursor-pointer"
              style={{ borderColor: theme.colors.primary }}
            >
              <motion.div
                className="w-10 h-10 flex items-center justify-center overflow-hidden"
                whileHover={{
                  scale: 1.1,
                  rotate: 10,
                }}
                transition={{ duration: 0.3 }}
              >
                <Logo3D scale={1} />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r opacity-0 hover:opacity-30 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(45deg, ${theme.colors.primary}50, transparent, ${theme.colors.secondary}50)`,
                }}
              />
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}>
                BEAUTY<span style={{ color: theme.colors.primary }}>STUDIO</span>
              </h1>
              <div className="flex items-center">
                <Star size={8} style={{ color: theme.colors.primary }} />
                <div className="h-[1px] w-2 mx-1" style={{ background: theme.colors.primary }}></div>
                <span className="text-xs" style={{ color: theme.colors.textSecondary }}>
                  Beleza & Estilo
                </span>
                <div className="h-[1px] w-2 mx-1" style={{ background: theme.colors.primary }}></div>
                <Star size={8} style={{ color: theme.colors.primary }} />
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <motion.div
                  className="flex items-center"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  onClick={() => setActiveNavItem(item.name)}
                >
                  <motion.div
                    className="px-3 py-2 font-medium text-sm rounded-full relative group cursor-pointer"
                    style={{
                      color: activeNavItem === item.name ? theme.colors.buttonText : theme.colors.text,
                      background: activeNavItem === item.name ? theme.colors.primary : "transparent",
                      fontFamily: theme.fonts.body,
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
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
                              className="block px-4 py-2 hover:text-primary transition-colors duration-200 rounded-md cursor-pointer"
                              style={{
                                color: theme.colors.text,
                                fontFamily: theme.fonts.body,
                              }}
                              variants={itemVariants}
                              whileHover={{ x: 2, backgroundColor: `${theme.colors.secondary}20` }}
                            >
                              <Star size={10} className="inline-block mr-2" style={{ color: theme.colors.primary }} />
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
          <div className="flex items-center space-x-3">
            {/* Shopping Cart */}
            <motion.div className="relative">
              <motion.button
                className="p-2 rounded-full transition-colors duration-300"
                style={{
                  backgroundColor: theme.colors.secondary,
                  color: theme.colors.buttonText,
                }}
                whileHover={{ scale: 1.05, backgroundColor: adjustColor(theme.colors.secondary, -10) }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingCart size={18} />
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

            {/* Login Button - Desktop */}
            <motion.button
              className="hidden md:flex items-center px-5 py-2 rounded-full font-medium transition-colors duration-300"
              style={{
                background: theme.colors.primary,
                color: theme.colors.buttonText,
              }}
              whileHover={{
                scale: 1.05,
                background: adjustColor(theme.colors.primary, -10),
              }}
              whileTap={{ scale: 0.95 }}
            >
              <User size={16} className="mr-2" />
              Login
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden p-2 rounded-full transition-colors duration-300"
              style={{
                backgroundColor: theme.colors.secondary,
                color: theme.colors.buttonText,
              }}
              whileHover={{ scale: 1.05, backgroundColor: adjustColor(theme.colors.secondary, -10) }}
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
                  {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
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
                  className="w-full h-10 pl-10 pr-4 rounded-full focus:outline-none"
                  style={{
                    backgroundColor: `${theme.colors.secondary}20`,
                    color: theme.colors.text,
                  }}
                />
                <Search
                  size={18}
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
                        borderColor: "transparent",
                        borderBottomColor: `${theme.colors.secondary}20`,
                      }}
                      onClick={() => {
                        if (item.dropdown) {
                          setActiveDropdown(activeDropdown === item.name ? null : item.name)
                        } else {
                          setActiveNavItem(item.name)
                        }
                      }}
                    >
                      <span
                        className="font-medium cursor-pointer"
                        style={{
                          color: activeNavItem === item.name ? theme.colors.primary : theme.colors.text,
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
                                <Star size={10} className="inline-block mr-2" style={{ color: theme.colors.primary }} />
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
                  className="w-full py-3 px-4 rounded-full font-medium transition-colors duration-300 flex items-center justify-center"
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
                >
                  <User size={18} className="mr-2" />
                  Login / Cadastro
                </motion.button>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <motion.div
                  className="flex flex-col items-center justify-center p-3 rounded-xl"
                  style={{
                    backgroundColor: `${theme.colors.secondary}20`,
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: `${theme.colors.secondary}40` }}
                >
                  <ShoppingCart size={18} style={{ color: theme.colors.primary }} />
                  <span className="mt-1 text-xs" style={{ color: theme.colors.text }}>
                    Carrinho
                  </span>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center justify-center p-3 rounded-xl"
                  style={{
                    backgroundColor: `${theme.colors.secondary}20`,
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: `${theme.colors.secondary}40` }}
                >
                  <Heart size={18} style={{ color: theme.colors.primary }} />
                  <span className="mt-1 text-xs" style={{ color: theme.colors.text }}>
                    Favoritos
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

              <div className="mt-6 flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full"
                    style={{
                      backgroundColor: `${theme.colors.primary}20`,
                      color: theme.colors.primary,
                    }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: theme.colors.primary,
                      color: theme.colors.buttonText,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={16} />
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

export default FemininoModernoHeader

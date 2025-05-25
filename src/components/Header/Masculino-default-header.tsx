"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Facebook,
  Instagram,
  Phone,
  Menu,
  X,
  Sun,
  MoonStar,
  ShoppingCart,
  Scissors,
  ChevronDown,
  User,
  Search,
} from "lucide-react"
import { useTheme } from "../../contexts/Theme-context"
// import Logo3D from "../Fragments/Logo3D";
import { useNavigate } from "react-router"

// interface HeaderProps {
//   cartItemCount?: number
//   onThemeToggle?: () => void
// }

const MasculineDefaultHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const { currentTheme: theme, setTheme } = useTheme()
  const navigate = useNavigate();

  // Simular carrinho com alguns produtos
  const carrinho = { produtos: [1, 2] }

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
    { icon: Facebook, url: "https://facebook.com/suabebearia", color: "hover:text-blue-500" },
    { icon: Instagram, url: "https://instagram.com/suabebearia", color: "hover:text-pink-500" },
    { icon: Phone, url: "tel:+5511999999999", color: "hover:text-green-500" },
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

  const cartBounce = {
    initial: { scale: 1 },
    animate: { scale: [1, 1.2, 1], transition: { duration: 0.5 } },
  }

  const searchVariants = {
    closed: { width: 0, opacity: 0 },
    open: { width: "250px", opacity: 1, transition: { duration: 0.3 } },
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

  // Verificar se um link está ativo (simulação)
  const isActive = (path: string) => {
    return path === "/"
  }

  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={headerVariants}
      className={`w-full z-50 transition-all duration-300 fixed top-0 left-0 right-0 ${scrolled ? "py-2" : "py-4"}`}
      style={{
        background: scrolled
          ? `linear-gradient(to bottom, ${theme.colors.background}, ${theme.colors.background}90)`
          : `linear-gradient(to bottom, ${theme.colors.background}, ${theme.colors.background}70)`,
        borderBottom: scrolled ? `1px solid ${theme.colors.primary}30` : "none",
        boxShadow: scrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div
          className={`hidden lg:flex justify-end items-center mb-2 text-sm transition-all duration-300 ${
            scrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
          }`}
          style={{ color: theme.colors.textSecondary }}
        >
          <div className="flex items-center space-x-4 mr-6">
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
                <social.icon size={16} />
              </motion.a>
            ))}
          </div>
          <div className="flex items-center">
            <Phone size={16} className="mr-2" style={{ color: theme.colors.primary }} />
            <span>(11) 99999-9999</span>
          </div>
        </div>

        {/* Main navigation bar */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="relative overflow-hidden rounded-full border-2 p-1 cursor-pointer"
              style={{ borderColor: theme.colors.primary }}
            >
              <motion.div className="w-12 h-12 flex items-center justify-center" whileHover={{ rotate: 360 }} transition={{ duration: 1 }}>
                {/* <Logo3D scale={scrolled ? 0.8 : 1} /> */}
              </motion.div>
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}>
                BARBER<span style={{ color: theme.colors.primary }}>SHOP</span>
              </h1>
              <div className="flex items-center">
                <div className="h-[1px] w-6" style={{ background: theme.colors.primary }}></div>
                <Scissors className="mx-1" style={{ color: theme.colors.primary }} size={12} />
                <div className="h-[1px] w-6" style={{ background: theme.colors.primary }}></div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <motion.div
                  className="flex items-center"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.a
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault()
                      navigate(item.path)
                    }}
                    className="px-4 py-2 font-medium text-base relative group"
                    style={{
                      color: isActive(item.path)
                        ? theme.colors.primary
                        : theme.isDark
                          ? "text-neutral-200"
                          : "text-neutral-700",
                      fontFamily: theme.fonts.body,
                    }}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={14} className="ml-1 inline-block" />}

                    {/* Underline animation */}
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 rounded-full"
                      style={{
                        background: theme.colors.primary,
                        opacity: isActive(item.path) ? 1 : 0,
                      }}
                      layoutId="underline"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  </motion.a>

                  {/* Dropdown menu */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          className={`absolute top-full left-0 mt-1 py-2 rounded-md shadow-xl min-w-[200px] z-20`}
                          style={{ backgroundColor: theme.isDark ? "bg-neutral-800" : "bg-white" }}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={dropdownVariants}
                        >
                          {item.dropdown.map((subItem, subIndex) => (
                            <motion.a
                              key={subIndex}
                              href={subItem.path}
                              onClick={(e) => {
                                e.preventDefault()
                                navigate(subItem.path)
                                setActiveDropdown(null)
                              }}
                              className="block px-4 py-2 hover:bg-opacity-10 transition-colors duration-200"
                              style={{
                                color: theme.colors.text,
                                fontFamily: theme.fonts.body,
                              }}
                              variants={itemVariants}
                              whileHover={{ x: 5 }}
                            >
                              {subItem.name}
                            </motion.a>
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
            {/* Search */}
            <div className="relative hidden md:flex items-center">
              <motion.button
                className="p-2 rounded-full transition-colors duration-300"
                style={{
                  backgroundColor: searchOpen
                    ? theme.colors.primary
                    : theme.isDark
                      ? "bg-neutral-800"
                      : "bg-neutral-200",
                  color: searchOpen ? theme.colors.buttonText : theme.colors.primary,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search size={20} />
              </motion.button>

              <AnimatePresence>
                {searchOpen && (
                  <motion.input
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={searchVariants}
                    type="text"
                    placeholder="Buscar..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="absolute right-10 px-4 py-2 rounded-md focus:outline-none"
                    style={{
                      backgroundColor: theme.isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                      color: theme.colors.text,
                    }}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Shopping Cart */}
            <motion.div
              className="relative"
              initial="initial"
              animate={carrinho?.produtos && carrinho?.produtos.length > 0 ? "animate" : "initial"}
              variants={cartBounce}
            >
              <motion.button
                className="p-2 rounded-full transition-colors duration-300"
                style={{
                  backgroundColor: theme.isDark ? "bg-neutral-800" : "bg-neutral-200",
                  color: theme.colors.primary,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {navigate('/carrinho')}}
              >
                <ShoppingCart size={20} />
                {carrinho?.produtos && carrinho?.produtos.length > 0 && (
                  <motion.span
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: theme.colors.primary, color: theme.colors.buttonText }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    {carrinho?.produtos.length}
                  </motion.span>
                )}
              </motion.button>
            </motion.div>

            {/* Theme Toggle */}
            <motion.button
              className="p-2 rounded-full transition-colors duration-300"
              style={{
                backgroundColor: theme.isDark ? "bg-neutral-800" : "bg-neutral-200",
                color: theme.colors.primary,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Alternar entre temas claros e escuros (simulação)
                const isDark = theme.isDark
                setTheme(isDark ? "masculine_default" : "masculine_default_dark")
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme.isDark ? "dark" : "light"}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme.isDark ? <Sun size={20} /> : <MoonStar size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* User Profile */}
            <motion.button
              className="p-2 rounded-full transition-colors duration-300"
              style={{
                backgroundColor: theme.isDark ? "bg-neutral-800" : "bg-neutral-200",
                color: theme.colors.primary,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {}}
            >
              <User size={20} />
            </motion.button>

            {/* Login Button - Desktop */}
            <motion.button
              className="hidden md:flex items-center px-4 py-2 rounded-full font-medium transition-colors duration-300"
              style={{
                background: theme.colors.primary,
                color: theme.colors.buttonText,
              }}
              whileHover={{
                scale: 1.05,
                background: adjustColor(theme.colors.primary, -15),
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {navigate('/login')}}
            >
              Login
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden p-2 rounded-full transition-colors duration-300"
              style={{
                backgroundColor: theme.isDark ? "bg-neutral-800" : "bg-neutral-200",
                color: theme.colors.primary,
              }}
              whileHover={{ scale: 1.05 }}
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
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
            style={{ backgroundColor: theme.isDark ? "bg-neutral-800" : "bg-white" }}
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
                      style={{ borderColor: theme.isDark ? "border-neutral-700" : "border-neutral-200" }}
                      onClick={() => {
                        if (item.dropdown) {
                          setActiveDropdown(activeDropdown === item.name ? null : item.name)
                        } else {
                          navigate(item.path)
                        }
                      }}
                    >
                      <span
                        className="font-medium cursor-pointer"
                        style={{
                          color: isActive(item.path)
                            ? theme.colors.primary
                            : theme.isDark
                              ? "text-neutral-200"
                              : "text-neutral-700",
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
                            color: isActive(item.path)
                              ? theme.colors.primary
                              : theme.isDark
                                ? "text-neutral-200"
                                : "text-neutral-700",
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
                              <motion.a
                                key={subIndex}
                                href={subItem.path}
                                onClick={(e) => {
                                  e.preventDefault()
                                  navigate(subItem.path)
                                }}
                                className="block py-2 transition-colors duration-200"
                                style={{
                                  color: theme.isDark ? "text-neutral-200" : "text-neutral-700",
                                  fontFamily: theme.fonts.body,
                                }}
                                variants={itemVariants}
                              >
                                <ChevronDown size={14} className="inline-block mr-2 rotate-90" />
                                {subItem.name}
                              </motion.a>
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
                  className="w-full py-3 px-4 rounded-md font-medium transition-colors duration-300"
                  style={{
                    background: theme.colors.primary,
                    color: theme.colors.buttonText,
                    fontFamily: theme.fonts.body,
                  }}
                  whileHover={{
                    scale: 1.02,
                    background: adjustColor(theme.colors.primary, -15),
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {navigate('/login')}}
                >
                  Login / Cadastro
                </motion.button>
              </div>

              <div className="mt-6 flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300"
                    style={{ color: theme.isDark ? "text-neutral-200" : "text-neutral-700" }}
                    whileHover={{ scale: 1.1, y: -2, color: theme.colors.primary }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>

              <div
                className="mt-6 pt-4 border-t"
                style={{ borderColor: theme.isDark ? "border-neutral-700" : "border-neutral-200" }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Phone size={16} className="mr-2" style={{ color: theme.colors.primary }} />
                    <span style={{ color: theme.isDark ? "text-neutral-200" : "text-neutral-700" }}>
                      (11) 99999-9999
                    </span>
                  </div>

                  <div className="flex items-center">
                    <span style={{ color: theme.isDark ? "text-neutral-200" : "text-neutral-700" }}>Tema:</span>
                    <button
                      className="ml-2 p-2 rounded-full"
                      style={{
                        backgroundColor: theme.isDark ? "bg-neutral-700" : "bg-neutral-200",
                        color: theme.colors.primary,
                      }}
                      onClick={() => {
                        // Alternar entre temas claros e escuros (simulação)
                        const isDark = theme.isDark
                        setTheme(isDark ? "masculine_default" : "masculine_default_dark")
                      }}
                    >
                      {theme.isDark ? <Sun size={16} /> : <MoonStar size={16} />}
                    </button>
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

export default MasculineDefaultHeader

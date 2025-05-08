"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate, useLocation } from "react-router-dom"
import { Facebook, Instagram, Phone, Menu, X, Sun, MoonStar, ShoppingCart, Scissors, ChevronDown } from "lucide-react"
import logo from "../assets/logo.png"
import { useTheme } from "../theme/Theme"
import { useGlobalState } from "../global/ContextGlobalState"

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()
  const { carrinho } = useGlobalState()

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

  // Fechar menu ao mudar de rota
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  // Verificar se um link está ativo
  const isActive = (path: string) => {
    return location.pathname === path
  }

  // Navegação principal
  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Serviços",
      path: "/servicos",
      dropdown: [
        { name: "Corte de Cabelo", path: "/servicos/corte" },
        { name: "Barba", path: "/servicos/barba" },
        { name: "Tratamentos", path: "/servicos/tratamentos" },
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

  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={headerVariants}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-900/95 backdrop-blur-md py-2 shadow-lg"
          : "bg-gradient-to-b from-neutral-900 to-neutral-900/90 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top bar with social links and contact - visible only on desktop */}
        <div className="hidden lg:flex justify-end items-center mb-2 text-neutral-400 text-sm">
          <div className="flex items-center space-x-4 mr-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} transition-colors duration-300`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </div>
          <div className="flex items-center">
            <Phone size={16} className="mr-2 text-amber-500" />
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
            onClick={() => navigate("/")}
          >
            <div className="relative overflow-hidden rounded-full border-2 border-amber-500 p-1 cursor-pointer">
              <motion.img
                src={logo}
                alt="Barbearia Logo"
                className="w-10 h-10 object-cover"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">
                BARBER<span className="text-amber-500">SHOP</span>
              </h1>
              <div className="flex items-center">
                <div className="h-[1px] w-6 bg-amber-500"></div>
                <Scissors className="mx-1 text-amber-500" size={12} />
                <div className="h-[1px] w-6 bg-amber-500"></div>
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
                    className={`px-4 py-2 font-medium text-base relative group ${
                      isActive(item.path) ? "text-amber-500" : "text-neutral-200 hover:text-white"
                    }`}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={14} className="ml-1 inline-block" />}

                    {/* Underline animation */}
                    <motion.span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 rounded-full ${
                        isActive(item.path) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                      layoutId="underline"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  </motion.a>

                  {/* Dropdown menu */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          className="absolute top-full left-0 mt-1 py-2 bg-neutral-800 rounded-md shadow-xl min-w-[200px] z-20"
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
                              className="block px-4 py-2 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors duration-200"
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
            {/* Shopping Cart */}
            <motion.div
              className="relative"
              initial="initial"
              animate={carrinho?.produtos && carrinho?.produtos.length > 0 ? "animate" : "initial"}
              variants={cartBounce}
            >
              <motion.button
                className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/carrinho")}
              >
                <ShoppingCart size={20} className="text-amber-500" />
                {carrinho?.produtos && carrinho?.produtos.length > 0 && (
                  <motion.span
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center text-xs font-bold"
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
              className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === "dark" ? <Sun size={20} className="text-amber-500" /> : <MoonStar size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Login Button - Desktop */}
            <motion.button
              className="hidden md:flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-medium transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/login")}
            >
              Login
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors duration-300"
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
            className="md:hidden bg-neutral-800 overflow-hidden"
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
                      className="flex items-center justify-between py-2 border-b border-neutral-700"
                      onClick={() => {
                        if (item.dropdown) {
                          setActiveDropdown(activeDropdown === item.name ? null : item.name)
                        } else {
                          navigate(item.path)
                        }
                      }}
                    >
                      <span
                        className={`font-medium ${
                          isActive(item.path) ? "text-amber-500" : "text-neutral-200"
                        } cursor-pointer`}
                      >
                        {item.name}
                      </span>
                      {item.dropdown && (
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
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
                                className="block py-2 text-neutral-400 hover:text-white transition-colors duration-200"
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
                  className="w-full px-4 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-medium transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate("/login")}
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
                    className={`${social.color} transition-colors duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={24} />
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

export default Header

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate, useLocation } from "react-router-dom"
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
  Heart,
  MapPin,
  Clock,
} from "lucide-react"
import logo from "../assets/logo.png"
import { useGlobalState } from "../global/ContextGlobalState"
import { useTheme } from "../contexts/Theme-context"

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { currentTheme: theme, setTheme } = useTheme()
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

  // Estilos específicos baseados no tema
  const getHeaderStyles = () => {
    // Estilo base para todos os temas
    const baseStyles = {
      background: "",
      borderBottom: "",
      boxShadow: "",
      padding: "",
    }

    // Estilos específicos por tema
    switch (theme.id) {
      case "masculine_default":
        return {
          ...baseStyles,
          background: `linear-gradient(to bottom, ${theme.colors.background}, ${theme.colors.background}90)`,
          borderBottom: `1px solid ${theme.colors.primary}30`,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "1rem 0",
        }
      case "masculinoModerno":
        return {
          ...baseStyles,
          background: theme.colors.background,
          borderBottom: "none",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
          padding: "1.25rem 0",
        }
      case "masculinoClassico":
        return {
          ...baseStyles,
          background: theme.colors.background,
          borderBottom: `2px solid ${theme.colors.primary}`,
          boxShadow: "none",
          padding: "0.75rem 0",
        }
      case "femininoElegante":
        return {
          ...baseStyles,
          background: theme.colors.background,
          borderBottom: `1px solid ${theme.colors.secondary}30`,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
          padding: "1rem 0",
        }
      case "femininoModerno":
        return {
          ...baseStyles,
          background: `linear-gradient(135deg, ${theme.colors.background}, ${theme.colors.secondary}20)`,
          borderBottom: "none",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
          padding: "1rem 0",
        }
      default:
        return baseStyles
    }
  }

  // Estilos para o logo baseados no tema
  const getLogoStyles = () => {
    switch (theme.id) {
      case "masculine_default":
        return {
          container: "flex items-center gap-3",
          logoWrapper: "relative overflow-hidden rounded-full border-2 p-1 cursor-pointer",
          borderColor: theme.colors.primary,
          logoSize: "w-10 h-10",
          titleClass: "text-xl font-bold",
          titleColor: theme.colors.text,
          accentColor: theme.colors.primary,
          dividerVisible: true,
        }
      case "masculinoModerno":
        return {
          container: "flex items-center gap-2",
          logoWrapper: "relative overflow-hidden rounded-md p-1 cursor-pointer",
          borderColor: "transparent",
          logoSize: "w-12 h-12",
          titleClass: "text-2xl font-bold tracking-tight",
          titleColor: theme.colors.text,
          accentColor: theme.colors.primary,
          dividerVisible: false,
        }
      case "masculinoClassico":
        return {
          container: "flex flex-col items-center md:flex-row md:gap-3",
          logoWrapper: "relative overflow-hidden rounded-none border-0 p-0 cursor-pointer",
          borderColor: "transparent",
          logoSize: "w-12 h-12",
          titleClass: "text-xl font-serif font-bold",
          titleColor: theme.colors.primary,
          accentColor: theme.colors.secondary,
          dividerVisible: true,
        }
      case "femininoElegante":
        return {
          container: "flex items-center gap-3",
          logoWrapper: "relative overflow-hidden rounded-full border-2 p-1.5 cursor-pointer",
          borderColor: theme.colors.secondary,
          logoSize: "w-9 h-9",
          titleClass: "text-xl font-serif italic",
          titleColor: theme.colors.text,
          accentColor: theme.colors.primary,
          dividerVisible: false,
        }
      case "femininoModerno":
        return {
          container: "flex items-center gap-2",
          logoWrapper: "relative overflow-hidden rounded-xl border-2 p-1 cursor-pointer",
          borderColor: theme.colors.primary,
          logoSize: "w-10 h-10",
          titleClass: "text-xl font-bold",
          titleColor: theme.colors.text,
          accentColor: theme.colors.primary,
          dividerVisible: true,
        }
      default:
        return {
          container: "flex items-center gap-3",
          logoWrapper: "relative overflow-hidden rounded-full border-2 p-1 cursor-pointer",
          borderColor: theme.colors.primary,
          logoSize: "w-10 h-10",
          titleClass: "text-xl font-bold",
          titleColor: theme.colors.text,
          accentColor: theme.colors.primary,
          dividerVisible: true,
        }
    }
  }

  // Estilos para a navegação baseados no tema
  const getNavStyles = () => {
    switch (theme.id) {
      case "masculine_default":
        return {
          container: "hidden md:flex items-center space-x-1",
          itemClass: "px-4 py-2 font-medium text-base relative group",
          activeTextColor: theme.colors.primary,
          inactiveTextColor: theme.isDark ? "text-neutral-200" : "text-neutral-700",
          hoverAnimation: { y: -2 },
          underlineVisible: true,
          underlineClass: "absolute bottom-0 left-0 w-full h-0.5 rounded-full",
          underlineColor: theme.colors.primary,
          dropdownBg: theme.isDark ? "bg-neutral-800" : "bg-white",
          dropdownShadow: "shadow-xl",
          dropdownItemClass: "block px-4 py-2 hover:bg-opacity-10 transition-colors duration-200",
          dropdownItemHover: { x: 5 },
        }
      case "masculinoModerno":
        return {
          container: "hidden md:flex items-center space-x-3",
          itemClass: "px-3 py-2 font-medium text-base relative group",
          activeTextColor: theme.colors.primary,
          inactiveTextColor: theme.isDark ? "text-neutral-300" : "text-neutral-600",
          hoverAnimation: { y: -1, x: 0 },
          underlineVisible: false,
          underlineClass: "",
          underlineColor: "",
          dropdownBg: theme.colors.background,
          dropdownShadow: "shadow-lg",
          dropdownItemClass: "block px-4 py-2 hover:bg-opacity-10 transition-colors duration-200",
          dropdownItemHover: { x: 3 },
        }
      case "masculinoClassico":
        return {
          container: "hidden md:flex items-center space-x-0",
          itemClass:
            "px-5 py-3 font-serif text-base uppercase tracking-wide relative group border-r border-neutral-200 last:border-r-0",
          activeTextColor: theme.colors.primary,
          inactiveTextColor: theme.colors.text,
          hoverAnimation: { y: 0 },
          underlineVisible: false,
          underlineClass: "",
          underlineColor: "",
          dropdownBg: theme.colors.background,
          dropdownShadow: "shadow-md",
          dropdownItemClass: "block px-5 py-2 hover:bg-neutral-100 transition-colors duration-200 font-serif",
          dropdownItemHover: { x: 0 },
        }
      case "femininoElegante":
        return {
          container: "hidden md:flex items-center space-x-6",
          itemClass: "px-2 py-1 font-medium text-base relative group",
          activeTextColor: theme.colors.primary,
          inactiveTextColor: theme.colors.text,
          hoverAnimation: { y: 0 },
          underlineVisible: true,
          underlineClass: "absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 transition-all duration-300",
          underlineColor: theme.colors.primary,
          dropdownBg: theme.colors.background,
          dropdownShadow: "shadow-md",
          dropdownItemClass: "block px-4 py-2 hover:bg-opacity-5 transition-colors duration-200",
          dropdownItemHover: { x: 2 },
        }
      case "femininoModerno":
        return {
          container: "hidden md:flex items-center space-x-2",
          itemClass: "px-3 py-2 font-medium text-sm rounded-full relative group",
          activeTextColor: theme.colors.buttonText,
          activeItemBg: theme.colors.primary,
          inactiveTextColor: theme.colors.text,
          hoverAnimation: { scale: 1.05 },
          underlineVisible: false,
          underlineClass: "",
          underlineColor: "",
          dropdownBg: theme.colors.background,
          dropdownShadow: "shadow-lg",
          dropdownItemClass: "block px-4 py-2 hover:text-primary transition-colors duration-200 rounded-md",
          dropdownItemHover: { x: 2 },
        }
      default:
        return {
          container: "hidden md:flex items-center space-x-1",
          itemClass: "px-4 py-2 font-medium text-base relative group",
          activeTextColor: theme.colors.primary,
          inactiveTextColor: theme.isDark ? "text-neutral-200" : "text-neutral-700",
          hoverAnimation: { y: -2 },
          underlineVisible: true,
          underlineClass: "absolute bottom-0 left-0 w-full h-0.5 rounded-full",
          underlineColor: theme.colors.primary,
          dropdownBg: theme.isDark ? "bg-neutral-800" : "bg-white",
          dropdownShadow: "shadow-xl",
          dropdownItemClass: "block px-4 py-2 hover:bg-opacity-10 transition-colors duration-200",
          dropdownItemHover: { x: 5 },
        }
    }
  }

  // Estilos para os botões de ação baseados no tema
  const getActionStyles = () => {
    switch (theme.id) {
      case "masculine_default":
        return {
          container: "flex items-center space-x-4",
          buttonBg: theme.isDark ? "bg-neutral-800" : "bg-neutral-200",
          buttonHoverBg: theme.isDark ? "bg-neutral-700" : "bg-neutral-300",
          iconColor: theme.colors.primary,
          loginButtonBg: theme.colors.primary,
          loginButtonHoverBg: adjustColor(theme.colors.primary, -15),
          loginButtonTextColor: theme.colors.buttonText,
          buttonBorderRadius: "rounded-full",
          buttonPadding: "p-2",
          loginButtonPadding: "px-4 py-2",
        }
      case "masculinoModerno":
        return {
          container: "flex items-center space-x-5",
          buttonBg: "bg-transparent",
          buttonHoverBg: theme.isDark ? "bg-neutral-800" : "bg-neutral-100",
          iconColor: theme.colors.primary,
          loginButtonBg: theme.colors.primary,
          loginButtonHoverBg: adjustColor(theme.colors.primary, -10),
          loginButtonTextColor: theme.colors.buttonText,
          buttonBorderRadius: "rounded-md",
          buttonPadding: "p-2",
          loginButtonPadding: "px-5 py-2",
        }
      case "masculinoClassico":
        return {
          container: "flex items-center space-x-6",
          buttonBg: "bg-transparent",
          buttonHoverBg: "bg-neutral-100",
          iconColor: theme.colors.primary,
          loginButtonBg: theme.colors.primary,
          loginButtonHoverBg: adjustColor(theme.colors.primary, -10),
          loginButtonTextColor: theme.colors.buttonText,
          buttonBorderRadius: "rounded-none",
          buttonPadding: "p-2",
          loginButtonPadding: "px-6 py-2",
        }
      case "femininoElegante":
        return {
          container: "flex items-center space-x-4",
          buttonBg: "bg-transparent",
          buttonHoverBg: `${theme.colors.primary}10`,
          iconColor: theme.colors.primary,
          loginButtonBg: "bg-transparent",
          loginButtonHoverBg: `${theme.colors.primary}10`,
          loginButtonTextColor: theme.colors.primary,
          loginButtonBorder: `border border-${theme.colors.primary}`,
          buttonBorderRadius: "rounded-full",
          buttonPadding: "p-2",
          loginButtonPadding: "px-5 py-1.5",
        }
      case "femininoModerno":
        return {
          container: "flex items-center space-x-3",
          buttonBg: theme.colors.secondary,
          buttonHoverBg: adjustColor(theme.colors.secondary, -10),
          iconColor: theme.colors.buttonText,
          loginButtonBg: theme.colors.primary,
          loginButtonHoverBg: adjustColor(theme.colors.primary, -10),
          loginButtonTextColor: theme.colors.buttonText,
          buttonBorderRadius: "rounded-full",
          buttonPadding: "p-2",
          loginButtonPadding: "px-5 py-2",
        }
      default:
        return {
          container: "flex items-center space-x-4",
          buttonBg: theme.isDark ? "bg-neutral-800" : "bg-neutral-200",
          buttonHoverBg: theme.isDark ? "bg-neutral-700" : "bg-neutral-300",
          iconColor: theme.colors.primary,
          loginButtonBg: theme.colors.primary,
          loginButtonHoverBg: adjustColor(theme.colors.primary, -15),
          loginButtonTextColor: theme.colors.buttonText,
          buttonBorderRadius: "rounded-full",
          buttonPadding: "p-2",
          loginButtonPadding: "px-4 py-2",
        }
    }
  }

  // Estilos para o menu mobile baseados no tema
  const getMobileMenuStyles = () => {
    switch (theme.id) {
      case "masculine_default":
        return {
          background: theme.isDark ? "bg-neutral-800" : "bg-white",
          itemBorder: theme.isDark ? "border-neutral-700" : "border-neutral-200",
          itemTextActive: theme.colors.primary,
          itemTextInactive: theme.isDark ? "text-neutral-200" : "text-neutral-700",
          buttonBg: theme.colors.primary,
          buttonHoverBg: adjustColor(theme.colors.primary, -15),
          buttonTextColor: theme.colors.buttonText,
        }
      case "masculinoModerno":
        return {
          background: theme.colors.background,
          itemBorder: theme.isDark ? "border-neutral-800" : "border-neutral-100",
          itemTextActive: theme.colors.primary,
          itemTextInactive: theme.isDark ? "text-neutral-300" : "text-neutral-600",
          buttonBg: theme.colors.primary,
          buttonHoverBg: adjustColor(theme.colors.primary, -10),
          buttonTextColor: theme.colors.buttonText,
        }
      case "masculinoClassico":
        return {
          background: theme.colors.background,
          itemBorder: "border-neutral-200",
          itemTextActive: theme.colors.primary,
          itemTextInactive: theme.colors.text,
          buttonBg: theme.colors.primary,
          buttonHoverBg: adjustColor(theme.colors.primary, -10),
          buttonTextColor: theme.colors.buttonText,
        }
      case "femininoElegante":
        return {
          background: theme.colors.background,
          itemBorder: `border-${theme.colors.secondary}30`,
          itemTextActive: theme.colors.primary,
          itemTextInactive: theme.colors.text,
          buttonBg: "bg-transparent",
          buttonHoverBg: `${theme.colors.primary}10`,
          buttonTextColor: theme.colors.primary,
          buttonBorder: `border border-${theme.colors.primary}`,
        }
      case "femininoModerno":
        return {
          background: theme.colors.background,
          itemBorder: "border-transparent",
          itemTextActive: theme.colors.primary,
          itemTextInactive: theme.colors.text,
          buttonBg: theme.colors.primary,
          buttonHoverBg: adjustColor(theme.colors.primary, -10),
          buttonTextColor: theme.colors.buttonText,
        }
      default:
        return {
          background: theme.isDark ? "bg-neutral-800" : "bg-white",
          itemBorder: theme.isDark ? "border-neutral-700" : "border-neutral-200",
          itemTextActive: theme.colors.primary,
          itemTextInactive: theme.isDark ? "text-neutral-200" : "text-neutral-700",
          buttonBg: theme.colors.primary,
          buttonHoverBg: adjustColor(theme.colors.primary, -15),
          buttonTextColor: theme.colors.buttonText,
        }
    }
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

  // Obter os estilos específicos para o tema atual
  const headerStyles = getHeaderStyles()
  const logoStyles = getLogoStyles()
  const navStyles = getNavStyles()
  const actionStyles = getActionStyles()
  const mobileMenuStyles = getMobileMenuStyles()

  // Renderizar componentes específicos por tema
  const renderThemeSpecificElements = () => {
    switch (theme.id) {
      case "masculine_default":
        return (
          <div
            className="hidden lg:flex justify-end items-center mb-2 text-sm"
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
        )
      case "masculinoModerno":
        return (
          <div
            className="hidden lg:flex justify-between items-center mb-4 text-sm w-full"
            style={{ color: theme.colors.textSecondary }}
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
                  className="transition-colors duration-300"
                  style={{ color: theme.colors.textSecondary }}
                  whileHover={{ scale: 1.1, color: theme.colors.primary }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        )
      case "masculinoClassico":
        return (
          <div
            className="hidden lg:flex justify-between items-center mb-4 text-sm w-full border-b border-neutral-200 pb-2"
            style={{ color: theme.colors.textSecondary }}
          >
            <div className="flex items-center">
              <span className="font-serif">TRADIÇÃO EM BARBEARIA DESDE 1995</span>
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
        )
      case "femininoElegante":
        return (
          <div
            className="hidden lg:flex justify-end items-center mb-3 text-sm"
            style={{ color: theme.colors.textSecondary }}
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
        )
      case "femininoModerno":
        return (
          <div
            className="hidden lg:flex justify-between items-center mb-3 text-sm w-full"
            style={{ color: theme.colors.textSecondary }}
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
        )
      default:
        return (
          <div
            className="hidden lg:flex justify-end items-center mb-2 text-sm"
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
        )
    }
  }

  // Renderizar ações específicas por tema
  const renderThemeSpecificActions = () => {
    switch (theme.id) {
      case "masculine_default":
        return (
          <>
            {/* Shopping Cart */}
            <motion.div
              className="relative"
              initial="initial"
              animate={carrinho?.produtos && carrinho?.produtos.length > 0 ? "animate" : "initial"}
              variants={cartBounce}
            >
              <motion.button
                className={`${actionStyles.buttonPadding} ${actionStyles.buttonBorderRadius} ${actionStyles.buttonBg} hover:${actionStyles.buttonHoverBg} transition-colors duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/carrinho")}
              >
                <ShoppingCart size={20} style={{ color: actionStyles.iconColor }} />
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
              className={`${actionStyles.buttonPadding} ${actionStyles.buttonBorderRadius} ${actionStyles.buttonBg} hover:${actionStyles.buttonHoverBg} transition-colors duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Alternar entre temas claros e escuros
                const isDark = theme.isDark
                const nextThemes = Object.values(theme).filter((t) => t.isDark !== isDark)
                if (nextThemes.length > 0) {
                  setTheme(nextThemes[0].id)
                }
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
                  {theme.isDark ? (
                    <Sun size={20} style={{ color: actionStyles.iconColor }} />
                  ) : (
                    <MoonStar size={20} style={{ color: actionStyles.iconColor }} />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Login Button - Desktop */}
            <motion.button
              className={`hidden md:flex items-center ${actionStyles.loginButtonPadding} ${actionStyles.buttonBorderRadius} font-medium transition-colors duration-300`}
              style={{
                background: actionStyles.loginButtonBg,
                color: actionStyles.loginButtonTextColor,
                border: actionStyles.loginButtonBorder,
              }}
              whileHover={{
                scale: 1.05,
                background: actionStyles.loginButtonHoverBg,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/login")}
            >
              Login
            </motion.button>
          </>
        )
      case "masculinoModerno":
        return (
          <>
            {/* Favorites */}
            <motion.button
              className={`${actionStyles.buttonPadding} ${actionStyles.buttonBorderRadius} ${actionStyles.buttonBg} hover:${actionStyles.buttonHoverBg} transition-colors duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/favoritos")}
            >
              <Heart size={20} style={{ color: actionStyles.iconColor }} />
            </motion.button>

            {/* Shopping Cart */}
            <motion.div
              className="relative"
              initial="initial"
              animate={carrinho?.produtos && carrinho?.produtos.length > 0 ? "animate" : "initial"}
              variants={cartBounce}
            >
              <motion.button
                className={`${actionStyles.buttonPadding} ${actionStyles.buttonBorderRadius} ${actionStyles.buttonBg} hover:${actionStyles.buttonHoverBg} transition-colors duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/carrinho")}
              >
                <ShoppingCart size={20} style={{ color: actionStyles.iconColor }} />
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

            {/* User Profile */}
            <motion.button
              className={`${actionStyles.buttonPadding} ${actionStyles.buttonBorderRadius} ${actionStyles.buttonBg} hover:${actionStyles.buttonHoverBg} transition-colors duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/perfil")}
            >
              <User size={20} style={{ color: actionStyles.iconColor }} />
            </motion.button>

            {/* Login Button - Desktop */}
            <motion.button
              className={`hidden md:flex items-center ${actionStyles.loginButtonPadding} ${actionStyles.buttonBorderRadius} font-medium transition-colors duration-300`}
              style={{
                background: actionStyles.loginButtonBg,
                color: actionStyles.loginButtonTextColor,
              }}
              whileHover={{
                scale: 1.05,
                background: actionStyles.loginButtonHoverBg,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/login")}
            >
              Login
            </motion.button>
          </>
        )
      case "masculinoClassico":
        return (
          <>
            {/* Shopping Cart */}
            <motion.div
              className="relative"
              initial="initial"
              animate={carrinho?.produtos && carrinho?.produtos.length > 0 ? "animate" : "initial"}
              variants={cartBounce}
            >
              <motion.button
                className={`${actionStyles.buttonPadding} ${actionStyles.buttonBorderRadius} ${actionStyles.buttonBg} hover:${actionStyles.buttonHoverBg} transition-colors duration-300 border-r border-neutral-200 pr-6`}
                whileHover={{ color: theme.colors.primary }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/carrinho")}
              >
                <ShoppingCart size={20} style={{ color: actionStyles.iconColor }} />
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

            {/* Login Button - Desktop */}
            <motion.button
              className={`hidden md:flex items-center ${actionStyles.loginButtonPadding} ${actionStyles.buttonBorderRadius} font-serif uppercase tracking-wide transition-colors duration-300`}
              style={{
                background: actionStyles.loginButtonBg,
                color: actionStyles.loginButtonTextColor,
              }}
              whileHover={{
                background: actionStyles.loginButtonHoverBg,
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/login")}
            >
              Login
            </motion.button>
          </>
        )
      case "femininoElegante":
        return (
          <>
            {/* Favorites */}
            <motion.button
              className={`${actionStyles.buttonPadding} ${actionStyles.buttonBorderRadius} ${actionStyles.buttonBg} hover:${actionStyles.buttonHoverBg} transition-colors duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/favoritos")}
            >
              <Heart size={18} style={{ color: actionStyles.iconColor }} />
            </motion.button>

            {/* Shopping Cart */}
            <motion.div
              className="relative"
              initial="initial"
              animate={carrinho?.produtos && carrinho?.produtos.length > 0 ? "animate" : "initial"}
              variants={cartBounce}
            >
              <motion.button
                className={`${actionStyles.buttonPadding} ${actionStyles.buttonBorderRadius} ${actionStyles.buttonBg} hover:${actionStyles.buttonHoverBg} transition-colors duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/carrinho")}
              >
                <ShoppingCart size={18} style={{ color: actionStyles.iconColor }} />
                {carrinho?.produtos && carrinho?.produtos.length > 0 && (
                  <motion.span
                    className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold"
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

            {/* User Profile */}
            <motion.button
              className={`${actionStyles.buttonPadding} ${actionStyles.buttonBorderRadius} ${actionStyles.buttonBg} hover:${actionStyles.buttonHoverBg} transition-colors duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/perfil")}
            >
              <User size={18} style={{ color: actionStyles.iconColor }} />
            </motion.button>

            {/* Login Button - Desktop */}
            <motion.button
              className={`hidden md:flex items-center ${actionStyles.loginButtonPadding} ${actionStyles.buttonBorderRadius} font-medium transition-colors duration-300 border`}
              style={{
                background: actionStyles.loginButtonBg,
                color: actionStyles.loginButtonTextColor,
                borderColor: theme.colors.primary,
              }}
              whileHover={{
                scale: 1.02,
                background: actionStyles.loginButtonHoverBg,
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/login")}
            >
              Login
            </motion.button>
          </>
        )
      case "femininoModerno":
        return (
          <>
            {/* Favorites */}
            <motion.button
              className={`${actionStyles.buttonPadding} ${actionStyles.buttonBorderRadius} ${actionStyles.buttonBg} hover:${actionStyles.buttonHoverBg} transition-colors duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/favoritos")}
            >
              <Heart size={18} style={{ color: actionStyles.iconColor }} />
            </motion.button>

            {/* Shopping Cart */}
            <motion.div
              className="relative"
              initial="initial"
              animate={carrinho?.produtos && carrinho?.produtos.length > 0 ? "animate" : "initial"}
              variants={cartBounce}
            >
              <motion.button
                className={`${actionStyles.buttonPadding} ${actionStyles.buttonBorderRadius} ${actionStyles.buttonBg} hover:${actionStyles.buttonHoverBg} transition-colors duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/carrinho")}
              >
                <ShoppingCart size={18} style={{ color: actionStyles.iconColor }} />
                {carrinho?.produtos && carrinho?.produtos.length > 0 && (
                  <motion.span
                    className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold"
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

            {/* Login Button - Desktop */}
            <motion.button
              className={`hidden md:flex items-center ${actionStyles.loginButtonPadding} ${actionStyles.buttonBorderRadius} font-medium transition-colors duration-300`}
              style={{
                background: actionStyles.loginButtonBg,
                color: actionStyles.loginButtonTextColor,
              }}
              whileHover={{
                scale: 1.05,
                background: actionStyles.loginButtonHoverBg,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/login")}
            >
              Login
            </motion.button>
          </>
        )
      default:
        return (
          <>
            {/* Shopping Cart */}
            <motion.div
              className="relative"
              initial="initial"
              animate={carrinho?.produtos && carrinho?.produtos.length > 0 ? "animate" : "initial"}
              variants={cartBounce}
            >
              <motion.button
                className={`${actionStyles.buttonPadding} ${actionStyles.buttonBorderRadius} ${actionStyles.buttonBg} hover:${actionStyles.buttonHoverBg} transition-colors duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/carrinho")}
              >
                <ShoppingCart size={20} style={{ color: actionStyles.iconColor }} />
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
              className={`${actionStyles.buttonPadding} ${actionStyles.buttonBorderRadius} ${actionStyles.buttonBg} hover:${actionStyles.buttonHoverBg} transition-colors duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Alternar entre temas claros e escuros
                const isDark = theme.isDark
                const nextThemes = Object.values(theme).filter((t) => t.isDark !== isDark)
                if (nextThemes.length > 0) {
                  setTheme(nextThemes[0].id)
                }
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
                  {theme.isDark ? (
                    <Sun size={20} style={{ color: actionStyles.iconColor }} />
                  ) : (
                    <MoonStar size={20} style={{ color: actionStyles.iconColor }} />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Login Button - Desktop */}
            <motion.button
              className={`hidden md:flex items-center ${actionStyles.loginButtonPadding} ${actionStyles.buttonBorderRadius} font-medium transition-colors duration-300`}
              style={{
                background: actionStyles.loginButtonBg,
                color: actionStyles.loginButtonTextColor,
              }}
              whileHover={{
                scale: 1.05,
                background: actionStyles.loginButtonHoverBg,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/login")}
            >
              Login
            </motion.button>
          </>
        )
    }
  }

  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={headerVariants}
      className="w-full z-50 transition-all duration-300"
      style={{
        background: headerStyles.background,
        borderBottom: headerStyles.borderBottom,
        boxShadow: headerStyles.boxShadow,
        padding: headerStyles.padding,
      }}
    >
      <div className="container mx-auto px-4">
        {/* Top bar with theme-specific elements */}
        {renderThemeSpecificElements()}

        {/* Main navigation bar */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className={logoStyles.container}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate("/")}
          >
            <div className={`${logoStyles.logoWrapper} cursor-pointer`} style={{ borderColor: logoStyles.borderColor }}>
              <motion.img
                src={logo}
                alt="Barbearia Logo"
                className={`${logoStyles.logoSize} object-cover`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              />
            </div>
            <div>
              <h1
                className={logoStyles.titleClass}
                style={{ color: logoStyles.titleColor, fontFamily: theme.fonts.heading }}
              >
                BARBER<span style={{ color: logoStyles.accentColor }}>SHOP</span>
              </h1>
              {logoStyles.dividerVisible && (
                <div className="flex items-center">
                  <div className="h-[1px] w-6" style={{ background: logoStyles.accentColor }}></div>
                  <Scissors className="mx-1" style={{ color: logoStyles.accentColor }} size={12} />
                  <div className="h-[1px] w-6" style={{ background: logoStyles.accentColor }}></div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className={navStyles.container}>
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
                    className={`${navStyles.itemClass}`}
                    style={{
                      color: isActive(item.path) ? navStyles.activeTextColor : navStyles.inactiveTextColor,
                      background:
                        isActive(item.path) && navStyles.activeItemBg ? navStyles.activeItemBg : "transparent",
                      fontFamily: theme.fonts.body,
                    }}
                    whileHover={navStyles.hoverAnimation}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={14} className="ml-1 inline-block" />}

                    {/* Underline animation */}
                    {navStyles.underlineVisible && (
                      <motion.span
                        className={`${navStyles.underlineClass}`}
                        style={{
                          background: navStyles.underlineColor,
                          opacity: isActive(item.path) ? 1 : 0,
                        }}
                        layoutId="underline"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.a>

                  {/* Dropdown menu */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          className={`absolute top-full left-0 mt-1 py-2 ${navStyles.dropdownBg} rounded-md ${navStyles.dropdownShadow} min-w-[200px] z-20`}
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
                              className={navStyles.dropdownItemClass}
                              style={{
                                color: theme.colors.text,
                                fontFamily: theme.fonts.body,
                              }}
                              variants={itemVariants}
                              whileHover={navStyles.dropdownItemHover}
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
          <div className={actionStyles.container}>
            {renderThemeSpecificActions()}

            {/* Mobile Menu Toggle */}
            <motion.button
              className={`md:hidden ${actionStyles.buttonPadding} ${actionStyles.buttonBorderRadius} ${actionStyles.buttonBg} hover:${actionStyles.buttonHoverBg} transition-colors duration-300`}
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
                  {isMenuOpen ? (
                    <X size={20} style={{ color: actionStyles.iconColor }} />
                  ) : (
                    <Menu size={20} style={{ color: actionStyles.iconColor }} />
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
            className={`md:hidden ${mobileMenuStyles.background} overflow-hidden`}
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
                      className={`flex items-center justify-between py-2 border-b ${mobileMenuStyles.itemBorder}`}
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
                          isActive(item.path) ? mobileMenuStyles.itemTextActive : mobileMenuStyles.itemTextInactive
                        } cursor-pointer`}
                        style={{ fontFamily: theme.fonts.body }}
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
                              ? mobileMenuStyles.itemTextActive
                              : mobileMenuStyles.itemTextInactive,
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
                                  color: mobileMenuStyles.itemTextInactive,
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
                  className={`w-full py-3 px-4 rounded-md font-medium transition-colors duration-300 ${mobileMenuStyles.buttonBorder || ""}`}
                  style={{
                    background: mobileMenuStyles.buttonBg,
                    color: mobileMenuStyles.buttonTextColor,
                    fontFamily: theme.fonts.body,
                    borderRadius: theme.borderRadius.medium,
                  }}
                  whileHover={{
                    scale: 1.02,
                    background: mobileMenuStyles.buttonHoverBg,
                  }}
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
                    className="transition-colors duration-300"
                    style={{ color: mobileMenuStyles.itemTextInactive }}
                    whileHover={{ scale: 1.1, y: -2, color: theme.colors.primary }}
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

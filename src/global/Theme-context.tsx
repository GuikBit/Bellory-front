"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { themes } from "../theme/theme"

// Definindo o tipo completo para o tema (expandido)
export type ThemeType = {
  id: string
  name: string
  type: string
  isDark: boolean
  colors: {
    // Cores principais (existentes)
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
    textSecondary: string
    cardBackground: string
    cardBackgroundSecondary: string
    buttonText: string
    backgroundLinear: string

    // Cores expandidas (opcionais para compatibilidade)
    success?: string
    warning?: string
    error?: string
    info?: string
    border?: string
    borderLight?: string
    divider?: string
    overlay?: string
    modalBackground?: string
    inputBackground?: string
    inputBorder?: string
    inputFocus?: string
    placeholder?: string
    navBackground?: string
    navHover?: string
    navActive?: string
    online?: string
    offline?: string
    away?: string
    busy?: string

    [key: string]: string | undefined
  }
  fonts: {
    heading: string
    body: string
    mono?: string

    // Tamanhos de fonte (opcionais)
    sizes?: {
      xs?: string
      sm?: string
      base?: string
      lg?: string
      xl?: string
      "2xl"?: string
      "3xl"?: string
      "4xl"?: string
      "5xl"?: string
      [key: string]: string | undefined
    }

    // Pesos de fonte (opcionais)
    weights?: {
      thin?: string
      light?: string
      normal?: string
      medium?: string
      semibold?: string
      bold?: string
      extrabold?: string
      black?: string
      [key: string]: string | undefined
    }

    // Altura de linha (opcionais)
    lineHeights?: {
      tight?: string
      normal?: string
      relaxed?: string
      loose?: string
      [key: string]: string | undefined
    }
  }
  borderRadius: {
    small: string
    medium: string
    large: string
    xl: string
    none?: string
    sm?: string
    full?: string
    [key: string]: string | undefined
  }

  // Novas propriedades (todas opcionais para compatibilidade)
  spacing?: {
    xs?: string
    sm?: string
    md?: string
    lg?: string
    xl?: string
    "2xl"?: string
    "3xl"?: string
    "4xl"?: string
    "5xl"?: string
    [key: string]: string | undefined
  }

  shadows?: {
    none?: string
    sm?: string
    base?: string
    md?: string
    lg?: string
    xl?: string
    inner?: string
    primaryGlow?: string
    secondaryGlow?: string
    errorGlow?: string
    successGlow?: string
    [key: string]: string | undefined
  }

  transitions?: {
    fast?: string
    normal?: string
    slow?: string
    colors?: string
    transform?: string
    opacity?: string
    shadow?: string
    [key: string]: string | undefined
  }

  opacity?: {
    disabled?: number
    hover?: number
    focus?: number
    overlay?: number
    subtle?: number
    medium?: number
    high?: number
    [key: string]: number | undefined
  }

  zIndex?: {
    dropdown?: number
    sticky?: number
    fixed?: number
    modal?: number
    popover?: number
    tooltip?: number
    toast?: number
    [key: string]: number | undefined
  }

  breakpoints?: {
    xs?: string
    sm?: string
    md?: string
    lg?: string
    xl?: string
    "2xl"?: string
    [key: string]: string | undefined
  }

  effects?: {
    blur?: {
      sm?: string
      base?: string
      md?: string
      lg?: string
      xl?: string
      [key: string]: string | undefined
    }
    backdropBlur?: {
      sm?: string
      base?: string
      md?: string
      lg?: string
      xl?: string
      [key: string]: string | undefined
    }
  }

  components?: {
    button?: {
      minHeight?: string
      iconSpacing?: string
      [key: string]: string | undefined
    }
    input?: {
      minHeight?: string
      iconSpacing?: string
      [key: string]: string | undefined
    }
    card?: {
      defaultPadding?: string
      headerPadding?: string
      footerPadding?: string
      [key: string]: string | undefined
    }
    modal?: {
      maxWidth?: string
      padding?: string
      [key: string]: string | undefined
    }
    toast?: {
      width?: string
      padding?: string
      [key: string]: string | undefined
    }
    [key: string]: any
  }

  [key: string]: any
}

// Definindo o tipo para o contexto
type ThemeContextType = {
  currentTheme: ThemeType
  setTheme: (themeId: string) => void
  availableThemes: ThemeType[]
}

// Criando o contexto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Provedor do tema
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Estado para armazenar o tema atual
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(themes.masculine_default)

  // Efeito para carregar o tema salvo no localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme")
    if (savedTheme && themes[savedTheme as keyof typeof themes]) {
      setCurrentTheme(themes[savedTheme as keyof typeof themes])
    }
  }, [])

  // Função para alterar o tema
  const setTheme = (themeId: string) => {
    if (themes[themeId as keyof typeof themes]) {
      setCurrentTheme(themes[themeId as keyof typeof themes])
      localStorage.setItem("selectedTheme", themeId)
      applyThemeToDocument(themes[themeId as keyof typeof themes])
    }
  }

  // Aplicar o tema ao documento (EXPANDIDA)
  const applyThemeToDocument = (theme: ThemeType) => {
    const root = document.documentElement

    // Cores (expandidas)
    Object.entries(theme.colors).forEach(([key, value]) => {
      if (value) {
        root.style.setProperty(`--color-${key}`, value)
      }
    })

    // Fontes básicas
    root.style.setProperty("--font-heading", theme.fonts.heading)
    root.style.setProperty("--font-body", theme.fonts.body)
    if (theme.fonts.mono) {
      root.style.setProperty("--font-mono", theme.fonts.mono)
    }

    // Tamanhos de fonte
    if (theme.fonts.sizes) {
      Object.entries(theme.fonts.sizes).forEach(([key, value]) => {
        if (value) {
          root.style.setProperty(`--font-size-${key}`, value)
        }
      })
    }

    // Pesos de fonte
    if (theme.fonts.weights) {
      Object.entries(theme.fonts.weights).forEach(([key, value]) => {
        if (value) {
          root.style.setProperty(`--font-weight-${key}`, value)
        }
      })
    }

    // Altura de linha
    if (theme.fonts.lineHeights) {
      Object.entries(theme.fonts.lineHeights).forEach(([key, value]) => {
        if (value) {
          root.style.setProperty(`--line-height-${key}`, value)
        }
      })
    }

    // Border radius (expandido)
    Object.entries(theme.borderRadius).forEach(([key, value]) => {
      if (value) {
        root.style.setProperty(`--radius-${key}`, value)
      }
    })

    // Espaçamentos
    if (theme.spacing) {
      Object.entries(theme.spacing).forEach(([key, value]) => {
        if (value) {
          root.style.setProperty(`--spacing-${key}`, value)
        }
      })
    }

    // Sombras
    if (theme.shadows) {
      Object.entries(theme.shadows).forEach(([key, value]) => {
        if (value) {
          root.style.setProperty(`--shadow-${key}`, value)
        }
      })
    }

    // Transições
    if (theme.transitions) {
      Object.entries(theme.transitions).forEach(([key, value]) => {
        if (value) {
          root.style.setProperty(`--transition-${key}`, value)
        }
      })
    }

    // Opacidades
    if (theme.opacity) {
      Object.entries(theme.opacity).forEach(([key, value]) => {
        if (value !== undefined) {
          root.style.setProperty(`--opacity-${key}`, value.toString())
        }
      })
    }

    // Z-indexes
    if (theme.zIndex) {
      Object.entries(theme.zIndex).forEach(([key, value]) => {
        if (value !== undefined) {
          root.style.setProperty(`--z-index-${key}`, value.toString())
        }
      })
    }

    // Breakpoints
    if (theme.breakpoints) {
      Object.entries(theme.breakpoints).forEach(([key, value]) => {
        if (value) {
          root.style.setProperty(`--breakpoint-${key}`, value)
        }
      })
    }

    // Efeitos de blur
    if (theme.effects?.blur) {
      Object.entries(theme.effects.blur).forEach(([key, value]) => {
        if (value) {
          root.style.setProperty(`--blur-${key}`, value)
        }
      })
    }

    if (theme.effects?.backdropBlur) {
      Object.entries(theme.effects.backdropBlur).forEach(([key, value]) => {
        if (value) {
          root.style.setProperty(`--backdrop-blur-${key}`, value)
        }
      })
    }

    // Configurações de componentes
    if (theme.components) {
      Object.entries(theme.components).forEach(([componentName, componentConfig]) => {
        if (componentConfig && typeof componentConfig === "object") {
          Object.entries(componentConfig).forEach(([key, value]) => {
            if (value) {
              root.style.setProperty(`--component-${componentName}-${key}`, value.toString())
            }
          })
        }
      })
    }

    // Aplicar classe dark/light ao body
    if (theme.isDark) {
      document.body.classList.add("dark")
      document.body.classList.remove("light")
    } else {
      document.body.classList.add("light")
      document.body.classList.remove("dark")
    }

    // Adicionar atributo data-theme para CSS específico
    document.documentElement.setAttribute("data-theme", theme.id)
  }

  // Aplicar o tema atual quando o componente montar
  useEffect(() => {
    applyThemeToDocument(currentTheme)
  }, [currentTheme])

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme,
        availableThemes: Object.values(themes),
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

// Hook personalizado para usar o tema
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider")
  }
  return context
}

// Hook adicional para acessar CSS custom properties
export const useThemeCSS = () => {
  const { currentTheme } = useTheme()

  // Função para obter valor CSS custom property
  const getCSSVar = (property: string) => {
    if (typeof window !== "undefined") {
      return getComputedStyle(document.documentElement).getPropertyValue(property)
    }
    return ""
  }

  // Função para definir valor CSS custom property
  const setCSSVar = (property: string, value: string) => {
    if (typeof window !== "undefined") {
      document.documentElement.style.setProperty(property, value)
    }
  }

  return {
    getCSSVar,
    setCSSVar,
    theme: currentTheme,
  }
}

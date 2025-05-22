"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { themes } from "../theme/theme"


// Definindo o tipo para o tema
export type ThemeType = {
  id: string
  name: string
  type: string
  isDark: boolean
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
    textSecondary: string
    cardBackground: string
    cardBackgroundSecondary: string
    buttonText: string
    [key: string]: string
  }
  fonts: {
    heading: string
    body: string
  }
  borderRadius: {
    small: string
    medium: string
    large: string
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

  // Aplicar o tema ao documento
  const applyThemeToDocument = (theme: ThemeType) => {
    // Aplicar variáveis CSS personalizadas
    const root = document.documentElement

    // Cores
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value)
    })

    // Fontes
    root.style.setProperty("--font-heading", theme.fonts.heading)
    root.style.setProperty("--font-body", theme.fonts.body)

    // Border radius
    root.style.setProperty("--radius-small", theme.borderRadius.small)
    root.style.setProperty("--radius-medium", theme.borderRadius.medium)
    root.style.setProperty("--radius-large", theme.borderRadius.large)

    // Aplicar classe dark/light ao body
    if (theme.isDark) {
      document.body.classList.add("dark")
      document.body.classList.remove("light")
    } else {
      document.body.classList.add("light")
      document.body.classList.remove("dark")
    }
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

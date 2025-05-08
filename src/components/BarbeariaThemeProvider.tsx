"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => null,
})

export const useBarbeariaTheme = () => useContext(ThemeContext)

interface BarbeariaThemeProviderProps {
  children: ReactNode
  defaultTheme?: Theme
}

export function BarbeariaThemeProvider({ children, defaultTheme = "dark" }: BarbeariaThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    // Verifica se há um tema salvo no localStorage
    const savedTheme = localStorage.getItem("barbearia-bigode-theme") as Theme | null

    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // Verifica a preferência do sistema
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setTheme(prefersDark ? "dark" : "light")
    }
  }, [])

  useEffect(() => {
    // Salva o tema no localStorage
    localStorage.setItem("barbearia-bigode-theme", theme)

    // Aplica a classe ao elemento html
    const root = window.document.documentElement

    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [theme])

  const value = {
    theme,
    setTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default BarbeariaThemeProvider

"use client"

import { useEffect } from "react"
import { useTheme } from "../contexts/Theme-context"

export function ThemeStyles() {
  const { currentTheme } = useTheme()

  useEffect(() => {
    // Aplicar variáveis CSS baseadas no tema atual
    document.documentElement.style.setProperty("--primary-color", currentTheme.colors.primary)
    document.documentElement.style.setProperty("--secondary-color", currentTheme.colors.secondary)
    document.documentElement.style.setProperty("--accent-color", currentTheme.colors.accent)
    document.documentElement.style.setProperty("--background-color", currentTheme.colors.background)
    document.documentElement.style.setProperty("--text-color", currentTheme.colors.text)
    document.documentElement.style.setProperty("--text-secondary-color", currentTheme.colors.textSecondary)
    document.documentElement.style.setProperty("--card-background", currentTheme.colors.cardBackground)
    document.documentElement.style.setProperty("--font-heading", currentTheme.fonts.heading)
    document.documentElement.style.setProperty("--font-body", currentTheme.fonts.body)

    // Aplicar fontes
    const headLink = document.createElement("link")
    headLink.rel = "stylesheet"
    headLink.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&family=Roboto+Condensed:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700&family=Lato:wght@400;700&family=Raleway:wght@400;500;600;700&display=swap"
    document.head.appendChild(headLink)

    // Aplicar tema escuro/claro
    if (currentTheme.isDark) {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
    } else {
      document.documentElement.classList.add("light")
      document.documentElement.classList.remove("dark")
    }

    return () => {
      document.head.removeChild(headLink)
    }
  }, [currentTheme])

  return null
}

"use client"

import type React from "react"
import { useEffect } from "react"
import { PrimeReactContext } from "primereact/api"
import { useContext } from "react"
import { useTheme } from "./Theme-context"
import { useThemeHelpers } from "../hooks/useThemeHelpers"

export function PrimeReactThemeProvider({ children }: { children: React.ReactNode }) {
  const { currentTheme } = useTheme()
  const { getColor, getBorderRadius, getShadow, getSpacing, getFontSize, getTransition } = useThemeHelpers()
  const primeReactContext = useContext(PrimeReactContext)

  useEffect(() => {
    // Aplicar variáveis CSS do PrimeReact baseadas no tema atual
    const root = document.documentElement

    // Cores principais do PrimeReact
    root.style.setProperty("--primary-color", getColor("primary", "#3B82F6"))
    root.style.setProperty("--primary-color-text", getColor("buttonText", "#FFFFFF"))
    root.style.setProperty("--surface-0", getColor("background", "#FFFFFF"))
    root.style.setProperty("--surface-50", getColor("cardBackground", "#F9FAFB"))
    root.style.setProperty("--surface-100", getColor("cardBackgroundSecondary", "#F3F4F6"))
    root.style.setProperty("--surface-200", getColor("accent", "#E5E7EB"))
    root.style.setProperty("--surface-300", getColor("border", "#D1D5DB"))
    root.style.setProperty("--surface-400", getColor("borderLight", "#9CA3AF"))
    root.style.setProperty("--surface-500", getColor("textSecondary", "#6B7280"))
    root.style.setProperty("--surface-600", getColor("text", "#374151"))
    root.style.setProperty("--surface-700", getColor("text", "#1F2937"))
    root.style.setProperty("--surface-800", getColor("text", "#111827"))
    root.style.setProperty("--surface-900", getColor("text", "#0F172A"))

    // Cores de texto
    root.style.setProperty("--text-color", getColor("text", "#374151"))
    root.style.setProperty("--text-color-secondary", getColor("textSecondary", "#6B7280"))

    // Cores de estado
    root.style.setProperty("--green-500", getColor("success", "#10B981"))
    root.style.setProperty("--red-500", getColor("error", "#EF4444"))
    root.style.setProperty("--yellow-500", getColor("warning", "#F59E0B"))
    root.style.setProperty("--blue-500", getColor("info", "#3B82F6"))

    // Border radius
    root.style.setProperty("--border-radius", getBorderRadius("medium", "8px"))
    root.style.setProperty("--border-radius-sm", getBorderRadius("small", "4px"))
    root.style.setProperty("--border-radius-lg", getBorderRadius("large", "12px"))

    // Sombras
    root.style.setProperty("--shadow-1", getShadow("sm", "0 1px 2px rgba(0,0,0,0.05)"))
    root.style.setProperty("--shadow-2", getShadow("base", "0 1px 3px rgba(0,0,0,0.1)"))
    root.style.setProperty("--shadow-3", getShadow("md", "0 4px 6px rgba(0,0,0,0.1)"))
    root.style.setProperty("--shadow-4", getShadow("lg", "0 10px 15px rgba(0,0,0,0.1)"))

    // Espaçamentos
    root.style.setProperty("--inline-spacing", getSpacing("sm", "0.5rem"))
    root.style.setProperty("--content-padding", getSpacing("md", "1rem"))

    // Fontes
    root.style.setProperty("--font-family", currentTheme.fonts?.body || "system-ui, sans-serif")
    root.style.setProperty("--font-size", getFontSize("base", "1rem"))

    // Transições
    root.style.setProperty("--transition-duration", getTransition("normal", "300ms").split(" ")[0])

    // Aplicar classe do tema
    document.body.classList.add(`barberia-theme-${currentTheme.id}`)

    // Limpar ao desmontar
    return () => {
      document.body.classList.remove(`barberia-theme-${currentTheme.id}`)
    }
  }, [currentTheme, getColor, getBorderRadius, getShadow, getSpacing, getFontSize, getTransition])

  // Estender o design system existente com valores do tema atual
  useEffect(() => {
    if (primeReactContext && primeReactContext.pt) {
      // Preservar as configurações existentes
      const existingPt = primeReactContext.pt

      // Estender apenas o que precisamos com base no tema atual
      const themeExtensions = {
        // Exemplo: ajustar cores do botão com base no tema atual
        button: {
          ...existingPt.button,
          root: ({ props, context }: { props: any; context: any }) => {
            // Obter o estilo base do existingPt
            const baseStyle =
              typeof existingPt.button?.root === "function"
                ? existingPt.button.root({ props, context }) || { className: "" }
                : { className: "" }

            // Adicionar classes específicas do tema
            if (props.severity === "contrast" && !props.text && !props.outlined && !props.plain) {
              return {
                ...baseStyle,
                className: `${baseStyle.className} text-white dark:text-gray-200 bg-${getColor(
                  "primary",
                  "blue-500",
                )} dark:bg-${getColor("primary", "blue-700")} border border-${getColor(
                  "primary",
                  "blue-700",
                )} dark:border-${getColor("primary", "blue-400")}`,
              }
            }

            return baseStyle
          },
        },

        // Ajustar cores do dropdown
        dropdown: {
          ...existingPt.dropdown,
          root: ({ props }: { props: any }) => {
            let baseStyle: { className: string }
            const rootValue = existingPt.dropdown?.root
            if (typeof rootValue === "function") {
              baseStyle = rootValue( props ) || { className: "" }
            } else if (rootValue && typeof rootValue === "object" && "className" in rootValue) {
              baseStyle = rootValue as { className: string }
            } else {
              baseStyle = { className: "" }
            }

            // Substituir cores de fundo e borda com base no tema atual
            return {
              ...baseStyle,
              className: baseStyle.className.replace(
                "bg-neutral-800",
                `bg-${currentTheme.isDark ? "neutral-800" : "white"}`,
              ),
            }
          },
        },

        // Ajustar cores do calendar
        calendar: {
          ...existingPt.calendar,
          dayLabel: ({ context }: { context: any }) => {
            let baseStyle: { className: string }
            const dayLabelValue = existingPt.calendar?.dayLabel
            if (typeof dayLabelValue === "function") {
              baseStyle = dayLabelValue( context ) || { className: "" }
            } else if (dayLabelValue && typeof dayLabelValue === "object" && "className" in dayLabelValue) {
              baseStyle = dayLabelValue as { className: string }
            } else {
              baseStyle = { className: "" }
            }

            // Ajustar cores de seleção com base no tema atual
            if (context.selected && !context.disabled) {
              return {
                ...baseStyle,
                className: baseStyle.className.replace(
                  "text-amber-700 dark:text-neutral-950 font-bold bg-amber-100 dark:bg-amber-500",
                  `text-${getColor("buttonText", "white")} font-bold bg-${getColor("primary", "blue-500")}`,
                ),
              }
            }

            return baseStyle
          },
        },
      }

      // Não modificamos diretamente o contexto, mas podemos exportar essas extensões
      // para serem usadas no arquivo main.tsx
      console.log("Theme extensions ready for PrimeReact:", themeExtensions)
    }
  }, [currentTheme, primeReactContext, getColor])

  return <>{children}</>
}

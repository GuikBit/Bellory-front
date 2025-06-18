"use client"

import { useTheme } from "../global/Theme-context"



// Hook para acessar valores do tema de forma tipada e segura
export const useThemeHelpers = () => {
  const { currentTheme } = useTheme()

  // Função para obter cor com fallback
  const getColor = (colorKey: string, fallback = "#000000") => {
    return currentTheme.colors?.[colorKey] || fallback
  }

  // Função para obter sombra com fallback
  const getShadow = (shadowKey: string, fallback = "none") => {
    return currentTheme.shadows?.[shadowKey] || fallback
  }

  // Função para obter espaçamento com fallback
  const getSpacing = (spacingKey: string, fallback = "1rem") => {
    return currentTheme.spacing?.[spacingKey] || fallback
  }

  // Função para obter fonte com fallback
  const getFont = (fontKey: string, fallback = "sans-serif") => {
    if (currentTheme.fonts && fontKey in currentTheme.fonts) {
      // @ts-expect-error: Indexing by string is safe due to runtime check
      return currentTheme.fonts[fontKey] || fallback
    }
    return fallback
  }

  // Função para obter tamanho de fonte com fallback
  const getFontSize = (sizeKey: string, fallback = "1rem") => {
    return currentTheme.fonts?.sizes?.[sizeKey] || fallback
  }

  // Função para obter peso de fonte com fallback
  const getFontWeight = (weightKey: string, fallback = "400") => {
    return currentTheme.fonts?.weights?.[weightKey] || fallback
  }

  // Função para obter border radius com fallback
  const getBorderRadius = (radiusKey: string, fallback = "0.5rem") => {
    return currentTheme.borderRadius?.[radiusKey] || fallback
  }

  // Função para obter transição com fallback
  const getTransition = (transitionKey: string, fallback = "300ms ease-in-out") => {
    return currentTheme.transitions?.[transitionKey] || fallback
  }

  // Função para obter opacidade com fallback
  const getOpacity = (opacityKey: string, fallback = 1) => {
    return currentTheme.opacity?.[opacityKey] || fallback
  }

  // Função para obter z-index com fallback
  const getZIndex = (zIndexKey: string, fallback = 1) => {
    return currentTheme.zIndex?.[zIndexKey] || fallback
  }

  // Função para obter breakpoint com fallback
  const getBreakpoint = (breakpointKey: string, fallback = "768px") => {
    return currentTheme.breakpoints?.[breakpointKey] || fallback
  }

  // Função para obter configuração de componente
  const getComponentConfig = (componentKey: string, configKey: string, fallback: any = undefined) => {
    return currentTheme.components?.[componentKey]?.[configKey] || fallback
  }

  // Função para adicionar opacidade a uma cor
  const addOpacity = (color: string, opacity: number) => {
    if (color.startsWith("#")) {
      const alpha = Math.round(opacity * 255)
        .toString(16)
        .padStart(2, "0")
      return `${color}${alpha}`
    }
    return color
  }

  // Função para criar media query
  const createMediaQuery = (breakpointKey: string) => {
    const breakpoint = getBreakpoint(breakpointKey)
    return `@media (min-width: ${breakpoint})`
  }

  // Função para obter estilo de sombra baseado na elevação
  const getElevationShadow = (level: "sm" | "md" | "lg" | "xl" = "md") => {
    return getShadow(level, "none")
  }

  // Função para obter cores de estado
  const getStateColors = () => ({
    success: getColor("success", "#10B981"),
    warning: getColor("warning", "#F59E0B"),
    error: getColor("error", "#EF4444"),
    info: getColor("info", "#3B82F6"),
  })

  // Função para verificar se é tema escuro
  const isDarkTheme = () => {
    return currentTheme.isDark || false
  }

  // Função para obter cores de contraste automático
  const getContrastColor = () => {
    // Lógica simples - pode ser melhorada
    return isDarkTheme() ? getColor("text", "#FFFFFF") : getColor("text", "#000000")
  }

  return {
    // Tema atual
    theme: currentTheme,

    // Funções de acesso
    getColor,
    getShadow,
    getSpacing,
    getFont,
    getFontSize,
    getFontWeight,
    getBorderRadius,
    getTransition,
    getOpacity,
    getZIndex,
    getBreakpoint,
    getComponentConfig,

    // Funções utilitárias
    addOpacity,
    createMediaQuery,
    getElevationShadow,
    getStateColors,
    isDarkTheme,
    getContrastColor,
  }
}

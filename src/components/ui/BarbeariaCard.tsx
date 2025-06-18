"use client"

import { forwardRef } from "react"
import { motion, type HTMLMotionProps } from "framer-motion"
import { UTILS } from "../../styles/theme-guid"
import { useTheme } from "../../global/Theme-context"

const { cn } = UTILS

interface BarbeariaCardProps extends HTMLMotionProps<"div"> {
  /** Variante visual do card */
  variant?: "default" | "outline" | "filled" | "glass" | "gradient" | "elevated"
  /** Tamanho do card */
  size?: "sm" | "md" | "lg" | "xl" | "full"
  /** Estilo do border radius */
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full"
  /** Se o card deve ter efeito hover */
  hover?: boolean | "lift" | "scale" | "glow" | "tilt"
  /** Se o card deve ter borda */
  bordered?: boolean
  /** Nível de elevação/sombra */
  elevation?: "none" | "sm" | "md" | "lg" | "xl"
  /** Se o card está em estado de loading */
  isLoading?: boolean
  /** Se o card está desabilitado */
  disabled?: boolean
  /** Se o card é clicável/interativo */
  interactive?: boolean
  /** Se o card deve ocupar toda a largura */
  fullWidth?: boolean
  /** Se o card deve ocupar toda a altura */
  fullHeight?: boolean
  /** Orientação do layout interno */
  orientation?: "vertical" | "horizontal"
  /** Se deve mostrar indicador de loading */
  showLoadingOverlay?: boolean
  /** Template personalizado (não usado atualmente) */
  template?: string
}

const BarbeariaCard = forwardRef<HTMLDivElement, BarbeariaCardProps>(
  (
    {
      children,
      className,
      variant = "default",
      size = "md",
      rounded = "lg",
      hover = "lift",
      bordered = true,
      elevation = "md",
      isLoading = false,
      disabled = false,
      interactive = false,
      fullWidth = false,
      fullHeight = false,
      orientation = "vertical",
      showLoadingOverlay = false,
      template,
      onClick,
      ...props
    },
    ref,
  ) => {
    const { currentTheme } = useTheme()

    // Configurações de tamanho
    const sizeConfig = {
      sm: {
        padding: "12px",
        minHeight: "120px",
        maxWidth: "280px",
      },
      md: {
        padding: "16px",
        minHeight: "160px",
        maxWidth: "320px",
      },
      lg: {
        padding: "24px",
        minHeight: "200px",
        maxWidth: "400px",
      },
      xl: {
        padding: "32px",
        minHeight: "240px",
        maxWidth: "480px",
      },
      full: {
        padding: "24px",
        minHeight: "auto",
        maxWidth: "100%",
      },
    }

    // Função para obter cores com fallbacks
    const getThemeColor = (colorKey: string, fallback: string) => {
      return currentTheme.colors?.[colorKey] || fallback
    }

    // Função para adicionar transparência
    const addOpacity = (color: string, opacity: number) => {
      if (color.startsWith("#")) {
        const alpha = Math.round(opacity * 255)
          .toString(16)
          .padStart(2, "0")
        return `${color}${alpha}`
      }
      return color
    }

    // Configurações de border radius
    const getBorderRadius = () => {
      if (rounded === "none") return "0"
      if (rounded === "full") return "24px"

      const radiusMap = {
        sm: currentTheme.borderRadius?.small || "6px",
        md: currentTheme.borderRadius?.medium || "12px",
        lg: currentTheme.borderRadius?.large || "16px",
        xl: currentTheme.borderRadius?.xl || "20px",
      }

      return radiusMap[rounded as keyof typeof radiusMap] || radiusMap.lg
    }

    // Configurações de elevação/sombra
    const getElevationStyles = () => {
      // const primary = getThemeColor("primary", "#3b82f6")
      const isDark = currentTheme.isDark

      const shadowColor = isDark ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.1)"
      const shadowColorSecondary = isDark ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.05)"

      switch (elevation) {
        case "none":
          return { boxShadow: "none" }
        case "sm":
          return { boxShadow: `0 1px 3px ${shadowColor}` }
        case "md":
          return { boxShadow: `0 4px 6px ${shadowColor}, 0 1px 3px ${shadowColorSecondary}` }
        case "lg":
          return { boxShadow: `0 10px 15px ${shadowColor}, 0 4px 6px ${shadowColorSecondary}` }
        case "xl":
          return { boxShadow: `0 20px 25px ${shadowColor}, 0 10px 10px ${shadowColorSecondary}` }
        default:
          return { boxShadow: `0 4px 6px ${shadowColor}, 0 1px 3px ${shadowColorSecondary}` }
      }
    }

    // Estilos base do card
    const getBaseStyles = () => {
      const config = sizeConfig[size]

      return {
        padding: config.padding,
        minHeight: config.minHeight,
        maxWidth: fullWidth ? "100%" : config.maxWidth,
        width: fullWidth ? "100%" : "auto",
        height: fullHeight ? "100%" : "auto",
        borderRadius: getBorderRadius(),
        fontFamily: currentTheme.fonts?.body || "inherit",
        position: "relative" as const,
        overflow: "hidden" as const,
        cursor: interactive || onClick ? "pointer" : "default",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        display: "flex",
        flexDirection: orientation === "horizontal" ? ("row" as const) : ("column" as const),
        ...getElevationStyles(),
      }
    }

    // Estilos específicos por variante
    const getVariantStyles = () => {
      const primary = getThemeColor("primary", "#3b82f6")
      const secondary = getThemeColor("secondary", "#6b7280")
      const background = getThemeColor("background", "#ffffff")
      const cardBackground = getThemeColor("cardBackground", "#f9fafb")
      const cardBackgroundSecondary = getThemeColor("cardBackgroundSecondary", "#f3f4f6")
      const text = getThemeColor("text", "#374151")

      switch (variant) {
        case "outline":
          return {
            backgroundColor: background,
            border: `2px solid ${bordered ? secondary : "transparent"}`,
            color: text,
          }

        case "filled":
          return {
            backgroundColor: cardBackgroundSecondary || cardBackground,
            border: `1px solid ${bordered ? addOpacity(secondary, 0.3) : "transparent"}`,
            color: text,
          }

        case "glass":
          return {
            backgroundColor: addOpacity(background, 0.8),
            border: `1px solid ${addOpacity(secondary, 0.2)}`,
            backdropFilter: "blur(10px)",
            color: text,
          }

        case "gradient":
          return {
            background: currentTheme.colors.backgroundLinear || `linear-gradient(135deg, ${primary}, ${secondary})`,
            border: "none",
            color: currentTheme.colors.buttonText || "#ffffff",
          }

        case "elevated":
          return {
            backgroundColor: background,
            border: `1px solid ${bordered ? addOpacity(secondary, 0.1) : "transparent"}`,
            color: text,
            boxShadow: `0 8px 32px ${addOpacity(primary, 0.1)}`,
          }

        case "default":
        default:
          return {
            backgroundColor: cardBackground,
            border: `1px solid ${bordered ? addOpacity(secondary, 0.2) : "transparent"}`,
            color: text,
          }
      }
    }

    // Estilos de hover baseados no tipo
    const getHoverStyles = () => {
      if (disabled || isLoading || !hover) return {}

      const primary = getThemeColor("primary", "#3b82f6")

      const baseHover = {
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }

      switch (hover) {
        case "lift":
        case true:
          return {
            ...baseHover,
            transform: "translateY(-8px)",
            boxShadow: `0 20px 40px ${addOpacity(primary, 0.15)}`,
          }

        case "scale":
          return {
            ...baseHover,
            transform: "scale(1.02)",
            boxShadow: `0 12px 24px ${addOpacity(primary, 0.12)}`,
          }

        case "glow":
          return {
            ...baseHover,
            boxShadow: `0 0 20px ${addOpacity(primary, 0.3)}, 0 8px 32px ${addOpacity(primary, 0.1)}`,
          }

        case "tilt":
          return {
            ...baseHover,
            transform: "perspective(1000px) rotateX(5deg) rotateY(5deg)",
            boxShadow: `0 15px 30px ${addOpacity(primary, 0.15)}`,
          }

        default:
          return baseHover
      }
    }

    // Estilos quando disabled/loading
    const getDisabledStyles = () => {
      if (!disabled && !isLoading) return {}

      return {
        opacity: 0.6,
        cursor: "not-allowed",
        transform: "none",
        filter: "grayscale(0.3)",
      }
    }

    // Combinar todos os estilos
    const combinedStyles = {
      ...getBaseStyles(),
      ...getVariantStyles(),
      ...(disabled || isLoading ? getDisabledStyles() : {}),
    }

    // Componente de loading overlay
    const LoadingOverlay = () => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: addOpacity(getThemeColor("background", "#ffffff"), 0.8),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          borderRadius: "inherit",
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          style={{
            width: "32px",
            height: "32px",
            color: getThemeColor("primary", "#3b82f6"),
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="32"
              strokeDashoffset="32"
              opacity="0.3"
            />
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="8"
              strokeDashoffset="8"
            />
          </svg>
        </motion.div>
      </motion.div>
    )

    // Animações de entrada
    const getInitialAnimation = () => ({
      opacity: 0,
      y: 20,
      scale: 0.95,
    })

    const getAnimateAnimation = () => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    })

    return (
      <motion.div
        ref={ref}
        className={cn(
          // Classes estáticas apenas
          "relative",
          interactive && "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          disabled && "pointer-events-none",
          className,
        )}
        style={combinedStyles}
        initial={getInitialAnimation()}
        animate={getAnimateAnimation()}
        whileHover={!disabled && !isLoading ? getHoverStyles() : {}}
        whileTap={
          (interactive || onClick) && !disabled && !isLoading
            ? {
                scale: 0.98,
                transition: { duration: 0.1 },
              }
            : {}
        }
        whileFocus={
          interactive || onClick
            ? {
                boxShadow: `0 0 0 3px ${addOpacity(getThemeColor("primary", "#3b82f6"), 0.2)}`,
              }
            : {}
        }
        onClick={disabled || isLoading ? undefined : onClick}
        role={interactive || onClick ? "button" : undefined}
        tabIndex={interactive || onClick ? 0 : undefined}
        {...props}
      >
        
        {children as React.ReactNode}

        {/* Loading overlay */}
        {isLoading && showLoadingOverlay && <LoadingOverlay />}

        {/* Efeito de brilho para variant glass */}
        {variant === "glass" && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "1px",
              background: `linear-gradient(90deg, transparent, ${addOpacity(getThemeColor("primary", "#3b82f6"), 0.5)}, transparent)`,
            }}
          />
        )}

        {/* Efeito de gradiente para hover em cards gradient */}
        {variant === "gradient" && hover && (
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(135deg, ${addOpacity(getThemeColor("primary", "#3b82f6"), 0.1)}, transparent)`,
              borderRadius: "inherit",
              opacity: 0,
            }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    )
  },
)

BarbeariaCard.displayName = "BarbeariaCard"

export default BarbeariaCard

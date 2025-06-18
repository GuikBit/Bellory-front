"use client"

import type React from "react"
import { forwardRef } from "react"
import { motion, type HTMLMotionProps } from "framer-motion"
import { UTILS } from "../../styles/theme-guid"
import { useTheme } from "../../global/Theme-context"

const { cn } = UTILS

interface BarbeariaButtonProps extends Omit<HTMLMotionProps<"button">, "size"> {
  /** Variante visual do botão */
  variant?: "primary" | "secondary" | "outline" | "text" | "ghost" | "error" | "success" | "warning" | "info"
  /** Tamanho do botão */
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  /** Estilo do border radius */
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full"
  /** Se o botão deve ocupar toda a largura disponível */
  fullWidth?: boolean
  /** Estado de carregamento */
  isLoading?: boolean
  /** Ícone à esquerda do texto */
  leftIcon?: React.ReactNode
  /** Ícone à direita do texto */
  rightIcon?: React.ReactNode
  /** Valor/texto do botão (alternativa ao children) */
  value?: any
  /** Template personalizado (não usado atualmente) */
  template?: string
  /** Se deve mostrar apenas o ícone (sem texto) */
  iconOnly?: boolean
}

const BarbeariaButton = forwardRef<HTMLButtonElement, BarbeariaButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      rounded = "md",
      fullWidth = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      template,
      value,
      disabled,
      iconOnly = false,
      ...props
    },
    ref,
  ) => {
    const { currentTheme } = useTheme()

    // Configurações de tamanho (apenas classes estáticas)
    const sizeConfig = {
      xs: {
        padding: "6px 12px",
        fontSize: "12px",
        iconSize: "14px",
        minHeight: "28px",
        gap: "4px",
      },
      sm: {
        padding: iconOnly ? "8px" : "8px 16px",
        fontSize: "14px",
        iconSize: "16px",
        minHeight: "32px",
        gap: "6px",
      },
      md: {
        padding: iconOnly ? "10px" : "10px 20px",
        fontSize: "16px",
        iconSize: "18px",
        minHeight: "40px",
        gap: "8px",
      },
      lg: {
        padding: iconOnly ? "12px" : "12px 24px",
        fontSize: "18px",
        iconSize: "20px",
        minHeight: "48px",
        gap: "10px",
      },
      xl: {
        padding: iconOnly ? "16px" : "16px 32px",
        fontSize: "20px",
        iconSize: "24px",
        minHeight: "56px",
        gap: "12px",
      },
    }

    // Configurações de border radius
    const getBorderRadius = () => {
      if (rounded === "none") return "0"
      if (rounded === "full") return "9999px"

      const radiusMap = {
        sm: currentTheme.borderRadius?.small || "4px",
        md: currentTheme.borderRadius?.medium || "8px",
        lg: currentTheme.borderRadius?.large || "12px",
        xl: currentTheme.borderRadius?.xl || "16px",
      }

      return radiusMap[rounded as keyof typeof radiusMap] || radiusMap.md
    }

    // Função para obter cores com fallbacks
    const getThemeColor = (colorKey: string, fallback: string) => {
      return currentTheme.colors?.[colorKey] || fallback
    }

    // Função para adicionar transparência a uma cor
    const addOpacity = (color: string, opacity: number) => {
      if (color.startsWith("#")) {
        const alpha = Math.round(opacity * 255)
          .toString(16)
          .padStart(2, "0")
        return `${color}${alpha}`
      }
      return color
    }

    // Estilos base dinâmicos
    const getBaseStyles = () => {
      const config = sizeConfig[size]

      return {
        padding: config.padding,
        fontSize: config.fontSize,
        minHeight: config.minHeight,
        borderRadius: getBorderRadius(),
        fontFamily: currentTheme.fonts?.heading || "inherit",
        fontWeight: "500",
        border: "1px solid transparent",
        cursor: disabled || isLoading ? "not-allowed" : "pointer",
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: config.gap,
        position: "relative" as const,
        overflow: "hidden" as const,
        outline: "none",
        userSelect: "none" as const,
        width: fullWidth ? "100%" : "auto",
      }
    }

    // Estilos específicos por variante
    const getVariantStyles = () => {
      const primary = getThemeColor("primary", "#3b82f6")
      const secondary = getThemeColor("secondary", "#6b7280")
      const success = getThemeColor("success", "#059669")
      const error = getThemeColor("error", "#DC2626")
      const warning = getThemeColor("warning", "#D97706")
      const info = getThemeColor("info", "#7C3AED")
      // const background = getThemeColor("background", "#ffffff")
      // const text = getThemeColor("text", "#1f2937")
      const buttonText = getThemeColor("buttonText", "#ffffff")

      switch (variant) {
        case "warning":
          return {
            backgroundColor: warning,
            color: buttonText,
            borderColor: warning,
          }
        case "info":
          return {
            backgroundColor: info,
            color: buttonText,
            borderColor: info,
          }
        case "error":
          return {
            backgroundColor: error,
            color: buttonText,
            borderColor: error,
          }
        case "success":
          return {
            backgroundColor: success,
            color: buttonText,
            borderColor: success,
          }
        case "primary":
          return {
            backgroundColor: primary,
            color: buttonText,
            borderColor: primary,
          }

        case "secondary":
          return {
            backgroundColor: secondary,
            color: buttonText,
            borderColor: secondary,
          }

        case "outline":
          return {
            backgroundColor: "transparent",
            color: primary,
            borderColor: primary,
          }

        case "ghost":
          return {
            backgroundColor: "transparent",
            color: primary,
            borderColor: "transparent",
          }

        case "text":
          return {
            backgroundColor: "transparent",
            color: primary,
            borderColor: "transparent",
            padding: sizeConfig[size].padding.replace(/\d+px/g, "4px"), // Reduz padding para variant text
          }

        default:
          return {
            backgroundColor: primary,
            color: buttonText,
            borderColor: primary,
          }
      }
    }

    // Estilos de hover
    const getHoverStyles = () => {
      if (disabled || isLoading) return {}

      const primary = getThemeColor("primary", "#3b82f6")
      const secondary = getThemeColor("secondary", "#6b7280")

      switch (variant) {
        case "primary":
          return {
            backgroundColor: addOpacity(primary, 0.9),
            transform: "translateY(-1px)",
            boxShadow: `0 4px 12px ${addOpacity(primary, 0.3)}`,
          }

        case "secondary":
          return {
            backgroundColor: addOpacity(secondary, 0.9),
            transform: "translateY(-1px)",
            boxShadow: `0 4px 12px ${addOpacity(secondary, 0.3)}`,
          }

        case "outline":
          return {
            backgroundColor: addOpacity(primary, 0.1),
            borderColor: addOpacity(primary, 0.8),
            transform: "translateY(-1px)",
          }

        case "ghost":
          return {
            backgroundColor: addOpacity(primary, 0.1),
          }

        case "text":
          return {
            color: addOpacity(primary, 0.8),
            backgroundColor: addOpacity(primary, 0.05),
          }

        default:
          return {}
      }
    }

    // Estilos de focus
    const getFocusStyles = () => {
      const primary = getThemeColor("primary", "#3b82f6")
      return {
        boxShadow: `0 0 0 3px ${addOpacity(primary, 0.2)}`,
        outline: "none",
      }
    }

    // Estilos quando disabled/loading
    const getDisabledStyles = () => {
      if (!disabled && !isLoading) return {}

      return {
        opacity: 0.6,
        cursor: "not-allowed",
        transform: "none",
        boxShadow: "none",
      }
    }

    // Combinar todos os estilos
    const combinedStyles = {
      ...getBaseStyles(),
      ...getVariantStyles(),
      ...(disabled || isLoading ? getDisabledStyles() : {}),
    }

    // Componente de loading
    const LoadingSpinner = () => (
      <motion.div
        className="inline-block"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        style={{
          width: sizeConfig[size].iconSize,
          height: sizeConfig[size].iconSize,
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    )

    // Renderizar ícones com tamanho correto
    const renderIcon = (icon: React.ReactNode) => {
      if (!icon) return null

      return (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: sizeConfig[size].iconSize,
            lineHeight: 1,
          }}
        >
          {icon}
        </span>
      )
    }

    // Conteúdo do botão
    const buttonContent = () => {
      if (isLoading) {
        return (
          <>
            <LoadingSpinner />
            {!iconOnly && <span style={{ opacity: 0.7 }}>{value || children || "Carregando..."}</span>}
          </>
        )
      }

      return (
        <>
          {leftIcon && renderIcon(leftIcon)}
          {!iconOnly && (
            <span>
              {typeof value === "object" && value !== null && "get" in value ? String(value) : value || children}
            </span>
          )}
          {rightIcon && renderIcon(rightIcon)}
        </>
      )
    }

    return (
      <motion.button
        ref={ref}
        className={cn(
          // Classes estáticas apenas
          "relative inline-flex items-center justify-center hover:scale-105 transition-transform",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed",
          className,
        )}
        style={combinedStyles}
        whileHover={getHoverStyles()}
        whileTap={!disabled && !isLoading ? { scale: 0.98, transition: { duration: 0.1 } } : {}}
        whileFocus={getFocusStyles()}
        disabled={disabled || isLoading}
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        {...props}
      >
        {/* Efeito de ripple/wave (opcional) */}
        <motion.div
          className="absolute inset-0 rounded-inherit"
          initial={{ scale: 0, opacity: 0.5 }}
          whileTap={
            !disabled && !isLoading
              ? {
                  scale: 1,
                  opacity: 0,
                  transition: { duration: 0.3 },
                }
              : {}
          }
          style={{
            backgroundColor: "currentColor",
            borderRadius: "inherit",
          }}
        />

        {/* Conteúdo do botão */}
        <span className="relative z-10 flex items-center justify-center" style={{ gap: sizeConfig[size].gap }}>
          {buttonContent()}
        </span>
      </motion.button>
    )
  },
)

BarbeariaButton.displayName = "BarbeariaButton"

export default BarbeariaButton

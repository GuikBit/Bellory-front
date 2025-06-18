"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { useTheme } from "../../global/Theme-context"
import { useThemeHelpers } from "../../hooks/useThemeHelpers"
import { StepperOrientation, StepperSize, StepperVariant } from "./BarbeariaStepperNovo"

interface StepIndicatorProps {
  /** Número do passo */
  step: number
  /** Passo atual */
  currentStep: number
  /** Callback quando o passo é clicado */
  onClickStep: (clicked: number) => void
  /** Se os indicadores estão desabilitados (não clicáveis) */
  disableStepIndicators?: boolean
  /** Se permite navegação não-linear (pular passos) */
  allowNonLinearNavigation?: boolean
  /** Variante visual do indicador */
  variant?: StepperVariant
  /** Tamanho do indicador */
  size?: StepperSize
  /** Ícone customizado para o passo */
  icon?: React.ReactNode
  /** Template personalizado (não usado atualmente) */
  template?: string
}

export function BarbeariaStepIndicator({
  step,
  currentStep,
  onClickStep,
  disableStepIndicators = false,
  allowNonLinearNavigation = true,
  variant = "default",
  size = "md",
  icon,
  template,
}: StepIndicatorProps) {
  const status = currentStep === step ? "active" : currentStep < step ? "inactive" : "complete"
  const { currentTheme } = useTheme()
  const { getColor, getBorderRadius, getTransition } = useThemeHelpers()
  console.log(template)
  // Configurações de tamanho
  const sizeConfig = {
    sm: {
      size: "32px",
      fontSize: "12px",
      iconSize: "14px",
    },
    md: {
      size: "40px",
      fontSize: "14px",
      iconSize: "16px",
    },
    lg: {
      size: "48px",
      fontSize: "16px",
      iconSize: "20px",
    },
    xl: {
      size: "56px",
      fontSize: "18px",
      iconSize: "24px",
    },
  }

  // Verificar se o passo pode ser clicado
  const isClickable = !disableStepIndicators && (allowNonLinearNavigation || step <= currentStep)

  // Handler de clique
  const handleClick = () => {
    if (isClickable && step !== currentStep) {
      onClickStep(step)
    }
  }

  // Renderizar o conteúdo do indicador baseado na variante
  const renderIndicatorContent = () => {
    if (status === "complete") {
      return <Check size={Number.parseInt(sizeConfig[size].iconSize)} />
    }

    if (variant === "icon" && icon) {
      return icon
    }

    if (variant === "dots") {
      return null // Dots não tem conteúdo interno
    }

    if (variant === "minimal") {
      return status === "active" ? <div style={{ width: "50%", height: "50%", borderRadius: "50%" }} /> : null
    }

    // Default e numbered mostram o número
    return <span style={{ fontSize: sizeConfig[size].fontSize }}>{step}</span>
  }

  // Estilos base do indicador
  const getBaseStyles = () => {
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: sizeConfig[size].size,
      height: sizeConfig[size].size,
      borderRadius: variant === "dots" ? "50%" : getBorderRadius("full", "9999px"),
      fontWeight: "600",
      transition: getTransition("normal", "300ms ease"),
      cursor: isClickable ? "pointer" : "default",
      userSelect: "none" as const,
      position: "relative" as const,
    }
  }

  // Variantes de animação baseadas no status
  const getVariants = () => {
    const isDark = currentTheme.isDark || false

    // Cores para cada estado
    const colors = {
      inactive: {
        bg: isDark ? getColor("cardBackgroundSecondary", "#262626") : getColor("accent", "#f3f4f6"),
        border: isDark ? getColor("border", "#404040") : getColor("border", "#d1d5db"),
        text: isDark ? getColor("textSecondary", "#9ca3af") : getColor("textSecondary", "#6b7280"),
      },
      active: {
        bg: getColor("primary", "#3b82f6"),
        border: getColor("primary", "#3b82f6"),
        text: getColor("buttonText", "#ffffff"),
      },
      complete: {
        bg: getColor("success", "#10b981"),
        border: getColor("success", "#10b981"),
        text: "#ffffff",
      },
    }

    // Variantes específicas por tipo
    switch (variant) {
      case "dots":
        return {
          inactive: {
            scale: 0.8,
            backgroundColor: colors.inactive.bg,
            borderColor: colors.inactive.border,
          },
          active: {
            scale: 1,
            backgroundColor: colors.active.bg,
            borderColor: colors.active.border,
          },
          complete: {
            scale: 0.8,
            backgroundColor: colors.complete.bg,
            borderColor: colors.complete.border,
          },
        }

      case "minimal":
        return {
          inactive: {
            scale: 1,
            backgroundColor: "transparent",
            borderColor: colors.inactive.border,
            borderWidth: "2px",
            borderStyle: "solid",
            color: colors.inactive.text,
          },
          active: {
            scale: 1,
            backgroundColor: "transparent",
            borderColor: colors.active.bg,
            borderWidth: "2px",
            borderStyle: "solid",
            color: colors.active.bg,
          },
          complete: {
            scale: 1,
            backgroundColor: colors.complete.bg,
            borderColor: colors.complete.border,
            borderWidth: "2px",
            borderStyle: "solid",
            color: colors.complete.text,
          },
        }

      case "icon":
        return {
          inactive: {
            scale: 1,
            backgroundColor: colors.inactive.bg,
            borderColor: colors.inactive.border,
            borderWidth: "2px",
            borderStyle: "solid",
            color: colors.inactive.text,
          },
          active: {
            scale: 1.1,
            backgroundColor: colors.active.bg,
            borderColor: colors.active.border,
            borderWidth: "2px",
            borderStyle: "solid",
            color: colors.active.text,
          },
          complete: {
            scale: 1,
            backgroundColor: colors.complete.bg,
            borderColor: colors.complete.border,
            borderWidth: "2px",
            borderStyle: "solid",
            color: colors.complete.text,
          },
        }

      case "numbered":
      case "default":
      default:
        return {
          inactive: {
            scale: 1,
            backgroundColor: colors.inactive.bg,
            borderColor: colors.inactive.border,
            borderWidth: "2px",
            borderStyle: "solid",
            color: colors.inactive.text,
          },
          active: {
            scale: 1.1,
            backgroundColor: colors.active.bg,
            borderColor: colors.active.border,
            borderWidth: "2px",
            borderStyle: "solid",
            color: colors.active.text,
          },
          complete: {
            scale: 1,
            backgroundColor: colors.complete.bg,
            borderColor: colors.complete.border,
            borderWidth: "2px",
            borderStyle: "solid",
            color: colors.complete.text,
          },
        }
    }
  }

  return (
    <motion.div
      onClick={handleClick}
      className={`barberia-step-indicator ${variant} ${size} ${status}`}
      style={getBaseStyles()}
      animate={status}
      initial={false}
      variants={getVariants()}
      whileHover={isClickable ? { scale: status === "active" ? 1.15 : 1.05 } : {}}
      whileTap={isClickable ? { scale: 0.95 } : {}}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      aria-current={status === "active" ? "step" : undefined}
      aria-label={`Passo ${step}`}
    >
      {renderIndicatorContent()}
    </motion.div>
  )
}

interface StepConnectorProps {
  /** Se o conector está completo */
  isComplete: boolean
  /** Orientação do stepper */
  orientation?: StepperOrientation
  /** Tamanho do conector */
  size?: StepperSize
}

export function BarbeariaStepConnector({ isComplete, orientation = "horizontal", size = "md" }: StepConnectorProps) {
  const { currentTheme } = useTheme()
  const { getColor, getTransition } = useThemeHelpers()

  // Configurações de tamanho
  const sizeConfig = {
    sm: {
      thickness: "2px",
      length: orientation === "horizontal" ? "100%" : "24px",
    },
    md: {
      thickness: "3px",
      length: orientation === "horizontal" ? "100%" : "32px",
    },
    lg: {
      thickness: "4px",
      length: orientation === "horizontal" ? "100%" : "40px",
    },
    xl: {
      thickness: "5px",
      length: orientation === "horizontal" ? "100%" : "48px",
    },
  }

  // Determinar estilos baseados na orientação
  const getConnectorStyles = () => {
    const isDark = currentTheme.isDark || false
    const baseColor = isDark ? getColor("border", "#404040") : getColor("border", "#d1d5db")
    const activeColor = getColor("primary", "#3b82f6")

    if (orientation === "vertical") {
      return {
        container: {
          width: sizeConfig[size].thickness,
          height: sizeConfig[size].length,
          backgroundColor: baseColor,
          margin: "8px 0",
          borderRadius: "9999px",
          overflow: "hidden",
          position: "relative" as const,
        },
        progress: {
          position: "absolute" as const,
          left: 0,
          top: 0,
          width: "100%",
          backgroundColor: activeColor,
          transition: getTransition("normal", "300ms ease"),
        },
      }
    }

    return {
      container: {
        height: sizeConfig[size].thickness,
        width: sizeConfig[size].length,
        backgroundColor: baseColor,
        margin: "0 8px",
        borderRadius: "9999px",
        overflow: "hidden",
        position: "relative" as const,
        flex: 1,
      },
      progress: {
        position: "absolute" as const,
        left: 0,
        top: 0,
        height: "100%",
        backgroundColor: activeColor,
        transition: getTransition("normal", "300ms ease"),
      },
    }
  }

  const styles = getConnectorStyles()

  return (
    <div className="barberia-step-connector" style={styles.container}>
      <motion.div
        className="barberia-step-connector-progress"
        style={styles.progress}
        initial={{ [orientation === "vertical" ? "height" : "width"]: 0 }}
        animate={{ [orientation === "vertical" ? "height" : "width"]: isComplete ? "100%" : 0 }}
        transition={{ duration: 0.4 }}
      />
    </div>
  )
}

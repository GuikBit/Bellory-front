"use client"

import type React from "react"
import { forwardRef, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
// import { UTILS } from "../../styles/theme-guid"
import { useTheme } from "../../global/Theme-context"
import { AlertCircle, CheckCircle } from "lucide-react"

// const { cn } = UTILS

interface BarbeariaInputSwitchProps {
  /** Texto do label */
  label?: string
  /** Mensagem de erro */
  error?: string
  /** Mensagem de sucesso */
  success?: string
  /** Texto de ajuda/descrição */
  helperText?: string
  /** Se o switch deve ocupar toda a largura */
  fullWidth?: boolean
  /** Tamanho do switch */
  size?: "sm" | "md" | "lg" | "xl"
  /** Estilo do border radius */
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full"
  /** Se o switch está em estado de loading */
  isLoading?: boolean
  /** Se é um campo obrigatório (mostra *) */
  required?: boolean
  /** Se está marcado */
  checked?: boolean
  /** Valor padrão */
  defaultChecked?: boolean
  /** Callback quando valor muda */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void
  /** Se está desabilitado */
  disabled?: boolean
  /** Texto quando está ativo */
  activeText?: string
  /** Texto quando está inativo */
  inactiveText?: string
  /** Ícone quando está ativo */
  activeIcon?: React.ReactNode
  /** Ícone quando está inativo */
  inactiveIcon?: React.ReactNode
  /** Cor personalizada quando ativo */
  activeColor?: string
  /** Cor personalizada quando inativo */
  inactiveColor?: string
  /** Se deve mostrar os textos inline */
  showLabels?: boolean
  /** Posição do label principal */
  labelPosition?: "top" | "left" | "right"
  /** Se deve animar a transição */
  animated?: boolean
  /** Variante visual */
  variant?: "default" | "ios" | "material" | "custom"
  /** Nome do input (para formulários) */
  name?: string
  /** ID do input */
  id?: string
  /** Valor do input */
  value?: string
}

const BarbeariaInputSwitch = forwardRef<HTMLInputElement, BarbeariaInputSwitchProps>(
  (
    {
      label,
      error,
      success,
      helperText,
      fullWidth = false,
      size = "md",
      rounded = "full",
      isLoading = false,
      required = false,
      checked,
      defaultChecked = false,
      onChange,
      disabled = false,
      activeText = "Ativo",
      inactiveText = "Inativo",
      activeIcon,
      inactiveIcon,
      activeColor,
      inactiveColor,
      showLabels = false,
      labelPosition = "top",
      animated = true,
      variant = "default",
      name,
      id,
      value,
      ...props
    },
    ref,
  ) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked)
    const [isFocused, setIsFocused] = useState(false)
    const { currentTheme } = useTheme()

    const isChecked = checked !== undefined ? checked : internalChecked

    // Configurações de tamanho
    const sizeConfig = {
      sm: {
        width: "36px",
        height: "20px",
        thumbSize: "16px",
        thumbOffset: "2px",
        fontSize: "12px",
        labelSize: "12px",
        iconSize: "12px",
      },
      md: {
        width: "44px",
        height: "24px",
        thumbSize: "20px",
        thumbOffset: "2px",
        fontSize: "14px",
        labelSize: "14px",
        iconSize: "14px",
      },
      lg: {
        width: "52px",
        height: "28px",
        thumbSize: "24px",
        thumbOffset: "2px",
        fontSize: "16px",
        labelSize: "16px",
        iconSize: "16px",
      },
      xl: {
        width: "60px",
        height: "32px",
        thumbSize: "28px",
        thumbOffset: "2px",
        fontSize: "18px",
        labelSize: "18px",
        iconSize: "18px",
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
      if (rounded === "full") return "9999px"

      const radiusMap = {
        sm: currentTheme.borderRadius?.small || "4px",
        md: currentTheme.borderRadius?.medium || "8px",
        lg: currentTheme.borderRadius?.large || "12px",
        xl: currentTheme.borderRadius?.xl || "16px",
      }

      return radiusMap[rounded as keyof typeof radiusMap] || radiusMap.md
    }

    // Determinar estado do switch
    const getSwitchState = () => {
      if (error) return "error"
      if (success) return "success"
      if (isFocused) return "focused"
      if (disabled) return "disabled"
      return "default"
    }

    // Estilos do container
    const getContainerStyles = (): React.CSSProperties => {
      const flexDirection: React.CSSProperties["flexDirection"] =
        labelPosition === "left" ? "row" : labelPosition === "right" ? "row-reverse" : "column"

      return {
        width: fullWidth ? "100%" : "auto",
        fontFamily: currentTheme.fonts?.body || "inherit",
        display: "flex",
        flexDirection,
        alignItems: labelPosition === "top" ? "flex-start" : "center",
        gap: labelPosition === "top" ? "6px" : "12px",
      }
    }

    // Estilos do label
    const getLabelStyles = () => {
      const config = sizeConfig[size]
      const state = getSwitchState()

      let color = getThemeColor("text", "#374151")

      if (state === "error") color = "#ef4444"
      if (state === "success") color = "#10b981"
      if (state === "focused") color = getThemeColor("primary", "#3b82f6")

      return {
        fontSize: config.labelSize,
        fontWeight: "500",
        color,
        transition: "color 0.2s ease",
        cursor: disabled ? "not-allowed" : "pointer",
        userSelect: "none" as const,
      }
    }

    // Estilos do switch container
    const getSwitchContainerStyles = () => {
      return {
        display: "flex",
        alignItems: "center",
        gap: showLabels ? "8px" : "0",
      }
    }

    // Estilos do track (fundo do switch)
    const getTrackStyles = () => {
      const config = sizeConfig[size]
      const state = getSwitchState()
      const primary = activeColor || getThemeColor("primary", "#3b82f6")
      const secondary = inactiveColor || getThemeColor("secondary", "#d1d5db")

      let backgroundColor = isChecked ? primary : secondary

      if (state === "error") {
        backgroundColor = isChecked ? "#ef4444" : "#fecaca"
      } else if (state === "success") {
        backgroundColor = isChecked ? "#10b981" : "#d1fae5"
      }

      const baseStyles = {
        width: config.width,
        height: config.height,
        borderRadius: getBorderRadius(),
        backgroundColor,
        position: "relative" as const,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: animated ? "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
        opacity: disabled ? 0.6 : 1,
        border: `2px solid transparent`,
        outline: "none",
      }

      // Adicionar focus ring
      if (state === "focused") {
        baseStyles.border = `2px solid ${addOpacity(primary, 0.3)}`
      }

      return baseStyles
    }

    // Estilos do thumb (botão deslizante)
    const getThumbStyles = () => {
      const config = sizeConfig[size]
      const thumbOffset = Number.parseInt(config.thumbOffset)
      const trackWidth = Number.parseInt(config.width)
      const thumbSize = Number.parseInt(config.thumbSize)

      const translateX = isChecked ? trackWidth - thumbSize - thumbOffset * 2 : 0

      return {
        width: config.thumbSize,
        height: config.thumbSize,
        borderRadius: getBorderRadius(),
        backgroundColor: "#ffffff",
        position: "absolute" as const,
        top: config.thumbOffset,
        left: config.thumbOffset,
        transform: `translateX(${translateX}px)`,
        transition: animated ? "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: config.iconSize,
        color: getThemeColor("textSecondary", "#6b7280"),
      }
    }

    // Handle change
    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (disabled) return

        const newChecked = event.target.checked
        setInternalChecked(newChecked)
        onChange?.(newChecked, event)
      },
      [disabled, onChange],
    )

    // Loading spinner
    const LoadingSpinner = () => (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        style={{ fontSize: sizeConfig[size].iconSize }}
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
    )

    // Render thumb content
    const renderThumbContent = () => {
      if (isLoading) return <LoadingSpinner />

      const currentIcon = isChecked ? activeIcon : inactiveIcon
      if (currentIcon) return currentIcon

      return null
    }

    // Render labels
    const renderLabels = () => {
      if (!showLabels) return null

      const config = sizeConfig[size]
      const currentText = isChecked ? activeText : inactiveText
      const textColor = isChecked
        ? activeColor || getThemeColor("primary", "#3b82f6")
        : inactiveColor || getThemeColor("textSecondary", "#6b7280")

      return (
        <motion.span
          key={currentText}
          initial={animated ? { opacity: 0, x: isChecked ? -10 : 10 } : false}
          animate={{ opacity: 1, x: 0 }}
          exit={animated ? { opacity: 0, x: isChecked ? 10 : -10 } : {}}
          transition={{ duration: 0.2 }}
          style={{
            fontSize: config.fontSize,
            fontWeight: "500",
            color: textColor,
            transition: "color 0.2s ease",
            userSelect: "none",
          }}
        >
          {currentText}
        </motion.span>
      )
    }

    // Render feedback
    const renderFeedback = () => {
      const messages = []

      if (error) {
        messages.push(
          <motion.p
            key="error"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              color: "#ef4444",
              fontSize: "12px",
              marginTop: "4px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <AlertCircle size={12} />
            {error}
          </motion.p>,
        )
      }

      if (success && !error) {
        messages.push(
          <motion.p
            key="success"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              color: "#10b981",
              fontSize: "12px",
              marginTop: "4px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <CheckCircle size={12} />
            {success}
          </motion.p>,
        )
      }

      if (helperText && !error && !success) {
        messages.push(
          <p
            key="helper"
            style={{
              color: getThemeColor("textSecondary", "#6b7280"),
              fontSize: "12px",
              marginTop: "4px",
            }}
          >
            {helperText}
          </p>,
        )
      }

      return <AnimatePresence mode="wait">{messages.length > 0 && <div>{messages}</div>}</AnimatePresence>
    }

    return (
      <div style={getContainerStyles()}>
        {/* Label */}
        {label && (
          <label htmlFor={id} style={getLabelStyles()}>
            {label}
            {required && <span style={{ color: "#ef4444", marginLeft: "2px" }}>*</span>}
          </label>
        )}

        {/* Switch Container */}
        <div style={getSwitchContainerStyles()}>
          {/* Inactive Label (left side) */}
          {showLabels && !isChecked && <AnimatePresence mode="wait">{renderLabels()}</AnimatePresence>}

          {/* Switch Track */}
          <div
            style={getTrackStyles()}
            onClick={() => !disabled && !isLoading && handleChange({ target: { checked: !isChecked } } as any)}
          >
            {/* Hidden Input */}
            <input
              ref={ref}
              type="checkbox"
              checked={isChecked}
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              disabled={disabled || isLoading}
              name={name}
              id={id}
              value={value}
              style={{
                position: "absolute",
                opacity: 0,
                width: "100%",
                height: "100%",
                margin: 0,
                cursor: disabled ? "not-allowed" : "pointer",
              }}
              {...props}
            />

            {/* Thumb */}
            <motion.div
              style={getThumbStyles()}
              layout={animated}
              transition={animated ? { type: "spring", stiffness: 500, damping: 30 } : undefined}
            >
              {renderThumbContent()}
            </motion.div>
          </div>

          {/* Active Label (right side) */}
          {showLabels && isChecked && <AnimatePresence mode="wait">{renderLabels()}</AnimatePresence>}
        </div>

        {/* Feedback */}
        {renderFeedback()}
      </div>
    )
  },
)

BarbeariaInputSwitch.displayName = "BarbeariaInputSwitch"

export default BarbeariaInputSwitch

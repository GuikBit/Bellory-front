"use client"

import type React from "react"
import { type InputHTMLAttributes, forwardRef, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { UTILS } from "../../styles/theme-guid"
import { useTheme } from "../../global/Theme-context"
import { Eye, EyeOff, AlertCircle, CheckCircle, X } from "lucide-react"

const { cn } = UTILS

interface BarbeariaInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Texto do label */
  label?: string
  /** Mensagem de erro */
  error?: string
  /** Mensagem de sucesso */
  success?: string
  /** Texto de ajuda/descrição */
  helperText?: string
  /** Ícone à esquerda */
  leftIcon?: React.ReactNode
  /** Ícone à direita */
  rightIcon?: React.ReactNode
  /** Se o input deve ocupar toda a largura */
  fullWidth?: boolean
  /** Variante visual do input */
  variant?: "outline" | "filled" | "underline" | "ghost"
  /** Tamanho do input */
  size?: "sm" | "md" | "lg" | "xl"
  /** Estilo do border radius */
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full"
  /** Se deve mostrar contador de caracteres */
  showCounter?: boolean
  /** Máximo de caracteres (usado com showCounter) */
  maxLength?: number
  /** Se o input está em estado de loading */
  isLoading?: boolean
  /** Se deve limpar o input (mostra botão X) */
  clearable?: boolean
  /** Callback quando o input é limpo */
  onClear?: () => void
  /** Se é um campo obrigatório (mostra *) */
  required?: boolean
  /** Template personalizado (não usado atualmente) */
  template?: string
}

const BarbeariaInput = forwardRef<HTMLInputElement, BarbeariaInputProps>(
  (
    {
      className,
      label,
      error,
      success,
      helperText,
      leftIcon,
      rightIcon,
      fullWidth = true,
      variant = "outline",
      size = "md",
      rounded = "md",
      showCounter = false,
      maxLength,
      isLoading = false,
      clearable = false,
      onClear,
      required = false,
      template,
      type = "text",
      value,
      onChange,
      disabled,
      readOnly,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [internalValue, setInternalValue] = useState(value || "")
    const { currentTheme } = useTheme()

    // Configurações de tamanho
    const sizeConfig = {
      sm: {
        height: "36px",
        padding: "8px 12px",
        fontSize: "14px",
        iconSize: "16px",
        labelSize: "12px",
      },
      md: {
        height: "44px",
        padding: "12px 16px",
        fontSize: "16px",
        iconSize: "18px",
        labelSize: "14px",
      },
      lg: {
        height: "52px",
        padding: "16px 20px",
        fontSize: "18px",
        iconSize: "20px",
        labelSize: "16px",
      },
      xl: {
        height: "60px",
        padding: "20px 24px",
        fontSize: "20px",
        iconSize: "24px",
        labelSize: "18px",
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

    // Determinar estado do input
    const getInputState = () => {
      if (error) return "error"
      if (success) return "success"
      if (isFocused) return "focused"
      if (disabled) return "disabled"
      if (readOnly) return "readonly"
      return "default"
    }

    // Estilos base do container
    const getContainerStyles = () => {
      return {
        width: fullWidth ? "100%" : "auto",
        fontFamily: currentTheme.fonts?.body || "inherit",
      }
    }

    // Estilos do label
    const getLabelStyles = () => {
      const config = sizeConfig[size]
      const state = getInputState()

      let color = getThemeColor("text", "#374151")

      if (state === "error") color = "#ef4444"
      if (state === "success") color = "#10b981"
      if (state === "focused") color = getThemeColor("primary", "#3b82f6")

      return {
        fontSize: config.labelSize,
        fontWeight: "500",
        color,
        marginBottom: "6px",
        marginLeft: "8px",
        display: "block",
        transition: "color 0.2s ease",
      }
    }

    // Estilos do input baseados na variante
    const getInputStyles = () => {
      const config = sizeConfig[size]
      const state = getInputState()
      const primary = getThemeColor("primary", "#3b82f6")
      const background = getThemeColor("background", "#ffffff")
      const cardBackground = getThemeColor("cardBackground", "#f9fafb")
      const text = getThemeColor("text", "#374151")
      const textSecondary = getThemeColor("textSecondary", "#6b7280")

      const baseStyles = {
        height: config.height,
        padding: config.padding,
        fontSize: config.fontSize,
        fontFamily: "inherit",
        color: text,
        border: "none",
        outline: "none",
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        width: "100%",
        borderRadius: variant === "underline" ? "0" : getBorderRadius(),
        caretColor: primary,
      }

      // Ajustar padding para ícones
      let paddingLeft = config.padding.split(" ")[1]
      let paddingRight = config.padding.split(" ")[1]

      if (leftIcon || isLoading) {
        paddingLeft = `${Number.parseInt(config.padding.split(" ")[1]) + Number.parseInt(config.iconSize) + 8}px`
      }

      if (rightIcon || clearable || type === "password" || showCounter) {
        paddingRight = `${Number.parseInt(config.padding.split(" ")[1]) + Number.parseInt(config.iconSize) + 8}px`
      }

      baseStyles.padding = `${config.padding.split(" ")[0]} ${paddingRight} ${config.padding.split(" ")[0]} ${paddingLeft}`

      // Estilos específicos por variante
      switch (variant) {
        case "filled":
          return {
            ...baseStyles,
            backgroundColor: state === "focused" ? background : cardBackground,
            border: `2px solid transparent`,
            borderBottomColor:
              state === "error"
                ? "#ef4444"
                : state === "success"
                  ? "#10b981"
                  : state === "focused"
                    ? primary
                    : "transparent",
          }

        case "underline":
          return {
            ...baseStyles,
            backgroundColor: "transparent",
            borderBottom: `2px solid ${state === "error" ? "#ef4444" : state === "success" ? "#10b981" : state === "focused" ? primary : textSecondary}`,
            borderRadius: "0",
            paddingLeft: "0",
            paddingRight:
              rightIcon || clearable || type === "password" ? `${Number.parseInt(config.iconSize) + 8}px` : "0",
          }

        case "ghost":
          return {
            ...baseStyles,
            backgroundColor: state === "focused" ? addOpacity(primary, 0.05) : "transparent",
            border: `1px solid transparent`,
            borderColor:
              state === "error"
                ? "#ef4444"
                : state === "success"
                  ? "#10b981"
                  : state === "focused"
                    ? primary
                    : "transparent",
          }

        case "outline":
        default:
          return {
            ...baseStyles,
            backgroundColor: background,
            border: `2px solid ${state === "error" ? "#ef4444" : state === "success" ? "#10b981" : state === "focused" ? primary : textSecondary}`,
          }
      }
    }

    // Estilos do container do input
    const getInputContainerStyles = () => {
      return {
        position: "relative" as const,
        display: "flex",
        alignItems: "center",
      }
    }

    // Estilos dos ícones
    const getIconStyles = (position: "left" | "right") => {
      const config = sizeConfig[size]
      const state = getInputState()

      let color = getThemeColor("textSecondary", "#6b7280")
      if (state === "focused") color = getThemeColor("primary", "#3b82f6")
      if (state === "error") color = "#ef4444"
      if (state === "success") color = "#10b981"

      const baseStyles = {
        position: "absolute" as const,
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: config.iconSize,
        color,
        transition: "color 0.2s ease",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }

      if (position === "left") {
        return {
          ...baseStyles,
          left: variant === "underline" ? "0" : "12px",
        }
      } else {
        return {
          ...baseStyles,
          right: variant === "underline" ? "0" : "12px",
        }
      }
    }

    // Handle change interno
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setInternalValue(newValue)
        onChange?.(e)
      },
      [onChange],
    )

    // Handle clear
    const handleClear = useCallback(() => {
      setInternalValue("")
      onClear?.()
      if (ref && "current" in ref && ref.current) {
        ref.current.value = ""
        ref.current.focus()
      }
    }, [onClear, ref])

    // Toggle password visibility
    const togglePasswordVisibility = useCallback(() => {
      setShowPassword(!showPassword)
    }, [showPassword])

    // Componente de loading
    const LoadingSpinner = () => (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        style={getIconStyles("left")}
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

    // Renderizar ícone direito
    const renderRightIcon = () => {
      const icons = []

      // Botão de limpar
      if (clearable && (value || internalValue)) {
        icons.push(
          <motion.button
            key="clear"
            type="button"
            onClick={handleClear}
            style={{ ...getIconStyles("right"), cursor: "pointer", right: icons.length * 28 + 12 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={16} />
          </motion.button>,
        )
      }

      // Toggle password
      if (type === "password") {
        icons.push(
          <motion.button
            key="password-toggle"
            type="button"
            onClick={togglePasswordVisibility}
            style={{ ...getIconStyles("right"), cursor: "pointer", right: icons.length * 28 + 12 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </motion.button>,
        )
      }

      // Ícone de estado
      if (error) {
        icons.push(
          <div key="error-icon" style={{ ...getIconStyles("right"), right: icons.length * 28 + 12 }}>
            <AlertCircle size={16} />
          </div>,
        )
      } else if (success) {
        icons.push(
          <div key="success-icon" style={{ ...getIconStyles("right"), right: icons.length * 28 + 12 }}>
            <CheckCircle size={16} />
          </div>,
        )
      }

      // Ícone customizado
      if (rightIcon && !error && !success) {
        icons.push(
          <div key="custom-icon" style={{ ...getIconStyles("right"), right: icons.length * 28 + 12 }}>
            {rightIcon}
          </div>,
        )
      }

      return icons
    }

    // Contador de caracteres
    const renderCounter = () => {
      if (!showCounter || !maxLength) return null

      const currentLength = (value || internalValue || "").toString().length
      const isNearLimit = currentLength > maxLength * 0.8

      return (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            fontSize: "12px",
            color: isNearLimit ? "#ef4444" : getThemeColor("textSecondary", "#6b7280"),
            textAlign: "right" as const,
            marginTop: "4px",
          }}
        >
          {currentLength}/{maxLength}
        </motion.div>
      )
    }

    // Mensagens de feedback
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
          <label htmlFor={props.id} style={getLabelStyles()}>
            {label}
            {required && <span style={{ color: "#ef4444", marginLeft: "2px" }}>*</span>}
          </label>
        )}

        {/* Input Container */}
        <div style={getInputContainerStyles()}>
          {/* Loading ou Left Icon */}
          {isLoading ? <LoadingSpinner /> : leftIcon && <div style={getIconStyles("left")}>{leftIcon}</div>}

          {/* Input */}
          <input
            ref={ref}
            type={type === "password" ? (showPassword ? "text" : "password") : type}
            value={value}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            disabled={disabled || isLoading}
            readOnly={readOnly}
            maxLength={maxLength}
            style={getInputStyles()}
            className={cn(
              "placeholder:opacity-60",
              disabled && "cursor-not-allowed opacity-60",
              readOnly && "cursor-default",
              className,
            )}
            {...props}
          />

          {/* Right Icons */}
          {renderRightIcon()}
        </div>

        {/* Counter */}
        {renderCounter()}

        {/* Feedback Messages */}
        {renderFeedback()}
      </div>
    )
  },
)

BarbeariaInput.displayName = "BarbeariaInput"

export default BarbeariaInput

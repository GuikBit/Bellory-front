"use client"

import type React from "react"
import { forwardRef, useState, useCallback, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { UTILS } from "../../styles/theme-guid"
import { useTheme } from "../../global/Theme-context"
import { ChevronDown, AlertCircle, CheckCircle, Search, X } from "lucide-react"

const { cn } = UTILS

interface DropdownOption {
  value: any
  label: string
  disabled?: boolean
  icon?: React.ReactNode
  description?: string
}

interface BarbeariaDropdownProps {
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
  /** Se o dropdown deve ocupar toda a largura */
  fullWidth?: boolean
  /** Variante visual do dropdown */
  variant?: "outline" | "filled" | "underline" | "ghost"
  /** Tamanho do dropdown */
  size?: "sm" | "md" | "lg" | "xl"
  /** Estilo do border radius */
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full"
  /** Se o dropdown está em estado de loading */
  isLoading?: boolean
  /** Se deve limpar o dropdown (mostra botão X) */
  clearable?: boolean
  /** Callback quando o dropdown é limpo */
  onClear?: () => void
  /** Se é um campo obrigatório (mostra *) */
  required?: boolean
  /** Se permite busca dentro das opções */
  searchable?: boolean
  /** Placeholder para busca */
  searchPlaceholder?: string
  /** Placeholder quando nenhuma opção está selecionada */
  placeholder?: string
  /** Valor selecionado */
  value?: any
  /** Callback quando valor muda */
  onChange?: (value: any, option: DropdownOption) => void
  /** Lista de opções */
  options?: DropdownOption[]
  /** Se está desabilitado */
  disabled?: boolean
  /** Máximo de itens visíveis (scroll após esse número) */
  maxVisibleItems?: number
  /** Se permite múltipla seleção */
  multiple?: boolean
  /** Valores selecionados (para múltipla seleção) */
  values?: any[]
  /** Callback para múltipla seleção */
  onMultipleChange?: (values: any[], options: DropdownOption[]) => void
  /** Template personalizado para renderizar opção */
  optionTemplate?: (option: DropdownOption) => React.ReactNode
  /** Template personalizado para valor selecionado */
  valueTemplate?: (option: DropdownOption) => React.ReactNode
}

const BarbeariaDropdown = forwardRef<HTMLDivElement, BarbeariaDropdownProps>(
  (
    {
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
      isLoading = false,
      clearable = false,
      onClear,
      required = false,
      searchable = false,
      searchPlaceholder = "Buscar...",
      placeholder = "Selecione uma opção",
      value,
      onChange,
      options = [],
      disabled = false,
      maxVisibleItems = 6,
      multiple = false,
      values = [],
      onMultipleChange,
      optionTemplate,
      valueTemplate,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [highlightedIndex, setHighlightedIndex] = useState(-1)
    const { currentTheme } = useTheme()
    const dropdownRef = useRef<HTMLDivElement>(null)
    const searchInputRef = useRef<HTMLInputElement>(null)

    // Configurações de tamanho (mesmo do BarbeariaInput)
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

    // Determinar estado do dropdown
    const getDropdownState = () => {
      if (error) return "error"
      if (success) return "success"
      if (isFocused || isOpen) return "focused"
      if (disabled) return "disabled"
      return "default"
    }

    // Filtrar opções baseado na busca
    const filteredOptions = searchable
      ? options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()))
      : options

    // Encontrar opção selecionada
    const selectedOption = options.find((option) => option.value === value)
    const selectedOptions = multiple ? options.filter((option) => values.includes(option.value)) : []

    // Estilos do container
    const getContainerStyles = () => ({
      width: fullWidth ? "100%" : "auto",
      fontFamily: currentTheme.fonts?.body || "inherit",
      position: "relative" as const,
    })

    // Estilos do label (mesmo do BarbeariaInput)
    const getLabelStyles = () => {
      const config = sizeConfig[size]
      const state = getDropdownState()

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

    // Estilos do trigger (baseado no BarbeariaInput)
    const getTriggerStyles = () => {
      const config = sizeConfig[size]
      const state = getDropdownState()
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
        cursor: disabled ? "not-allowed" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        userSelect: "none" as const,
      }

      // Ajustar padding para ícones
      let paddingLeft = config.padding.split(" ")[1]
      let paddingRight = config.padding.split(" ")[1]

      if (leftIcon || isLoading) {
        paddingLeft = `${Number.parseInt(config.padding.split(" ")[1]) + Number.parseInt(config.iconSize) + 8}px`
      }

      if (rightIcon || clearable) {
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
            paddingRight: rightIcon || clearable ? `${Number.parseInt(config.iconSize) + 8}px` : "0",
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

    // Estilos do dropdown menu
    const getDropdownMenuStyles = () => ({
      position: "absolute" as const,
      top: "100%",
      left: 0,
      right: 0,
      zIndex: 1000,
      marginTop: "4px",
      backgroundColor: getThemeColor("background", "#ffffff"),
      border: `1px solid ${getThemeColor("secondary", "#e5e7eb")}`,
      borderRadius: getBorderRadius(),
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      maxHeight: `${maxVisibleItems * 44 + (searchable ? 44 : 0)}px`,
      overflow: "hidden",
    })

    // Estilos dos ícones (mesmo do BarbeariaInput)
    const getIconStyles = (position: "left" | "right") => {
      const config = sizeConfig[size]
      const state = getDropdownState()

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

    // Handle click outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false)
          setIsFocused(false)
          setSearchTerm("")
          setHighlightedIndex(-1)
        }
      }

      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    // Handle keyboard navigation
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (!isOpen) return

        switch (event.key) {
          case "ArrowDown":
            event.preventDefault()
            setHighlightedIndex((prev) => (prev < filteredOptions.length - 1 ? prev + 1 : 0))
            break
          case "ArrowUp":
            event.preventDefault()
            setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : filteredOptions.length - 1))
            break
          case "Enter":
            event.preventDefault()
            if (highlightedIndex >= 0) {
              handleOptionSelect(filteredOptions[highlightedIndex])
            }
            break
          case "Escape":
            setIsOpen(false)
            setIsFocused(false)
            break
        }
      }

      document.addEventListener("keydown", handleKeyDown)
      return () => document.removeEventListener("keydown", handleKeyDown)
    }, [isOpen, highlightedIndex, filteredOptions])

    // Focus search input when dropdown opens
    useEffect(() => {
      if (isOpen && searchable && searchInputRef.current) {
        searchInputRef.current.focus()
      }
    }, [isOpen, searchable])

    // Handle option select
    const handleOptionSelect = useCallback(
      (option: DropdownOption) => {
        if (option.disabled) return

        if (multiple) {
          const newValues = values.includes(option.value)
            ? values.filter((v) => v !== option.value)
            : [...values, option.value]
          const newOptions = options.filter((opt) => newValues.includes(opt.value))
          onMultipleChange?.(newValues, newOptions)
        } else {
          onChange?.(option.value, option)
          setIsOpen(false)
          setIsFocused(false)
        }

        setSearchTerm("")
        setHighlightedIndex(-1)
      },
      [multiple, values, options, onChange, onMultipleChange],
    )

    // Handle clear
    const handleClear = useCallback(() => {
      if (multiple) {
        onMultipleChange?.([], [])
      } else {
        onChange?.(null, {} as DropdownOption)
      }
      onClear?.()
      setSearchTerm("")
    }, [multiple, onChange, onMultipleChange, onClear])

    // Toggle dropdown
    const toggleDropdown = useCallback(() => {
      if (disabled) return
      setIsOpen(!isOpen)
      setIsFocused(!isOpen)
    }, [disabled, isOpen])

    // Render selected value
    const renderSelectedValue = () => {
      if (multiple && selectedOptions.length > 0) {
        if (selectedOptions.length === 1) {
          return valueTemplate ? valueTemplate(selectedOptions[0]) : selectedOptions[0].label
        }
        return `${selectedOptions.length} itens selecionados`
      }

      if (selectedOption) {
        return valueTemplate ? valueTemplate(selectedOption) : selectedOption.label
      }

      return <span style={{ color: getThemeColor("textSecondary", "#6b7280"), opacity: 0.7 }}>{placeholder}</span>
    }

    // Render right icons
    const renderRightIcons = () => {
      const icons = []

      // Clear button
      if (clearable && ((multiple && values.length > 0) || (!multiple && value))) {
        icons.push(
          <motion.button
            key="clear"
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              handleClear()
            }}
            style={{ ...getIconStyles("right"), cursor: "pointer", right: icons.length * 28 + 32 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={16} />
          </motion.button>,
        )
      }

      // State icons
      if (error) {
        icons.push(
          <div key="error-icon" style={{ ...getIconStyles("right"), right: icons.length * 28 + 32 }}>
            <AlertCircle size={16} />
          </div>,
        )
      } else if (success) {
        icons.push(
          <div key="success-icon" style={{ ...getIconStyles("right"), right: icons.length * 28 + 32 }}>
            <CheckCircle size={16} />
          </div>,
        )
      }

      // Custom right icon
      if (rightIcon && !error && !success) {
        icons.push(
          <div key="custom-icon" style={{ ...getIconStyles("right"), right: icons.length * 28 + 32 }}>
            {rightIcon}
          </div>,
        )
      }

      return icons
    }

    // Loading spinner (mesmo do BarbeariaInput)
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

    // Render feedback (mesmo do BarbeariaInput)
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
      <div ref={ref} style={getContainerStyles()} {...props}>
        {/* Label */}
        {label && (
          <label style={getLabelStyles()}>
            {label}
            {required && <span style={{ color: "#ef4444", marginLeft: "2px" }}>*</span>}
          </label>
        )}

        {/* Dropdown Container */}
        <div ref={dropdownRef} style={{ position: "relative" }}>
          {/* Trigger */}
          <div onClick={toggleDropdown} style={getTriggerStyles()}>
            {/* Loading ou Left Icon */}
            {isLoading ? <LoadingSpinner /> : leftIcon && <div style={getIconStyles("left")}>{leftIcon}</div>}

            {/* Selected Value */}
            <div style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {renderSelectedValue()}
            </div>

            {/* Right Icons */}
            {renderRightIcons()}

            {/* Chevron */}
            <motion.div
              style={{ ...getIconStyles("right"), right: "12px" }}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={16} />
            </motion.div>
          </div>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                style={getDropdownMenuStyles()}
              >
                {/* Search Input */}
                {searchable && (
                  <div style={{ padding: "8px", borderBottom: `1px solid ${getThemeColor("secondary", "#e5e7eb")}` }}>
                    <div style={{ position: "relative" }}>
                      <Search
                        size={16}
                        style={{
                          position: "absolute",
                          left: "8px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: getThemeColor("textSecondary", "#6b7280"),
                        }}
                      />
                      <input
                        ref={searchInputRef}
                        type="text"
                        placeholder={searchPlaceholder}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "8px 12px 8px 32px",
                          border: `1px solid ${getThemeColor("secondary", "#e5e7eb")}`,
                          borderRadius: "4px",
                          fontSize: "14px",
                          outline: "none",
                          backgroundColor: getThemeColor("background", "#ffffff"),
                          color: getThemeColor("text", "#374151"),
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Options List */}
                <div style={{ maxHeight: `${maxVisibleItems * 44}px`, overflowY: "auto" }}>
                  {filteredOptions.length === 0 ? (
                    <div
                      style={{
                        padding: "12px 16px",
                        color: getThemeColor("textSecondary", "#6b7280"),
                        textAlign: "center",
                        fontSize: "14px",
                      }}
                    >
                      {searchTerm ? "Nenhuma opção encontrada" : "Nenhuma opção disponível"}
                    </div>
                  ) : (
                    filteredOptions.map((option, index) => (
                      <motion.div
                        key={option.value}
                        onClick={() => handleOptionSelect(option)}
                        style={{
                          padding: "12px 16px",
                          cursor: option.disabled ? "not-allowed" : "pointer",
                          backgroundColor:
                            index === highlightedIndex
                              ? addOpacity(getThemeColor("primary", "#3b82f6"), 0.1)
                              : multiple && values.includes(option.value)
                                ? addOpacity(getThemeColor("primary", "#3b82f6"), 0.05)
                                : "transparent",
                          color: option.disabled
                            ? getThemeColor("textSecondary", "#6b7280")
                            : getThemeColor("text", "#374151"),
                          opacity: option.disabled ? 0.5 : 1,
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontSize: "14px",
                          transition: "all 0.15s ease",
                        }}
                        whileHover={
                          !option.disabled
                            ? { backgroundColor: addOpacity(getThemeColor("primary", "#3b82f6"), 0.1) }
                            : {}
                        }
                        onMouseEnter={() => setHighlightedIndex(index)}
                      >
                        {/* Option Icon */}
                        {option.icon && <div style={{ flexShrink: 0 }}>{option.icon}</div>}

                        {/* Option Content */}
                        <div style={{ flex: 1 }}>
                          {optionTemplate ? (
                            optionTemplate(option)
                          ) : (
                            <div>
                              <div>{option.label}</div>
                              {option.description && (
                                <div
                                  style={{
                                    fontSize: "12px",
                                    color: getThemeColor("textSecondary", "#6b7280"),
                                    marginTop: "2px",
                                  }}
                                >
                                  {option.description}
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Selection Indicator */}
                        {multiple && values.includes(option.value) && (
                          <CheckCircle size={16} style={{ color: getThemeColor("primary", "#3b82f6") }} />
                        )}
                      </motion.div>
                    ))
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Feedback */}
        {renderFeedback()}
      </div>
    )
  },
)

BarbeariaDropdown.displayName = "BarbeariaDropdown"

export default BarbeariaDropdown

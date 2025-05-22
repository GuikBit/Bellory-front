"use client"

import type React from "react"
import { forwardRef } from "react"
import { motion, type HTMLMotionProps } from "framer-motion"
import { UTILS } from "../../styles/theme-guid"
import { useTheme } from "../../contexts/Theme-context"

const { cn } = UTILS

interface BarbeariaButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "text"
  size?: "sm" | "md" | "lg"
  fullWidth?: boolean
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  value?: string
  template?: string
}

const BarbeariaButton = forwardRef<HTMLButtonElement, BarbeariaButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      template,
      value = "Teste",
      disabled,
      ...props
    },
    ref,
  ) => {
    const { currentTheme } = useTheme()

    // Estilos de variante baseados no tema atual
    const variantStyles = {
      primary: `bg-[${currentTheme.colors.primary}] hover:bg-opacity-90 text-[${currentTheme.colors.buttonText}]`,
      secondary: `bg-[${currentTheme.colors.secondary}] hover:bg-opacity-90 text-[${currentTheme.colors.buttonText}] border border-[${currentTheme.colors.secondary}]`,
      outline: `bg-transparent border border-[${currentTheme.colors.primary}] text-[${currentTheme.colors.primary}] hover:bg-[${currentTheme.colors.primary}] hover:bg-opacity-10`,
      text: `bg-transparent text-[${currentTheme.colors.primary}] hover:text-opacity-80`,
    }

    const sizeStyles = {
      sm: `text-sm px-3 py-1.5 rounded-[${currentTheme.borderRadius.small}]`,
      md: `px-4 py-2.5 rounded-[${currentTheme.borderRadius.medium}]`,
      lg: `text-lg px-6 py-3 rounded-[${currentTheme.borderRadius.large}]`,
    }

    return (
      <motion.button
        ref={ref}
        className={cn(
          "font-medium transition-colors duration-300 flex items-center justify-center",
          variantStyles[variant],
          sizeStyles[size],
          fullWidth ? "w-full" : "",
          isLoading || disabled ? "opacity-70 cursor-not-allowed" : "",
          className,
        )}
        style={{
          backgroundColor:
            variant === "primary"
              ? currentTheme.colors.primary
              : variant === "secondary"
                ? currentTheme.colors.secondary
                : "transparent",
          color:
            variant === "outline" || variant === "text" ? currentTheme.colors.primary : currentTheme.colors.buttonText,
          borderColor:
            variant === "outline"
              ? currentTheme.colors.primary
              : variant === "secondary"
                ? currentTheme.colors.secondary
                : variant === "primary"
                  ? currentTheme.colors.primary
                  : "transparent",
          borderRadius:
            size === "sm"
              ? currentTheme.borderRadius.small
              : size === "md"
                ? currentTheme.borderRadius.medium
                : currentTheme.borderRadius.large,
        }}
        whileHover={!isLoading && !disabled ? { scale: 1.02 } : {}}
        whileTap={!isLoading && !disabled ? { scale: 0.98 } : {}}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : leftIcon ? (
          <span className="mr-2">{leftIcon}</span>
        ) : null}

        {typeof value === "object" && value !== null && "get" in value
          ? String(value)
          : value ?? children}

        {!isLoading && rightIcon ? <span className="ml-2">{rightIcon}</span> : null}
      </motion.button>
    )
  },
)

BarbeariaButton.displayName = "BarbeariaButton"

export default BarbeariaButton

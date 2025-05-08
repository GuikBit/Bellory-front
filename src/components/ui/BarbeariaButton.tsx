"use client"

import type React from "react"
import { forwardRef } from "react"
import { motion, type HTMLMotionProps } from "framer-motion"
import { UTILS } from "../../styles/theme-guid"

const { cn } = UTILS

interface BarbeariaButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "text"
  size?: "sm" | "md" | "lg"
  fullWidth?: boolean
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
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
      disabled,
      ...props
    },
    ref,
  ) => {
    const variantStyles = {
      primary: "bg-bigode-amber hover:bg-bigode-amber-dark text-white",
      secondary: "bg-bigode-neutral-800 hover:bg-bigode-neutral-700 text-white border border-bigode-neutral-700",
      outline: "bg-transparent border border-bigode-amber text-bigode-amber hover:bg-bigode-amber/10",
      text: "bg-transparent text-bigode-amber hover:text-bigode-amber-light",
    }

    const sizeStyles = {
      sm: "text-sm px-3 py-1.5 rounded",
      md: "px-4 py-2.5 rounded-lg",
      lg: "text-lg px-6 py-3 rounded-lg",
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

        {children as React.ReactNode}

        {!isLoading && rightIcon ? <span className="ml-2">{rightIcon}</span> : null}
      </motion.button>
    )
  },
)

BarbeariaButton.displayName = "BarbeariaButton"

export default BarbeariaButton

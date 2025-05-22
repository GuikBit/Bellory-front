"use client"

import type React from "react"
import { type InputHTMLAttributes, forwardRef, useState } from "react"
import { UTILS } from "../../styles/theme-guid"
import { useTheme } from "../../contexts/Theme-context"

const { cn } = UTILS

interface BarbeariaInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
  template?: string
}

const BarbeariaInput = forwardRef<HTMLInputElement, BarbeariaInputProps>(
  ({ className, label, error, leftIcon, rightIcon, fullWidth = true, template, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    const { currentTheme } = useTheme()

    return (
      <div className={cn("space-y-1", fullWidth ? "w-full" : "")}>
        {label && (
          <label htmlFor={props.id} className="block text-sm font-medium" style={{ color: currentTheme.colors.text }}>
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span
                className={cn(isFocused && "text-amber-500")}
                style={{ color: isFocused ? currentTheme.colors.primary : currentTheme.colors.textSecondary }}
              >
                {leftIcon}
              </span>
            </div>
          )}

          <input
            ref={ref}
            className={cn(
              "border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-colors duration-300",
              leftIcon ? "pl-10" : "pl-4",
              rightIcon ? "pr-10" : "pr-4",
              "py-2.5",
              error ? "border-red-500 focus:ring-red-500" : "",
              fullWidth ? "w-full" : "",
              className,
            )}
            style={{
              backgroundColor: currentTheme.isDark
                ? currentTheme.colors.cardBackgroundSecondary
                : currentTheme.colors.background,
              borderColor: error ? "rgb(239, 68, 68)" : currentTheme.colors.secondary,
              borderRadius: currentTheme.borderRadius.medium,
              color: currentTheme.colors.text,
              caretColor: currentTheme.colors.primary,
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />

          {rightIcon && (
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              {rightIcon}
            </div>
          )}
        </div>

        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    )
  },
)

BarbeariaInput.displayName = "BarbeariaInput"

export default BarbeariaInput

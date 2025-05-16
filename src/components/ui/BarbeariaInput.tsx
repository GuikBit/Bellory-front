"use client"

import type React from "react"

import { type InputHTMLAttributes, forwardRef, useState } from "react"
import { UTILS } from "../../styles/theme-guid"


const { cn } = UTILS

interface BarbeariaInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
}

const BarbeariaInput = forwardRef<HTMLInputElement, BarbeariaInputProps>(
  ({ className, label, error, leftIcon, rightIcon, fullWidth = true, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
      <div className={cn("space-y-1", fullWidth ? "w-full" : "")}>
        {label && (
          <label htmlFor={props.id} className="block text-sm font-medium text-gray-300">
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className={cn( isFocused && "text-amber-500")}>{leftIcon}</span>
            </div>
          )}

          <input
            ref={ref}
            className={cn(
              "bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-neutral-500 transition-colors duration-300",
              leftIcon ? "pl-10" : "pl-4",
              rightIcon ? "pr-10" : "pr-4",
              "py-2.5",
              error ? "border-red-500 focus:ring-red-500" : "",
              fullWidth ? "w-full" : "",
              className,
            )}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />

          {rightIcon && <div className="absolute inset-y-0 right-0 pr-3 flex items-center">{rightIcon}</div>}
        </div>

        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    )
  },
)

BarbeariaInput.displayName = "BarbeariaInput"

export default BarbeariaInput

"use client"

import { forwardRef } from "react"
import { motion, type HTMLMotionProps } from "framer-motion"
import { UTILS } from "../../styles/theme-guid"
import { useTheme } from "../../contexts/Theme-context"

const { cn } = UTILS

interface BarbeariaCardProps extends HTMLMotionProps<"div"> {
  hover?: boolean
  bordered?: boolean
  elevated?: boolean
  template?: string
}

const BarbeariaCard = forwardRef<HTMLDivElement, BarbeariaCardProps>(
  ({ children, className, hover = true, bordered = true, elevated = true, template, ...props }, ref) => {
    const { currentTheme } = useTheme()

    return (
      <motion.div
        ref={ref}
        className={cn("rounded-xl overflow-hidden", bordered && "border", elevated && "shadow-lg", className)}
        style={{
          backgroundColor: currentTheme.colors.cardBackground,
          borderColor: bordered ? currentTheme.colors.secondary : "transparent",
          borderRadius: currentTheme.borderRadius.large,
          color: currentTheme.colors.text,
        }}
        whileHover={hover ? { y: -5, transition: { duration: 0.3 } } : {}}
        {...props}
      >
        {children}
      </motion.div>
    )
  },
)

BarbeariaCard.displayName = "BarbeariaCard"

export default BarbeariaCard

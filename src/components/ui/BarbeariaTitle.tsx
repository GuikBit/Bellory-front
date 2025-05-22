"use client"

import type { HTMLAttributes } from "react"
import { Scissors } from "lucide-react"
import { motion } from "framer-motion"
import { UTILS } from "../../styles/theme-guid"
import { useTheme } from "../../contexts/Theme-context"

const { cn } = UTILS

interface BarbeariaTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  centered?: boolean
  withDivider?: boolean
  as?: "h1" | "h2" | "h3" | "h4"
  size?: "sm" | "md" | "lg" | "xl"
  template?: string
}

const BarbeariaTitle = ({
  title,
  subtitle,
  centered = true,
  withDivider = true,
  as = "h2",
  size = "lg",
  template,
  ...props
}: BarbeariaTitleProps) => {
  const { currentTheme } = useTheme()

  const sizeStyles = {
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
    xl: "text-4xl md:text-5xl",
  }

  const HeadingTag = as

  return (
    <motion.div
      className={cn("mb-8", centered && "flex flex-col items-center text-center")}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      // {...props}
    >
      <HeadingTag
        className={cn("font-bold mb-2", sizeStyles[size])}
        style={{ color: currentTheme.colors.text, fontFamily: currentTheme.fonts.heading }}
      >
        {title}
      </HeadingTag>

      {withDivider && (
        <div className={cn("flex items-center mb-4", !subtitle && "mb-0")}>
          <div className="h-[1px] w-12" style={{ backgroundColor: currentTheme.colors.primary }}></div>
          <Scissors className="mx-2" size={16} style={{ color: currentTheme.colors.primary }} />
          <div className="h-[1px] w-12" style={{ backgroundColor: currentTheme.colors.primary }}></div>
        </div>
      )}

      {subtitle && (
        <p
          className="max-w-2xl"
          style={{ color: currentTheme.colors.textSecondary, fontFamily: currentTheme.fonts.body }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

BarbeariaTitle.displayName = "BarbeariaTitle"

export default BarbeariaTitle

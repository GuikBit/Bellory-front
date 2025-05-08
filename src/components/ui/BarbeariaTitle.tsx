"use client"

import type { HTMLAttributes } from "react"
import { Scissors } from "lucide-react"
import { motion } from "framer-motion"
import { UTILS } from "../../styles/theme-guid"

const { cn } = UTILS

interface BarbeariaTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  centered?: boolean
  withDivider?: boolean
  as?: "h1" | "h2" | "h3" | "h4"
  size?: "sm" | "md" | "lg" | "xl"
}

const BarbeariaTitle = ({
  title,
  subtitle,
  centered = true,
  withDivider = true,
  as = "h2",
  size = "lg",
}: BarbeariaTitleProps) => {
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
    >
      <HeadingTag className={cn("font-bold text-white mb-2", sizeStyles[size])}>{title}</HeadingTag>

      {withDivider && (
        <div className={cn("flex items-center mb-4", !subtitle && "mb-0")}>
          <div className="h-[1px] w-12 bg-bigode-amber"></div>
          <Scissors className="mx-2 text-bigode-amber" size={16} />
          <div className="h-[1px] w-12 bg-bigode-amber"></div>
        </div>
      )}

      {subtitle && <p className="text-bigode-neutral-300 max-w-2xl">{subtitle}</p>}
    </motion.div>
  )
}

BarbeariaTitle.displayName = "BarbeariaTitle"

export default BarbeariaTitle

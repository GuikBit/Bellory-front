"use client"

import { type HTMLAttributes, forwardRef } from "react"
import { motion } from "framer-motion"
import { UTILS } from "../../styles/theme-guid"

const { cn } = UTILS

interface BarbeariaCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  bordered?: boolean
  elevated?: boolean
}

const BarbeariaCard = forwardRef<HTMLDivElement, BarbeariaCardProps>(
  ({ children, className, hover = true, bordered = true, elevated = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "bg-bigode-neutral-800 rounded-xl overflow-hidden",
          bordered && "border border-bigode-neutral-700",
          elevated && "shadow-bigode-lg",
          className,
        )}
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

"use client"

import { forwardRef } from "react"
import { motion, type HTMLMotionProps } from "framer-motion"
import { UTILS } from "../../styles/theme-guid"

const { cn } = UTILS

interface BarbeariaCardProps extends HTMLMotionProps<"div"> {
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
          "bg-neutral-800 rounded-xl overflow-hidden",
          bordered && "border border-neutral-700",
          elevated && "shadow-lg",
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

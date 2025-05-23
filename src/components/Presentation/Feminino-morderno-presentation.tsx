"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Sparkles, Star, Zap } from "lucide-react"
import { useIsMobile } from "../../hooks/useIsMobile"
import { themes } from "../../theme/theme"
import Logo3D from "../Fragments/Logo3D"
import { BarbeariaButton } from "../ui"

interface FemininoModernoPresentationProps {
  onAgendarClick: () => void
  onScrollToNext: () => void
}

const FemininoModernoPresentation = ({ onAgendarClick, onScrollToNext }: FemininoModernoPresentationProps) => {
  const isMobile = useIsMobile()
  const theme = themes.femininoModerno

  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <motion.div
      ref={scrollRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Vibrant modern background */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop"
          alt="background"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/30 via-purple-600/40 to-black/60"></div>

        {/* Modern decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 opacity-10"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 4, repeat: Number.POSITIVE_INFINITY },
            }}
          >
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="75" cy="25" r="25" fill={theme.colors.primary} />
              <circle cx="25" cy="75" r="25" fill={theme.colors.secondary} />
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-20 left-20 w-64 h-64 opacity-10"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -180, -360],
            }}
            transition={{
              scale: { duration: 5, repeat: Number.POSITIVE_INFINITY },
              rotate: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            }}
          >
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 100C0 44.7715 44.7715 0 100 0V100H0Z" fill={theme.colors.accent} />
            </svg>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ y: -50, opacity: 0, rotateX: -30 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <Logo3D scale={isMobile ? 3 : 4} />
        </motion.div>

        {/* Vibrant modern title */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-7xl font-bold"
            style={{
              color: theme.colors.text,
              fontFamily: theme.fonts.heading,
              background: `linear-gradient(45deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            animate={{
              textShadow: [
                `0 0 40px ${theme.colors.primary}60`,
                `0 0 80px ${theme.colors.secondary}60`,
                `0 0 40px ${theme.colors.primary}60`,
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            GLOW & SHINE
          </motion.h1>

          {/* Animated sparkles */}
          <motion.div
            className="absolute -top-8 -left-8"
            animate={{
              rotate: 360,
              scale: [1, 1.5, 1],
              x: [0, 10, -10, 0],
              y: [0, -10, 10, 0],
            }}
            transition={{
              rotate: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
              x: { duration: 4, repeat: Number.POSITIVE_INFINITY },
              y: { duration: 3, repeat: Number.POSITIVE_INFINITY },
            }}
          >
            <Sparkles size={32} style={{ color: theme.colors.primary }} />
          </motion.div>

          <motion.div
            className="absolute -bottom-8 -right-8"
            animate={{
              rotate: -360,
              scale: [1, 1.3, 1],
              x: [0, -15, 15, 0],
              y: [0, 15, -15, 0],
            }}
            transition={{
              rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 1 },
              x: { duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 },
              y: { duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1.5 },
            }}
          >
            <Star size={28} style={{ color: theme.colors.secondary }} />
          </motion.div>
        </motion.div>

        {/* Dynamic divisor */}
        <motion.div
          className="flex items-center justify-center mb-6"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.div
            className="h-1 w-20 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
            }}
            animate={{
              background: [
                `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                `linear-gradient(90deg, ${theme.colors.secondary}, ${theme.colors.accent})`,
                `linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.primary})`,
                `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          ></motion.div>
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.4, 1],
            }}
            transition={{
              rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
            }}
          >
            <Sparkles className="mx-4" style={{ color: theme.colors.primary }} size={32} />
          </motion.div>
          <motion.div
            className="h-1 w-20 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
            }}
            animate={{
              background: [
                `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                `linear-gradient(90deg, ${theme.colors.secondary}, ${theme.colors.accent})`,
                `linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.primary})`,
                `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
          ></motion.div>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mb-8 font-bold"
          style={{
            color: theme.colors.textSecondary,
            fontFamily: theme.fonts.body,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Onde a inovação encontra a beleza. Descubra tratamentos revolucionários que fazem você brilhar como nunca!
        </motion.p>

        {/* Vibrant action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              boxShadow: `0 20px 40px -10px ${theme.colors.primary}50`,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <BarbeariaButton variant="primary" size="lg" onClick={onAgendarClick} className="flex items-center gap-2">
              <Zap size={20} />
              AGENDAR AGORA
            </BarbeariaButton>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              rotateY: -5,
              boxShadow: `0 20px 40px -10px ${theme.colors.secondary}50`,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <BarbeariaButton variant="secondary" size="lg" className="flex items-center gap-2">
              <Star size={20} />
              EXPLORAR TRATAMENTOS
            </BarbeariaButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Dynamic scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.2, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        onClick={onScrollToNext}
      >
        <ChevronDown size={32} style={{ color: theme.colors.primary }} />
      </motion.div>
    </motion.div>
  )
}

export default FemininoModernoPresentation

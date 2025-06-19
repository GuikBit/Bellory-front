"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Hexagon, Zap, ArrowRight } from "lucide-react"
// import { useIsMobile } from "../../hooks/useIsMobile"
import { themes } from "../../../theme/theme"
import { BarbeariaButton } from "../../ui"

interface MasculinoModernoPresentationProps {
  onAgendarClick: () => void
  onScrollToNext: () => void
}

const MasculinoModernoPresentation = ({ onAgendarClick, onScrollToNext }: MasculinoModernoPresentationProps) => {
  // const isMobile = useIsMobile()
  const theme = themes.masculinoModerno

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
      {/* Modern geometric background */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop"
          alt="background"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        {/* Animated geometric patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-40 h-40 opacity-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L100 0L100 100L0 100L0 0Z" fill={theme.colors.accent} />
              <path d="M20 20L80 20L80 80L20 80L20 20Z" fill={theme.colors.primary} />
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-20 left-20 w-32 h-32 opacity-10"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="50" fill={theme.colors.accent} />
              <circle cx="50" cy="50" r="30" fill={theme.colors.primary} />
            </svg>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ y: -50, opacity: 0, rotateY: -30 }}
          animate={{ y: 0, opacity: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          {/* <Logo3D scale={isMobile ? 3 : 4} /> */}
        </motion.div>

        {/* Futuristic title */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-7xl font-bold uppercase tracking-widest"
            style={{
              color: theme.colors.text,
              fontFamily: theme.fonts.heading,
            }}
            animate={{
              textShadow: [
                `0 0 30px ${theme.colors.accent}60`,
                `0 0 60px ${theme.colors.accent}80`,
                `0 0 30px ${theme.colors.accent}60`,
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            FUTURO STYLE
          </motion.h1>

          {/* Hexagon decorations */}
          <motion.div
            className="absolute -top-6 -left-6"
            animate={{
              rotate: 360,
              scale: [1, 1.3, 1],
            }}
            transition={{
              rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
            }}
          >
            <Hexagon size={36} style={{ color: theme.colors.accent }} />
          </motion.div>

          <motion.div
            className="absolute -bottom-6 -right-6"
            animate={{
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 1 },
            }}
          >
            <Hexagon size={28} style={{ color: theme.colors.primary }} />
          </motion.div>
        </motion.div>

        {/* Modern divisor */}
        <motion.div
          className="flex items-center justify-center mb-6"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.div
            className="h-[3px] w-20"
            style={{ backgroundColor: theme.colors.accent }}
            animate={{
              background: [theme.colors.accent, theme.colors.primary, theme.colors.accent],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          ></motion.div>
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
            }}
          >
            <Hexagon className="mx-4" style={{ color: theme.colors.accent }} size={32} />
          </motion.div>
          <motion.div
            className="h-[3px] w-20"
            style={{ backgroundColor: theme.colors.accent }}
            animate={{
              background: [theme.colors.accent, theme.colors.primary, theme.colors.accent],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          ></motion.div>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mb-8 uppercase tracking-widest"
          style={{
            color: theme.colors.textSecondary,
            fontFamily: theme.fonts.body,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Tecnologia e estilo em perfeita harmonia. Descubra o futuro dos cuidados masculinos.
        </motion.p>

        {/* Futuristic action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05, rotateY: 5 }} whileTap={{ scale: 0.95 }}>
            <BarbeariaButton variant="primary" size="lg" onClick={onAgendarClick} className="flex items-center gap-2">
              <Zap size={20} />
              AGENDAR AGORA
            </BarbeariaButton>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05, rotateY: -5 }} whileTap={{ scale: 0.95 }}>
            <BarbeariaButton variant="secondary" size="lg" className="flex items-center gap-2">
              <ArrowRight size={20} />
              EXPLORAR
            </BarbeariaButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{
          y: [0, 15, 0],
          opacity: [1, 0.5, 1],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        onClick={onScrollToNext}
      >
        <ChevronDown size={32} style={{ color: theme.colors.accent }} />
      </motion.div>
    </motion.div>
  )
}

export default MasculinoModernoPresentation

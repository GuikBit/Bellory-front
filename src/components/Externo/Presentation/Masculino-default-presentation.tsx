"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Scissors, ChevronDown, Flame, Zap } from "lucide-react"
// import { useIsMobile } from "../../hooks/useIsMobile"
import { themes } from "../../../theme/theme"
// import Logo3D from "../Fragments/Logo3D"
import { BarbeariaButton } from "../../ui"


interface MasculineDefaultPresentationProps {
  onAgendarClick: () => void
  onScrollToNext: () => void
}

const MasculineDefaultPresentation = ({ onAgendarClick, onScrollToNext }: MasculineDefaultPresentationProps) => {
  // const isMobile = useIsMobile()
  const theme = themes.masculine_default

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
      {/* Background with geometric elements */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop"
          alt="background"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

        {/* Geometric overlays */}
        <div className="absolute top-20 right-20 w-32 h-32 opacity-10 rotate-45">
          <div className="w-full h-full border-l-4 border-t-4" style={{ borderColor: theme.colors.primary }}></div>
        </div>
        <div className="absolute bottom-20 left-20 w-24 h-24 opacity-10">
          <div className="w-full h-full border-4" style={{ borderColor: theme.colors.primary }}></div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* <Logo3D scale={isMobile ? 3 : 4} /> */}
        </motion.div>

        {/* Main title with flame effects */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-7xl font-bold uppercase tracking-wider"
            style={{
              color: theme.colors.text,
              fontFamily: theme.fonts.heading,
            }}
            animate={{
              textShadow: [
                `0 0 20px ${theme.colors.primary}40`,
                `0 0 40px ${theme.colors.primary}60`,
                `0 0 20px ${theme.colors.primary}40`,
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            FORÇA & ESTILO
          </motion.h1>

          {/* Flame decorations */}
          <motion.div
            className="absolute -top-4 -right-4"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <Flame size={32} style={{ color: theme.colors.primary }} />
          </motion.div>
        </motion.div>

        {/* Divisor with animated elements */}
        <motion.div
          className="flex items-center justify-center mb-6"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.div
            className="h-[2px] w-16"
            style={{ backgroundColor: theme.colors.primary }}
            animate={{ scaleX: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          ></motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Scissors className="mx-4" style={{ color: theme.colors.primary }} size={28} />
          </motion.div>
          <motion.div
            className="h-[2px] w-16"
            style={{ backgroundColor: theme.colors.primary }}
            animate={{ scaleX: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          ></motion.div>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mb-8 uppercase tracking-wide"
          style={{
            color: theme.colors.textSecondary,
            fontFamily: theme.fonts.body,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Onde a tradição encontra a modernidade. Experimente o poder da transformação masculina.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <BarbeariaButton variant="primary" size="lg" onClick={onAgendarClick} className="flex items-center gap-2">
              <Zap size={20} />
              AGENDE AGORA
            </BarbeariaButton>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <BarbeariaButton variant="secondary" size="lg" className="flex items-center gap-2">
              <Flame size={20} />
              NOSSOS SERVIÇOS
            </BarbeariaButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        onClick={onScrollToNext}
      >
        <ChevronDown size={32} style={{ color: theme.colors.primary }} />
      </motion.div>
    </motion.div>
  )
}

export default MasculineDefaultPresentation

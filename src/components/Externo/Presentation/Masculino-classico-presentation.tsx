"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Scissors, Crown, Calendar } from 'lucide-react'
// import { useIsMobile } from "../../hooks/useIsMobile"
import { themes } from "../../../theme/theme"
// import Logo3D from "../Fragments/Logo3D"
import { BarbeariaButton } from "../../ui"

interface MasculinoClassicoPresentationProps {
  onAgendarClick: () => void
  onScrollToNext: () => void
}

const MasculinoClassicoPresentation = ({ onAgendarClick, onScrollToNext }: MasculinoClassicoPresentationProps) => {
  // const isMobile = useIsMobile()
  const theme = themes.masculinoClassico

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
      {/* Classic elegant background */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop"
          alt="background"
          className="w-full h-full object-cover"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Classic decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 opacity-10"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 4, repeat: Number.POSITIVE_INFINITY },
            }}
          >
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M60 0L78.5 41.5L120 60L78.5 78.5L60 120L41.5 78.5L0 60L41.5 41.5L60 0Z"
                fill={theme.colors.primary}
              />
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-20 left-20 opacity-10"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
          >
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="50" fill={theme.colors.secondary} />
            </svg>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          {/* <Logo3D scale={isMobile ? 3 : 4} /> */}
        </motion.div>

        {/* Classic elegant title */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            style={{
              color: theme.colors.text,
              fontFamily: theme.fonts.heading,
            }}
            animate={{
              textShadow: [
                `0 0 20px ${theme.colors.primary}30`,
                `0 0 40px ${theme.colors.primary}50`,
                `0 0 20px ${theme.colors.primary}30`,
              ],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            Tradição & Elegância
          </motion.h1>

          {/* Crown decoration */}
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, -5, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <Crown size={32} style={{ color: theme.colors.primary }} />
          </motion.div>
        </motion.div>

        {/* Classic divisor */}
        <motion.div
          className="flex items-center justify-center mb-6"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.div
            className="h-px w-20"
            style={{ backgroundColor: theme.colors.secondary }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          ></motion.div>
          <motion.div
            animate={{
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Scissors className="mx-4" style={{ color: theme.colors.primary }} size={24} />
          </motion.div>
          <motion.div
            className="h-px w-20"
            style={{ backgroundColor: theme.colors.secondary }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          ></motion.div>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mb-8 italic"
          style={{
            color: theme.colors.textSecondary,
            fontFamily: theme.fonts.body,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Onde a arte clássica da barbearia encontra a sofisticação moderna. Uma experiência atemporal de cuidado
          masculino.
        </motion.p>

        {/* Classic action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <BarbeariaButton variant="primary" size="lg" onClick={onAgendarClick} className="flex items-center gap-2">
              <Calendar size={20} />
              Agendar Horário
            </BarbeariaButton>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <BarbeariaButton variant="secondary" size="lg" className="flex items-center gap-2">
              <Crown size={20} />
              Nossos Serviços
            </BarbeariaButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Classic scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        onClick={onScrollToNext}
      >
        <ChevronDown size={32} style={{ color: theme.colors.primary }} />
      </motion.div>
    </motion.div>
  )
}

export default MasculinoClassicoPresentation

"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Flower, Heart, Calendar } from "lucide-react"
import { useIsMobile } from "../../hooks/useIsMobile"
import { themes } from "../../theme/theme"
import Logo3D from "../Fragments/Logo3D"
import { BarbeariaButton } from "../ui"

interface FemininoElegantePresentationProps {
  onAgendarClick: () => void
  onScrollToNext: () => void
}

const FemininoElegantePresentation = ({ onAgendarClick, onScrollToNext }: FemininoElegantePresentationProps) => {
  const isMobile = useIsMobile()
  const theme = themes.femininoElegante

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
      style={{ opacity, scale, backgroundColor: theme.colors.accent }}
    >
      {/* Elegant background with soft overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop"
          alt="background"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/40 via-purple-900/30 to-black/50"></div>

        {/* Elegant decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-64 h-64 opacity-10"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 6, repeat: Number.POSITIVE_INFINITY },
            }}
          >
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0ZM50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10Z"
                fill={theme.colors.primary}
              />
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 opacity-10"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              scale: { duration: 8, repeat: Number.POSITIVE_INFINITY },
              rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            }}
          >
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L100 0L50 100L0 0Z" fill={theme.colors.primary} />
            </svg>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ y: -50, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <Logo3D scale={isMobile ? 3 : 4} />
        </motion.div>

        {/* Elegant title with floating elements */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-normal"
            style={{
              color: theme.colors.text,
              fontFamily: theme.fonts.heading,
            }}
            animate={{
              textShadow: [
                `0 0 30px ${theme.colors.primary}40`,
                `0 0 50px ${theme.colors.primary}60`,
                `0 0 30px ${theme.colors.primary}40`,
              ],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
          >
            Beleza & Sofisticação
          </motion.h1>

          {/* Floating flower decorations */}
          <motion.div
            className="absolute -top-6 -left-8"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            <Flower size={28} style={{ color: theme.colors.primary }} />
          </motion.div>

          <motion.div
            className="absolute -bottom-6 -right-8"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -15, 15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          >
            <Heart size={24} style={{ color: theme.colors.primary }} />
          </motion.div>
        </motion.div>

        {/* Elegant divisor */}
        <motion.div
          className="flex items-center justify-center mb-6"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <motion.div
            className="h-px w-16"
            style={{ backgroundColor: theme.colors.primary }}
            animate={{
              background: [
                `linear-gradient(90deg, transparent, ${theme.colors.primary}, transparent)`,
                `linear-gradient(90deg, ${theme.colors.primary}, transparent, ${theme.colors.primary})`,
                `linear-gradient(90deg, transparent, ${theme.colors.primary}, transparent)`,
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          ></motion.div>
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
            }}
          >
            <Flower className="mx-4" style={{ color: theme.colors.primary }} size={28} />
          </motion.div>
          <motion.div
            className="h-px w-16"
            style={{ backgroundColor: theme.colors.primary }}
            animate={{
              background: [
                `linear-gradient(90deg, transparent, ${theme.colors.primary}, transparent)`,
                `linear-gradient(90deg, ${theme.colors.primary}, transparent, ${theme.colors.primary})`,
                `linear-gradient(90deg, transparent, ${theme.colors.primary}, transparent)`,
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
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
          transition={{ delay: 0.9, duration: 1 }}
        >
          Um santuário de beleza onde cada detalhe é pensado para realçar sua elegância natural. Experimente o cuidado
          que você merece.
        </motion.p>

        {/* Elegant action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <BarbeariaButton variant="primary" size="lg" onClick={onAgendarClick} className="flex items-center gap-2">
              <Calendar size={20} />
              Agendar Horário
            </BarbeariaButton>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <BarbeariaButton variant="secondary" size="lg" className="flex items-center gap-2">
              <Heart size={20} />
              Nossos Tratamentos
            </BarbeariaButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{
          y: [0, 12, 0],
          opacity: [1, 0.6, 1],
        }}
        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
        onClick={onScrollToNext}
      >
        <ChevronDown size={32} style={{ color: theme.colors.primary }} />
      </motion.div>
    </motion.div>
  )
}

export default FemininoElegantePresentation

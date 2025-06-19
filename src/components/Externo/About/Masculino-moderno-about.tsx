"use client"

import { motion } from "framer-motion"
import { Award, Users, Clock, Hexagon, Zap, ArrowRight } from "lucide-react"
import { themes } from "../../../theme/theme"


const MasculinoModernoAbout = () => {
  const theme = themes.masculinoModerno

  const stats = [
    { icon: Users, value: "5000+", label: "CLIENTES CONECTADOS" },
    { icon: Award, value: "8", label: "ANOS INOVANDO" },
    { icon: Clock, value: "24/7", label: "TECNOLOGIA ATIVA" },
    { icon: Zap, value: "100%", label: "RESULTADOS GARANTIDOS" },
  ]

  return (
    <div className="relative py-20">
      {/* Modern geometric patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L100 0L100 100L0 100L0 0Z" fill={theme.colors.accent} />
            <path d="M20 20L80 20L80 80L20 80L20 20Z" fill={theme.colors.primary} />
            <path d="M40 40L60 40L60 60L40 60L40 40Z" fill={theme.colors.background} />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill={theme.colors.accent} />
            <circle cx="50" cy="50" r="30" fill={theme.colors.primary} />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <motion.div
                className="h-1 w-16"
                style={{ backgroundColor: theme.colors.accent }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              ></motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Hexagon className="mx-3" size={28} style={{ color: theme.colors.accent }} />
              </motion.div>
              <motion.div
                className="h-1 w-16"
                style={{ backgroundColor: theme.colors.accent }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              ></motion.div>
            </div>

            <motion.h2
              className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-6"
              style={{
                color: theme.colors.text,
                fontFamily: theme.fonts.heading,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              SOBRE NÓS
            </motion.h2>

            <motion.p
              className="text-lg mb-6 leading-relaxed"
              style={{
                color: theme.colors.textSecondary,
                fontFamily: theme.fonts.body,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Somos pioneiros na revolução dos cuidados masculinos. Combinamos técnicas tradicionais com tecnologia de
              ponta para criar experiências únicas e resultados extraordinários.
            </motion.p>

            <motion.p
              className="text-lg mb-8 leading-relaxed"
              style={{
                color: theme.colors.textSecondary,
                fontFamily: theme.fonts.body,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Nossa visão é redefinir os padrões da indústria, oferecendo serviços que conectam tradição e inovação em
              um ambiente futurista e sofisticado.
            </motion.p>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.button
                className="px-6 py-3 rounded-lg font-bold uppercase tracking-widest flex items-center gap-2"
                style={{
                  backgroundColor: theme.colors.accent,
                  color: "white",
                  borderRadius: theme.borderRadius.large,
                  fontFamily: theme.fonts.heading,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 10px 25px -5px ${theme.colors.accent}40`,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight size={18} />
                NOSSA TECNOLOGIA
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg"
                style={{
                  backgroundColor: theme.colors.primary,
                  borderRadius: theme.borderRadius.large,
                  outline: `2px solid ${theme.colors.accent}`,
                  outlineOffset: "2px",
                }}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  y: -8,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="flex justify-center mb-4"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                >
                  <stat.icon size={32} style={{ color: theme.colors.accent }} />
                </motion.div>
                <motion.h3
                  className="text-2xl font-bold mb-2"
                  style={{
                    color: theme.colors.accent,
                    fontFamily: theme.fonts.heading,
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5, type: "spring" }}
                >
                  {stat.value}
                </motion.h3>
                <p
                  className="text-sm font-semibold uppercase tracking-widest"
                  style={{
                    color: theme.colors.textSecondary,
                    fontFamily: theme.fonts.body,
                  }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default MasculinoModernoAbout

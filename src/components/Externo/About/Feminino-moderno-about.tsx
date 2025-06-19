"use client"

import { motion } from "framer-motion"
import { Award, Users, Clock, Sparkles, Star, Zap } from "lucide-react"
import { themes } from "../../../theme/theme"


const FemininoModernoAbout = () => {
  const theme = themes.femininoModerno

  const stats = [
    { icon: Users, value: "5000+", label: "Mulheres Empoderadas" },
    { icon: Award, value: "8", label: "Anos Revolucionando" },
    { icon: Clock, value: "24/7", label: "Energia Constante" },
    { icon: Star, value: "100%", label: "Brilho Garantido" },
  ]

  return (
    <div className="relative py-20">
      {/* Modern decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="75" cy="25" r="25" fill={theme.colors.primary} />
            <circle cx="25" cy="75" r="25" fill={theme.colors.secondary} />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100C0 44.7715 44.7715 0 100 0V100H0Z" fill={theme.colors.accent} />
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
                className="h-1 w-16 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              ></motion.div>
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                <Sparkles className="mx-4" size={28} style={{ color: theme.colors.primary }} />
              </motion.div>
              <motion.div
                className="h-1 w-16 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              ></motion.div>
            </div>

            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{
                color: theme.colors.text,
                fontFamily: theme.fonts.heading,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Sobre Nós
            </motion.h2>

            <motion.p
              className="text-lg mb-6 leading-relaxed font-bold"
              style={{
                color: theme.colors.textSecondary,
                fontFamily: theme.fonts.body,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Somos revolucionárias da beleza moderna! Combinamos técnicas inovadoras com energia vibrante para criar
              experiências que fazem cada mulher brilhar com sua própria luz única.
            </motion.p>

            <motion.p
              className="text-lg mb-8 leading-relaxed font-bold"
              style={{
                color: theme.colors.textSecondary,
                fontFamily: theme.fonts.body,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Nossa missão é empoderar mulheres através da beleza autêntica, oferecendo tratamentos que celebram a
              individualidade e despertam a confiança interior de cada cliente.
            </motion.p>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.button
                className="px-6 py-3 rounded-lg font-bold flex items-center gap-2"
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                  color: "white",
                  borderRadius: theme.borderRadius.large,
                  fontFamily: theme.fonts.heading,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 15px 30px -10px ${theme.colors.primary}50`,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap size={18} />
                Nossa Energia
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
                  background: `linear-gradient(135deg, ${theme.colors.cardBackground}, ${theme.colors.accent}20)`,
                  borderRadius: theme.borderRadius.large,
                  boxShadow: `0 20px 40px -15px ${theme.colors.primary}30`,
                }}
                initial={{ opacity: 0, y: 30, rotateY: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  boxShadow: `0 25px 50px -15px ${theme.colors.primary}40`,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="flex justify-center mb-4"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                    rotate: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    delay: index * 0.3,
                  }}
                >
                  <stat.icon size={32} style={{ color: theme.colors.primary }} />
                </motion.div>
                <motion.h3
                  className="text-2xl font-bold mb-2"
                  style={{
                    color: theme.colors.primary,
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
                  className="text-sm font-bold"
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

export default FemininoModernoAbout

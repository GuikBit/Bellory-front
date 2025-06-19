"use client"

import { motion } from "framer-motion"
import { Award, Users, Clock, Scissors, Crown, Calendar } from "lucide-react"
import { themes } from "../../../theme/theme"


const MasculinoClassicoAbout = () => {
  const theme = themes.masculinoClassico

  const stats = [
    { icon: Users, value: "5000+", label: "Cavalheiros Atendidos" },
    { icon: Award, value: "8", label: "Anos de Tradição" },
    { icon: Clock, value: "24/7", label: "Compromisso Total" },
    { icon: Crown, value: "100%", label: "Excelência Garantida" },
  ]

  return (
    <div className="relative py-20">
      {/* Classic decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 opacity-5">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M60 0L78.5 41.5L120 60L78.5 78.5L60 120L41.5 78.5L0 60L41.5 41.5L60 0Z"
              fill={theme.colors.primary}
            />
          </svg>
        </div>
        <div className="absolute bottom-10 left-10 opacity-5">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill={theme.colors.secondary} />
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
            transition={{ duration: 1 }}
          >
            <div className="flex items-center mb-6">
              <motion.div
                className="h-px w-20"
                style={{ backgroundColor: theme.colors.secondary }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              ></motion.div>
              <motion.div
                animate={{
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Scissors className="mx-4" size={24} style={{ color: theme.colors.primary }} />
              </motion.div>
              <motion.div
                className="h-px w-20"
                style={{ backgroundColor: theme.colors.secondary }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              ></motion.div>
            </div>

            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{
                color: theme.colors.primary,
                fontFamily: theme.fonts.heading,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Sobre Nós
            </motion.h2>

            <motion.p
              className="text-lg mb-6 leading-relaxed italic"
              style={{
                color: theme.colors.textSecondary,
                fontFamily: theme.fonts.body,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Somos guardiões da tradição clássica da barbearia, onde cada corte é uma obra de arte e cada cliente é
              tratado como um verdadeiro cavalheiro. Nossa paixão pela excelência transcende gerações.
            </motion.p>

            <motion.p
              className="text-lg mb-8 leading-relaxed italic"
              style={{
                color: theme.colors.textSecondary,
                fontFamily: theme.fonts.body,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Nosso compromisso é preservar a elegância atemporal e a sofisticação que definem o verdadeiro gentleman,
              oferecendo uma experiência única de cuidado e distinção.
            </motion.p>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                className="px-6 py-3 rounded-md font-medium flex items-center gap-2 border"
                style={{
                  backgroundColor: theme.colors.primary,
                  color: "white",
                  borderColor: theme.colors.primary,
                  borderRadius: theme.borderRadius.medium,
                  fontFamily: theme.fonts.heading,
                }}
                whileHover={{
                  backgroundColor: "transparent",
                  color: theme.colors.primary,
                  borderColor: theme.colors.primary,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar size={18} />
                Nossa História
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg border-2"
                style={{
                  backgroundColor: theme.colors.cardBackground,
                  borderColor: theme.colors.secondary,
                  borderRadius: theme.borderRadius.medium,
                  boxShadow: `0 10px 25px -5px rgba(0,0,0,0.1)`,
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                whileHover={{
                  y: -5,
                  borderColor: theme.colors.primary,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="flex justify-center mb-4"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.7,
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
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.6, type: "spring" }}
                >
                  {stat.value}
                </motion.h3>
                <p
                  className="text-sm font-medium"
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

export default MasculinoClassicoAbout

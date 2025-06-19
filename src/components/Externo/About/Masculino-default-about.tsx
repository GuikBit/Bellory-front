"use client"

import { motion } from "framer-motion"
import { Award, Users, Clock, Flame, Target, Zap } from "lucide-react"
import { themes } from "../../../theme/theme"


const MasculineDefaultAbout = () => {
  const theme = themes.masculine_default

  const stats = [
    { icon: Users, value: "5000+", label: "CLIENTES ATENDIDOS" },
    { icon: Award, value: "8", label: "ANOS DE EXPERIÊNCIA" },
    { icon: Clock, value: "24/7", label: "SUPORTE DISPONÍVEL" },
    { icon: Target, value: "100%", label: "SATISFAÇÃO GARANTIDA" },
  ]

  return (
    <div className="relative py-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 opacity-5 rotate-45">
          <div className="w-full h-full border-l-4 border-t-4" style={{ borderColor: theme.colors.primary }}></div>
        </div>
        <div className="absolute bottom-10 left-10 w-40 h-40 opacity-5">
          <div className="w-full h-full border-4" style={{ borderColor: theme.colors.primary }}></div>
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
                className="h-1 w-12"
                style={{ backgroundColor: theme.colors.primary }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              ></motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Flame className="mx-3" size={24} style={{ color: theme.colors.primary }} />
              </motion.div>
              <motion.div
                className="h-1 w-12"
                style={{ backgroundColor: theme.colors.primary }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              ></motion.div>
            </div>

            <motion.h2
              className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6"
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
              Somos mais que uma barbearia - somos um templo da masculinidade moderna. Com anos de experiência e paixão
              pelo que fazemos, transformamos cada visita em uma experiência única de cuidado e estilo.
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
              Nossa missão é despertar a confiança e o poder que existe em cada homem, através de serviços de excelência
              e um ambiente que respira força e determinação.
            </motion.p>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.button
                className="px-6 py-3 rounded font-bold uppercase tracking-wider flex items-center gap-2 border-l-4"
                style={{
                  backgroundColor: theme.colors.primary,
                  color: "white",
                  borderColor: theme.colors.primary,
                  borderRadius: theme.borderRadius.medium,
                  fontFamily: theme.fonts.heading,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap size={18} />
                NOSSA HISTÓRIA
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
                className="text-center p-6 rounded-lg border-l-4"
                style={{
                  backgroundColor: theme.colors.cardBackground,
                  borderColor: theme.colors.primary,
                  borderRadius: theme.borderRadius.medium,
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="flex justify-center mb-4"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
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
                  className="text-sm font-semibold uppercase tracking-wider"
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

export default MasculineDefaultAbout

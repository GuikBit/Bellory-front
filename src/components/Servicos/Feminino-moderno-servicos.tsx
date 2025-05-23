"use client"

import { motion } from "framer-motion"
import { Sparkles, Star } from "lucide-react"
import { themes } from "../../theme/theme"

const list = [
  {
    id: "1001",
    title: "Corte",
    image:
      "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Corte moderno e personalizado para o formato do seu rosto. Estilo, elegância e confiança em cada detalhe.",
    price: 50.0,
  },
  {
    id: "1002",
    title: "Coloração",
    image:
      "https://images.unsplash.com/photo-1599351431618-317f6a5f9a6b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Coloração profissional com produtos premium. Realce sua beleza com cores vibrantes e duradouras.",
    price: 80.0,
  },
  {
    id: "1003",
    title: "Tratamento",
    image:
      "https://s1-unimed-dev.us-southeast-1.linodeobjects.com/images/products/seller_143/Modelagem-e-design-de-sobrancelha-masculina_cfac09e2_7d31_40ce_97ab_629fd41641a0.webp",
    description: "Tratamentos capilares intensivos para nutrição, hidratação e reparação dos fios.",
    price: 65.0,
  },
  {
    id: "1004",
    title: "Penteado",
    image: "https://www.lamafiabarbearia.com.br//wp-content/uploads/2022/08/bg-box-pigmentacao-barba.jpg",
    description: "Penteados elegantes para ocasiões especiais. Sofisticação e charme em cada detalhe.",
    price: 45.0,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
  show: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const FemininoModernoServicos = () => {
  const theme = themes.femininoModerno

  return (
    <div className="relative">
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

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {list.map((service, index) => (
          <motion.div
            key={service.id}
            variants={item}
            whileHover={{
              y: -15,
              rotateY: 5,
              transition: { duration: 0.3 },
            }}
            className="rounded-lg overflow-hidden shadow-lg relative"
            style={{
              background: `linear-gradient(135deg, ${theme.colors.cardBackground}, ${theme.colors.accent}20)`,
              borderRadius: theme.borderRadius.large,
              boxShadow: `0 20px 40px -15px ${theme.colors.primary}30`,
            }}
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              {/* Animated sparkles */}
              <motion.div
                className="absolute top-4 right-4"
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              >
                <Sparkles size={24} style={{ color: theme.colors.primary }} />
              </motion.div>

              {/* Gradient overlay with service number */}
              <div
                className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                  color: "white",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: theme.fonts.heading }}>
                  {service.title}
                </h3>
                <p className="font-bold" style={{ color: theme.colors.primary }}>
                  R$ {service.price.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="p-4">
              <p
                className="text-sm mb-4"
                style={{
                  color: theme.colors.textSecondary,
                  fontFamily: theme.fonts.body,
                }}
              >
                {service.description}
              </p>

              <motion.button
                className="w-full py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 font-bold"
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                  color: "white",
                  borderRadius: theme.borderRadius.large,
                  fontFamily: theme.fonts.heading,
                }}
                whileTap={{ scale: 0.95 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 15px 30px -10px ${theme.colors.primary}50`,
                }}
              >
                <Star size={16} />
                AGENDAR
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default FemininoModernoServicos

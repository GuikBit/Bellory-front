"use client"

import { motion } from "framer-motion"
import { Flower, Heart } from "lucide-react"
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
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const FemininoEleganteServicos = () => {
  const theme = themes.femininoElegante

  return (
    <div className="relative" style={{ backgroundColor: theme.colors.accent }}>
      {/* Elegant decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0ZM50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10Z"
              fill={theme.colors.primary}
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L100 0L50 100L0 0Z" fill={theme.colors.primary} />
          </svg>
        </div>
      </div>

      <div className="py-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {list.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              whileHover={{
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="rounded-lg overflow-hidden shadow-lg border"
              style={{
                backgroundColor: theme.colors.cardBackground,
                borderColor: theme.colors.primary,
                borderRadius: theme.borderRadius.large,
                boxShadow: `0 15px 30px -10px rgba(176, 141, 154, 0.2)`,
              }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* Floating flower decoration */}
                <motion.div
                  className="absolute top-4 right-4"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Flower size={24} style={{ color: theme.colors.primary }} />
                </motion.div>

                {/* Elegant corner decoration */}
                <div className="absolute top-0 left-0 w-16 h-16">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M0,0 L100,0 L0,100 Z" fill={theme.colors.primary} opacity="0.3" />
                  </svg>
                </div>

                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-semibold text-white mb-1" style={{ fontFamily: theme.fonts.heading }}>
                    {service.title}
                  </h3>
                  <p className="font-semibold" style={{ color: theme.colors.primary }}>
                    R$ {service.price.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="p-4">
                <p
                  className="text-sm mb-4 italic"
                  style={{
                    color: theme.colors.textSecondary,
                    fontFamily: theme.fonts.body,
                  }}
                >
                  {service.description}
                </p>

                <motion.button
                  className="w-full py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 font-medium border"
                  style={{
                    backgroundColor: `${theme.colors.primary}10`,
                    color: theme.colors.primary,
                    borderColor: theme.colors.primary,
                    borderRadius: theme.borderRadius.medium,
                    fontFamily: theme.fonts.heading,
                  }}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{
                    backgroundColor: theme.colors.primary,
                    color: "white",
                    boxShadow: `0 10px 25px -5px ${theme.colors.primary}30`,
                  }}
                >
                  <Heart size={16} />
                  Agendar
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default FemininoEleganteServicos

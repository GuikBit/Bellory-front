"use client"

import { motion } from "framer-motion"
import { Hexagon, Zap } from "lucide-react"
import { themes } from "../../../theme/theme"

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
    title: "Barba",
    image:
      "https://images.unsplash.com/photo-1599351431618-317f6a5f9a6b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Barba feita com navalha, toalha quente e hidratação. Realce seu visual com cuidado profissional.",
    price: 25.0,
  },
  {
    id: "1003",
    title: "Sobrancelha",
    image:
      "https://s1-unimed-dev.us-southeast-1.linodeobjects.com/images/products/seller_143/Modelagem-e-design-de-sobrancelha-masculina_cfac09e2_7d31_40ce_97ab_629fd41641a0.webp",
    description: "Remoção dos excessos de pelos para uma aparência limpa e natural, sem exageros.",
    price: 17.0,
  },
  {
    id: "1004",
    title: "Pigmentação de Barba",
    image: "https://www.lamafiabarbearia.com.br//wp-content/uploads/2022/08/bg-box-pigmentacao-barba.jpg",
    description: "Cobertura de falhas e fios brancos com técnica artesanal. Efeito natural e visual renovado.",
    price: 13.0,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
}

const MasculinoModernoServicos = () => {
  const theme = themes.masculinoModerno

  return (
    <div className="relative">
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
              backgroundColor: theme.colors.primary,
              borderRadius: theme.borderRadius.large,
              outline: `2px solid ${theme.colors.accent}`,
              outlineOffset: "2px",
            }}
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

              {/* Hexagon pattern overlay */}
              <div className="absolute top-4 right-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Hexagon size={24} style={{ color: theme.colors.accent }} />
                </motion.div>
              </div>

              {/* Service number */}
              <div
                className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                style={{
                  backgroundColor: theme.colors.accent,
                  color: "white",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="absolute bottom-0 left-0 p-4">
                <h3
                  className="text-xl font-bold text-white mb-1 uppercase tracking-wider"
                  style={{ fontFamily: theme.fonts.heading }}
                >
                  {service.title}
                </h3>
                <p className="font-semibold" style={{ color: theme.colors.accent }}>
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
                className="w-full py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 font-semibold uppercase tracking-wider"
                style={{
                  backgroundColor: theme.colors.accent,
                  color: "white",
                  borderRadius: theme.borderRadius.medium,
                  fontFamily: theme.fonts.heading,
                }}
                whileTap={{ scale: 0.95 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 10px 25px -5px ${theme.colors.accent}40`,
                }}
              >
                <Zap size={16} />
                AGENDAR AGORA
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default MasculinoModernoServicos

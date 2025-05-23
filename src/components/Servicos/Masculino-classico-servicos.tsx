"use client"

import { motion } from "framer-motion"
import { Calendar, Crown } from "lucide-react"
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
      staggerChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

const MasculinoClassicoServicos = () => {
  const theme = themes.masculinoClassico

  return (
    <div className="relative">
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
              y: -8,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className="rounded-lg overflow-hidden shadow-lg border-2"
            style={{
              backgroundColor: theme.colors.cardBackground,
              borderColor: theme.colors.secondary,
              borderRadius: theme.borderRadius.medium,
              boxShadow: `0 10px 25px -5px rgba(0,0,0,0.1)`,
            }}
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>

              {/* Crown icon for premium feel */}
              <div className="absolute top-4 right-4">
                <Crown size={24} style={{ color: theme.colors.primary }} />
              </div>

              {/* Elegant frame border */}
              <div
                className="absolute inset-4 border-2 opacity-30"
                style={{
                  borderColor: theme.colors.primary,
                  borderRadius: theme.borderRadius.small,
                }}
              ></div>

              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: theme.fonts.heading }}>
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
                className="w-full py-2 rounded-md flex items-center justify-center gap-2 transition-all duration-300 font-medium border"
                style={{
                  backgroundColor: theme.colors.primary,
                  color: "white",
                  borderColor: theme.colors.primary,
                  borderRadius: theme.borderRadius.small,
                  fontFamily: theme.fonts.heading,
                }}
                whileTap={{ scale: 0.95 }}
                whileHover={{
                  backgroundColor: "transparent",
                  color: theme.colors.primary,
                  borderColor: theme.colors.primary,
                }}
              >
                <Calendar size={16} />
                Agendar Serviço
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default MasculinoClassicoServicos

"use client"

import { motion } from "framer-motion"
import { Flame, Calendar } from "lucide-react"
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
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const MasculineDefaultServicos = () => {
  const theme = themes.masculine_default

  return (
    <div className="relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 opacity-5 rotate-45">
          <div className="w-full h-full border-l-4 border-t-4" style={{ borderColor: theme.colors.primary }}></div>
        </div>
        <div className="absolute bottom-10 left-10 w-40 h-40 opacity-5">
          <div className="w-full h-full border-4" style={{ borderColor: theme.colors.primary }}></div>
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
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="rounded-lg overflow-hidden shadow-lg border-l-4"
            style={{
              backgroundColor: theme.colors.cardBackground,
              borderColor: theme.colors.primary,
              borderRadius: theme.borderRadius.medium,
            }}
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              {/* Flame icon overlay */}
              <div className="absolute top-4 right-4">
                <Flame size={24} style={{ color: theme.colors.primary }} />
              </div>

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
                className="text-sm mb-4"
                style={{
                  color: theme.colors.textSecondary,
                  fontFamily: theme.fonts.body,
                }}
              >
                {service.description}
              </p>

              <motion.button
                className="w-full py-2 rounded flex items-center justify-center gap-2 transition-colors duration-300 font-semibold uppercase tracking-wider"
                style={{
                  backgroundColor: theme.colors.primary,
                  color: "white",
                  borderRadius: theme.borderRadius.small,
                  fontFamily: theme.fonts.heading,
                }}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
              >
                <Calendar size={16} />
                AGENDAR
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default MasculineDefaultServicos

"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, MessageSquare, Flame } from "lucide-react"
import { themes } from "../../../theme/theme"


const testimonialsData = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "Cliente desde 2020",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "Melhor barbearia da cidade! O atendimento é impecável e o resultado sempre supera minhas expectativas. Recomendo a todos que buscam qualidade e profissionalismo.",
    rating: 5,
  },
  {
    id: 2,
    name: "André Martins",
    role: "Cliente desde 2019",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    content:
      "Ambiente agradável e barbeiros extremamente habilidosos. Meu corte e barba nunca ficaram tão bons. Vale cada centavo!",
    rating: 5,
  },
  {
    id: 3,
    name: "Rodrigo Alves",
    role: "Cliente desde 2021",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    content:
      "Atendimento de primeira, ambiente confortável e resultado excelente. Já virei cliente fiel e sempre saio satisfeito.",
    rating: 4,
  },
  {
    id: 4,
    name: "Lucas Ferreira",
    role: "Cliente desde 2022",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    content:
      "Profissionais altamente qualificados e atenciosos. O ambiente é muito agradável e o resultado sempre fica perfeito.",
    rating: 5,
  },
]

const MasculineDefaultFeedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const theme = themes.masculine_default

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={18}
        className={`${index < rating ? "fill-current" : ""}`}
        style={{
          color: index < rating ? theme.colors.primary : theme.colors.textSecondary,
        }}
      />
    ))
  }

  const currentTestimonial = testimonialsData[currentIndex]

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: theme.colors.background }}>
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 opacity-5 rotate-45">
          <div className="w-full h-full border-l-4 border-t-4" style={{ borderColor: theme.colors.primary }}></div>
        </div>
        <div className="absolute bottom-10 left-10 w-40 h-40 opacity-5">
          <div className="w-full h-full border-4" style={{ borderColor: theme.colors.primary }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2
            className="text-3xl font-bold uppercase tracking-wider mb-2"
            style={{
              color: theme.colors.text,
              fontFamily: theme.fonts.heading,
            }}
          >
            DEPOIMENTOS
          </h2>
          <div className="flex items-center gap-3">
            <div className="h-0.5 w-12" style={{ backgroundColor: theme.colors.primary }}></div>
            <Flame size={20} style={{ color: theme.colors.primary }} />
            <div className="h-0.5 w-12" style={{ backgroundColor: theme.colors.primary }}></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="relative p-8 rounded-none border-l-4"
              style={{
                backgroundColor: theme.colors.cardBackground,
                borderColor: theme.colors.primary,
              }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <MessageSquare
                size={32}
                className="absolute -top-3 -left-3 opacity-20"
                style={{ color: theme.colors.primary }}
              />

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 -m-2"
                    style={{
                      backgroundColor: theme.colors.primary,
                      borderRadius: theme.borderRadius.medium,
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  ></motion.div>
                  <motion.img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-24 h-24 object-cover relative z-10"
                    style={{
                      borderRadius: theme.borderRadius.medium,
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {renderStars(currentTestimonial.rating)}
                  </div>

                  <p
                    className="text-lg mb-6 leading-relaxed"
                    style={{
                      color: theme.colors.text,
                      fontFamily: theme.fonts.body,
                    }}
                  >
                    "{currentTestimonial.content}"
                  </p>

                  <div>
                    <h4
                      className="font-bold text-xl"
                      style={{ color: theme.colors.primary, fontFamily: theme.fonts.heading }}
                    >
                      {currentTestimonial.name}
                    </h4>
                    <p style={{ color: theme.colors.textSecondary, fontFamily: theme.fonts.body }}>
                      {currentTestimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              className="p-2 transition-all duration-300 hover:scale-110"
              onClick={prevTestimonial}
              aria-label="Depoimento anterior"
              style={{
                backgroundColor: theme.colors.cardBackgroundSecondary,
                color: theme.colors.primary,
                borderRadius: theme.borderRadius.medium,
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex items-center gap-3">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="w-3 h-3 transition-all duration-300 transform focus:outline-none"
                  style={{
                    backgroundColor:
                      index === currentIndex ? theme.colors.primary : theme.colors.cardBackgroundSecondary,
                    transform: index === currentIndex ? "scale(1.2)" : "scale(1)",
                  }}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="p-2 transition-all duration-300 hover:scale-110"
              onClick={nextTestimonial}
              aria-label="Próximo depoimento"
              style={{
                backgroundColor: theme.colors.cardBackgroundSecondary,
                color: theme.colors.primary,
                borderRadius: theme.borderRadius.medium,
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MasculineDefaultFeedback

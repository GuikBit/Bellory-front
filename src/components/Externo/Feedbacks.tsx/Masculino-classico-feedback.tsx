"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote, Scissors } from "lucide-react"
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

const MasculinoClassicoFeedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const theme = themes.masculinoClassico

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
        size={16}
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
      {/* Classic decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
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
        <div className="flex flex-col items-center mb-16">
          <h2
            className="text-3xl font-bold mb-3"
            style={{
              color: theme.colors.primary,
              fontFamily: theme.fonts.heading,
            }}
          >
            Depoimentos
          </h2>
          <div className="flex items-center gap-3">
            <div className="h-px w-16" style={{ backgroundColor: theme.colors.secondary }}></div>
            <Scissors size={18} style={{ color: theme.colors.primary }} />
            <div className="h-px w-16" style={{ backgroundColor: theme.colors.secondary }}></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="relative p-8 border-2"
              style={{
                backgroundColor: theme.colors.cardBackground,
                borderColor: theme.colors.secondary,
                borderRadius: theme.borderRadius.medium,
                boxShadow: `0 10px 25px -5px rgba(0,0,0,0.05)`,
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Quote size={40} className="absolute top-4 right-4 opacity-10" style={{ color: theme.colors.primary }} />

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 -m-2 rounded-full"
                    style={{
                      backgroundColor: theme.colors.secondary,
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.2 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  ></motion.div>
                  <motion.img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-24 h-24 object-cover relative z-10 rounded-full border-2"
                    style={{
                      borderColor: theme.colors.primary,
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
                    className="text-lg mb-6 leading-relaxed italic"
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

          {/* Navigation Controls - Classic Style */}
          <div className="flex justify-center items-center mt-10 gap-6">
            <button
              className="p-2 transition-all duration-300 hover:bg-opacity-10 border"
              onClick={prevTestimonial}
              aria-label="Depoimento anterior"
              style={{
                borderColor: theme.colors.primary,
                color: theme.colors.primary,
                borderRadius: theme.borderRadius.small,
                backgroundColor: `${theme.colors.primary}00`,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = `${theme.colors.primary}10`
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = `${theme.colors.primary}00`
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="w-2.5 h-2.5 rounded-full transition-all duration-300 transform focus:outline-none border"
                  style={{
                    backgroundColor: index === currentIndex ? theme.colors.primary : "transparent",
                    borderColor: theme.colors.primary,
                    transform: index === currentIndex ? "scale(1.2)" : "scale(1)",
                  }}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="p-2 transition-all duration-300 hover:bg-opacity-10 border"
              onClick={nextTestimonial}
              aria-label="Próximo depoimento"
              style={{
                borderColor: theme.colors.primary,
                color: theme.colors.primary,
                borderRadius: theme.borderRadius.small,
                backgroundColor: `${theme.colors.primary}00`,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = `${theme.colors.primary}10`
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = `${theme.colors.primary}00`
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MasculinoClassicoFeedback

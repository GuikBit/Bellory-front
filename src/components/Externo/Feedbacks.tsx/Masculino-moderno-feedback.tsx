"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote, Hexagon } from "lucide-react"
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

const MasculinoModernoFeedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const theme = themes.masculinoModerno

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
          color: index < rating ? theme.colors.accent : theme.colors.textSecondary,
        }}
      />
    ))
  }

  const currentTestimonial = testimonialsData[currentIndex]

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: theme.colors.background }}>
      {/* Modern geometric patterns */}
      <div className="absolute inset-0 overflow-hidden">
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

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2
            className="text-3xl font-bold uppercase tracking-widest mb-3"
            style={{
              color: theme.colors.text,
              fontFamily: theme.fonts.heading,
            }}
          >
            FEEDBACK
          </h2>
          <div className="flex items-center">
            <div className="h-0.5 w-12" style={{ backgroundColor: theme.colors.accent }}></div>
            <Hexagon size={18} className="mx-2" style={{ color: theme.colors.accent }} />
            <div className="h-0.5 w-12" style={{ backgroundColor: theme.colors.accent }}></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="relative p-8"
              style={{
                backgroundColor: theme.colors.primary,
                borderRadius: theme.borderRadius.large,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Quote size={40} className="absolute top-4 left-4 opacity-10" style={{ color: theme.colors.text }} />

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 -m-1"
                    style={{
                      background: `linear-gradient(135deg, ${theme.colors.accent}, transparent)`,
                      borderRadius: theme.borderRadius.medium,
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.7 }}
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
                      style={{ color: theme.colors.accent, fontFamily: theme.fonts.heading }}
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

          {/* Navigation Controls - Modern Minimal Style */}
          <div className="flex justify-center items-center mt-10 gap-6">
            <button
              className="p-2 transition-all duration-300 hover:scale-110 border border-transparent hover:border-current"
              onClick={prevTestimonial}
              aria-label="Depoimento anterior"
              style={{
                color: theme.colors.accent,
                borderRadius: theme.borderRadius.small,
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex items-center gap-3">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="w-8 h-1 transition-all duration-300 transform focus:outline-none"
                  style={{
                    backgroundColor: index === currentIndex ? theme.colors.accent : theme.colors.secondary,
                    transform: index === currentIndex ? "scaleX(1.5)" : "scaleX(1)",
                  }}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="p-2 transition-all duration-300 hover:scale-110 border border-transparent hover:border-current"
              onClick={nextTestimonial}
              aria-label="Próximo depoimento"
              style={{
                color: theme.colors.accent,
                borderRadius: theme.borderRadius.small,
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

export default MasculinoModernoFeedback

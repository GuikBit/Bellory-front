"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Heart, Sparkles } from "lucide-react"
import { themes } from "../../../theme/theme"


const testimonialsData = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Cliente desde 2020",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    content:
      "Atendimento impecável e produtos de altíssima qualidade. Sempre saio satisfeita e com a autoestima renovada. Recomendo a todas as minhas amigas!",
    rating: 5,
  },
  {
    id: 2,
    name: "Mariana Costa",
    role: "Cliente desde 2019",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    content:
      "Ambiente acolhedor e profissionais extremamente qualificados. Os tratamentos são divinos e os resultados superam as expectativas.",
    rating: 5,
  },
  {
    id: 3,
    name: "Juliana Mendes",
    role: "Cliente desde 2021",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    content:
      "Experiência sensacional! O atendimento personalizado faz toda a diferença. Já virei cliente fiel e sempre indico para quem busca qualidade.",
    rating: 4,
  },
  {
    id: 4,
    name: "Camila Ferreira",
    role: "Cliente desde 2022",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    content:
      "Profissionais atenciosos e ambiente sofisticado. Cada visita é um momento de autocuidado e renovação. Simplesmente amo!",
    rating: 5,
  },
]

const FemininoModernoFeedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const theme = themes.femininoModerno

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
      {/* Modern decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
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

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2
            className="text-3xl font-bold mb-3"
            style={{
              color: theme.colors.text,
              fontFamily: theme.fonts.heading,
            }}
          >
            Depoimentos
          </h2>
          <div className="flex items-center gap-3">
            <div className="h-0.5 w-12" style={{ backgroundColor: theme.colors.primary }}></div>
            <Sparkles size={18} style={{ color: theme.colors.primary }} />
            <div className="h-0.5 w-12" style={{ backgroundColor: theme.colors.primary }}></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="relative p-8"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.cardBackground}, ${theme.colors.accent}20)`,
                borderRadius: theme.borderRadius.large,
                boxShadow: `0 20px 40px -15px rgba(255, 105, 180, 0.15)`,
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Heart
                size={32}
                className="absolute -top-3 -right-3 text-pink-400"
                fill={theme.colors.primary}
                style={{ color: theme.colors.primary }}
              />

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 -m-3"
                    style={{
                      background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                      borderRadius: theme.borderRadius.large,
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
                      borderRadius: theme.borderRadius.large,
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

          {/* Navigation Controls - Modern Vibrant Style */}
          <div className="flex justify-center items-center mt-10 gap-6">
            <button
              className="p-3 transition-all duration-300 hover:scale-110"
              onClick={prevTestimonial}
              aria-label="Depoimento anterior"
              style={{
                backgroundColor: theme.colors.primary,
                color: theme.colors.buttonText,
                borderRadius: theme.borderRadius.large,
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-3">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="w-3 h-3 transition-all duration-300 transform focus:outline-none"
                  style={{
                    backgroundColor: index === currentIndex ? theme.colors.primary : theme.colors.secondary,
                    borderRadius: theme.borderRadius.large,
                    transform: index === currentIndex ? "scale(1.2)" : "scale(1)",
                  }}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="p-3 transition-all duration-300 hover:scale-110"
              onClick={nextTestimonial}
              aria-label="Próximo depoimento"
              style={{
                backgroundColor: theme.colors.primary,
                color: theme.colors.buttonText,
                borderRadius: theme.borderRadius.large,
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

export default FemininoModernoFeedback

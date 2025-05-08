"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Scissors } from "lucide-react"

const testimonials = [
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

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star key={index} size={18} className={`${index < rating ? "text-amber-500 fill-amber-500" : "text-gray-400"}`} />
    ))
  }

  return (
    <section className="py-20 bg-neutral-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-amber-600/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center justify-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">O QUE NOSSOS CLIENTES DIZEM</h2>
          <div className="flex items-center justify-center mb-4">
            <div className="h-[1px] w-12 bg-amber-500"></div>
            <Scissors className="mx-4 text-amber-500" size={20} />
            <div className="h-[1px] w-12 bg-amber-500"></div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-800 rounded-lg p-8 shadow-lg relative z-10"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-amber-500"
                />
              </div>

              <div className="flex-1">
                <div className="flex mb-2">{renderStars(testimonials[currentIndex].rating)}</div>

                <p className="text-gray-300 text-lg italic mb-6">"{testimonials[currentIndex].content}"</p>

                <div>
                  <h4 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-amber-500">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-neutral-800 hover:bg-amber-600 text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-amber-500" : "bg-neutral-700"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-neutral-800 hover:bg-amber-600 text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feedback

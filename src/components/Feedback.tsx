// src/components/Feedback.tsx
"use client"

import { useState } from "react"
import { AnimatePresence, motion }
from "framer-motion"
import { Star, ChevronLeft, ChevronRight, MessageSquare, UserCheck, Heart } from "lucide-react" // Adicionando ícones
import { useTheme } from "../contexts/Theme-context" // Importar o hook do tema
import { BarbeariaTitle, BarbeariaButton } from "./ui" // Seus componentes de UI

const testimonialsData = [ // Renomeado para evitar conflito se importado em outro lugar
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
];

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { currentTheme } = useTheme(); // Acessar o tema atual

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={18}
        className={`${index < rating ? 'fill-current' : ''}`}
        style={{
          color: index < rating ? currentTheme.colors.primary : currentTheme.colors.textSecondary, // Cor da estrela baseada no tema
        }}
      />
    ));
  };

  // --- Elementos decorativos específicos do tema ---
  const renderThemeSpecificDecoration = () => {
    switch (currentTheme.type) {
      case 'masculino': // Para 'masculine_default', 'masculinoModerno', 'masculinoClassico'
        return (
          <MessageSquare // Ícone de "balão de fala" para temas masculinos
            size={32}
            className="absolute -top-3 -left-3 opacity-20"
            style={{ color: currentTheme.colors.primary }}
          />
        );
      case 'feminino': // Para 'femininoElegante', 'femininoModerno'
        return (
          <Heart // Ícone de coração para temas femininos
            size={32}
            className="absolute -top-3 -right-3 opacity-30"
            style={{ color: currentTheme.colors.primary }}
          />
        );
      default: // Para 'masculine_default' ou qualquer outro
        return (
          <UserCheck // Ícone genérico de "usuário verificado"
            size={32}
            className="absolute -bottom-3 -right-3 opacity-10"
            style={{ color: currentTheme.colors.textSecondary }}
          />
        );
    }
  };

  const testimonialCardStyles = {
    backgroundColor: currentTheme.colors.cardBackground,
    borderColor: currentTheme.id === 'masculinoClassico' ? currentTheme.colors.secondary : currentTheme.colors.primary,
    borderWidth: currentTheme.id === 'masculinoClassico' ? '2px' : '1px',
    borderRadius: currentTheme.borderRadius.large,
    boxShadow: currentTheme.isDark ? `0 10px 15px -3px ${currentTheme.colors.background}70, 0 4px 6px -2px ${currentTheme.colors.background}50` : `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)`,
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: currentTheme.colors.cardBackgroundSecondary }} // Um fundo levemente diferente para a seção
    >
      {/* Elementos de fundo sutis baseados no tema */}
      <div
        className="absolute top-0 left-0 w-32 h-32 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-10"
        style={{ backgroundColor: currentTheme.colors.primary }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-64 h-64 rounded-full translate-x-1/3 translate-y-1/3 opacity-5"
        style={{ backgroundColor: currentTheme.colors.secondary }}
      ></div>

      <div className="container mx-auto px-4">
        <BarbeariaTitle
          title="O QUE NOSSOS CLIENTES DIZEM"
          // O subtítulo e o divisor de tesoura já são temáticos pelo BarbeariaTitle
        />

        <div className="max-w-3xl mx-auto relative"> {/* Aumentado o max-width para melhor visualização */}
          <AnimatePresence mode="wait"> {/* Usando AnimatePresence para transições suaves */}
            <motion.div
              key={currentIndex} // Chave para o Framer Motion detectar a mudança de item
              className="relative z-10 p-6 md:p-8" // BarbeariaCard já lida com hover
              style={testimonialCardStyles}
              initial={{ opacity: 0, x: currentTheme.type === 'feminino' ? 70 : -70 }} // Direção de entrada diferente por tipo de tema
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: currentTheme.type === 'feminino' ? -70 : 70 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {renderThemeSpecificDecoration()} {/* Elemento decorativo do tema */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <motion.img
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  className="w-20 h-20 md:w-24 md:h-24 object-cover flex-shrink-0" // Imagem um pouco maior
                  style={{
                    borderRadius: currentTheme.id === 'femininoModerno' ? currentTheme.borderRadius.large : '9999px', // Borda diferente para um tema
                    border: `3px solid ${currentTheme.colors.primary}`,
                  }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                />

                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-3">
                    {renderStars(currentTestimonial.rating)}
                  </div>

                  <p
                    className="text-base md:text-lg italic mb-6 leading-relaxed" // Estilo de citação
                    style={{
                      color: currentTheme.colors.textSecondary,
                      fontFamily: currentTheme.fonts.body,
                      fontStyle: currentTheme.id === 'femininoElegante' ? 'italic' : 'normal', // Fonte itálica para um tema
                    }}
                  >
                    "{currentTestimonial.content}"
                  </p>

                  <div>
                    <h4
                      className="font-bold text-lg md:text-xl"
                      style={{ color: currentTheme.colors.text, fontFamily: currentTheme.fonts.heading }}
                    >
                      {currentTestimonial.name}
                    </h4>
                    <p style={{ color: currentTheme.colors.primary, fontFamily: currentTheme.fonts.body }}>
                      {currentTestimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controles de Navegação */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <BarbeariaButton
              variant="outline" // Usa a variante outline que já é temática
              size="sm"
              onClick={prevTestimonial}
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={20} />
            </BarbeariaButton>

            <div className="flex items-center gap-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="w-2.5 h-2.5 rounded-full transition-all duration-300 transform focus:outline-none"
                  style={{
                    backgroundColor: index === currentIndex ? currentTheme.colors.primary : `${currentTheme.colors.textSecondary}50`, // 50% opacity
                    transform: index === currentIndex ? 'scale(1.3)' : 'scale(1)',
                  }}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <BarbeariaButton
              variant="outline" // Usa a variante outline que já é temática
              size="sm"
              onClick={nextTestimonial}
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={20} />
            </BarbeariaButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
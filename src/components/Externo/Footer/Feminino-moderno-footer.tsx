"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Facebook,
  Instagram,
  Phone,
  MapPin,
  Mail,
  Twitter,
  Youtube,
  Heart,
  ArrowRight,
  Calendar,
  Clock,
} from "lucide-react"
import { useTheme } from "../../../global/Theme-context"
// import Logo3D from "../Fragments/Logo3D"


const FemininoModernoFooter = () => {
  const [email, setEmail] = useState("")
  const { currentTheme: theme } = useTheme()

  const socialLinks = [
    { id: "facebook", icon: Facebook, url: "https://facebook.com/suabebearia" },
    { id: "instagram", icon: Instagram, url: "https://instagram.com/suabebearia" },
    { id: "twitter", icon: Twitter, url: "#" },
    { id: "youtube", icon: Youtube, url: "#" },
  ]

  const quickLinks = [
    { name: "Nossos Serviços", url: "#services" },
    { name: "Agendar Horário", url: "#booking" },
    { name: "Planos de Assinatura", url: "#plans" },
    { name: "Produtos", url: "#products" },
    { name: "Sobre Nós", url: "#about" },
    { name: "Blog", url: "#blog" },
    { name: "FAQ", url: "#faq" },
    { name: "Contato", url: "#contact" },
  ]

  // Função para ajustar a cor (escurecer/clarear)
  function adjustColor(color: string, percent: number) {
    // Converter hex para RGB
    let r = Number.parseInt(color.substring(1, 3), 16)
    let g = Number.parseInt(color.substring(3, 5), 16)
    let b = Number.parseInt(color.substring(5, 7), 16)

    // Ajustar valores
    r = Math.max(0, Math.min(255, r + percent))
    g = Math.max(0, Math.min(255, g + percent))
    b = Math.max(0, Math.min(255, b + percent))

    // Converter de volta para hex
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
  }

  return (
    <footer style={{ fontFamily: theme.fonts.body }}>
      <div className="relative overflow-hidden" style={{ backgroundColor: theme.colors.background }}>
        {/* Elementos decorativos */}
        <div
          className="absolute top-0 right-0 w-full h-16 -skew-y-3 transform origin-right"
          style={{ backgroundColor: `${theme.colors.secondary}10` }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-full h-16 skew-y-3 transform origin-left"
          style={{ backgroundColor: `${theme.colors.primary}10` }}
        ></div>

        {/* Formas geométricas decorativas */}
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <div
            className="absolute top-20 left-10 w-24 h-24 rounded-xl rotate-12"
            style={{ backgroundColor: theme.colors.primary }}
          ></div>
          <div
            className="absolute bottom-40 right-10 w-32 h-32 rounded-full"
            style={{ backgroundColor: theme.colors.secondary }}
          ></div>
        </div>

        {/* Seção de newsletter */}
        <div className="container mx-auto px-4 pt-16">
          <div
            className="bg-gradient-to-r rounded-3xl overflow-hidden relative"
            style={{
              backgroundColor: theme.isDark ? `${theme.colors.primary}20` : `${theme.colors.primary}10`,
              borderLeft: `4px solid ${theme.colors.primary}`,
              borderRight: `4px solid ${theme.colors.secondary}`,
            }}
          >
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <div
                className="absolute -right-10 -top-10 w-40 h-40 rounded-full"
                style={{ backgroundColor: theme.colors.primary }}
              ></div>
              <div
                className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full"
                style={{ backgroundColor: theme.colors.secondary }}
              ></div>
            </div>

            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left max-w-md">
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}
                >
                  Fique por dentro das novidades
                </h3>
                <p style={{ color: theme.colors.textSecondary }}>
                  Assine nossa newsletter e receba dicas de beleza, promoções exclusivas e as últimas tendências.
                </p>
              </div>

              <div className="w-full md:w-auto">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-3 rounded-l-full w-full md:w-64 focus:outline-none"
                    style={{
                      backgroundColor: theme.isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                      color: theme.colors.text,
                    }}
                  />
                  <motion.button
                    className="px-5 py-3 rounded-r-full flex items-center justify-center"
                    style={{
                      backgroundColor: theme.colors.primary,
                      color: theme.colors.buttonText,
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="mr-2">Assinar</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Coluna 1: Logo e Descrição */}
            <div className="md:col-span-4">
              <div className="mb-6 flex items-center">
                {/* <Logo3D scale={1.8} /> */}
                <div className="ml-3">
                  <h2
                    className="text-xl font-bold"
                    style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}
                  >
                    BEAUTY<span style={{ color: theme.colors.primary }}>SALON</span>
                  </h2>
                </div>
              </div>

              <p className="mb-6" style={{ color: theme.colors.textSecondary, fontFamily: theme.fonts.body }}>
                Seu espaço de beleza e bem-estar. Combinamos as últimas tendências com atendimento personalizado para
                realçar sua beleza natural. Nossos profissionais são especializados em proporcionar uma experiência
                única e transformadora.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: `${theme.colors.secondary}20`,
                      color: theme.colors.text,
                    }}
                    whileHover={{
                      backgroundColor: theme.colors.primary,
                      color: theme.colors.buttonText,
                      scale: 1.1,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>

              <div className="p-4 rounded-xl" style={{ backgroundColor: `${theme.colors.secondary}15` }}>
                <h4 className="text-base font-medium mb-3 flex items-center" style={{ color: theme.colors.text }}>
                  <Clock size={16} className="mr-2" style={{ color: theme.colors.primary }} />
                  Horário de Funcionamento
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p style={{ color: theme.colors.textSecondary }}>Segunda - Sexta</p>
                    <p style={{ color: theme.colors.text }}>9h - 19h</p>
                  </div>
                  <div>
                    <p style={{ color: theme.colors.textSecondary }}>Sábado</p>
                    <p style={{ color: theme.colors.text }}>9h - 17h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna 2: Links e Contato */}
            <div className="md:col-span-3 md:col-start-6">
              <h3
                className="text-lg font-medium mb-4"
                style={{ color: theme.colors.primary, fontFamily: theme.fonts.heading }}
              >
                Links Rápidos
              </h3>

              <div className="grid grid-cols-2 gap-2 mb-8">
                {quickLinks.map((link, index) => (
                  <motion.div key={index} whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                    <a
                      href={link.url}
                      className="block transition-colors duration-300"
                      style={{ color: theme.colors.textSecondary, fontFamily: theme.fonts.body }}
                    //   whileHover={{ color: theme.colors.primary }}
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))}
              </div>

              <h3
                className="text-lg font-medium mb-4"
                style={{ color: theme.colors.primary, fontFamily: theme.fonts.heading }}
              >
                Contato
              </h3>

              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone
                    size={16}
                    className="mr-3 p-1 rounded-full"
                    style={{ backgroundColor: `${theme.colors.primary}20`, color: theme.colors.primary }}
                  />
                  <span style={{ color: theme.colors.text }}>(11) 99999-9999</span>
                </div>
                <div className="flex items-center">
                  <Mail
                    size={16}
                    className="mr-3 p-1 rounded-full"
                    style={{ backgroundColor: `${theme.colors.primary}20`, color: theme.colors.primary }}
                  />
                  <span style={{ color: theme.colors.text }}>contato@barbearia.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin
                    size={16}
                    className="mr-3 p-1 rounded-full"
                    style={{ backgroundColor: `${theme.colors.primary}20`, color: theme.colors.primary }}
                  />
                  <span style={{ color: theme.colors.text }}>Rua dos Cabelos, 123</span>
                </div>
              </div>
            </div>

            {/* Coluna 3: Agendamento */}
            <div className="md:col-span-5">
              <div
                className="bg-gradient-to-br rounded-2xl p-6 h-full relative overflow-hidden"
                style={{
                  backgroundColor: theme.isDark ? `${theme.colors.secondary}20` : `${theme.colors.secondary}10`,
                }}
              >
                <div className="absolute inset-0 overflow-hidden opacity-10">
                  <div
                    className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full"
                    style={{ backgroundColor: theme.colors.primary }}
                  ></div>
                </div>

                <div className="relative z-10">
                  <h3
                    className="text-xl font-bold mb-4 flex items-center"
                    style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}
                  >
                    <Heart size={18} className="mr-2" style={{ color: theme.colors.primary }} />
                    Agende seu horário
                  </h3>

                  <p className="mb-6" style={{ color: theme.colors.textSecondary }}>
                    Transforme seu visual com nossos serviços especializados. Agende agora e receba um diagnóstico
                    gratuito com nossas especialistas.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-white bg-opacity-10">
                      <h4 className="font-medium mb-1" style={{ color: theme.colors.text }}>
                        Corte & Styling
                      </h4>
                      <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                        A partir de R$ 90
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white bg-opacity-10">
                      <h4 className="font-medium mb-1" style={{ color: theme.colors.text }}>
                        Coloração
                      </h4>
                      <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                        A partir de R$ 150
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white bg-opacity-10">
                      <h4 className="font-medium mb-1" style={{ color: theme.colors.text }}>
                        Tratamentos
                      </h4>
                      <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                        A partir de R$ 120
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white bg-opacity-10">
                      <h4 className="font-medium mb-1" style={{ color: theme.colors.text }}>
                        Maquiagem
                      </h4>
                      <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                        A partir de R$ 180
                      </p>
                    </div>
                  </div>

                  <motion.a
                    href="#booking"
                    className="flex items-center justify-center w-full px-4 py-3 rounded-full transition-colors duration-300"
                    style={{
                      backgroundColor: theme.colors.primary,
                      color: theme.colors.buttonText,
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Calendar size={18} className="mr-2" />
                    <span>Agende seu horário</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>

          {/* Separador */}
          <div className="my-8 relative">
            <div className="h-[2px] w-full" style={{ backgroundColor: `${theme.colors.secondary}20` }}></div>
            <div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: theme.colors.background }}
            >
              <Heart style={{ color: theme.colors.primary }} size={20} />
            </div>
          </div>

          {/* Copyright e Créditos */}
          <div
            className="py-4 text-center rounded-t-3xl mt-8"
            style={{ backgroundColor: theme.colors.secondary, color: theme.isDark ? theme.colors.text : "#fff" }}
          >
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <Heart size={16} style={{ color: theme.colors.primary }} className="mr-2" />
                <span>Feito com amor para você</span>
              </div>

              <p className="text-sm">
                &copy; {new Date().getFullYear()} Barbearia | Desenvolvido por{" "}
                <motion.a
                  href="https://guikbit-portifolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium"
                  style={{ color: theme.colors.primary }}
                  whileHover={{ color: adjustColor(theme.colors.primary, 20) }}
                >
                  GUIKBIT
                </motion.a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FemininoModernoFooter

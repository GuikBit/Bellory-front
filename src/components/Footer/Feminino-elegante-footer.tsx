"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Facebook, Instagram, Phone, MapPin, Mail, Twitter, Heart, Send, ExternalLink, Calendar } from "lucide-react"
import { useTheme } from "../../contexts/Theme-context"
import Logo3D from "../Fragments/Logo3D"


const FemininoEleganteFooter = () => {
  const [email, setEmail] = useState("")
  const { currentTheme: theme } = useTheme()

  const socialLinks = [
    { id: "facebook", icon: Facebook, url: "https://facebook.com/suabebearia" },
    { id: "instagram", icon: Instagram, url: "https://instagram.com/suabebearia" },
    { id: "twitter", icon: Twitter, url: "#" },
    { id: "phone", icon: Phone, url: "tel:+5511999999999" },
  ]

  const quickLinks = [
    { name: "Nossos Serviços", url: "#services" },
    { name: "Agendar Horário", url: "#booking" },
    { name: "Planos de Assinatura", url: "#plans" },
    { name: "Produtos", url: "#products" },
    { name: "Sobre Nós", url: "#about" },
  ]

  const services = [
    "Corte & Styling",
    "Coloração",
    "Tratamentos Capilares",
    "Maquiagem",
    "Manicure & Pedicure",
    "Estética Facial",
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
          className="absolute top-0 left-0 w-full h-[1px]"
          style={{ backgroundColor: `${theme.colors.secondary}30` }}
        ></div>

        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          <div
            className="absolute top-10 right-10 w-32 h-32 rounded-full"
            style={{ backgroundColor: theme.colors.primary }}
          ></div>
          <div
            className="absolute bottom-20 left-20 w-48 h-48 rounded-full"
            style={{ backgroundColor: theme.colors.secondary }}
          ></div>
          <div
            className="absolute top-40 left-1/4 w-3 h-3 rounded-full"
            style={{ backgroundColor: `${theme.colors.primary}30` }}
          ></div>
          <div
            className="absolute bottom-32 right-1/3 w-2 h-2 rounded-full"
            style={{ backgroundColor: `${theme.colors.secondary}40` }}
          ></div>
        </div>

        {/* Seção de newsletter */}
        <div className="container mx-auto px-4 pt-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2
              className="text-2xl md:text-3xl font-serif italic mb-6"
              style={{ color: theme.colors.primary, fontFamily: theme.fonts.heading }}
            >
              Junte-se à nossa comunidade
            </h2>

            <p className="mb-8 italic max-w-2xl mx-auto" style={{ color: theme.colors.textSecondary }}>
              Assine nossa newsletter e receba dicas de beleza, novidades sobre tratamentos e ofertas exclusivas
              diretamente em seu email.
            </p>

            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-l-full w-full focus:outline-none border"
                style={{
                  backgroundColor: "transparent",
                  borderColor: `${theme.colors.primary}30`,
                  color: theme.colors.text,
                }}
              />
              <motion.button
                className="px-6 py-3 rounded-r-full border-t border-r border-b flex items-center"
                style={{
                  borderColor: theme.colors.primary,
                  color: theme.colors.primary,
                }}
                whileHover={{ backgroundColor: `${theme.colors.primary}10` }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-2">Assinar</span>
                <Send size={16} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="container mx-auto px-4 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Coluna 1: Logo e Descrição */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start">
              <div className="mb-6">
                <Logo3D scale={1.8} />
              </div>

              <p
                className="mb-6 text-center md:text-left italic"
                style={{ color: theme.colors.textSecondary, fontFamily: theme.fonts.body }}
              >
                Elegância e sofisticação em cada detalhe. Nosso espaço foi criado para proporcionar momentos de beleza e
                bem-estar para você. Venha nos conhecer e descubra uma experiência única de cuidados.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-all duration-300 border"
                    style={{
                      borderColor: `${theme.colors.primary}50`,
                      color: theme.colors.textSecondary,
                    }}
                    whileHover={{
                      borderColor: theme.colors.primary,
                      color: theme.colors.primary,
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Coluna 2: Links e Serviços */}
            <div className="md:col-span-4 grid grid-cols-2 gap-8">
              <div>
                <h3
                  className="text-lg font-serif italic mb-5"
                  style={{ color: theme.colors.primary, fontFamily: theme.fonts.heading }}
                >
                  Navegação
                </h3>

                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li key={index} whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                      <a
                        href={link.url}
                        className="block transition-colors duration-300"
                        style={{ color: theme.colors.textSecondary, fontFamily: theme.fonts.body }}
                        // whileHover={{ color: theme.colors.primary }}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h3
                  className="text-lg font-serif italic mb-5"
                  style={{ color: theme.colors.primary, fontFamily: theme.fonts.heading }}
                >
                  Serviços
                </h3>

                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <motion.li key={index} whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                      <a
                        href="#services"
                        className="block transition-colors duration-300"
                        style={{ color: theme.colors.textSecondary, fontFamily: theme.fonts.body }}
                        // whileHover={{ color: theme.colors.primary }}
                      >
                        {service}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Coluna 3: Contato e Horários */}
            <div className="md:col-span-4">
              <div className="p-6 rounded-lg border" style={{ borderColor: `${theme.colors.secondary}20` }}>
                <h3
                  className="text-lg font-serif italic mb-5"
                  style={{ color: theme.colors.primary, fontFamily: theme.fonts.heading }}
                >
                  Contato
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin size={16} className="mt-1 mr-3 flex-shrink-0" style={{ color: theme.colors.primary }} />
                    <div>
                      <p style={{ color: theme.colors.text }}>Rua dos Cabelos, 123</p>
                      <p className="italic" style={{ color: theme.colors.textSecondary }}>
                        Bairro Estilo - São Paulo, SP
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone size={16} className="mr-3 flex-shrink-0" style={{ color: theme.colors.primary }} />
                    <a
                      href="tel:+5511999999999"
                      className="transition-colors duration-300"
                      style={{ color: theme.colors.textSecondary }}
                    //   whileHover={{ color: theme.colors.primary }}
                    >
                      (11) 99999-9999
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Mail size={16} className="mr-3 flex-shrink-0" style={{ color: theme.colors.primary }} />
                    <a
                      href="mailto:contato@barbearia.com"
                      className="transition-colors duration-300"
                      style={{ color: theme.colors.textSecondary }}
                    //   whileHover={{ color: theme.colors.primary }}
                    >
                      contato@barbearia.com
                    </a>
                  </div>
                </div>

                <h3
                  className="text-lg font-serif italic mb-3"
                  style={{ color: theme.colors.primary, fontFamily: theme.fonts.heading }}
                >
                  Horários
                </h3>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="italic" style={{ color: theme.colors.textSecondary }}>
                      Segunda - Sexta
                    </span>
                    <span className="font-medium" style={{ color: theme.colors.primary }}>
                      9h - 19h
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="italic" style={{ color: theme.colors.textSecondary }}>
                      Sábado
                    </span>
                    <span className="font-medium" style={{ color: theme.colors.primary }}>
                      9h - 17h
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="italic" style={{ color: theme.colors.textSecondary }}>
                      Domingo
                    </span>
                    <span className="text-red-400 font-medium">Fechado</span>
                  </div>
                </div>

                <motion.a
                  href="#booking"
                  className="inline-flex items-center w-full justify-center px-4 py-2 border rounded-full transition-colors duration-300"
                  style={{
                    borderColor: theme.colors.primary,
                    color: theme.colors.primary,
                  }}
                  whileHover={{ backgroundColor: `${theme.colors.primary}10` }}
                >
                  <Calendar size={16} className="mr-2" />
                  <span>Agende seu horário</span>
                </motion.a>
              </div>
            </div>
          </div>

          {/* Separador */}
          <div className="flex items-center justify-center my-8">
            <div className="h-[1px] w-24" style={{ backgroundColor: `${theme.colors.secondary}30` }}></div>
            <Heart className="mx-4" style={{ color: theme.colors.primary }} size={16} />
            <div className="h-[1px] w-24" style={{ backgroundColor: `${theme.colors.secondary}30` }}></div>
          </div>

          {/* Copyright e Créditos */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm pt-4">
            <p className="italic" style={{ color: theme.colors.textSecondary }}>
              &copy; {new Date().getFullYear()} Barbearia. Todos os direitos reservados.
            </p>

            <div className="mt-4 md:mt-0 flex items-center">
              <span style={{ color: theme.colors.textSecondary }}>Com carinho por</span>
              <motion.a
                href="https://guikbit-portifolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 transition-colors duration-300 flex items-center"
                style={{ color: theme.colors.primary }}
                whileHover={{ color: adjustColor(theme.colors.primary, 20) }}
              >
                GUIKBIT
                <ExternalLink size={12} className="ml-1" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FemininoEleganteFooter

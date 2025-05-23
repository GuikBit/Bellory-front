"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Facebook,
  Instagram,
  Phone,
  MapPin,
  Clock,
  Mail,
  Scissors,
  ChevronRight,
  ExternalLink,
  Calendar,
  ArrowRight,
} from "lucide-react"
import { useTheme } from "../../contexts/Theme-context"
import Logo3D from "../Fragments/Logo3D"


const MasculineDefaultFooter = () => {
  const [hoverSocial, setHoverSocial] = useState<string | null>(null)
  const [email, setEmail] = useState("")
  const { currentTheme: theme } = useTheme()

  const socialLinks = [
    { id: "facebook", icon: Facebook, url: "https://facebook.com/suabebearia", color: "bg-blue-600" },
    {
      id: "instagram",
      icon: Instagram,
      url: "https://instagram.com/suabebearia",
      color: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500",
    },
    { id: "phone", icon: Phone, url: "tel:+5511999999999", color: "bg-green-600" },
  ]

  const quickLinks = [
    { name: "Nossos Serviços", url: "#services" },
    { name: "Agendar Horário", url: "#booking" },
    { name: "Planos de Assinatura", url: "#plans" },
    { name: "Produtos", url: "#products" },
    { name: "Sobre Nós", url: "#about" },
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
          className="absolute top-0 left-0 w-full h-1"
          style={{
            background: `linear-gradient(to right, ${theme.colors.primary}, ${adjustColor(theme.colors.primary, 20)}, ${theme.colors.primary})`,
          }}
        ></div>

        {/* Padrão geométrico */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          <div
            className="absolute -top-20 -left-20 w-64 h-64 border-8 rounded-full"
            style={{ borderColor: theme.colors.primary }}
          ></div>
          <div
            className="absolute top-40 right-10 w-40 h-40 border-4 rotate-45"
            style={{ borderColor: theme.colors.primary }}
          ></div>
          <div
            className="absolute bottom-20 left-1/3 w-80 h-80 border-2 rounded-full"
            style={{ borderColor: theme.colors.primary }}
          ></div>
        </div>

        {/* Conteúdo principal */}
        <div className="container mx-auto pt-16 pb-8 px-4 relative z-10">
          {/* Grid principal */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Coluna 1: Informações e Newsletter */}
            <div className="lg:col-span-1">
              <div className="mb-6 flex justify-center lg:justify-start">
                <Logo3D scale={1.8} />
              </div>

              <p className="mb-6 text-center lg:text-left" style={{ color: theme.colors.textSecondary }}>
                Onde a tradição encontra o estilo moderno. Experimente o melhor em cuidados masculinos com nossa equipe
                de profissionais especializados.
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4" style={{ color: theme.colors.primary }}>
                  Assine nossa newsletter
                </h3>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2 rounded-l-md w-full focus:outline-none"
                    style={{
                      backgroundColor: theme.isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                      color: theme.colors.text,
                    }}
                  />
                  <motion.button
                    className="px-4 py-2 rounded-r-md flex items-center justify-center"
                    style={{
                      backgroundColor: theme.colors.primary,
                      color: theme.colors.buttonText,
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight size={18} />
                  </motion.button>
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full transition-all duration-300 relative overflow-hidden"
                    style={{ backgroundColor: theme.isDark ? "#333" : "#f0f0f0" }}
                    onMouseEnter={() => setHoverSocial(social.id)}
                    onMouseLeave={() => setHoverSocial(null)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className={`absolute inset-0 ${social.color} opacity-0 transition-opacity duration-300 ${
                        hoverSocial === social.id ? "opacity-100" : ""
                      }`}
                    ></div>
                    <social.icon
                      size={24}
                      className="relative z-10"
                      style={{
                        color: hoverSocial === social.id ? "#fff" : theme.colors.primary,
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Coluna 2: Links e Horários */}
            <div className="lg:col-span-1">
              <div
                className="bg-gradient-to-br rounded-lg p-6 h-full"
                style={{
                  backgroundColor: theme.isDark ? `${theme.colors.primary}15` : `${theme.colors.primary}05`,
                  borderLeft: `3px solid ${theme.colors.primary}`,
                }}
              >
                <h3 className="text-lg font-semibold mb-4" style={{ color: theme.colors.primary }}>
                  Links Rápidos
                </h3>

                <ul className="space-y-3 mb-8">
                  {quickLinks.map((link, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <motion.a
                        href={link.url}
                        className="flex items-center transition-colors duration-300"
                        style={{
                          color: theme.colors.textSecondary,
                          fontFamily: theme.fonts.body,
                        }}
                        whileHover={{ color: theme.colors.primary }}
                      >
                        <ChevronRight size={16} className="mr-2" style={{ color: theme.colors.primary }} />
                        {link.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>

                <h3 className="text-lg font-semibold mb-4" style={{ color: theme.colors.primary }}>
                  Horário de Funcionamento
                </h3>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" style={{ color: theme.colors.primary }} />
                      <span style={{ color: theme.colors.text }}>Segunda - Sexta</span>
                    </div>
                    <span style={{ color: theme.colors.primary, fontWeight: 500 }}>9h - 19h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" style={{ color: theme.colors.primary }} />
                      <span style={{ color: theme.colors.text }}>Sábado</span>
                    </div>
                    <span style={{ color: theme.colors.primary, fontWeight: 500 }}>9h - 17h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" style={{ color: theme.colors.primary }} />
                      <span style={{ color: theme.colors.text }}>Domingo</span>
                    </div>
                    <span className="text-red-400 font-medium">Fechado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna 3: Mapa e Contato */}
            <div className="lg:col-span-2">
              <div className="rounded-lg overflow-hidden h-full flex flex-col">
                <div className="bg-neutral-200 dark:bg-neutral-800 h-48 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span style={{ color: theme.colors.textSecondary }}>Mapa da localização</span>
                  </div>
                  <motion.a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 flex items-center px-3 py-2 rounded-md"
                    style={{
                      backgroundColor: theme.colors.primary,
                      color: theme.colors.buttonText,
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">Ver no Google Maps</span>
                    <ExternalLink size={16} />
                  </motion.a>
                </div>

                <div
                  className="p-6 flex-grow"
                  style={{ backgroundColor: theme.isDark ? `${theme.colors.primary}15` : `${theme.colors.primary}05` }}
                >
                  <h3 className="text-lg font-semibold mb-4" style={{ color: theme.colors.primary }}>
                    Contato
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin size={18} className="mt-1 mr-3 flex-shrink-0" style={{ color: theme.colors.primary }} />
                      <div>
                        <p style={{ color: theme.colors.text }}>Rua dos Cabelos, 123</p>
                        <p style={{ color: theme.colors.textSecondary }}>Bairro Estilo - São Paulo, SP</p>
                        <p style={{ color: theme.colors.textSecondary }}>CEP: 01234-567</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Phone size={18} className="mr-3 flex-shrink-0" style={{ color: theme.colors.primary }} />
                      <motion.a
                        href="tel:+5511999999999"
                        className="transition-colors duration-300"
                        style={{ color: theme.colors.text }}
                        whileHover={{ color: theme.colors.primary }}
                      >
                        (11) 99999-9999
                      </motion.a>
                    </div>

                    <div className="flex items-center">
                      <Mail size={18} className="mr-3 flex-shrink-0" style={{ color: theme.colors.primary }} />
                      <motion.a
                        href="mailto:contato@barbearia.com"
                        className="transition-colors duration-300"
                        style={{ color: theme.colors.text }}
                        whileHover={{ color: theme.colors.primary }}
                      >
                        contato@barbearia.com
                      </motion.a>
                    </div>

                    <motion.a
                      href="#booking"
                      className="flex items-center mt-4 w-full justify-center px-4 py-3 rounded-md transition-colors duration-300"
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
          </div>

          {/* Separador */}
          <div className="flex items-center justify-center my-10">
            <div className="h-[1px] w-16" style={{ backgroundColor: `${theme.colors.primary}30` }}></div>
            <Scissors className="mx-4" style={{ color: theme.colors.primary }} size={20} />
            <div className="h-[1px] w-16" style={{ backgroundColor: `${theme.colors.primary}30` }}></div>
          </div>

          {/* Copyright e Créditos */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p style={{ color: theme.colors.textSecondary }}>
              &copy; {new Date().getFullYear()} Barbearia. Todos os direitos reservados.
            </p>

            <div className="mt-4 md:mt-0 flex items-center">
              <span style={{ color: theme.colors.textSecondary }}>Desenvolvido por</span>
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

export default MasculineDefaultFooter

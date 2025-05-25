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
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Calendar,
  Scissors,
} from "lucide-react"
import { useTheme } from "../../contexts/Theme-context"
// import Logo3D from "../Fragments/Logo3D"


const MasculinoModernoFooter = () => {
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
    { name: "Blog", url: "#blog" },
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
      <div className="relative" style={{ backgroundColor: theme.colors.background }}>
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          <div
            className="absolute top-0 left-0 w-full h-64 skew-y-6 -translate-y-32"
            style={{ backgroundColor: theme.colors.primary }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-full h-64 skew-y-6 translate-y-32"
            style={{ backgroundColor: theme.colors.primary }}
          ></div>
        </div>

        {/* Seção de newsletter */}
        <div className="container mx-auto px-4 py-16">
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ backgroundColor: theme.isDark ? `${theme.colors.primary}20` : `${theme.colors.primary}10` }}
          >
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <div
                className="absolute -right-20 -top-20 w-64 h-64 rounded-full"
                style={{ backgroundColor: theme.colors.primary }}
              ></div>
              <div
                className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full"
                style={{ backgroundColor: theme.colors.primary }}
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
                  Assine nossa newsletter e receba ofertas exclusivas, dicas de estilo e as últimas tendências em
                  cuidados masculinos.
                </p>
              </div>

              <div className="w-full md:w-auto">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-3 rounded-l-md w-full md:w-64 focus:outline-none"
                    style={{
                      backgroundColor: theme.isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                      color: theme.colors.text,
                    }}
                  />
                  <motion.button
                    className="px-5 py-3 rounded-r-md flex items-center justify-center"
                    style={{
                      backgroundColor: theme.colors.primary,
                      color: theme.colors.buttonText,
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">Assinar</span>
                    <ArrowRight size={18} />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conteúdo principal do footer */}
        <div className="container mx-auto px-4 pt-8 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Coluna 1: Logo e Descrição */}
            <div className="md:col-span-4">
              <div className="flex items-center mb-6">
                {/* <Logo3D scale={1.8} /> */}
                <div className="ml-3">
                  <h2
                    className="text-xl font-bold tracking-tight"
                    style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}
                  >
                    BARBER<span style={{ color: theme.colors.primary }}>SHOP</span>
                  </h2>
                </div>
              </div>

              <p className="mb-6" style={{ color: theme.colors.textSecondary }}>
                Experiência premium em cuidados masculinos. Nossa barbearia combina técnicas tradicionais com tendências
                modernas para oferecer o melhor serviço personalizado para cada cliente.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md transition-all duration-300"
                    style={{ color: theme.colors.textSecondary }}
                    whileHover={{
                      backgroundColor: theme.colors.primary,
                      color: theme.colors.buttonText,
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Coluna 2: Links */}
            <div className="md:col-span-3">
              <h3
                className="text-xl font-bold tracking-tight mb-5"
                style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}
              >
                Navegação
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {quickLinks.map((link, index) => (
                  <motion.div key={index} whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                    <motion.a
                      href={link.url}
                      className="flex items-center transition-colors duration-300"
                      style={{ color: theme.colors.textSecondary, fontFamily: theme.fonts.body }}
                      whileHover={{ color: theme.colors.primary }}
                    >
                      <ChevronRight size={16} className="mr-2" style={{ color: theme.colors.primary }} />
                      {link.name}
                    </motion.a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Coluna 3: Horários e Contato */}
            <div className="md:col-span-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3
                    className="text-xl font-bold tracking-tight mb-5"
                    style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}
                  >
                    Horários
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div
                      className="flex justify-between items-center pb-2 border-b"
                      style={{ borderColor: `${theme.colors.primary}20` }}
                    >
                      <span style={{ color: theme.colors.textSecondary }}>Segunda - Sexta</span>
                      <span style={{ color: theme.colors.text, fontWeight: 500 }}>9h - 19h</span>
                    </div>
                    <div
                      className="flex justify-between items-center pb-2 border-b"
                      style={{ borderColor: `${theme.colors.primary}20` }}
                    >
                      <span style={{ color: theme.colors.textSecondary }}>Sábado</span>
                      <span style={{ color: theme.colors.text, fontWeight: 500 }}>9h - 17h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span style={{ color: theme.colors.textSecondary }}>Domingo</span>
                      <span className="text-red-400 font-medium">Fechado</span>
                    </div>
                  </div>

                  <motion.a
                    href="#booking"
                    className="inline-flex items-center px-4 py-2 rounded-md transition-colors duration-300"
                    style={{
                      backgroundColor: theme.colors.primary,
                      color: theme.colors.buttonText,
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Calendar size={16} className="mr-2" />
                    <span>Agendar agora</span>
                  </motion.a>
                </div>

                <div>
                  <h3
                    className="text-xl font-bold tracking-tight mb-5"
                    style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}
                  >
                    Contato
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div
                        className="w-10 h-10 rounded-md flex items-center justify-center mr-3"
                        style={{ backgroundColor: `${theme.colors.primary}20` }}
                      >
                        <Phone size={18} style={{ color: theme.colors.primary }} />
                      </div>
                      <div>
                        <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                          Telefone
                        </p>
                        <p style={{ color: theme.colors.text }}>(11) 99999-9999</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div
                        className="w-10 h-10 rounded-md flex items-center justify-center mr-3"
                        style={{ backgroundColor: `${theme.colors.primary}20` }}
                      >
                        <Mail size={18} style={{ color: theme.colors.primary }} />
                      </div>
                      <div>
                        <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                          Email
                        </p>
                        <p style={{ color: theme.colors.text }}>contato@barbearia.com</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div
                        className="w-10 h-10 rounded-md flex items-center justify-center mr-3"
                        style={{ backgroundColor: `${theme.colors.primary}20` }}
                      >
                        <MapPin size={18} style={{ color: theme.colors.primary }} />
                      </div>
                      <div>
                        <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                          Endereço
                        </p>
                        <p style={{ color: theme.colors.text }}>Rua dos Cabelos, 123</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Separador */}
          <div className="my-10 h-[1px]" style={{ backgroundColor: `${theme.colors.primary}20` }}></div>

          {/* Copyright e Créditos */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm py-6">
            <div className="flex items-center">
              <Scissors size={16} className="mr-2" style={{ color: theme.colors.primary }} />
              <div className="font-medium" style={{ color: theme.colors.text }}>
                BARBERSHOP
              </div>
            </div>

            <p className="my-4 md:my-0 text-center" style={{ color: theme.colors.textSecondary }}>
              &copy; {new Date().getFullYear()} Barbearia. Todos os direitos reservados.
            </p>

            <div className="flex items-center">
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

export default MasculinoModernoFooter

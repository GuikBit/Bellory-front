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
  Heart,
  Send,
  ArrowRight,
  Twitter,
  Youtube,
  Star,
} from "lucide-react"
import { useTheme } from "../contexts/Theme-context"
import Logo3D from "./Fragments/Logo3D"

const Footer = () => {
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

  // Renderizar componentes específicos por tema
  const renderFooterContent = () => {
    switch (theme.id) {
      case "masculine_default":
        return (
          <div className="relative overflow-hidden" style={{ backgroundColor: theme.colors.background }}>
            {/* Elementos decorativos */}
            <div
              className="absolute top-0 left-0 w-full h-1"
              style={{
                background: `linear-gradient(to right, ${theme.colors.primary}, ${adjustColor(theme.colors.primary, 20)}, ${theme.colors.primary})`,
              }}
            ></div>
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full translate-x-1/2 -translate-y-1/2"
              style={{ backgroundColor: `${theme.colors.primary}10` }}
            ></div>
            <div
              className="absolute bottom-0 left-0 w-96 h-96 rounded-full -translate-x-1/2 translate-y-1/2"
              style={{ backgroundColor: `${theme.colors.primary}10` }}
            ></div>

            <div className="container mx-auto pt-16 pb-8 px-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                {/* Coluna 1: Logo e Redes Sociais */}
                <div className="md:col-span-4 flex flex-col items-center md:items-start">
                  <div className="mb-6 flex justify-center md:justify-start">
                    <Logo3D scale={2} />
                  </div>

                  <p className="mb-6 text-center md:text-left" style={{ color: theme.colors.textSecondary }}>
                    Onde a tradição encontra o estilo moderno. Experimente o melhor em cuidados masculinos com nossa
                    equipe de profissionais especializados.
                  </p>

                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="mr-2" style={{ color: theme.colors.primary }}>
                      Siga-nos
                    </span>
                    <div
                      className="h-[1px] flex-grow ml-2"
                      style={{ backgroundColor: `${theme.colors.primary}30` }}
                    ></div>
                  </h3>

                  <div className="flex gap-3 mb-6">
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

                {/* Coluna 2: Links Rápidos */}
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="mr-2" style={{ color: theme.colors.primary }}>
                      Links Rápidos
                    </span>
                    <div
                      className="h-[1px] flex-grow ml-2"
                      style={{ backgroundColor: `${theme.colors.primary}30` }}
                    ></div>
                  </h3>

                  <ul className="space-y-2">
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
                </div>

                {/* Coluna 3: Horário de Funcionamento */}
                <div className="md:col-span-3">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="mr-2" style={{ color: theme.colors.primary }}>
                      Horário de Funcionamento
                    </span>
                    <div
                      className="h-[1px] flex-grow ml-2"
                      style={{ backgroundColor: `${theme.colors.primary}30` }}
                    ></div>
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div>
                        <div className="flex justify-between mb-1">
                          <Clock
                            size={18}
                            className="mr-3 flex-shrink-0 mt-1"
                            style={{ color: theme.colors.primary }}
                          />
                          <span style={{ color: theme.colors.text }}>Segunda - Sexta</span>
                          <span style={{ color: theme.colors.primary, fontWeight: 500 }}>9h - 19h</span>
                        </div>
                        <div className="flex justify-between mb-1">
                          <Clock
                            size={18}
                            className="mr-3 flex-shrink-0 mt-1"
                            style={{ color: theme.colors.primary }}
                          />
                          <span style={{ color: theme.colors.text }}>Sábado</span>
                          <span style={{ color: theme.colors.primary, fontWeight: 500 }}>9h - 17h</span>
                        </div>
                        <div className="flex justify-between">
                          <Clock
                            size={18}
                            className="mr-3 flex-shrink-0 mt-1"
                            style={{ color: theme.colors.primary }}
                          />
                          <span style={{ color: theme.colors.text }}>Domingo</span>
                          <span className="text-red-400 font-medium">Fechado</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t" style={{ borderColor: `${theme.colors.primary}30` }}>
                      <a
                        href="#booking"
                        className="flex items-center transition-colors duration-300"
                        style={{ color: theme.colors.primary }}
                        whileHover={{ color: adjustColor(theme.colors.primary, 20) }}
                      >
                        <Calendar size={18} className="mr-2" />
                        <span>Agende seu horário</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Coluna 4: Contato e Endereço */}
                <div className="md:col-span-3">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="mr-2" style={{ color: theme.colors.primary }}>
                      Contato
                    </span>
                    <div
                      className="h-[1px] flex-grow ml-2"
                      style={{ backgroundColor: `${theme.colors.primary}30` }}
                    ></div>
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
                      <a
                        href="tel:+5511999999999"
                        className="transition-colors duration-300"
                        style={{ color: theme.colors.text }}
                        whileHover={{ color: theme.colors.primary }}
                      >
                        (11) 99999-9999
                      </a>
                    </div>

                    <div className="flex items-center">
                      <Mail size={18} className="mr-3 flex-shrink-0" style={{ color: theme.colors.primary }} />
                      <a
                        href="mailto:contato@barbearia.com"
                        className="transition-colors duration-300"
                        style={{ color: theme.colors.text }}
                        whileHover={{ color: theme.colors.primary }}
                      >
                        contato@barbearia.com
                      </a>
                    </div>

                    <div className="pt-3 border-t" style={{ borderColor: `${theme.colors.primary}30` }}>
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center transition-colors duration-300"
                        style={{ color: theme.colors.primary }}
                        whileHover={{ color: adjustColor(theme.colors.primary, 20) }}
                      >
                        <ExternalLink size={18} className="mr-2" />
                        <span>Ver no mapa</span>
                      </a>
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
                  <a
                    href="https://guikbit-portifolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 transition-colors duration-300 flex items-center"
                    style={{ color: theme.colors.primary }}
                    whileHover={{ color: adjustColor(theme.colors.primary, 20) }}
                  >
                    GUIKBIT
                    <ExternalLink size={12} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )

      case "masculinoModerno":
        return (
          <div style={{ backgroundColor: theme.colors.background }}>
            <div className="container mx-auto pt-16 pb-8 px-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                {/* Coluna 1: Logo e Descrição */}
                <div className="md:col-span-4 flex flex-col">
                  <div className="mb-6">
                    <Logo3D scale={1.8} />
                  </div>

                  <p className="mb-6" style={{ color: theme.colors.textSecondary }}>
                    Experiência premium em cuidados masculinos. Nossa barbearia combina técnicas tradicionais com
                    tendências modernas para oferecer o melhor serviço.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {[...socialLinks, { id: "twitter", icon: Twitter, url: "#", color: "bg-blue-400" }].map(
                      (social) => (
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
                      ),
                    )}
                  </div>
                </div>

                {/* Coluna 2: Links */}
                <div className="md:col-span-2">
                  <h3
                    className="text-xl font-bold tracking-tight mb-5"
                    style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}
                  >
                    Navegação
                  </h3>

                  <ul className="space-y-3">
                    {quickLinks.map((link, index) => (
                      <motion.li key={index} whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                        <a
                          href={link.url}
                          className="block transition-colors duration-300"
                          style={{ color: theme.colors.textSecondary, fontFamily: theme.fonts.body }}
                          whileHover={{ color: theme.colors.primary }}
                        >
                          {link.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Coluna 3: Horários e Contato */}
                <div className="md:col-span-3">
                  <h3
                    className="text-xl font-bold tracking-tight mb-5"
                    style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}
                  >
                    Horários
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span style={{ color: theme.colors.textSecondary }}>Segunda - Sexta</span>
                      <span style={{ color: theme.colors.text }}>9h - 19h</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: theme.colors.textSecondary }}>Sábado</span>
                      <span style={{ color: theme.colors.text }}>9h - 17h</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: theme.colors.textSecondary }}>Domingo</span>
                      <span className="text-red-400">Fechado</span>
                    </div>
                  </div>

                  <h3
                    className="text-xl font-bold tracking-tight mb-5 mt-8"
                    style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}
                  >
                    Contato
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone size={16} className="mr-3" style={{ color: theme.colors.primary }} />
                      <span style={{ color: theme.colors.text }}>(11) 99999-9999</span>
                    </div>
                    <div className="flex items-center">
                      <Mail size={16} className="mr-3" style={{ color: theme.colors.primary }} />
                      <span style={{ color: theme.colors.text }}>contato@barbearia.com</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-3" style={{ color: theme.colors.primary }} />
                      <span style={{ color: theme.colors.text }}>Rua dos Cabelos, 123</span>
                    </div>
                  </div>
                </div>

                {/* Coluna 4: Newsletter */}
                <div className="md:col-span-3">
                  <h3
                    className="text-xl font-bold tracking-tight mb-5"
                    style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}
                  >
                    Newsletter
                  </h3>

                  <p className="mb-4" style={{ color: theme.colors.textSecondary }}>
                    Inscreva-se para receber novidades, promoções e dicas de cuidados masculinos.
                  </p>

                  <div className="flex mb-6">
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
                      className="px-4 py-2 rounded-r-md"
                      style={{
                        backgroundColor: theme.colors.primary,
                        color: theme.colors.buttonText,
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Send size={18} />
                    </motion.button>
                  </div>

                  <div className="flex items-center">
                    <div className="p-1 rounded-full mr-2" style={{ backgroundColor: `${theme.colors.primary}20` }}>
                      <Star size={14} style={{ color: theme.colors.primary }} />
                    </div>
                    <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                      Receba ofertas exclusivas para assinantes
                    </p>
                  </div>
                </div>
              </div>

              {/* Separador */}
              <div className="my-10 h-[1px]" style={{ backgroundColor: `${theme.colors.primary}20` }}></div>

              {/* Copyright e Créditos */}
              <div className="flex flex-col md:flex-row justify-between items-center text-sm py-6">
                <div className="flex items-center">
                  <Logo3D scale={1} />
                  <div className="ml-2 font-medium" style={{ color: theme.colors.text }}>
                    BARBERSHOP
                  </div>
                </div>

                <p className="my-4 md:my-0 text-center" style={{ color: theme.colors.textSecondary }}>
                  &copy; {new Date().getFullYear()} Barbearia. Todos os direitos reservados.
                </p>

                <div className="flex items-center">
                  <span style={{ color: theme.colors.textSecondary }}>Desenvolvido por</span>
                  <a
                    href="https://guikbit-portifolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 transition-colors duration-300 flex items-center"
                    style={{ color: theme.colors.primary }}
                    whileHover={{ color: adjustColor(theme.colors.primary, 20) }}
                  >
                    GUIKBIT
                    <ExternalLink size={12} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )

      case "masculinoClassico":
        return (
          <div style={{ backgroundColor: theme.colors.background }}>
            <div className="container mx-auto pt-16 pb-8 px-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Coluna 1: Logo e Descrição */}
                <div className="md:col-span-4 flex flex-col items-center md:items-start">
                  <div className="mb-6">
                    <Logo3D scale={1.8} />
                  </div>

                  <p className="mb-6 text-center md:text-left font-serif" style={{ color: theme.colors.textSecondary }}>
                    TRADIÇÃO EM BARBEARIA DESDE 1995. Oferecemos serviços de alta qualidade com a excelência que você
                    merece.
                  </p>

                  <div className="w-full border-t pt-4 mb-4" style={{ borderColor: theme.colors.secondary }}>
                    <div className="flex justify-center md:justify-start space-x-6">
                      {socialLinks.map((social) => (
                        <motion.a
                          key={social.id}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors duration-300"
                          style={{ color: theme.colors.textSecondary }}
                          whileHover={{ color: theme.colors.primary }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <social.icon size={20} />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Coluna 2: Links */}
                <div className="md:col-span-2">
                  <h3
                    className="text-lg font-serif uppercase tracking-wide mb-4 pb-2 border-b"
                    style={{
                      color: theme.colors.text,
                      borderColor: theme.colors.secondary,
                      fontFamily: theme.fonts.heading,
                    }}
                  >
                    NAVEGAÇÃO
                  </h3>

                  <ul className="space-y-3">
                    {quickLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.url}
                          className="block transition-colors duration-300 font-serif"
                          style={{ color: theme.colors.textSecondary }}
                          whileHover={{ color: theme.colors.primary }}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Coluna 3: Horários */}
                <div className="md:col-span-3">
                  <h3
                    className="text-lg font-serif uppercase tracking-wide mb-4 pb-2 border-b"
                    style={{
                      color: theme.colors.text,
                      borderColor: theme.colors.secondary,
                      fontFamily: theme.fonts.heading,
                    }}
                  >
                    HORÁRIOS
                  </h3>

                  <table className="w-full">
                    <tbody>
                      <tr className="border-b" style={{ borderColor: theme.colors.secondary }}>
                        <td className="py-2" style={{ color: theme.colors.textSecondary }}>
                          Segunda - Sexta
                        </td>
                        <td className="py-2 text-right" style={{ color: theme.colors.text }}>
                          9h - 19h
                        </td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: theme.colors.secondary }}>
                        <td className="py-2" style={{ color: theme.colors.textSecondary }}>
                          Sábado
                        </td>
                        <td className="py-2 text-right" style={{ color: theme.colors.text }}>
                          9h - 17h
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2" style={{ color: theme.colors.textSecondary }}>
                          Domingo
                        </td>
                        <td className="py-2 text-right text-red-500">Fechado</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="mt-4">
                    <a
                      href="#booking"
                      className="inline-block px-4 py-2 border uppercase text-sm tracking-wide transition-colors duration-300"
                      style={{
                        borderColor: theme.colors.primary,
                        color: theme.colors.primary,
                      }}
                      whileHover={{
                        backgroundColor: `${theme.colors.primary}10`,
                        borderColor: adjustColor(theme.colors.primary, 20),
                      }}
                    >
                      Agendar Horário
                    </a>
                  </div>
                </div>

                {/* Coluna 4: Contato */}
                <div className="md:col-span-3">
                  <h3
                    className="text-lg font-serif uppercase tracking-wide mb-4 pb-2 border-b"
                    style={{
                      color: theme.colors.text,
                      borderColor: theme.colors.secondary,
                      fontFamily: theme.fonts.heading,
                    }}
                  >
                    CONTATO
                  </h3>

                  <div className="space-y-3">
                    <p style={{ color: theme.colors.textSecondary }}>
                      <strong style={{ color: theme.colors.text }}>Endereço:</strong> Rua dos Cabelos, 123, Bairro
                      Estilo - São Paulo, SP
                    </p>
                    <p style={{ color: theme.colors.textSecondary }}>
                      <strong style={{ color: theme.colors.text }}>Telefone:</strong> (11) 99999-9999
                    </p>
                    <p style={{ color: theme.colors.textSecondary }}>
                      <strong style={{ color: theme.colors.text }}>Email:</strong> contato@barbearia.com
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t" style={{ borderColor: theme.colors.secondary }}>
                    <p className="italic" style={{ color: theme.colors.textSecondary }}>
                      "A excelência não é um ato, mas um hábito."
                    </p>
                  </div>
                </div>
              </div>

              {/* Separador */}
              <div className="my-8 h-[2px]" style={{ backgroundColor: theme.colors.secondary }}></div>

              {/* Copyright e Créditos */}
              <div
                className="py-4 text-center"
                style={{ backgroundColor: theme.colors.primary, color: theme.colors.buttonText }}
              >
                <p className="text-sm font-serif">
                  &copy; {new Date().getFullYear()} BARBERSHOP | TODOS OS DIREITOS RESERVADOS | DESENVOLVIDO POR{" "}
                  <a
                    href="https://guikbit-portifolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                    whileHover={{ textDecoration: "none" }}
                  >
                    GUIKBIT
                  </a>
                </p>
              </div>
            </div>
          </div>
        )

      case "femininoElegante":
        return (
          <div className="relative overflow-hidden" style={{ backgroundColor: theme.colors.background }}>
            {/* Elementos decorativos */}
            <div
              className="absolute top-0 left-0 w-full h-[1px]"
              style={{ backgroundColor: `${theme.colors.secondary}30` }}
            ></div>
            <div
              className="absolute top-10 right-10 w-32 h-32 rounded-full opacity-10"
              style={{ backgroundColor: theme.colors.primary }}
            ></div>
            <div
              className="absolute bottom-20 left-20 w-48 h-48 rounded-full opacity-5"
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

            <div className="container mx-auto pt-16 pb-8 px-4">
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
                    Elegância e sofisticação em cada detalhe. Nosso espaço foi criado para proporcionar momentos de
                    beleza e bem-estar para você.
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                    {[...socialLinks, { id: "twitter", icon: Twitter, url: "#", color: "bg-blue-400" }].map(
                      (social) => (
                        <motion.a
                          key={social.id}
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
                      ),
                    )}
                  </div>
                </div>

                {/* Coluna 2: Links */}
                <div className="md:col-span-2">
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
                          whileHover={{ color: theme.colors.primary }}
                        >
                          {link.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Coluna 3: Horários e Newsletter */}
                <div className="md:col-span-3">
                  <h3
                    className="text-lg font-serif italic mb-5"
                    style={{ color: theme.colors.primary, fontFamily: theme.fonts.heading }}
                  >
                    Horários
                  </h3>

                  <div className="space-y-2 mb-8">
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

                  <h3
                    className="text-lg font-serif italic mb-4"
                    style={{ color: theme.colors.primary, fontFamily: theme.fonts.heading }}
                  >
                    Newsletter
                  </h3>

                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Seu e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-3 py-2 rounded-l-full w-full focus:outline-none border"
                      style={{
                        backgroundColor: "transparent",
                        borderColor: `${theme.colors.primary}30`,
                        color: theme.colors.text,
                      }}
                    />
                    <motion.button
                      className="px-3 py-2 rounded-r-full border-t border-r border-b"
                      style={{
                        borderColor: theme.colors.primary,
                        color: theme.colors.primary,
                      }}
                      whileHover={{ backgroundColor: `${theme.colors.primary}10` }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send size={16} />
                    </motion.button>
                  </div>
                </div>

                {/* Coluna 4: Contato */}
                <div className="md:col-span-3">
                  <h3
                    className="text-lg font-serif italic mb-5"
                    style={{ color: theme.colors.primary, fontFamily: theme.fonts.heading }}
                  >
                    Contato
                  </h3>

                  <div className="space-y-4">
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
                        whileHover={{ color: theme.colors.primary }}
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
                        whileHover={{ color: theme.colors.primary }}
                      >
                        contato@barbearia.com
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t" style={{ borderColor: `${theme.colors.secondary}20` }}>
                    <a
                      href="#booking"
                      className="inline-flex items-center px-4 py-2 border rounded-full transition-colors duration-300"
                      style={{
                        borderColor: theme.colors.primary,
                        color: theme.colors.primary,
                      }}
                      whileHover={{ backgroundColor: `${theme.colors.primary}10` }}
                    >
                      <Calendar size={16} className="mr-2" />
                      <span>Agende seu horário</span>
                    </a>
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
                  <a
                    href="https://guikbit-portifolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 transition-colors duration-300 flex items-center"
                    style={{ color: theme.colors.primary }}
                    whileHover={{ color: adjustColor(theme.colors.primary, 20) }}
                  >
                    GUIKBIT
                    <ExternalLink size={12} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )

      case "femininoModerno":
        return (
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
            <div
              className="absolute top-20 left-10 w-24 h-24 rounded-xl rotate-12"
              style={{ backgroundColor: `${theme.colors.primary}10` }}
            ></div>
            <div
              className="absolute bottom-40 right-10 w-32 h-32 rounded-full"
              style={{ backgroundColor: `${theme.colors.secondary}10` }}
            ></div>

            <div className="container mx-auto pt-16 pb-8 px-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Coluna 1: Logo e Descrição */}
                <div className="md:col-span-4">
                  <div className="mb-6">
                    <Logo3D scale={1.8} />
                  </div>

                  <p className="mb-6" style={{ color: theme.colors.textSecondary, fontFamily: theme.fonts.body }}>
                    Seu espaço de beleza e bem-estar. Combinamos as últimas tendências com atendimento personalizado
                    para realçar sua beleza natural.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {[
                      ...socialLinks,
                      { id: "twitter", icon: Twitter, url: "#", color: "bg-blue-400" },
                      { id: "youtube", icon: Youtube, url: "#", color: "bg-red-600" },
                    ].map((social) => (
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
                    {[...quickLinks, { name: "Blog", url: "#blog" }, { name: "FAQ", url: "#faq" }].map(
                      (link, index) => (
                        <motion.div key={index} whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                          <a
                            href={link.url}
                            className="block transition-colors duration-300"
                            style={{ color: theme.colors.textSecondary, fontFamily: theme.fonts.body }}
                            whileHover={{ color: theme.colors.primary }}
                          >
                            {link.name}
                          </a>
                        </motion.div>
                      ),
                    )}
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
                  </div>
                </div>

                {/* Coluna 3: Newsletter e Horários */}
                <div className="md:col-span-5">
                  <h3
                    className="text-lg font-medium mb-4"
                    style={{ color: theme.colors.primary, fontFamily: theme.fonts.heading }}
                  >
                    Fique por dentro das novidades
                  </h3>

                  <p className="mb-4" style={{ color: theme.colors.textSecondary }}>
                    Assine nossa newsletter e receba dicas de beleza, promoções exclusivas e as últimas tendências.
                  </p>

                  <div className="flex mb-8">
                    <input
                      type="email"
                      placeholder="Seu melhor e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-4 py-3 rounded-l-full w-full focus:outline-none"
                      style={{
                        backgroundColor: theme.isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                        color: theme.colors.text,
                      }}
                    />
                    <motion.button
                      className="px-5 py-3 rounded-r-full flex items-center"
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
                    <a
                      href="https://guikbit-portifolio.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium"
                      style={{ color: theme.colors.primary }}
                      whileHover={{ color: adjustColor(theme.colors.primary, 20) }}
                    >
                      GUIKBIT
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="relative overflow-hidden" style={{ backgroundColor: theme.colors.background }}>
            {/* Elementos decorativos */}
            <div
              className="absolute top-0 left-0 w-full h-1"
              style={{
                background: `linear-gradient(to right, ${theme.colors.primary}, ${adjustColor(theme.colors.primary, 20)}, ${theme.colors.primary})`,
              }}
            ></div>
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full translate-x-1/2 -translate-y-1/2"
              style={{ backgroundColor: `${theme.colors.primary}10` }}
            ></div>
            <div
              className="absolute bottom-0 left-0 w-96 h-96 rounded-full -translate-x-1/2 translate-y-1/2"
              style={{ backgroundColor: `${theme.colors.primary}10` }}
            ></div>

            <div className="container mx-auto pt-16 pb-8 px-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                {/* Coluna 1: Logo e Redes Sociais */}
                <div className="md:col-span-4 flex flex-col items-center md:items-start">
                  <div className="mb-6 flex justify-center md:justify-start">
                    <Logo3D scale={2} />
                  </div>

                  <p className="mb-6 text-center md:text-left" style={{ color: theme.colors.textSecondary }}>
                    Onde a tradição encontra o estilo moderno. Experimente o melhor em cuidados masculinos com nossa
                    equipe de profissionais especializados.
                  </p>

                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="mr-2" style={{ color: theme.colors.primary }}>
                      Siga-nos
                    </span>
                    <div
                      className="h-[1px] flex-grow ml-2"
                      style={{ backgroundColor: `${theme.colors.primary}30` }}
                    ></div>
                  </h3>

                  <div className="flex gap-3 mb-6">
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

                {/* Coluna 2: Links Rápidos */}
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="mr-2" style={{ color: theme.colors.primary }}>
                      Links Rápidos
                    </span>
                    <div
                      className="h-[1px] flex-grow ml-2"
                      style={{ backgroundColor: `${theme.colors.primary}30` }}
                    ></div>
                  </h3>

                  <ul className="space-y-2">
                    {quickLinks.map((link, index) => (
                      <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <a
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
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Coluna 3: Horário de Funcionamento */}
                <div className="md:col-span-3">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="mr-2" style={{ color: theme.colors.primary }}>
                      Horário de Funcionamento
                    </span>
                    <div
                      className="h-[1px] flex-grow ml-2"
                      style={{ backgroundColor: `${theme.colors.primary}30` }}
                    ></div>
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div>
                        <div className="flex justify-between mb-1">
                          <Clock
                            size={18}
                            className="mr-3 flex-shrink-0 mt-1"
                            style={{ color: theme.colors.primary }}
                          />
                          <span style={{ color: theme.colors.text }}>Segunda - Sexta</span>
                          <span style={{ color: theme.colors.primary, fontWeight: 500 }}>9h - 19h</span>
                        </div>
                        <div className="flex justify-between mb-1">
                          <Clock
                            size={18}
                            className="mr-3 flex-shrink-0 mt-1"
                            style={{ color: theme.colors.primary }}
                          />
                          <span style={{ color: theme.colors.text }}>Sábado</span>
                          <span style={{ color: theme.colors.primary, fontWeight: 500 }}>9h - 17h</span>
                        </div>
                        <div className="flex justify-between">
                          <Clock
                            size={18}
                            className="mr-3 flex-shrink-0 mt-1"
                            style={{ color: theme.colors.primary }}
                          />
                          <span style={{ color: theme.colors.text }}>Domingo</span>
                          <span className="text-red-400 font-medium">Fechado</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t" style={{ borderColor: `${theme.colors.primary}30` }}>
                      <a
                        href="#booking"
                        className="flex items-center transition-colors duration-300"
                        style={{ color: theme.colors.primary }}
                        whileHover={{ color: adjustColor(theme.colors.primary, 20) }}
                      >
                        <Calendar size={18} className="mr-2" />
                        <span>Agende seu horário</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Coluna 4: Contato e Endereço */}
                <div className="md:col-span-3">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="mr-2" style={{ color: theme.colors.primary }}>
                      Contato
                    </span>
                    <div
                      className="h-[1px] flex-grow ml-2"
                      style={{ backgroundColor: `${theme.colors.primary}30` }}
                    ></div>
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
                      <a
                        href="tel:+5511999999999"
                        className="transition-colors duration-300"
                        style={{ color: theme.colors.text }}
                        whileHover={{ color: theme.colors.primary }}
                      >
                        (11) 99999-9999
                      </a>
                    </div>

                    <div className="flex items-center">
                      <Mail size={18} className="mr-3 flex-shrink-0" style={{ color: theme.colors.primary }} />
                      <a
                        href="mailto:contato@barbearia.com"
                        className="transition-colors duration-300"
                        style={{ color: theme.colors.text }}
                        whileHover={{ color: theme.colors.primary }}
                      >
                        contato@barbearia.com
                      </a>
                    </div>

                    <div className="pt-3 border-t" style={{ borderColor: `${theme.colors.primary}30` }}>
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center transition-colors duration-300"
                        style={{ color: theme.colors.primary }}
                        whileHover={{ color: adjustColor(theme.colors.primary, 20) }}
                      >
                        <ExternalLink size={18} className="mr-2" />
                        <span>Ver no mapa</span>
                      </a>
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
                  <a
                    href="https://guikbit-portifolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 transition-colors duration-300 flex items-center"
                    style={{ color: theme.colors.primary }}
                    whileHover={{ color: adjustColor(theme.colors.primary, 20) }}
                  >
                    GUIKBIT
                    <ExternalLink size={12} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

  return <footer style={{ fontFamily: theme.fonts.body }}>{renderFooterContent()}</footer>
}

export default Footer

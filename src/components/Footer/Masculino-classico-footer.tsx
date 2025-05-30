"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Phone, MapPin, Mail, Twitter, Calendar } from "lucide-react"
import { useTheme } from "../../global/Theme-context"
// import Logo3D from "../Fragments/Logo3D"


const MasculinoClassicoFooter = () => {
  const { currentTheme: theme } = useTheme()

  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com/suabebearia" },
    { icon: Instagram, url: "https://instagram.com/suabebearia" },
    { icon: Twitter, url: "#" },
    { icon: Phone, url: "tel:+5511999999999" },
  ]

  const quickLinks = [
    { name: "Nossos Serviços", url: "#services" },
    { name: "Agendar Horário", url: "#booking" },
    { name: "Planos de Assinatura", url: "#plans" },
    { name: "Produtos", url: "#products" },
    { name: "Sobre Nós", url: "#about" },
  ]

  const services = [
    "Corte de Cabelo",
    "Barba Completa",
    "Tratamento Facial",
    "Coloração",
    "Massagem",
    "Manicure Masculina",
  ]

  // Função para ajustar a cor (escurecer/clarear)
//   function adjustColor(color: string, percent: number) {
//     // Converter hex para RGB
//     let r = Number.parseInt(color.substring(1, 3), 16)
//     let g = Number.parseInt(color.substring(3, 5), 16)
//     let b = Number.parseInt(color.substring(5, 7), 16)

//     // Ajustar valores
//     r = Math.max(0, Math.min(255, r + percent))
//     g = Math.max(0, Math.min(255, g + percent))
//     b = Math.max(0, Math.min(255, b + percent))

//     // Converter de volta para hex
//     return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
//   }

  return (
    <footer style={{ fontFamily: theme.fonts.body }}>
      <div style={{ backgroundColor: theme.colors.background }}>
        {/* Faixa superior */}
        <div className="py-10" style={{ backgroundColor: theme.colors.primary }}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h2
                  className="text-2xl font-serif uppercase tracking-wide mb-2"
                  style={{ color: theme.colors.buttonText, fontFamily: theme.fonts.heading }}
                >
                  TRADIÇÃO EM BARBEARIA DESDE 1995
                </h2>
                <p style={{ color: theme.colors.buttonText }}>
                  Oferecemos serviços de alta qualidade com a excelência que você merece.
                </p>
              </div>

              <motion.a
                href="#booking"
                className="inline-flex items-center px-8 py-3 border-2 uppercase tracking-wide font-serif"
                style={{
                  borderColor: theme.colors.buttonText,
                  color: theme.colors.buttonText,
                }}
                whileHover={{ backgroundColor: `${theme.colors.buttonText}20` }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar size={18} className="mr-2" />
                <span>Agende seu horário</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Coluna 1: Logo e Descrição */}
            <div className="md:col-span-4">
              <div className="flex flex-col items-center md:items-start">
                <div className="mb-6">
                  {/* <Logo3D scale={1.8} /> */}
                </div>

                <h3
                  className="text-xl font-serif uppercase tracking-wide mb-4 pb-2 border-b w-full text-center md:text-left"
                  style={{
                    color: theme.colors.primary,
                    borderColor: theme.colors.secondary,
                    fontFamily: theme.fonts.heading,
                  }}
                >
                  SOBRE NÓS
                </h3>

                <p className="mb-6 text-center md:text-left font-serif" style={{ color: theme.colors.textSecondary }}>
                  Nossa barbearia é um espaço dedicado ao cuidado masculino, onde tradição e qualidade se encontram.
                  Fundada em 1995, mantemos o compromisso com a excelência e o atendimento personalizado.
                </p>

                <div className="flex justify-center md:justify-start space-x-6 mb-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
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

                <div className="w-full border-t pt-4" style={{ borderColor: theme.colors.secondary }}>
                  <p className="italic text-center md:text-left" style={{ color: theme.colors.textSecondary }}>
                    "A excelência não é um ato, mas um hábito."
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna 2: Serviços */}
            <div className="md:col-span-2">
              <h3
                className="text-lg font-serif uppercase tracking-wide mb-4 pb-2 border-b"
                style={{
                  color: theme.colors.text,
                  borderColor: theme.colors.secondary,
                  fontFamily: theme.fonts.heading,
                }}
              >
                SERVIÇOS
              </h3>

              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#services"
                      className="block transition-colors duration-300 font-serif"
                      style={{ color: theme.colors.textSecondary }}
                    //   whileHover={{ color: theme.colors.primary }}
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3: Links */}
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
                    //   whileHover={{ color: theme.colors.primary }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 4: Contato */}
            <div className="md:col-span-4">
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

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin size={20} className="mt-1 mr-3 flex-shrink-0" style={{ color: theme.colors.primary }} />
                  <div>
                    <p className="font-serif" style={{ color: theme.colors.text }}>
                      ENDEREÇO:
                    </p>
                    <p style={{ color: theme.colors.textSecondary }}>
                      Rua dos Cabelos, 123, Bairro Estilo - São Paulo, SP
                    </p>
                    <p style={{ color: theme.colors.textSecondary }}>CEP: 01234-567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone size={20} className="mt-1 mr-3 flex-shrink-0" style={{ color: theme.colors.primary }} />
                  <div>
                    <p className="font-serif" style={{ color: theme.colors.text }}>
                      TELEFONE:
                    </p>
                    <p style={{ color: theme.colors.textSecondary }}>(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail size={20} className="mt-1 mr-3 flex-shrink-0" style={{ color: theme.colors.primary }} />
                  <div>
                    <p className="font-serif" style={{ color: theme.colors.text }}>
                      EMAIL:
                    </p>
                    <p style={{ color: theme.colors.textSecondary }}>contato@barbearia.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="border p-4 text-center" style={{ borderColor: theme.colors.secondary }}>
                  <p className="font-serif uppercase" style={{ color: theme.colors.text }}>
                    SEGUNDA - SEXTA
                  </p>
                  <p className="font-bold" style={{ color: theme.colors.primary }}>
                    9h - 19h
                  </p>
                </div>

                <div className="border p-4 text-center" style={{ borderColor: theme.colors.secondary }}>
                  <p className="font-serif uppercase" style={{ color: theme.colors.text }}>
                    SÁBADO
                  </p>
                  <p className="font-bold" style={{ color: theme.colors.primary }}>
                    9h - 17h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright e Créditos */}
        <div
          className="py-4 text-center"
          style={{ backgroundColor: theme.colors.primary, color: theme.colors.buttonText }}
        >
          <div className="container mx-auto px-4">
            <p className="text-sm font-serif">
              &copy; {new Date().getFullYear()} BARBERSHOP | TODOS OS DIREITOS RESERVADOS | DESENVOLVIDO POR{" "}
              <a
                href="https://guikbit-portifolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                // whileHover={{ textDecoration: "none" }}
              >
                GUIKBIT
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default MasculinoClassicoFooter

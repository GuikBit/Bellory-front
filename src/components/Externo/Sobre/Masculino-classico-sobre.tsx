"use client"

import { motion } from "framer-motion"
import { Crown, Award, Scissors, MapPin, Phone, Mail, BookOpen } from "lucide-react"
import { themes } from "../../../theme/theme"
const MasculinoClassicoSobre = () => {
  const theme = themes.masculinoClassico

  const teamMembers = [
    {
      name: "Giovanni Rossi",
      role: "Mestre Barbeiro & Fundador",
      experience: "25 anos",
      specialty: "Técnicas tradicionais italianas",
    },
    {
      name: "Eduardo Gentleman",
      role: "Barbeiro Sênior",
      experience: "18 anos",
      specialty: "Barbas clássicas e bigodes",
    },
    {
      name: "Ricardo Vintage",
      role: "Especialista em Estilo",
      experience: "12 anos",
      specialty: "Cortes vintage e pompadour",
    },
    {
      name: "Antonio Classic",
      role: "Consultor de Elegância",
      experience: "15 anos",
      specialty: "Etiqueta e protocolo masculino",
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.background }}>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Barbearia clássica"
            className="w-full h-full object-cover opacity-30 sepia"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/60 to-transparent"></div>
        </div>

        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{
              color: theme.colors.primary,
              fontFamily: theme.fonts.heading,
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Nossa Tradição
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto italic"
            style={{ color: theme.colors.textSecondary }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            "Onde a elegância atemporal encontra a excelência artesanal"
          </motion.p>
        </motion.div>

        {/* Floating Vintage Elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 rounded-full overflow-hidden opacity-70"
          style={{
            border: `3px solid ${theme.colors.secondary}`,
            boxShadow: `0 0 20px ${theme.colors.secondary}30`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        >
          <img
            src="/placeholder.svg?height=200&width=200"
            alt="Vintage tools"
            className="w-full h-full object-cover sepia"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-16 w-28 h-28 rounded-lg overflow-hidden opacity-60"
          style={{
            border: `2px solid ${theme.colors.primary}`,
            transform: "rotate(15deg)",
          }}
          animate={{
            y: [0, 15, 0],
            rotate: [15, 25, 15],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        >
          <img
            src="/placeholder.svg?height=150&width=150"
            alt="Vintage chair"
            className="w-full h-full object-cover sepia"
          />
        </motion.div>
      </div>

      {/* História Section */}
      <div className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center mb-8">
                <motion.div
                  className="h-px w-24"
                  style={{ backgroundColor: theme.colors.secondary }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                ></motion.div>
                <motion.div
                  animate={{
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Scissors className="mx-4" size={24} style={{ color: theme.colors.primary }} />
                </motion.div>
                <motion.div
                  className="h-px w-24"
                  style={{ backgroundColor: theme.colors.secondary }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                ></motion.div>
              </div>

              <h2
                className="text-4xl font-bold mb-6"
                style={{
                  color: theme.colors.primary,
                  fontFamily: theme.fonts.heading,
                }}
              >
                Nossa Herança
              </h2>

              <p className="text-lg mb-6 leading-relaxed italic" style={{ color: theme.colors.textSecondary }}>
                Fundada em 1995 por Giovanni Rossi, nossa barbearia carrega a tradição familiar de três gerações de
                mestres barbeiros italianos. Começamos como um pequeno estabelecimento no coração da cidade, preservando
                técnicas centenárias.
              </p>

              <p className="text-lg mb-6 leading-relaxed italic" style={{ color: theme.colors.textSecondary }}>
                Ao longo de quase três décadas, mantivemos nosso compromisso com a excelência artesanal, transformando
                cada visita em uma experiência de refinamento e distinção para o verdadeiro cavalheiro.
              </p>

              <motion.button
                className="px-8 py-3 rounded-md font-medium flex items-center gap-2 border-2"
                style={{
                  backgroundColor: "transparent",
                  color: theme.colors.primary,
                  borderColor: theme.colors.primary,
                  fontFamily: theme.fonts.heading,
                }}
                whileHover={{
                  backgroundColor: theme.colors.primary,
                  color: "white",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen size={18} />
                Nossa História Completa
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="relative">
                <motion.div
                  className="w-full h-96 rounded-lg overflow-hidden"
                  style={{
                    border: `3px solid ${theme.colors.secondary}`,
                    boxShadow: `0 15px 35px -5px rgba(0,0,0,0.2)`,
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src="/placeholder.svg?height=600&width=500"
                    alt="Fundador Giovanni"
                    className="w-full h-full object-cover sepia"
                  />
                </motion.div>

                <motion.div
                  className="absolute -top-6 -right-6 w-24 h-24 rounded-full overflow-hidden"
                  style={{
                    border: `2px solid ${theme.colors.primary}`,
                    backgroundColor: theme.colors.cardBackground,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <Crown size={32} style={{ color: theme.colors.primary }} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Vintage Elements */}
        <motion.div
          className="absolute top-32 right-32 w-20 h-20 rounded-full overflow-hidden opacity-50"
          style={{ border: `2px solid ${theme.colors.secondary}` }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        >
          <img
            src="/placeholder.svg?height=120&width=120"
            alt="Vintage logo"
            className="w-full h-full object-cover sepia"
          />
        </motion.div>
      </div>

      {/* Espaço Section */}
      <div className="py-20" style={{ backgroundColor: theme.colors.cardBackground }}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2
              className="text-4xl font-bold mb-6"
              style={{
                color: theme.colors.primary,
                fontFamily: theme.fonts.heading,
              }}
            >
              Nosso Santuário
            </h2>
            <p className="text-xl max-w-3xl mx-auto italic" style={{ color: theme.colors.textSecondary }}>
              Um ambiente que respira elegância e tradição em cada detalhe
            </p>
          </motion.div>

          {/* Classic Gallery Grid */}
          <div className="grid grid-cols-12 gap-6 h-[800px]">
            <motion.div
              className="col-span-5 row-span-2 relative overflow-hidden rounded-lg"
              style={{
                border: `3px solid ${theme.colors.secondary}`,
                boxShadow: `0 20px 40px -10px rgba(0,0,0,0.15)`,
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/placeholder.svg?height=500&width=350"
                alt="Salão principal clássico"
                className="w-full h-full object-cover sepia"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold">Salão Principal</h3>
                <p className="text-sm opacity-90 italic">Onde a tradição ganha vida</p>
              </div>
            </motion.div>

            <motion.div
              className="col-span-3 relative overflow-hidden rounded-lg"
              style={{ border: `2px solid ${theme.colors.primary}` }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Cadeira vintage"
                className="w-full h-full object-cover sepia"
              />
            </motion.div>

            <motion.div
              className="col-span-4 relative overflow-hidden rounded-lg"
              style={{ border: `2px solid ${theme.colors.secondary}` }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/placeholder.svg?height=200&width=250"
                alt="Biblioteca de cavalheiros"
                className="w-full h-full object-cover sepia"
              />
            </motion.div>

            <motion.div
              className="col-span-7 relative overflow-hidden rounded-lg"
              style={{
                border: `3px solid ${theme.colors.primary}`,
                boxShadow: `0 15px 30px -5px rgba(0,0,0,0.1)`,
              }}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/placeholder.svg?height=300&width=450"
                alt="Área VIP clássica"
                className="w-full h-full object-cover sepia"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-bold">Área VIP Gentleman</h3>
                <p className="text-sm opacity-90 italic">Exclusividade e requinte</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Equipe Section */}
      <div className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2
              className="text-4xl font-bold mb-6"
              style={{
                color: theme.colors.primary,
                fontFamily: theme.fonts.heading,
              }}
            >
              Nossos Mestres
            </h2>
            <p className="text-xl max-w-3xl mx-auto italic" style={{ color: theme.colors.textSecondary }}>
              Artesãos dedicados à arte da barbearia clássica
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative mb-6">
                  <motion.div
                    className="w-48 h-48 mx-auto rounded-lg overflow-hidden"
                    style={{
                      border: `3px solid ${theme.colors.secondary}`,
                      boxShadow: `0 10px 25px -5px rgba(0,0,0,0.15)`,
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={`/placeholder.svg?height=300&width=300`}
                      alt={member.name}
                      className="w-full h-full object-cover sepia"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-3 -right-3 w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: theme.colors.primary,
                      border: `2px solid ${theme.colors.cardBackground}`,
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                      scale: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                    }}
                  >
                    <Award size={20} color="white" />
                  </motion.div>
                </div>

                <h3
                  className="text-xl font-bold mb-2"
                  style={{
                    color: theme.colors.text,
                    fontFamily: theme.fonts.heading,
                  }}
                >
                  {member.name}
                </h3>
                <p className="text-lg font-semibold mb-2" style={{ color: theme.colors.primary }}>
                  {member.role}
                </p>
                <p className="text-sm mb-2" style={{ color: theme.colors.textSecondary }}>
                  {member.experience} de tradição
                </p>
                <p className="text-sm italic" style={{ color: theme.colors.textSecondary }}>
                  {member.specialty}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Classic Elements */}
        <motion.div
          className="absolute top-20 left-20 w-28 h-28 rounded-lg overflow-hidden opacity-40"
          style={{
            border: `2px solid ${theme.colors.primary}`,
            transform: "rotate(-15deg)",
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [-15, -5, -15],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
        >
          <img
            src="/placeholder.svg?height=150&width=150"
            alt="Team vintage"
            className="w-full h-full object-cover sepia"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-16 w-32 h-20 rounded-lg overflow-hidden opacity-50"
          style={{ border: `2px solid ${theme.colors.secondary}` }}
          animate={{
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 3 }}
        >
          <img
            src="/placeholder.svg?height=120&width=180"
            alt="Team tradition"
            className="w-full h-full object-cover sepia"
          />
        </motion.div>
      </div>

      {/* Contact Info */}
      <div className="py-16" style={{ backgroundColor: theme.colors.cardBackground }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <MapPin size={32} style={{ color: theme.colors.primary }} className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2" style={{ color: theme.colors.text }}>
                Endereço Tradicional
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                Rua dos Cavalheiros, 1895
                <br />
                Centro Histórico, São Paulo - SP
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Phone size={32} style={{ color: theme.colors.primary }} className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2" style={{ color: theme.colors.text }}>
                Contato Direto
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                (11) 97777-7777
                <br />
                (11) 2222-2222
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Mail size={32} style={{ color: theme.colors.primary }} className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2" style={{ color: theme.colors.text }}>
                Correspondência
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                classico@barbearia.com
                <br />
                gentleman@barbearia.com
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MasculinoClassicoSobre

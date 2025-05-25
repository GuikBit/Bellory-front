"use client"

import { motion } from "framer-motion"
import { Scissors, Target, MapPin, Phone, Mail } from "lucide-react"
import { themes } from "../../theme/theme"

const MasculineDefaultSobre = () => {
  const theme = themes.masculine_default

  const teamMembers = [
    {
      name: "Marcus Silva",
      role: "Fundador & Master Barber",
      experience: "15 anos",
      specialty: "Cortes clássicos e modernos",
    },
    {
      name: "Diego Santos",
      role: "Senior Barber",
      experience: "8 anos",
      specialty: "Barbas e bigodes",
    },
    {
      name: "Rafael Costa",
      role: "Barber Specialist",
      experience: "5 anos",
      specialty: "Cortes degradê",
    },
    {
      name: "Bruno Lima",
      role: "Style Consultant",
      experience: "6 anos",
      specialty: "Consultoria de estilo",
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.background }}>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Barbearia Interior"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>

        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold uppercase tracking-wider mb-6"
            style={{
              color: theme.colors.primary,
              fontFamily: theme.fonts.heading,
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            NOSSA HISTÓRIA
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{ color: theme.colors.textSecondary }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Mais que uma barbearia, somos um templo da masculinidade moderna
          </motion.p>
        </motion.div>

        {/* Floating Images */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 rounded-lg overflow-hidden opacity-80"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        >
          <img src="/placeholder.svg?height=200&width=200" alt="Barber tools" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-16 w-24 h-24 rounded-full overflow-hidden opacity-70"
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        >
          <img src="/placeholder.svg?height=150&width=150" alt="Vintage chair" className="w-full h-full object-cover" />
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
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-8">
                <motion.div
                  className="h-1 w-16"
                  style={{ backgroundColor: theme.colors.primary }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                ></motion.div>
                <Scissors className="mx-4" size={24} style={{ color: theme.colors.primary }} />
                <motion.div
                  className="h-1 w-16"
                  style={{ backgroundColor: theme.colors.primary }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                ></motion.div>
              </div>

              <h2
                className="text-4xl font-bold uppercase mb-6"
                style={{
                  color: theme.colors.text,
                  fontFamily: theme.fonts.heading,
                }}
              >
                NOSSA JORNADA
              </h2>

              <p className="text-lg mb-6 leading-relaxed" style={{ color: theme.colors.textSecondary }}>
                Fundada em 2016 por Marcus Silva, nossa barbearia nasceu do sonho de criar um espaço onde homens
                pudessem se reconectar com sua essência masculina. Começamos em um pequeno espaço de 30m², mas com
                grandes ambições.
              </p>

              <p className="text-lg mb-6 leading-relaxed" style={{ color: theme.colors.textSecondary }}>
                Ao longo dos anos, expandimos não apenas em tamanho, mas em propósito. Hoje, somos referência em cortes
                masculinos, combinando técnicas tradicionais com tendências contemporâneas.
              </p>

              <motion.button
                className="px-8 py-3 rounded font-bold uppercase tracking-wider flex items-center gap-2"
                style={{
                  backgroundColor: theme.colors.primary,
                  color: "white",
                  fontFamily: theme.fonts.heading,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Target size={18} />
                NOSSA MISSÃO
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=500"
                  alt="Fundador da barbearia"
                  className="w-full rounded-lg shadow-2xl"
                />
                <motion.div
                  className="absolute -top-8 -right-8 w-32 h-32 rounded-lg overflow-hidden"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Awards"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-32 right-32 w-20 h-20 rounded-full overflow-hidden opacity-60"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
        >
          <img src="/placeholder.svg?height=120&width=120" alt="Vintage logo" className="w-full h-full object-cover" />
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
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl font-bold uppercase mb-6"
              style={{
                color: theme.colors.text,
                fontFamily: theme.fonts.heading,
              }}
            >
              NOSSO ESPAÇO
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: theme.colors.textSecondary }}>
              Um ambiente projetado para despertar sua confiança e poder interior
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-12 gap-4 h-[800px]">
            <motion.div
              className="col-span-5 row-span-2 relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Interior principal"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Salão Principal</h3>
                <p className="text-sm opacity-80">Ambiente moderno e acolhedor</p>
              </div>
            </motion.div>

            <motion.div
              className="col-span-3 relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Cadeira vintage"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="col-span-4 relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/placeholder.svg?height=200&width=250"
                alt="Área de espera"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="col-span-7 relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Estações de trabalho"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">Estações Premium</h3>
                <p className="text-sm opacity-80">Equipamentos de última geração</p>
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
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl font-bold uppercase mb-6"
              style={{
                color: theme.colors.text,
                fontFamily: theme.fonts.heading,
              }}
            >
              NOSSA EQUIPE
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: theme.colors.textSecondary }}>
              Profissionais apaixonados pela arte da barbearia
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative mb-6">
                  <motion.div
                    className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4"
                    style={{ borderColor: theme.colors.primary }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={`/placeholder.svg?height=300&width=300`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: theme.colors.primary }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Scissors size={20} color="white" />
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
                  {member.experience} de experiência
                </p>
                <p className="text-sm italic" style={{ color: theme.colors.textSecondary }}>
                  {member.specialty}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Team Photos */}
        <motion.div
          className="absolute top-20 left-20 w-24 h-24 rounded-full overflow-hidden opacity-40"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
        >
          <img src="/placeholder.svg?height=150&width=150" alt="Team work" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-16 w-32 h-20 rounded-lg overflow-hidden opacity-50"
          animate={{
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 3 }}
        >
          <img
            src="/placeholder.svg?height=120&width=180"
            alt="Team celebration"
            className="w-full h-full object-cover"
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
              transition={{ duration: 0.6 }}
            >
              <MapPin size={32} style={{ color: theme.colors.primary }} className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2" style={{ color: theme.colors.text }}>
                LOCALIZAÇÃO
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                Rua das Barbas, 123
                <br />
                Centro, São Paulo - SP
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Phone size={32} style={{ color: theme.colors.primary }} className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2" style={{ color: theme.colors.text }}>
                TELEFONE
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                (11) 99999-9999
                <br />
                (11) 3333-3333
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Mail size={32} style={{ color: theme.colors.primary }} className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2" style={{ color: theme.colors.text }}>
                EMAIL
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                contato@barbearia.com
                <br />
                agendamento@barbearia.com
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MasculineDefaultSobre

"use client"

import { motion } from "framer-motion"
import { Heart, Flower, MapPin, Phone, Mail, Sparkles } from "lucide-react"
import { themes } from "../../theme/theme"

const FemininoEleganteSobre = () => {
  const theme = themes.femininoElegante

  const teamMembers = [
    {
      name: "Isabella Rosé",
      role: "Fundadora & Master Stylist",
      experience: "20 anos",
      specialty: "Cortes femininos sofisticados",
    },
    {
      name: "Sophia Elegance",
      role: "Senior Hair Artist",
      experience: "15 anos",
      specialty: "Coloração e tratamentos",
    },
    {
      name: "Valentina Grace",
      role: "Beauty Specialist",
      experience: "12 anos",
      specialty: "Penteados para eventos",
    },
    {
      name: "Aurora Belle",
      role: "Wellness Consultant",
      experience: "10 anos",
      specialty: "Cuidados holísticos",
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.background }}>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundColor: theme.colors.accent }}>
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Salão elegante"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-100/30 to-transparent"></div>
        </div>

        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-light mb-6"
            style={{
              color: theme.colors.primary,
              fontFamily: theme.fonts.heading,
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Nossa Essência
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto italic"
            style={{ color: theme.colors.textSecondary }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            "Onde a beleza encontra a alma e desperta a verdadeira elegância"
          </motion.p>
        </motion.div>

        {/* Floating Elegant Elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 rounded-full overflow-hidden opacity-60"
          style={{
            border: `3px solid ${theme.colors.primary}`,
            boxShadow: `0 0 30px ${theme.colors.primary}30`,
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
        >
          <img src="/placeholder.svg?height=200&width=200" alt="Elegant tools" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-16 w-28 h-28 rounded-lg overflow-hidden opacity-50"
          style={{
            border: `2px solid ${theme.colors.primary}`,
            transform: "rotate(15deg)",
          }}
          animate={{
            y: [0, 20, 0],
            rotate: [15, 25, 15],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        >
          <img src="/placeholder.svg?height=150&width=150" alt="Elegant chair" className="w-full h-full object-cover" />
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
                  className="h-px w-20"
                  style={{ backgroundColor: theme.colors.primary }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                ></motion.div>
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 4, repeat: Number.POSITIVE_INFINITY },
                  }}
                >
                  <Flower className="mx-4" size={24} style={{ color: theme.colors.primary }} />
                </motion.div>
                <motion.div
                  className="h-px w-20"
                  style={{ backgroundColor: theme.colors.primary }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                ></motion.div>
              </div>

              <h2
                className="text-4xl font-light mb-6"
                style={{
                  color: theme.colors.text,
                  fontFamily: theme.fonts.heading,
                }}
              >
                Nossa Jornada
              </h2>

              <p className="text-lg mb-6 leading-relaxed italic" style={{ color: theme.colors.textSecondary }}>
                Fundado em 2010 por Isabella Rosé, nosso salão nasceu do sonho de criar um santuário de beleza onde cada
                mulher pudesse descobrir e celebrar sua elegância única. Começamos em um charmoso espaço de 50m²,
                inspirado nos salões parisienses.
              </p>

              <p className="text-lg mb-6 leading-relaxed italic" style={{ color: theme.colors.textSecondary }}>
                Ao longo dos anos, cultivamos uma filosofia de cuidado que vai além da aparência, tocando a alma e
                despertando a confiança interior de cada cliente que nos honra com sua presença.
              </p>

              <motion.button
                className="px-8 py-3 rounded-lg font-medium flex items-center gap-2 border"
                style={{
                  backgroundColor: `${theme.colors.primary}10`,
                  color: theme.colors.primary,
                  borderColor: theme.colors.primary,
                  fontFamily: theme.fonts.heading,
                }}
                whileHover={{
                  backgroundColor: theme.colors.primary,
                  color: "white",
                  boxShadow: `0 10px 25px -5px ${theme.colors.primary}30`,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart size={18} />
                Nossa Filosofia
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
                    border: `3px solid ${theme.colors.primary}`,
                    boxShadow: `0 20px 40px -10px ${theme.colors.primary}20`,
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src="/placeholder.svg?height=600&width=500"
                    alt="Fundadora Isabella"
                    className="w-full h-full object-cover"
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
                    scale: [1, 1.15, 1],
                  }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <Sparkles size={32} style={{ color: theme.colors.primary }} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elegant Elements */}
        <motion.div
          className="absolute top-32 right-32 w-20 h-20 rounded-full overflow-hidden opacity-40"
          style={{ border: `2px solid ${theme.colors.primary}` }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            y: [0, -20, 0],
          }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY }}
        >
          <img src="/placeholder.svg?height=120&width=120" alt="Elegant logo" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      {/* Espaço Section */}
      <div className="py-20" style={{ backgroundColor: theme.colors.accent }}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2
              className="text-4xl font-light mb-6"
              style={{
                color: theme.colors.text,
                fontFamily: theme.fonts.heading,
              }}
            >
              Nosso Santuário
            </h2>
            <p className="text-xl max-w-3xl mx-auto italic" style={{ color: theme.colors.textSecondary }}>
              Um refúgio de beleza onde cada detalhe sussurra elegância
            </p>
          </motion.div>

          {/* Elegant Gallery Grid */}
          <div className="grid grid-cols-12 gap-6 h-[800px]">
            <motion.div
              className="col-span-5 row-span-2 relative overflow-hidden rounded-lg"
              style={{
                border: `3px solid ${theme.colors.primary}`,
                boxShadow: `0 25px 50px -10px ${theme.colors.primary}20`,
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/placeholder.svg?height=500&width=350"
                alt="Salão principal elegante"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold">Salão Principal</h3>
                <p className="text-sm opacity-90 italic">Onde a magia acontece</p>
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
                alt="Estação de cuidados"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="col-span-4 relative overflow-hidden rounded-lg"
              style={{ border: `2px solid ${theme.colors.primary}` }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/placeholder.svg?height=200&width=250"
                alt="Área de relaxamento"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="col-span-7 relative overflow-hidden rounded-lg"
              style={{
                border: `3px solid ${theme.colors.primary}`,
                boxShadow: `0 20px 40px -10px ${theme.colors.primary}15`,
              }}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/placeholder.svg?height=300&width=450"
                alt="Spa privativo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-900/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-semibold">Spa Privativo</h3>
                <p className="text-sm opacity-90 italic">Experiência exclusiva de bem-estar</p>
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
              className="text-4xl font-light mb-6"
              style={{
                color: theme.colors.text,
                fontFamily: theme.fonts.heading,
              }}
            >
              Nossas Artistas
            </h2>
            <p className="text-xl max-w-3xl mx-auto italic" style={{ color: theme.colors.textSecondary }}>
              Especialistas dedicadas à arte da beleza feminina
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
                    className="w-48 h-48 mx-auto rounded-full overflow-hidden"
                    style={{
                      border: `3px solid ${theme.colors.primary}`,
                      boxShadow: `0 15px 30px -5px ${theme.colors.primary}20`,
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={`/placeholder.svg?height=300&width=300`}
                      alt={member.name}
                      className="w-full h-full object-cover"
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
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      rotate: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                      scale: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                    }}
                  >
                    <Heart size={20} color="white" />
                  </motion.div>
                </div>

                <h3
                  className="text-xl font-semibold mb-2"
                  style={{
                    color: theme.colors.text,
                    fontFamily: theme.fonts.heading,
                  }}
                >
                  {member.name}
                </h3>
                <p className="text-lg font-medium mb-2" style={{ color: theme.colors.primary }}>
                  {member.role}
                </p>
                <p className="text-sm mb-2" style={{ color: theme.colors.textSecondary }}>
                  {member.experience} de dedicação
                </p>
                <p className="text-sm italic" style={{ color: theme.colors.textSecondary }}>
                  {member.specialty}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Elegant Team Elements */}
        <motion.div
          className="absolute top-20 left-20 w-28 h-28 rounded-full overflow-hidden opacity-30"
          style={{
            border: `2px solid ${theme.colors.primary}`,
            transform: "rotate(-10deg)",
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [-10, 10, -10],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
        >
          <img src="/placeholder.svg?height=150&width=150" alt="Team elegance" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-16 w-32 h-20 rounded-lg overflow-hidden opacity-40"
          style={{ border: `2px solid ${theme.colors.primary}` }}
          animate={{
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 3 }}
        >
          <img src="/placeholder.svg?height=120&width=180" alt="Team harmony" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      {/* Contact Info */}
      <div className="py-16" style={{ backgroundColor: theme.colors.accent }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <MapPin size={32} style={{ color: theme.colors.primary }} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2" style={{ color: theme.colors.text }}>
                Localização Encantadora
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                Rua das Flores, 456
                <br />
                Jardins, São Paulo - SP
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Phone size={32} style={{ color: theme.colors.primary }} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2" style={{ color: theme.colors.text }}>
                Contato Carinhoso
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                (11) 96666-6666
                <br />
                (11) 1111-1111
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Mail size={32} style={{ color: theme.colors.primary }} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2" style={{ color: theme.colors.text }}>
                Mensagem Especial
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                elegante@salao.com
                <br />
                beleza@salao.com
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FemininoEleganteSobre

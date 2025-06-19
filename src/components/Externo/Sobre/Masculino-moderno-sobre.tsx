"use client"

import { motion } from "framer-motion"
import { Zap, Users, Target, Hexagon, ArrowRight, MapPin, Phone, Mail, Cpu, Wifi, Smartphone } from "lucide-react"
import { themes } from "../../../theme/theme"


const MasculinoModernoSobre = () => {
  const theme = themes.masculinoModerno

  const teamMembers = [
    {
      name: "Alex Cyber",
      role: "Tech Founder & Master Stylist",
      experience: "12 anos",
      specialty: "Cortes futuristas e tecnologia",
    },
    {
      name: "Neo Matrix",
      role: "Digital Barber",
      experience: "9 anos",
      specialty: "Designs geométricos",
    },
    {
      name: "Kai Neon",
      role: "Style Engineer",
      experience: "7 anos",
      specialty: "Cortes com precisão digital",
    },
    {
      name: "Zion Tech",
      role: "Innovation Specialist",
      experience: "5 anos",
      specialty: "Tendências futuristas",
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.background }}>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-cyan-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        </div>

        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold uppercase tracking-widest mb-6"
            style={{
              color: theme.colors.accent,
              fontFamily: theme.fonts.heading,
              textShadow: `0 0 30px ${theme.colors.accent}50`,
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            NOSSA EVOLUÇÃO
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{ color: theme.colors.textSecondary }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Redefinindo o futuro dos cuidados masculinos através da tecnologia
          </motion.p>
        </motion.div>

        {/* Floating Tech Elements */}
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 rounded-lg overflow-hidden"
          style={{
            background: `linear-gradient(45deg, ${theme.colors.primary}, ${theme.colors.accent})`,
            backdropFilter: "blur(10px)",
          }}
          animate={{
            y: [0, -30, 0],
            rotateY: [0, 180, 360],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <Cpu size={60} style={{ color: "white" }} />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-16 w-32 h-32 rounded-full overflow-hidden"
          style={{
            background: `radial-gradient(circle, ${theme.colors.accent}, ${theme.colors.primary})`,
            backdropFilter: "blur(15px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <Hexagon size={40} style={{ color: "white" }} />
          </div>
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
                  className="h-1 w-20 rounded-full"
                  style={{ backgroundColor: theme.colors.accent }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                ></motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Zap className="mx-4" size={28} style={{ color: theme.colors.accent }} />
                </motion.div>
                <motion.div
                  className="h-1 w-20 rounded-full"
                  style={{ backgroundColor: theme.colors.accent }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                ></motion.div>
              </div>

              <h2
                className="text-4xl font-bold uppercase tracking-widest mb-6"
                style={{
                  color: theme.colors.text,
                  fontFamily: theme.fonts.heading,
                }}
              >
                NOSSA REVOLUÇÃO
              </h2>

              <p className="text-lg mb-6 leading-relaxed" style={{ color: theme.colors.textSecondary }}>
                Em 2018, Alex Cyber fundou nossa barbearia com uma visão revolucionária: combinar a tradição da
                barbearia com tecnologia de ponta. Começamos como um laboratório de inovação em um espaço de 40m².
              </p>

              <p className="text-lg mb-6 leading-relaxed" style={{ color: theme.colors.textSecondary }}>
                Hoje, somos pioneiros em técnicas digitais de corte, realidade aumentada para visualização de estilos e
                sistemas de agendamento inteligente. O futuro chegou à barbearia.
              </p>

              <motion.button
                className="px-8 py-3 rounded-lg font-bold uppercase tracking-widest flex items-center gap-2"
                style={{
                  backgroundColor: theme.colors.accent,
                  color: "white",
                  fontFamily: theme.fonts.heading,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 10px 25px -5px ${theme.colors.accent}40`,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight size={18} />
                NOSSA TECNOLOGIA
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
                <motion.div
                  className="w-full h-96 rounded-lg overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent})`,
                    backdropFilter: "blur(20px)",
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src="/placeholder.svg?height=600&width=500"
                    alt="Fundador tech"
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                </motion.div>

                <motion.div
                  className="absolute -top-8 -right-8 w-32 h-32 rounded-lg"
                  style={{
                    background: `radial-gradient(circle, ${theme.colors.accent}, transparent)`,
                    backdropFilter: "blur(10px)",
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <Wifi size={40} style={{ color: "white" }} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Tech Elements */}
        <motion.div
          className="absolute top-32 right-32 w-24 h-24 rounded-full"
          style={{
            background: `conic-gradient(from 0deg, ${theme.colors.primary}, ${theme.colors.accent}, ${theme.colors.primary})`,
            backdropFilter: "blur(15px)",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <Smartphone size={24} style={{ color: "white" }} />
          </div>
        </motion.div>
      </div>

      {/* Espaço Section */}
      <div className="py-20" style={{ backgroundColor: theme.colors.primary }}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl font-bold uppercase tracking-widest mb-6"
              style={{
                color: theme.colors.accent,
                fontFamily: theme.fonts.heading,
              }}
            >
              NOSSO LABORATÓRIO
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: theme.colors.textSecondary }}>
              Um ambiente futurista onde tecnologia e estilo se encontram
            </p>
          </motion.div>

          {/* Tech Gallery Grid */}
          <div className="grid grid-cols-12 gap-4 h-[800px]">
            <motion.div
              className="col-span-6 row-span-2 relative overflow-hidden rounded-lg"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.accent}20, ${theme.colors.primary}20)`,
                backdropFilter: "blur(20px)",
                border: `1px solid ${theme.colors.accent}30`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Estação futurista"
                className="w-full h-full object-cover mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Estação Digital</h3>
                <p className="text-sm opacity-80">Tecnologia de ponta integrada</p>
              </div>
            </motion.div>

            <motion.div
              className="col-span-3 relative overflow-hidden rounded-lg"
              style={{
                background: `radial-gradient(circle, ${theme.colors.accent}30, transparent)`,
                backdropFilter: "blur(15px)",
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Realidade aumentada"
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </motion.div>

            <motion.div
              className="col-span-3 relative overflow-hidden rounded-lg"
              style={{
                background: `linear-gradient(45deg, ${theme.colors.primary}40, ${theme.colors.accent}40)`,
                backdropFilter: "blur(10px)",
              }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Hologramas"
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </motion.div>

            <motion.div
              className="col-span-6 relative overflow-hidden rounded-lg"
              style={{
                background: `conic-gradient(from 45deg, ${theme.colors.accent}20, ${theme.colors.primary}20, ${theme.colors.accent}20)`,
                backdropFilter: "blur(25px)",
              }}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Área VIP tech"
                className="w-full h-full object-cover mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">Área VIP Tech</h3>
                <p className="text-sm opacity-80">Experiência premium digitalizada</p>
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
              className="text-4xl font-bold uppercase tracking-widest mb-6"
              style={{
                color: theme.colors.text,
                fontFamily: theme.fonts.heading,
              }}
            >
              NOSSA CREW TECH
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: theme.colors.textSecondary }}>
              Especialistas digitais em transformação masculina
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
                    className="w-48 h-48 mx-auto rounded-lg overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent})`,
                      backdropFilter: "blur(20px)",
                      border: `2px solid ${theme.colors.accent}`,
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={`/placeholder.svg?height=300&width=300`}
                      alt={member.name}
                      className="w-full h-full object-cover mix-blend-overlay"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: `radial-gradient(circle, ${theme.colors.accent}, ${theme.colors.primary})`,
                      backdropFilter: "blur(10px)",
                    }}
                    animate={{
                      rotate: 360,
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                      scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                    }}
                  >
                    <Hexagon size={20} color="white" />
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
                <p className="text-lg font-semibold mb-2" style={{ color: theme.colors.accent }}>
                  {member.role}
                </p>
                <p className="text-sm mb-2" style={{ color: theme.colors.textSecondary }}>
                  {member.experience} de inovação
                </p>
                <p className="text-sm italic" style={{ color: theme.colors.textSecondary }}>
                  {member.specialty}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Tech Team Elements */}
        <motion.div
          className="absolute top-20 left-20 w-28 h-28 rounded-lg"
          style={{
            background: `conic-gradient(from 0deg, ${theme.colors.accent}, transparent, ${theme.colors.primary})`,
            backdropFilter: "blur(15px)",
          }}
          animate={{
            rotate: [0, 360],
            y: [0, -40, 0],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <Users size={32} style={{ color: "white" }} />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-16 w-36 h-24 rounded-lg"
          style={{
            background: `linear-gradient(45deg, ${theme.colors.primary}60, ${theme.colors.accent}60)`,
            backdropFilter: "blur(20px)",
          }}
          animate={{
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 3 }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <Target size={28} style={{ color: "white" }} />
          </div>
        </motion.div>
      </div>

      {/* Contact Info */}
      <div className="py-16" style={{ backgroundColor: theme.colors.primary }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <MapPin size={32} style={{ color: theme.colors.accent }} className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2" style={{ color: theme.colors.accent }}>
                LOCALIZAÇÃO DIGITAL
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                Av. Futuro, 2025
                <br />
                Tech District, São Paulo - SP
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Phone size={32} style={{ color: theme.colors.accent }} className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2" style={{ color: theme.colors.accent }}>
                CONEXÃO DIRETA
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                (11) 98888-8888
                <br />
                (11) 4444-4444
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Mail size={32} style={{ color: theme.colors.accent }} className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2" style={{ color: theme.colors.accent }}>
                CANAL DIGITAL
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                tech@barbearia.com
                <br />
                future@barbearia.com
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MasculinoModernoSobre

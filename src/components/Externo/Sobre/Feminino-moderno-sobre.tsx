"use client"

import { motion } from "framer-motion"
import {
  Star,
  Users,
  Award,
  Sparkles,
  Zap,
  MapPin,
  Phone,
  Mail,
  Rocket,
  CloudLightningIcon as Lightning,
  Gem,
} from "lucide-react"
import { themes } from "../../../theme/theme"

const FemininoModernoSobre = () => {
  const theme = themes.femininoModerno

  const teamMembers = [
    {
      name: "Luna Power",
      role: "CEO & Creative Director",
      experience: "18 anos",
      specialty: "Transformações ousadas",
    },
    {
      name: "Nova Shine",
      role: "Lead Hair Artist",
      experience: "14 anos",
      specialty: "Cores vibrantes e cortes modernos",
    },
    {
      name: "Stella Bright",
      role: "Innovation Specialist",
      experience: "11 anos",
      specialty: "Técnicas revolucionárias",
    },
    {
      name: "Aria Bold",
      role: "Style Transformer",
      experience: "9 anos",
      specialty: "Empoderamento através da beleza",
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.background }}>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full"
            style={{
              background: `radial-gradient(circle at 30% 20%, ${theme.colors.primary}20, transparent 50%), radial-gradient(circle at 70% 80%, ${theme.colors.secondary}20, transparent 50%)`,
            }}
          ></div>
        </div>

        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{
              color: theme.colors.text,
              fontFamily: theme.fonts.heading,
              background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Nossa Revolução
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto font-bold"
            style={{ color: theme.colors.textSecondary }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Onde a beleza encontra a ousadia e desperta o poder feminino!
          </motion.p>
        </motion.div>

        {/* Floating Modern Elements */}
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 rounded-lg overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
            boxShadow: `0 0 40px ${theme.colors.primary}40`,
          }}
          animate={{
            y: [0, -30, 0],
            rotateY: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <Rocket size={60} style={{ color: "white" }} />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-16 w-32 h-32 rounded-full overflow-hidden"
          style={{
            background: `conic-gradient(from 0deg, ${theme.colors.primary}, ${theme.colors.secondary}, ${theme.colors.accent}, ${theme.colors.primary})`,
            boxShadow: `0 0 30px ${theme.colors.secondary}50`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <Lightning size={40} style={{ color: "white" }} />
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
                  style={{
                    background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                ></motion.div>
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    rotate: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                  }}
                >
                  <Sparkles className="mx-4" size={28} style={{ color: theme.colors.primary }} />
                </motion.div>
                <motion.div
                  className="h-1 w-20 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                ></motion.div>
              </div>

              <h2
                className="text-4xl font-bold mb-6"
                style={{
                  color: theme.colors.text,
                  fontFamily: theme.fonts.heading,
                }}
              >
                Nossa Energia
              </h2>

              <p className="text-lg mb-6 leading-relaxed font-bold" style={{ color: theme.colors.textSecondary }}>
                Em 2015, Luna Power revolucionou o conceito de salão de beleza ao criar um espaço que celebra a força e
                autenticidade feminina! Começamos com 60m² de pura energia transformadora.
              </p>

              <p className="text-lg mb-6 leading-relaxed font-bold" style={{ color: theme.colors.textSecondary }}>
                Nossa missão é empoderar cada mulher através da beleza autêntica, criando transformações que vão muito
                além do visual - despertamos a confiança e o brilho interior!
              </p>

              <motion.button
                className="px-8 py-3 rounded-lg font-bold flex items-center gap-2"
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                  color: "white",
                  fontFamily: theme.fonts.heading,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 15px 30px -10px ${theme.colors.primary}50`,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap size={18} />
                Nossa Missão
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
                    background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                    boxShadow: `0 25px 50px -10px ${theme.colors.primary}30`,
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src="/placeholder.svg?height=600&width=500"
                    alt="Fundadora Luna"
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
                    <Star size={40} style={{ color: "white" }} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Modern Elements */}
        <motion.div
          className="absolute top-32 right-32 w-24 h-24 rounded-full"
          style={{
            background: `conic-gradient(from 0deg, ${theme.colors.primary}, ${theme.colors.secondary}, ${theme.colors.accent}, ${theme.colors.primary})`,
            boxShadow: `0 0 25px ${theme.colors.primary}40`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            y: [0, -25, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <Gem size={24} style={{ color: "white" }} />
          </div>
        </motion.div>
      </div>

      {/* Espaço Section */}
      <div
        className="py-20"
        style={{
          background: `linear-gradient(135deg, ${theme.colors.cardBackground}, ${theme.colors.accent}20)`,
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl font-bold mb-6"
              style={{
                color: theme.colors.text,
                fontFamily: theme.fonts.heading,
              }}
            >
              Nosso Universo
            </h2>
            <p className="text-xl max-w-3xl mx-auto font-bold" style={{ color: theme.colors.textSecondary }}>
              Um espaço vibrante onde a criatividade e inovação se encontram!
            </p>
          </motion.div>

          {/* Modern Gallery Grid */}
          <div className="grid grid-cols-12 gap-4 h-[800px]">
            <motion.div
              className="col-span-6 row-span-2 relative overflow-hidden rounded-lg"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.primary}20, ${theme.colors.secondary}20)`,
                backdropFilter: "blur(20px)",
                border: `2px solid ${theme.colors.primary}30`,
                boxShadow: `0 25px 50px -10px ${theme.colors.primary}30`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Estação moderna"
                className="w-full h-full object-cover mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Estação Power</h3>
                <p className="text-sm opacity-80 font-bold">Onde a magia acontece!</p>
              </div>
            </motion.div>

            <motion.div
              className="col-span-3 relative overflow-hidden rounded-lg"
              style={{
                background: `radial-gradient(circle, ${theme.colors.secondary}30, transparent)`,
                backdropFilter: "blur(15px)",
                border: `1px solid ${theme.colors.secondary}40`,
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Área criativa"
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </motion.div>

            <motion.div
              className="col-span-3 relative overflow-hidden rounded-lg"
              style={{
                background: `linear-gradient(45deg, ${theme.colors.accent}40, ${theme.colors.primary}40)`,
                backdropFilter: "blur(10px)",
                border: `1px solid ${theme.colors.accent}50`,
              }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Zona de energia"
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </motion.div>

            <motion.div
              className="col-span-6 relative overflow-hidden rounded-lg"
              style={{
                background: `conic-gradient(from 45deg, ${theme.colors.primary}20, ${theme.colors.secondary}20, ${theme.colors.accent}20, ${theme.colors.primary}20)`,
                backdropFilter: "blur(25px)",
                border: `2px solid ${theme.colors.secondary}30`,
                boxShadow: `0 20px 40px -10px ${theme.colors.secondary}30`,
              }}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Lounge VIP"
                className="w-full h-full object-cover mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-900/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">Lounge VIP</h3>
                <p className="text-sm opacity-80 font-bold">Experiência premium exclusiva!</p>
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
              className="text-4xl font-bold mb-6"
              style={{
                color: theme.colors.text,
                fontFamily: theme.fonts.heading,
              }}
            >
              Nossa Squad
            </h2>
            <p className="text-xl max-w-3xl mx-auto font-bold" style={{ color: theme.colors.textSecondary }}>
              Especialistas em transformar sonhos em realidade!
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
                      background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                      backdropFilter: "blur(20px)",
                      border: `2px solid ${theme.colors.accent}`,
                      boxShadow: `0 20px 40px -10px ${theme.colors.primary}30`,
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
                    <Star size={20} color="white" />
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
                <p className="text-lg font-bold mb-2" style={{ color: theme.colors.primary }}>
                  {member.role}
                </p>
                <p className="text-sm mb-2 font-bold" style={{ color: theme.colors.textSecondary }}>
                  {member.experience} de transformação
                </p>
                <p className="text-sm font-bold" style={{ color: theme.colors.textSecondary }}>
                  {member.specialty}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Modern Team Elements */}
        <motion.div
          className="absolute top-20 left-20 w-28 h-28 rounded-lg"
          style={{
            background: `conic-gradient(from 0deg, ${theme.colors.primary}, transparent, ${theme.colors.secondary})`,
            backdropFilter: "blur(15px)",
            boxShadow: `0 0 30px ${theme.colors.primary}40`,
          }}
          animate={{
            rotate: [0, 360],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
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
            background: `linear-gradient(45deg, ${theme.colors.secondary}60, ${theme.colors.accent}60)`,
            backdropFilter: "blur(20px)",
            boxShadow: `0 0 25px ${theme.colors.secondary}50`,
          }}
          animate={{
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 3 }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <Award size={28} style={{ color: "white" }} />
          </div>
        </motion.div>
      </div>

      {/* Contact Info */}
      <div
        className="py-16"
        style={{
          background: `linear-gradient(135deg, ${theme.colors.cardBackground}, ${theme.colors.accent}30)`,
        }}
      >
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
                Localização Power
              </h3>
              <p style={{ color: theme.colors.textSecondary }} className="font-bold">
                Av. da Energia, 789
                <br />
                Vila Moderna, São Paulo - SP
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
                Conexão Direta
              </h3>
              <p style={{ color: theme.colors.textSecondary }} className="font-bold">
                (11) 95555-5555
                <br />
                (11) 0000-0000
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
                Canal Moderno
              </h3>
              <p style={{ color: theme.colors.textSecondary }} className="font-bold">
                moderno@salao.com
                <br />
                power@salao.com
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FemininoModernoSobre

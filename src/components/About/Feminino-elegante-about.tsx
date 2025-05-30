"use client"

import { motion } from "framer-motion"
import { Award, Users, Clock, Flower, Heart, Calendar, Calendar1, ArrowRight, Settings } from "lucide-react"
import { themes } from "../../theme/theme"
import EleganteSubTitleIcon from "../Fragments/Feminino/EleganteSubTitleIcon"
import EleganteSubTitle from "../Fragments/Feminino/EleganteSubTitleIcon"
import { BarbeariaButton } from "../ui"


const FemininoEleganteAbout = () => {
  const theme = themes.femininoElegante

  const stats = [
    { icon: Users, value: "5000+", label: "Mulheres Transformadas" },
    { icon: Award, value: "8", label: "Anos de Elegância" },
    { icon: Clock, value: "24/7", label: "Cuidado Contínuo" },
    { icon: Heart, value: "100%", label: "Satisfação Plena" },
  ]

  return (
    <div className="relative py-20" style={{ backgroundColor: theme.colors.accent }}>
      {/* Elegant decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0ZM50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10Z"
              fill={theme.colors.primary}
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L100 0L50 100L0 0Z" fill={theme.colors.primary} />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <EleganteSubTitle title="Sobre nos" />


            <motion.p
              className="text-lg mb-6 leading-relaxed italic"
              style={{
                color: theme.colors.textSecondary,
                fontFamily: theme.fonts.body,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Somos um santuário de beleza e elegância, onde cada mulher é tratada como uma verdadeira dama. Nossa
              paixão é realçar a beleza natural e despertar a confiança que existe em cada uma de nossas clientes.
            </motion.p>

            <motion.p
              className="text-lg mb-8 leading-relaxed italic"
              style={{
                color: theme.colors.textSecondary,
                fontFamily: theme.fonts.body,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Nossa missão é criar experiências transformadoras que celebram a feminilidade e a sofisticação, oferecendo
              tratamentos personalizados em um ambiente de pura elegância e refinamento.
            </motion.p>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                className="px-6 py-3 rounded-lg font-medium flex items-center gap-2 border"
                style={{
                  backgroundColor: `${theme.colors.primary}10`,
                  color: theme.colors.primary,
                  borderColor: theme.colors.primary,
                  borderRadius: theme.borderRadius.medium,
                  fontFamily: theme.fonts.heading,
                }}
                whileHover={{
                  backgroundColor: theme.colors.primary,
                  color: "white",
                  boxShadow: `0 10px 25px -5px ${theme.colors.primary}30`,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar size={18} />
                Nossa Jornada
              </motion.button>

              {/* <BarbeariaButton
                value="Nossa história"
                leftIcon={<Calendar size={20}/>}
                variant="primary"
                rounded="md"
                size="sm"
                onClick={() => window.location.href = "/agendamento"}
                className=""
                style={{
                }}
                // whileHover={{
                //   backgroundColor: theme.colors.primary,
                //   color: "white",
                //   boxShadow: `0 10px 25px -5px ${theme.colors.primary}30`,
                // }}
              />     */}

            <BarbeariaButton variant="primary" size="lg" rounded="full" leftIcon={<Heart />}>
              Curtir
            </BarbeariaButton>
            <BarbeariaButton variant="outline" size="sm" rounded="lg" rightIcon={<ArrowRight />}>
              Próximo
            </BarbeariaButton>
            <BarbeariaButton variant="ghost" size="xl" rounded="md" leftIcon={<Settings />} rightIcon={<ArrowRight />}>
              Configurar
            </BarbeariaButton>


            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg border"
                style={{
                  backgroundColor: theme.colors.cardBackground,
                  borderColor: theme.colors.primary,
                  borderRadius: theme.borderRadius.large,
                  boxShadow: `0 15px 30px -10px rgba(176, 141, 154, 0.15)`,
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                whileHover={{
                  y: -8,
                  boxShadow: `0 20px 40px -15px ${theme.colors.primary}30`,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="flex justify-center mb-4"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.8,
                  }}
                >
                  <stat.icon size={32} style={{ color: theme.colors.primary }} />
                </motion.div>
                <motion.h3
                  className="text-2xl font-semibold mb-2"
                  style={{
                    color: theme.colors.primary,
                    fontFamily: theme.fonts.heading,
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.6, type: "spring" }}
                >
                  {stat.value}
                </motion.h3>
                <p
                  className="text-sm font-medium"
                  style={{
                    color: theme.colors.textSecondary,
                    fontFamily: theme.fonts.body,
                  }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default FemininoEleganteAbout

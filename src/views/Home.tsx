"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Scissors, ChevronDown } from "lucide-react"
import background from "../assets/barbearia01.jpg"
import Produtos from "../components/Produtos"
import Servicos from "../components/Servicos"
import Agendamento from "../components/Agendamento"
import { useIsMobile } from "../hooks/useIsMobile"
import Logo3D from "../components/Fragments/Logo3D"
import Feedback from "../components/Feedback"
import PlanoAssinatura from "../components/PlanoAssinaturas"
import { useGlobalState } from "../global/ContextGlobalState"

const Home = () => {
  const isMobile = useIsMobile();
  const {setNovoAgendamento} = useGlobalState();
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  // Scroll para a próxima seção
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about-section")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="w-full min-h-screen relative bg-neutral-900 text-white">

      <motion.div
        ref={scrollRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity, scale }}
      >
        <div className="absolute inset-0 z-0">
          <motion.img
            src={background}
            alt="background"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Logo3D scale={isMobile ? 3 : 4} />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            ESTILO & TRADIÇÃO
          </motion.h1>

          <motion.div
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="h-[1px] w-12 bg-amber-500"></div>
            <Scissors className="mx-4 text-amber-500" size={24} />
            <div className="h-[1px] w-12 bg-amber-500"></div>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Onde a tradição encontra o estilo moderno. Experimente o melhor em cuidados masculinos.
          </motion.p>

          <motion.button
            className="mt-8 px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-medium transition-all duration-300 flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            onClick={()=>setNovoAgendamento(true)}
          >
            AGENDE AGORA
          </motion.button>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          onClick={scrollToNextSection}
        >
          <ChevronDown size={32} className="text-amber-500" />
        </motion.div>
      </motion.div>

      <section id="about-section" className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">SOBRE NÓS</h2>
            <div className="flex items-center justify-center mb-10">
              <div className="h-[1px] w-12 bg-amber-500"></div>
              <Scissors className="mx-4 text-amber-500" size={20} />
              <div className="h-[1px] w-12 bg-amber-500"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl">
              <motion.div
                className="relative overflow-hidden rounded-lg h-[400px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop"
                  alt="Barbearia interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">TRADIÇÃO</h3>
                  <p className="text-gray-300">Mais de 10 anos de excelência em cuidados masculinos</p>
                </div>
              </motion.div>

              <div className="flex flex-col justify-center space-y-6 text-gray-300">
                <p className="text-lg">
                  Fundada em 2014, nossa barbearia combina técnicas tradicionais com tendências modernas para oferecer o
                  melhor em cuidados masculinos.
                </p>
                <p className="text-lg">
                  Nossa equipe de barbeiros altamente qualificados é especializada em cortes clássicos e contemporâneos,
                  tratamentos de barba e serviços de grooming premium.
                </p>
                <p className="text-lg">
                  Mais que uma barbearia, somos um espaço onde homens podem relaxar, socializar e sair com confiança e
                  estilo renovados.
                </p>

                <motion.button
                  className="mt-4 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-medium transition-all duration-300 self-start"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  CONHEÇA NOSSA HISTÓRIA
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-neutral-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col items-center justify-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">NOSSOS SERVIÇOS</h2>
            <div className="flex items-center justify-center mb-4">
              <div className="h-[1px] w-12 bg-amber-500"></div>
              <Scissors className="mx-4 text-amber-500" size={20} />
              <div className="h-[1px] w-12 bg-amber-500"></div>
            </div>
            <p className="text-center text-gray-300 max-w-2xl">
              Oferecemos uma variedade de serviços premium para atender às suas necessidades de estilo e cuidados
              pessoais.
            </p>
          </motion.div>

          <Servicos />
        </div>
      </section>

      <PlanoAssinatura />

      <Feedback />

      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col items-center justify-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">NOSSOS PRODUTOS</h2>
            <div className="flex items-center justify-center mb-4">
              <div className="h-[1px] w-12 bg-amber-500"></div>
              <Scissors className="mx-4 text-amber-500" size={20} />
              <div className="h-[1px] w-12 bg-amber-500"></div>
            </div>
            <p className="text-center text-gray-300 max-w-2xl">
              Produtos premium para cuidados masculinos, selecionados para garantir os melhores resultados.
            </p>
          </motion.div>

          <Produtos />
        </div>
      </section>

      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col items-center justify-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">AGENDAMENTO RÁPIDO</h2>
            <div className="flex items-center justify-center mb-4">
              <div className="h-[1px] w-12 bg-amber-500"></div>
              <Scissors className="mx-4 text-amber-500" size={20} />
              <div className="h-[1px] w-12 bg-amber-500"></div>
            </div>
            <p className="text-center text-gray-300 max-w-2xl">
              Agende seu horário em poucos passos e garanta o melhor atendimento.
            </p>
          </motion.div>

          <div className="max-w-4xl h-auto mx-auto rounded-lg shadow-lg">
            <Agendamento />
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Home

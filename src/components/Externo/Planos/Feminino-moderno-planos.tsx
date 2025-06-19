"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X, Scissors, Crown, CreditCard, Star, ArrowRight } from 'lucide-react'
import { useTheme } from "../../../global/Theme-context"
import { BarbeariaButton } from "../../ui"


const FemininoModernoPlanos = () => {
  const { currentTheme } = useTheme()
  const [periodo, setPeriodo] = useState<"mensal" | "anual">("mensal")

  const planos = [
    {
      id: "basico",
      nome: "PLANO BÁSICO",
      descricaoBreve: "Cuidados essenciais para sua beleza",
      precoMensal: 79.90,
      precoAnual: 64.90, // preço mensal no plano anual
      icone: <Scissors size={28} color={currentTheme.colors.primary} />,
      destaque: false,
      beneficios: [
        "2 cortes de cabelo por mês",
        "1 tratamento capilar por mês",
        "10% de desconto em produtos",
        "Agendamento prioritário",
        "Chá ou espumante grátis durante o atendimento",
      ],
      naoIncluido: [
        "Produtos exclusivos",
        "Atendimento VIP",
        "Serviços premium",
        "Acesso a eventos exclusivos",
      ],
      className: "scale-90"
    },
    {
      id: "plus",
      nome: "PLANO PREMIUM",
      descricaoBreve: "Experiência completa de beleza e bem-estar",
      precoMensal: 129.90,
      precoAnual: 99.90, // preço mensal no plano anual
      icone: <Crown size={28} color={currentTheme.colors.primary} />,
      destaque: true,
      beneficios: [
        "Cortes de cabelo ilimitados",
        "2 tratamentos capilares por mês",
        "1 tratamento facial por mês",
        "20% de desconto em produtos",
        "Kit de produtos exclusivos trimestralmente",
        "Agendamento VIP com horários exclusivos",
        "Chá, espumante ou drink especial grátis durante o atendimento",
        "Acesso a eventos exclusivos para membros",
      ],
      naoIncluido: [],
      className: ""
    },
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>
      
      {/* Padrão geométrico moderno */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className="absolute h-[1px] w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
            style={{ top: `${i * 10}%`, left: 0, transform: `rotate(${i * 3}deg)` }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white" style={{ fontFamily: currentTheme.fonts.heading }}>
            PLANOS DE ASSINATURA
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="h-[2px] w-12 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <Star className="mx-4 text-purple-500" size={20} />
            <div className="h-[2px] w-12 bg-gradient-to-l from-purple-500 to-pink-500"></div>
          </div>
          <p className="text-center text-gray-300 max-w-2xl mb-8" style={{ fontFamily: currentTheme.fonts.body }}>
            Assine um de nossos planos e tenha acesso a benefícios exclusivos, economize em serviços e eleve sua
            experiência de beleza e bem-estar.
          </p>

          {/* Toggle de período */}
          <div className="flex items-center justify-center gap-4 p-1 rounded-full mb-8" style={{ border: `1px solid ${currentTheme.colors.primary}` }}>

            { periodo === "mensal" ? (
              <BarbeariaButton
              value="MENSAL"
              className="shadow-lg "
              style={{
                background: currentTheme.colors.backgroundLinear,
                color: 'white',
                fontSize: '15px',
                fontWeight: 'bold',
                borderRadius: '50px'
              }}
              onClick={() => setPeriodo("mensal")}
            />
            ):(
              <BarbeariaButton
                value="MENSAL"
                className="shadow-lg "
                style={{
                  background: '#efefef',
                  color: '#656565',
                  fontSize: '15px',
                  borderRadius: '50px'
                }}
                onClick={() => setPeriodo("mensal")}
              />
            )}

            { periodo === "anual" ? (
              <BarbeariaButton
                value="ANUAL"
                className="shadow-lg "
                style={{
                  background: currentTheme.colors.backgroundLinear,
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '15px',
                  borderRadius: '50px'
                }}
                onClick={() => setPeriodo("anual")}
              >
                <span className="ml-1 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">-20%</span>
              </BarbeariaButton>
            ):(
              <BarbeariaButton
                value="ANUAL"
                className="shadow-lg "
                style={{
                  background: '#efefef',
                  color: '#656565',
                  fontSize: '15px',
                  borderRadius: '50px'
                }}
                onClick={() => setPeriodo("anual")}
              />
            )}
            

            {/* <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                periodo === "anual" ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white" : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setPeriodo("anual")}
              style={{ fontFamily: currentTheme.fonts.body }}
            >
              ANUAL
              <span className="ml-1 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">-20%</span>
            </button> */}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {planos.map((plano, index) => (
            <motion.div
              key={plano.id}
              className={`rounded-xl overflow-hidden backdrop-blur-sm shadow-xl ${
                plano.destaque
                  ? " "
                  : " scale-95"
              } `}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              style={{ border: plano.destaque ? `2px solid ${currentTheme.colors.primary}` : `2px solid #dcdcdc` }}
            >
              {plano.destaque && (
                <div className=" text-white text-center py-1 text-sm font-bold" style={{ background: currentTheme.colors.primary }}>
                  MAIS POPULAR
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg " style={{border: `2px solid ${currentTheme.colors.primary}`}}>
                    {plano.icone}
                  </div>
                  <h3 className="text-2xl font-bold ml-3" style={{ fontFamily: currentTheme.fonts.heading }}>
                    {plano.nome}
                  </h3>
                </div>

                <p className="text-gray-500 mb-6" style={{ fontFamily: currentTheme.fonts.body }}>
                  {plano.descricaoBreve}
                </p>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold" style={{ fontFamily: currentTheme.fonts.heading }}>
                      R$ {periodo === "mensal" ? plano.precoMensal.toFixed(2) : plano.precoAnual.toFixed(2)}
                    </span>
                    <span className="text-gray-400 ml-2" style={{ fontFamily: currentTheme.fonts.body }}>/mês</span>
                  </div>
                  {periodo === "anual" && (
                    <p className="text-green-500 text-sm mt-1" style={{ fontFamily: currentTheme.fonts.body }}>
                      Economia de R$ {((plano.precoMensal - plano.precoAnual) * 12).toFixed(2)} ao ano
                    </p>
                  )}
                </div>

                <motion.button
                  className={`w-full py-3 rounded-2xl font-medium flex items-center justify-center gap-2 transition-colors text-white cursor-pointer `}
                  whileTap={{ scale: 0.97 }}
                  style={{ fontFamily: currentTheme.fonts.body, background: plano.destaque?currentTheme.colors.primary : currentTheme.colors.primary+"99" }}
                >
                  <CreditCard size={18} />
                  ASSINAR {plano.nome}
                </motion.button>

                <div className="mt-8">
                  <p className="font-medium  mb-4" style={{ fontFamily: currentTheme.fonts.heading }}>
                    O que está incluso:
                  </p>
                  <ul className="space-y-3">
                    {plano.beneficios.map((beneficio, i) => (
                      <li key={i} className="flex items-start">
                        <div className="p-1 rounded-full bg-green-500/20 mr-2 flex-shrink-0 mt-0.5">
                          <Check size={14} className="text-green-700" />
                        </div>
                        <span className="text-gray-600" style={{ fontFamily: currentTheme.fonts.body }}>
                          {beneficio}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {plano.naoIncluido && plano.naoIncluido.length > 0 && (
                    <>
                      <p className="font-medium mt-6 mb-4" style={{ fontFamily: currentTheme.fonts.heading }}>
                        Não incluso:
                      </p>
                      <ul className="space-y-3">
                        {plano.naoIncluido.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <div className="p-1 rounded-full bg-red-500/20 mr-2 flex-shrink-0 mt-0.5">
                              <X size={14} className="text-red-500" />
                            </div>
                            <span className="text-gray-600" style={{ fontFamily: currentTheme.fonts.body }}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col justify-center items-center mt-12">
          <p className="text-gray-500 mb-6" style={{ fontFamily: currentTheme.fonts.body }}>
            Todos os planos incluem acesso ao aplicativo móvel e cancelamento a qualquer momento.
          </p>
          {/* <motion.button
            className="px-6 py-3 bg-gray-700/70 hover:bg-gray-600/70 text-white rounded-lg font-medium transition-colors border border-gray-600/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ fontFamily: currentTheme.fonts.body }}
          >
            Ver todos os detalhes dos planos
          </motion.button> */}

          <BarbeariaButton
            value="Ver todos os detalhes dos planos"
            rightIcon={<ArrowRight size={20} />}
            className="w-100 shadow-lg "
            style={{
              background: currentTheme.colors.backgroundLinear,
              color: 'white',
              fontWeight: 'bold',
              fontSize: '17px',
              borderRadius: currentTheme.borderRadius.large
            }}
            onClick={() => {}}
          />
        </div>
      </div>
    </section>
  )
}

export default FemininoModernoPlanos

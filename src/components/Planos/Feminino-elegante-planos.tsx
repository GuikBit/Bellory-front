"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X, Scissors, Crown, CreditCard, Heart } from 'lucide-react'
import { useTheme } from "../../contexts/Theme-context"


const FemininoElegantePlanos = () => {
  const { currentTheme } = useTheme()
  const [periodo, setPeriodo] = useState<"mensal" | "anual">("mensal")

  const planos = [
    {
      id: "basico",
      nome: "PLANO ESSENCIAL",
      descricaoBreve: "Cuidados essenciais para sua beleza",
      precoMensal: 79.90,
      precoAnual: 64.90, // preço mensal no plano anual
      icone: <Scissors size={28} className="text-rose-400" />,
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
      icone: <Crown size={28} className="text-rose-400" />,
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
    <section className="py-20 bg-rose-50 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200 rounded-full translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-200 rounded-full -translate-x-1/2 translate-y-1/2 opacity-50"></div>
      
      {/* Padrão floral sutil */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-rose-900" style={{ fontFamily: currentTheme.fonts.heading }}>
            Planos de Assinatura
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="h-[1px] w-12 bg-rose-400"></div>
            <Heart className="mx-4 text-rose-400" size={20} />
            <div className="h-[1px] w-12 bg-rose-400"></div>
          </div>
          <p className="text-center text-rose-800/80 max-w-2xl mb-8" style={{ fontFamily: currentTheme.fonts.body }}>
            Assine um de nossos planos e tenha acesso a benefícios exclusivos, economize em serviços e eleve sua
            experiência de beleza e bem-estar.
          </p>

          {/* Toggle de período */}
          <div className="flex items-center justify-center bg-white p-1 rounded-full mb-8 shadow-sm border border-rose-200">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                periodo === "mensal" ? "bg-rose-400 text-white shadow-sm" : "text-rose-800/70 hover:text-rose-900"
              }`}
              onClick={() => setPeriodo("mensal")}
              style={{ fontFamily: currentTheme.fonts.body }}
            >
              Mensal
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                periodo === "anual" ? "bg-rose-400 text-white shadow-sm" : "text-rose-800/70 hover:text-rose-900"
              }`}
              onClick={() => setPeriodo("anual")}
              style={{ fontFamily: currentTheme.fonts.body }}
            >
              Anual
              <span className="ml-1 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">-20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {planos.map((plano, index) => (
            <motion.div
              key={plano.id}
              className={`rounded-2xl overflow-hidden ${
                plano.destaque
                  ? "bg-white border-2 border-rose-300 shadow-xl"
                  : "bg-white border border-rose-200 shadow-lg scale-95"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {plano.destaque && (
                <div className="bg-rose-400 text-white text-center py-1 text-sm font-medium">
                  Mais Popular
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-rose-100">
                    {plano.icone}
                  </div>
                  <h3 className="text-2xl font-bold text-rose-900 ml-3" style={{ fontFamily: currentTheme.fonts.heading }}>
                    {plano.nome}
                  </h3>
                </div>

                <p className="text-rose-800/70 mb-6" style={{ fontFamily: currentTheme.fonts.body }}>
                  {plano.descricaoBreve}
                </p>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-rose-900" style={{ fontFamily: currentTheme.fonts.heading }}>
                      R$ {periodo === "mensal" ? plano.precoMensal.toFixed(2) : plano.precoAnual.toFixed(2)}
                    </span>
                    <span className="text-rose-800/70 ml-2" style={{ fontFamily: currentTheme.fonts.body }}>/mês</span>
                  </div>
                  {periodo === "anual" && (
                    <p className="text-green-600 text-sm mt-1" style={{ fontFamily: currentTheme.fonts.body }}>
                      Economia de R$ {((plano.precoMensal - plano.precoAnual) * 12).toFixed(2)} ao ano
                    </p>
                  )}
                </div>

                <motion.button
                  className={`w-full py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-colors ${
                    plano.destaque
                      ? "bg-rose-400 hover:bg-rose-500 text-white shadow-md"
                      : "bg-rose-100 hover:bg-rose-200 text-rose-900 border border-rose-200"
                  }`}
                  whileTap={{ scale: 0.97 }}
                  style={{ fontFamily: currentTheme.fonts.body }}
                >
                  <CreditCard size={18} />
                  Assinar {plano.nome}
                </motion.button>

                <div className="mt-8">
                  <p className="font-medium text-rose-900 mb-4" style={{ fontFamily: currentTheme.fonts.heading }}>
                    O que está incluso:
                  </p>
                  <ul className="space-y-3">
                    {plano.beneficios.map((beneficio, i) => (
                      <li key={i} className="flex items-start">
                        <div className="p-1 rounded-full bg-green-100 mr-2 flex-shrink-0 mt-0.5">
                          <Check size={14} className="text-green-600" />
                        </div>
                        <span className="text-rose-800/80" style={{ fontFamily: currentTheme.fonts.body }}>
                          {beneficio}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {plano.naoIncluido && plano.naoIncluido.length > 0 && (
                    <>
                      <p className="font-medium text-rose-900 mt-6 mb-4" style={{ fontFamily: currentTheme.fonts.heading }}>
                        Não incluso:
                      </p>
                      <ul className="space-y-3">
                        {plano.naoIncluido.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <div className="p-1 rounded-full bg-red-100 mr-2 flex-shrink-0 mt-0.5">
                              <X size={14} className="text-red-500" />
                            </div>
                            <span className="text-rose-800/60" style={{ fontFamily: currentTheme.fonts.body }}>
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

        <div className="text-center mt-12">
          <p className="text-rose-800/70 mb-6" style={{ fontFamily: currentTheme.fonts.body }}>
            Todos os planos incluem acesso ao aplicativo móvel e cancelamento a qualquer momento.
          </p>
          <motion.button
            className="px-6 py-3 bg-white hover:bg-rose-50 text-rose-900 rounded-full font-medium transition-colors border border-rose-200 shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ fontFamily: currentTheme.fonts.body }}
          >
            Ver todos os detalhes dos planos
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default FemininoElegantePlanos

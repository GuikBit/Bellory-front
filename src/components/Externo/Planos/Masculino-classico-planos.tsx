"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X, Scissors, Crown, CreditCard, Award } from 'lucide-react'
import { useTheme } from "../../../global/Theme-context"


const MasculinoClassicoPlanos = () => {
  const { currentTheme } = useTheme()
  const [periodo, setPeriodo] = useState<"mensal" | "anual">("mensal")

  const planos = [
    {
      id: "basico",
      nome: "PLANO BÁSICO",
      descricaoBreve: "Ideal para quem busca cuidados essenciais",
      precoMensal: 59.90,
      precoAnual: 49.90, // preço mensal no plano anual
      icone: <Scissors size={28} className="text-amber-700" />,
      destaque: false,
      beneficios: [
        "2 cortes de cabelo por mês",
        "1 serviço de barba por mês",
        "10% de desconto em produtos",
        "Agendamento prioritário",
        "Café ou cerveja grátis durante o atendimento",
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
      descricaoBreve: "Experiência completa para o cavalheiro clássico",
      precoMensal: 99.90,
      precoAnual: 79.90, // preço mensal no plano anual
      icone: <Crown size={28} className="text-amber-700" />,
      destaque: true,
      beneficios: [
        "Cortes de cabelo ilimitados",
        "2 serviços de barba por mês",
        "1 tratamento premium por mês",
        "20% de desconto em produtos",
        "Kit de produtos exclusivos trimestralmente",
        "Agendamento VIP com horários exclusivos",
        "Café, cerveja ou whisky grátis durante o atendimento",
        "Acesso a eventos exclusivos para membros",
      ],
      naoIncluido: [],
      className: ""
    },
  ]

  return (
    <section className="py-20 bg-stone-900 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] opacity-5"></div>
      
      {/* Ornamentos clássicos */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0C0 55.2285 44.7715 100 100 100V0H0Z" fill="#D4A257"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 rotate-180">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0C0 55.2285 44.7715 100 100 100V0H0Z" fill="#D4A257"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-amber-50" style={{ fontFamily: currentTheme.fonts.heading }}>
            PLANOS DE ASSINATURA
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="h-[1px] w-12 bg-amber-700"></div>
            <Award className="mx-4 text-amber-700" size={20} />
            <div className="h-[1px] w-12 bg-amber-700"></div>
          </div>
          <p className="text-center text-amber-100/70 max-w-2xl mb-8" style={{ fontFamily: currentTheme.fonts.body }}>
            Assine um de nossos planos e tenha acesso a benefícios exclusivos, economize em serviços e eleve sua
            experiência de cuidados masculinos.
          </p>

          {/* Toggle de período */}
          <div className="flex items-center justify-center bg-stone-800 p-1 rounded-md mb-8 border border-amber-900/30">
            <button
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                periodo === "mensal" ? "bg-amber-800 text-amber-50" : "text-amber-200/60 hover:text-amber-100"
              }`}
              onClick={() => setPeriodo("mensal")}
              style={{ fontFamily: currentTheme.fonts.body }}
            >
              MENSAL
            </button>
            <button
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                periodo === "anual" ? "bg-amber-800 text-amber-50" : "text-amber-200/60 hover:text-amber-100"
              }`}
              onClick={() => setPeriodo("anual")}
              style={{ fontFamily: currentTheme.fonts.body }}
            >
              ANUAL
              <span className="ml-1 text-xs bg-green-800 text-amber-50 px-2 py-0.5 rounded-sm">-20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {planos.map((plano, index) => (
            <motion.div
              key={plano.id}
              className={`rounded-md overflow-hidden ${
                plano.destaque
                  ? "bg-stone-800 border border-amber-700/50"
                  : "bg-stone-800 border border-stone-700/50 scale-95"
              } shadow-xl`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {plano.destaque && (
                <div className="bg-amber-800 text-amber-50 text-center py-1 text-sm font-medium">
                  RECOMENDADO
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-md bg-amber-900/30">
                    {plano.icone}
                  </div>
                  <h3 className="text-2xl font-bold text-amber-50 ml-3" style={{ fontFamily: currentTheme.fonts.heading }}>
                    {plano.nome}
                  </h3>
                </div>

                <p className="text-amber-100/70 mb-6" style={{ fontFamily: currentTheme.fonts.body }}>
                  {plano.descricaoBreve}
                </p>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-amber-50" style={{ fontFamily: currentTheme.fonts.heading }}>
                      R$ {periodo === "mensal" ? plano.precoMensal.toFixed(2) : plano.precoAnual.toFixed(2)}
                    </span>
                    <span className="text-amber-100/70 ml-2" style={{ fontFamily: currentTheme.fonts.body }}>/mês</span>
                  </div>
                  {periodo === "anual" && (
                    <p className="text-green-600 text-sm mt-1" style={{ fontFamily: currentTheme.fonts.body }}>
                      Economia de R$ {((plano.precoMensal - plano.precoAnual) * 12).toFixed(2)} ao ano
                    </p>
                  )}
                </div>

                <motion.button
                  className={`w-full py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors ${
                    plano.destaque
                      ? "bg-amber-800 hover:bg-amber-700 text-amber-50"
                      : "bg-stone-700 hover:bg-stone-600 text-amber-50 border border-stone-600"
                  }`}
                  whileTap={{ scale: 0.97 }}
                  style={{ fontFamily: currentTheme.fonts.body }}
                >
                  <CreditCard size={18} />
                  ASSINAR {plano.nome}
                </motion.button>

                <div className="mt-8">
                  <p className="font-medium text-amber-50 mb-4" style={{ fontFamily: currentTheme.fonts.heading }}>
                    O que está incluso:
                  </p>
                  <ul className="space-y-3">
                    {plano.beneficios.map((beneficio, i) => (
                      <li key={i} className="flex items-start">
                        <Check size={18} className="text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-amber-100/80" style={{ fontFamily: currentTheme.fonts.body }}>
                          {beneficio}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {plano.naoIncluido && plano.naoIncluido.length > 0 && (
                    <>
                      <p className="font-medium text-amber-50 mt-6 mb-4" style={{ fontFamily: currentTheme.fonts.heading }}>
                        Não incluso:
                      </p>
                      <ul className="space-y-3">
                        {plano.naoIncluido.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <X size={18} className="text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-amber-100/60" style={{ fontFamily: currentTheme.fonts.body }}>
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
          <p className="text-amber-100/70 mb-6" style={{ fontFamily: currentTheme.fonts.body }}>
            Todos os planos incluem acesso ao aplicativo móvel e cancelamento a qualquer momento.
          </p>
          <motion.button
            className="px-6 py-3 bg-stone-700 hover:bg-stone-600 text-amber-50 rounded-md font-medium transition-colors border border-stone-600"
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

export default MasculinoClassicoPlanos

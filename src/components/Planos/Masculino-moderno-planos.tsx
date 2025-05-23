"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X, Scissors, Crown, CreditCard, Sparkles } from 'lucide-react'
import { useTheme } from "../../contexts/Theme-context"


const MasculinoModernoPlanos = () => {
  const { currentTheme } = useTheme()
  const [periodo, setPeriodo] = useState<"mensal" | "anual">("mensal")

  const planos = [
    {
      id: "basico",
      nome: "PLANO BÁSICO",
      descricaoBreve: "Ideal para quem busca cuidados essenciais",
      precoMensal: 59.90,
      precoAnual: 49.90, // preço mensal no plano anual
      icone: <Scissors size={28} className="text-teal-500" />,
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
      nome: "PLANO PLUS",
      descricaoBreve: "Experiência completa para o cavalheiro moderno",
      precoMensal: 99.90,
      precoAnual: 79.90, // preço mensal no plano anual
      icone: <Crown size={28} className="text-teal-500" />,
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
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>
      
      {/* Linhas geométricas */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-teal-500 to-transparent"
            style={{ top: `${i * 20}%`, left: 0, transform: `rotate(${i * 2}deg)` }}
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
            <div className="h-[2px] w-12 bg-gradient-to-r from-teal-500 to-emerald-400"></div>
            <Sparkles className="mx-4 text-teal-500" size={20} />
            <div className="h-[2px] w-12 bg-gradient-to-l from-teal-500 to-emerald-400"></div>
          </div>
          <p className="text-center text-gray-300 max-w-2xl mb-8" style={{ fontFamily: currentTheme.fonts.body }}>
            Assine um de nossos planos e tenha acesso a benefícios exclusivos, economize em serviços e eleve sua
            experiência de cuidados masculinos.
          </p>

          {/* Toggle de período */}
          <div className="flex items-center justify-center bg-zinc-800/50 backdrop-blur-sm p-1 rounded-full mb-8 border border-zinc-700">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                periodo === "mensal" ? "bg-gradient-to-r from-teal-600 to-emerald-500 text-white" : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setPeriodo("mensal")}
              style={{ fontFamily: currentTheme.fonts.body }}
            >
              MENSAL
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                periodo === "anual" ? "bg-gradient-to-r from-teal-600 to-emerald-500 text-white" : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setPeriodo("anual")}
              style={{ fontFamily: currentTheme.fonts.body }}
            >
              ANUAL
              <span className="ml-1 text-xs bg-emerald-500 text-white px-2 py-0.5 rounded-full">-20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {planos.map((plano, index) => (
            <motion.div
              key={plano.id}
              className={`rounded-xl overflow-hidden backdrop-blur-sm ${
                plano.destaque
                  ? "bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-teal-500/50"
                  : "bg-zinc-800/50 border border-zinc-700/50 scale-95"
              } shadow-xl`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {plano.destaque && (
                <div className="bg-gradient-to-r from-teal-600 to-emerald-500 text-white text-center py-1 text-sm font-medium">
                  MAIS POPULAR
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-zinc-700/50">
                    {plano.icone}
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-3" style={{ fontFamily: currentTheme.fonts.heading }}>
                    {plano.nome}
                  </h3>
                </div>

                <p className="text-gray-400 mb-6" style={{ fontFamily: currentTheme.fonts.body }}>
                  {plano.descricaoBreve}
                </p>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white" style={{ fontFamily: currentTheme.fonts.heading }}>
                      R$ {periodo === "mensal" ? plano.precoMensal.toFixed(2) : plano.precoAnual.toFixed(2)}
                    </span>
                    <span className="text-gray-400 ml-2" style={{ fontFamily: currentTheme.fonts.body }}>/mês</span>
                  </div>
                  {periodo === "anual" && (
                    <p className="text-emerald-500 text-sm mt-1" style={{ fontFamily: currentTheme.fonts.body }}>
                      Economia de R$ {((plano.precoMensal - plano.precoAnual) * 12).toFixed(2)} ao ano
                    </p>
                  )}
                </div>

                <motion.button
                  className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors ${
                    plano.destaque
                      ? "bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 text-white"
                      : "bg-zinc-700/70 hover:bg-zinc-600/70 text-white border border-zinc-600/50"
                  }`}
                  whileTap={{ scale: 0.97 }}
                  style={{ fontFamily: currentTheme.fonts.body }}
                >
                  <CreditCard size={18} />
                  ASSINAR {plano.nome}
                </motion.button>

                <div className="mt-8">
                  <p className="font-medium text-white mb-4" style={{ fontFamily: currentTheme.fonts.heading }}>
                    O que está incluso:
                  </p>
                  <ul className="space-y-3">
                    {plano.beneficios.map((beneficio, i) => (
                      <li key={i} className="flex items-start">
                        <div className="p-1 rounded-full bg-emerald-500/20 mr-2 flex-shrink-0 mt-0.5">
                          <Check size={14} className="text-emerald-500" />
                        </div>
                        <span className="text-gray-300" style={{ fontFamily: currentTheme.fonts.body }}>
                          {beneficio}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {plano.naoIncluido && plano.naoIncluido.length > 0 && (
                    <>
                      <p className="font-medium text-white mt-6 mb-4" style={{ fontFamily: currentTheme.fonts.heading }}>
                        Não incluso:
                      </p>
                      <ul className="space-y-3">
                        {plano.naoIncluido.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <div className="p-1 rounded-full bg-red-500/20 mr-2 flex-shrink-0 mt-0.5">
                              <X size={14} className="text-red-500" />
                            </div>
                            <span className="text-gray-400" style={{ fontFamily: currentTheme.fonts.body }}>
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
          <p className="text-gray-400 mb-6" style={{ fontFamily: currentTheme.fonts.body }}>
            Todos os planos incluem acesso ao aplicativo móvel e cancelamento a qualquer momento.
          </p>
          <motion.button
            className="px-6 py-3 bg-zinc-700/70 hover:bg-zinc-600/70 text-white rounded-lg font-medium transition-colors border border-zinc-600/50"
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

export default MasculinoModernoPlanos

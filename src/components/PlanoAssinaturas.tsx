"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X, Scissors, Crown, CreditCard } from 'lucide-react'

const PlanoAssinatura = () => {
  const [periodo, setPeriodo] = useState<"mensal" | "anual">("mensal")

  const planos = [
    {
      id: "basico",
      nome: "PLANO BÁSICO",
      descricaoBreve: "Ideal para quem busca cuidados essenciais",
      precoMensal: 59.90,
      precoAnual: 49.90, // preço mensal no plano anual
      icone: <Scissors size={28} className="text-amber-500" />,
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
      icone: <Crown size={28} className="text-amber-500" />,
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

//   const togglePeriodo = () => {
//     setPeriodo(periodo === "mensal" ? "anual" : "mensal")
//   }

  return (
    <section className="py-20 bg-neutral-800 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center justify-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">PLANOS DE ASSINATURA</h2>
          <div className="flex items-center justify-center mb-4">
            <div className="h-[1px] w-12 bg-amber-500"></div>
            <Scissors className="mx-4 text-amber-500" size={20} />
            <div className="h-[1px] w-12 bg-amber-500"></div>
          </div>
          <p className="text-center text-gray-300 max-w-2xl mb-8">
            Assine um de nossos planos e tenha acesso a benefícios exclusivos, economize em serviços e eleve sua
            experiência de cuidados masculinos.
          </p>

          {/* Toggle de período */}
          <div className="flex items-center justify-center bg-neutral-900 p-1 rounded-full mb-8">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                periodo === "mensal" ? "bg-amber-600 text-white" : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setPeriodo("mensal")}
            >
              MENSAL
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                periodo === "anual" ? "bg-amber-600 text-white" : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setPeriodo("anual")}
            >
              ANUAL
              <span className="ml-1 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">-20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {planos.map((plano, index) => (
            <motion.div
              key={plano.id}
              className={`rounded-xl overflow-hidden ${
                plano.destaque
                  ? "bg-gradient-to-br from-neutral-800 to-neutral-900 border-2 border-amber-500"
                  : "bg-neutral-900 scale-90"
              } shadow-xl`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {plano.destaque && (
                <div className="bg-amber-600 text-white text-center py-1 text-sm font-medium">
                  MAIS POPULAR
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center mb-4">
                  {plano.icone}
                  <h3 className="text-2xl font-bold text-white ml-3">{plano.nome}</h3>
                </div>

                <p className="text-gray-400 mb-6">{plano.descricaoBreve}</p>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">
                      R$ {periodo === "mensal" ? plano.precoMensal.toFixed(2) : plano.precoAnual.toFixed(2)}
                    </span>
                    <span className="text-gray-400 ml-2">/mês</span>
                  </div>
                  {periodo === "anual" && (
                    <p className="text-green-500 text-sm mt-1">
                      Economia de R$ {((plano.precoMensal - plano.precoAnual) * 12).toFixed(2)} ao ano
                    </p>
                  )}
                </div>

                <motion.button
                  className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors ${
                    plano.destaque
                      ? "bg-amber-600 hover:bg-amber-700 text-white"
                      : "bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700"
                  }`}
                  whileTap={{ scale: 0.97 }}
                >
                  <CreditCard size={18} />
                  ASSINAR {plano.nome}
                </motion.button>

                <div className="mt-8">
                  <p className="font-medium text-white mb-4">O que está incluso:</p>
                  <ul className="space-y-3">
                    {plano.beneficios.map((beneficio, i) => (
                      <li key={i} className="flex items-start">
                        <Check size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{beneficio}</span>
                      </li>
                    ))}
                  </ul>

                  {plano.naoIncluido && plano.naoIncluido.length > 0 && (
                    <>
                      <p className="font-medium text-white mt-6 mb-4">Não incluso:</p>
                      <ul className="space-y-3">
                        {plano.naoIncluido.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <X size={18} className="text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-400">{item}</span>
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
          <p className="text-gray-400 mb-6">
            Todos os planos incluem acesso ao aplicativo móvel e cancelamento a qualquer momento.
          </p>
          <motion.button
            className="px-6 py-3 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver todos os detalhes dos planos
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default PlanoAssinatura

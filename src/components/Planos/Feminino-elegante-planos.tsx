"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X, Scissors, Crown, CreditCard, ArrowRight } from 'lucide-react'
import { useTheme } from "../../global/Theme-context"
import EleganteSubTitle from "../Fragments/Feminino/EleganteSubTitleIcon"
import { BarbeariaButton } from "../ui"


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
      icone: <Crown size={28} color={currentTheme.colors.primary}  />,
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
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: currentTheme.colors.accent }}>
      {/* Elementos decorativos de fundo */}
      {/* <div className="absolute top-0 right-0 w-64 h-64 rounded-full translate-x-1/2 -translate-y-1/2 opacity-20" style={{backgroundColor: currentTheme.colors.primary}}></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full z-1 -translate-x-1/2 translate-y-1/2 opacity-20" style={{backgroundColor: currentTheme.colors.primary}}></div> */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className="absolute h-[1px] w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
            style={{ top: `${i * 10}%`, left: 0, transform: `rotate(${i * 3}deg)` }}
          ></div>
        ))}
      </div>
      {/* Padrão floral sutil */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <EleganteSubTitle title="Planos de Assinaturas" />
        

          <motion.p
            className="text-lg mb-6 leading-relaxed italic"
            style={{
              color: currentTheme.colors.textSecondary,
              fontFamily: currentTheme.fonts.body,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Assine um de nossos planos e tenha acesso a benefícios exclusivos, economize em serviços e eleve sua
            experiência de beleza e bem-estar.
          </motion.p>

        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center mb-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        > 
          <div className="flex items-center justify-center bg-white p-1 gap-4 rounded-full mb-8 shadow-sm borde" style={{borderColor: currentTheme.colors.primary}}>

            {periodo === "mensal" ? (
              <BarbeariaButton rounded="full" size="sm" onClick={() => setPeriodo("mensal")}>Mensal</BarbeariaButton>
            ):(
              <BarbeariaButton variant="ghost" rounded="full" size="sm" onClick={() => setPeriodo("mensal")}>Mensal</BarbeariaButton>
            )}

            {periodo === "anual" ? (
              <BarbeariaButton  rounded="full" size="sm" onClick={() => setPeriodo("anual")}>
                Anual
                <span className="ml-1 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">-20%</span>
              </BarbeariaButton>
            ):(
              <BarbeariaButton variant="ghost" rounded="full" size="sm" onClick={() => setPeriodo("anual")}>
                Anual
                <span className="ml-1 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">-20%</span>
              </BarbeariaButton>
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {planos.map((plano, index) => (
            <motion.div
              key={plano.id}
              className={`rounded-2xl overflow-hidden ${
                plano.destaque
                  ? "bg-white border-2 shadow-xl"
                  : "bg-white border shadow-lg scale-95"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              style={{ borderColor: currentTheme.colors.primary, fontFamily: currentTheme.fonts.heading }}
            >
              {plano.destaque && (
                <div className=" text-white text-center py-1 text-sm font-bold" style={{ backgroundColor: currentTheme.colors.primary, fontFamily: currentTheme.fonts.heading }}>
                  Mais Popular
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full" style={{ backgroundColor: currentTheme.colors.primary+'30' }}>
                    {plano.icone}
                  </div>
                  <h3 className="text-2xl font-bold ml-3" style={{ fontFamily: currentTheme.fonts.heading, color: currentTheme.colors.text }}>
                    {plano.nome}
                  </h3>
                </div>

                <p className=" mb-6" style={{ fontFamily: currentTheme.fonts.body, color: currentTheme.colors.textSecondary }}>
                  {plano.descricaoBreve}
                </p>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold" style={{ fontFamily: currentTheme.fonts.heading, color: currentTheme.colors.text }}>
                      R$ {periodo === "mensal" ? plano.precoMensal.toFixed(2) : plano.precoAnual.toFixed(2)}
                    </span>
                    <span className="ml-2" style={{ fontFamily: currentTheme.fonts.body, color: currentTheme.colors.primary }}>/mês</span>
                  </div>
                  {periodo === "anual" && (
                    <p className=" text-sm mt-1" style={{ fontFamily: currentTheme.fonts.body, color: currentTheme.colors.online }}>
                      Economia de R$ {((plano.precoMensal - plano.precoAnual) * 12).toFixed(2)} ao ano
                    </p>
                  )}
                </div>

                {plano.destaque ? (
                  <BarbeariaButton fullWidth variant="primary" leftIcon={<CreditCard />}>
                    Assinar {plano.nome}
                  </BarbeariaButton>
                ):(
                  <BarbeariaButton fullWidth variant="outline" leftIcon={<CreditCard />}>
                    Assinar {plano.nome}
                  </BarbeariaButton>
                )}

                <div className="mt-8">
                  <p className="font-medium mb-4" style={{ fontFamily: currentTheme.fonts.heading, color: currentTheme.colors.text }}>
                    O que está incluso:
                  </p>
                  <ul className="space-y-3">
                    {plano.beneficios.map((beneficio, i) => (
                      <li key={i} className="flex items-start">
                        <div className="p-1 rounded-full bg-green-100 mr-2 flex-shrink-0 mt-0.5">
                          <Check size={14} className="text-green-600" />
                        </div>
                        <span className="" style={{ fontFamily: currentTheme.fonts.body, color: currentTheme.colors.textSecondary }}>
                          {beneficio}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {plano.naoIncluido && plano.naoIncluido.length > 0 && (
                    <>
                      <p className="font-medium mt-6 mb-4" style={{ fontFamily: currentTheme.fonts.heading, color: currentTheme.colors.text  }}>
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
          <p className=" mb-6" style={{ fontFamily: currentTheme.fonts.body, color: currentTheme.colors.textSecondary }}>
            Todos os planos incluem acesso ao aplicativo móvel e cancelamento a qualquer momento.
          </p>
        </div>
        <div className="mt-16 text-center">
          <BarbeariaButton variant="primary" size="xl" rounded="full" rightIcon={<ArrowRight />}>
            Ver todos os detalhes dos planos
          </BarbeariaButton>
        </div>
      </div>
    </section>
  )
}

export default FemininoElegantePlanos

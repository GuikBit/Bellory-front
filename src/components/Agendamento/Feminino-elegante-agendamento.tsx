"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Ban, Calendar, Clock, BadgeIcon as IdCard, Phone, User, Scissors, Check } from "lucide-react"
import { Calendar as CalendarInput } from "primereact/calendar"
import { NovoAgendamento } from "../../utils/interfaces"
import { themes } from "../../theme/theme"
import { formatCPF, formatTelefone } from "../../utils/functions"
import BarbeariaStepper, { BarbeariaStep } from "../ui/BarbeariaStepper"
import { BarbeariaInput } from "../ui"
import EleganteSubTitle from "../Fragments/Feminino/EleganteSubTitleIcon"

const FemininoEleganteAgendamento = () => {
  const theme = themes.femininoElegante

  const list = [
    {
      id: "1001",
      title: "Corte",
      image:
        "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Corte moderno e personalizado para o formato do seu rosto. Estilo, elegância e confiança em cada detalhe.",
      price: 50.0,
    },
    {
      id: "1002",
      title: "Barba",
      image:
        "https://images.unsplash.com/photo-1599351431618-317f6a5f9a6b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Barba feita com navalha, toalha quente e hidratação. Realce seu visual com cuidado profissional.",
      price: 25.0,
    },
    {
      id: "1003",
      title: "Sobrancelha",
      image:
        "https://s1-unimed-dev.us-southeast-1.linodeobjects.com/images/products/seller_143/Modelagem-e-design-de-sobrancelha-masculina_cfac09e2_7d31_40ce_97ab_629fd41641a0.webp",
      description: "Remoção dos excessos de pelos para uma aparência limpa e natural, sem exageros.",
      price: 17.0,
    },
    {
      id: "1004",
      title: "Pigmentação de Barba",
      image: "https://www.lamafiabarbearia.com.br//wp-content/uploads/2022/08/bg-box-pigmentacao-barba.jpg",
      description: "Cobertura de falhas e fios brancos com técnica artesanal. Efeito natural e visual renovado.",
      price: 13.0,
    },
  ]

  const barbeiros = [
    {
      id: "1",
      title: "Victor",
      image: "https://www.shutterstock.com/image-photo/haircut-by-hairdresser-barbershop-barber-600nw-2484467169.jpg",
    },
    {
      id: "2",
      title: "Matheus",
      image: "https://www.shutterstock.com/image-photo/barber-shop-hair-clipper-black-600nw-2302169201.jpg",
    },
  ]

  const [novo, setNovo] = useState<NovoAgendamento>({
    nome: "",
    telefone: "",
    cpf: "",
    servicos: [],
    barbeiro: null,
    dataAgendamento: null,
    horaAgendamento: null,
  })

  const handlerSetServicos = (item: any) => {
    const jaExiste = novo?.servicos?.some((s) => s.id === item.id)

    setNovo((prev) => ({
      ...prev,
      servicos: jaExiste
        ? prev?.servicos?.filter((s) => s.id !== item.id)
        : [...(prev?.servicos || []), { ...item, nome: item.title, preco: item.price }],
    }))
  }

  const isSelecionado = (id: string | number) => {
    return novo?.servicos?.some((s) => s.id === id)
  }

  const handlerSetBarbeiro = (item: any) => {
    setNovo((prev) => ({
      ...prev,
      barbeiro: { ...item, nome: item.title },
    }))
  }

  const isBarbeiroSelecionado = (id: string | number) => {
    return novo?.barbeiro?.id === id
  }

  const handlerCPF = (value: string) => {
    const formattedValue = formatCPF(value)
    setNovo((prev) => ({
      ...prev,
      cpf: formattedValue,
    }))
  }

  const handlerTelefone = (value: string) => {
    const formattedValue = formatTelefone(value)
    setNovo((prev) => ({
      ...prev,
      telefone: formattedValue,
    }))
  }

  return (
    <div className="relative py-20">
      {/* Elegant decorative elements */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <EleganteSubTitle title="Agendamento" />

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
            Agende seu horário de forma rápida e prática. Siga os passos abaixo para garantir o melhor atendimento.
          </motion.p>

        </motion.div>

        <motion.div
          className="max-w-4xl items-center justify-center mx-auto "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            boxShadow: `0 15px 30px -10px ${theme.colors.primary}30`,
          }}
        >
          <BarbeariaStepper
            initialStep={1}
            onStepChange={(step) => {
              console.log(step)
            }}
            onFinalStepCompleted={() => console.log("All steps completed!")}
            backButtonText="Voltar"
            nextButtonText="Próximo"
          >
            <BarbeariaStep>
              <div className="py-4">
                <EleganteSubTitle title="Seus dados" />

                <div className="space-y-4 pb-10 md:px-16">

                  <BarbeariaInput label="Nome completo" leftIcon={<User size={18} />} placeholder="Digite algo..." variant="filled" onChange={(e: any) => setNovo({ ...novo, nome: e.target.value })} />

                  <BarbeariaInput label="Telefone" value={novo?.telefone} leftIcon={<Phone size={18} />} placeholder="(__) _____-____" variant="filled" onChange={(e: any) => handlerTelefone(e.target.value)} />
                  
                  <BarbeariaInput label="CPF" value={novo?.cpf} leftIcon={<IdCard size={18} />} placeholder="___.___.___-__" variant="filled" onChange={(e: any) => handlerCPF(e.target.value)} />

                </div>
              </div>
              
            </BarbeariaStep>

            <BarbeariaStep className="py-4">
              <div className="py-4">
                <EleganteSubTitle title="Serviços" />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pb-10">
                  {list.map((item) => (
                    <motion.div
                      key={item.id}
                      onClick={() => handlerSetServicos(item)}
                      className={`cursor-pointer overflow-hidden shadow-lg relative border`}
                      style={{
                        backgroundColor: theme.colors.cardBackground,
                        borderColor: isSelecionado(item.id) ? theme.colors.primary : "transparent",
                        borderRadius: theme.borderRadius.large,
                        boxShadow: isSelecionado(item.id) ? `0 10px 25px -5px ${theme.colors.primary}30` : "",
                      }}
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="relative h-40">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                        {isSelecionado(item.id) && (
                          <div
                            className="absolute top-2 right-2 rounded-full p-1"
                            style={{ backgroundColor: theme.colors.primary }}
                          >
                            <Check size={16} className="text-white" />
                          </div>
                        )}

                        <div className="absolute bottom-0 left-0 p-3">
                          <h3 className="text-lg font-bold text-white">{item.title}</h3>
                          <p
                            className={`font-semibold`}
                            style={{ color: isSelecionado(item.id) ? theme.colors.primary : "white" }}
                          >
                            R$ {item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>              
            </BarbeariaStep>

            <BarbeariaStep>
              <div className="py-4">
                <EleganteSubTitle title="Escolha seu profissional preferido" />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-10">
                  <motion.div
                    key={0}
                    onClick={() =>
                      handlerSetBarbeiro({
                        id: 0,
                        title: "Não tenho preferência",
                        image: "https://www.shutterstock.com/image-photo/hairdresser-barbershop-barber-600nw-2484467169.jpg",
                      })
                    }
                    className={`cursor-pointer overflow-hidden shadow-lg relative flex flex-col items-center justify-center h-40 border`}
                    style={{
                      backgroundColor: theme.colors.cardBackground,
                      borderColor: isBarbeiroSelecionado(0) ? theme.colors.primary : "transparent",
                      borderRadius: theme.borderRadius.large,
                      boxShadow: isBarbeiroSelecionado(0) ? `0 10px 25px -5px ${theme.colors.primary}30` : "",
                    }}
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Ban size={48} style={{ color: theme.colors.textSecondary }} className="mb-2" />
                    <h4 className="text-lg font-semibold text-center" style={{ color: theme.colors.text }}>
                      Sem preferência
                    </h4>

                    {isBarbeiroSelecionado(0) && (
                      <div
                        className="absolute top-2 right-2 rounded-full p-1"
                        style={{ backgroundColor: theme.colors.primary }}
                      >
                        <Check size={16} className="text-white" />
                      </div>
                    )}
                  </motion.div>

                  {barbeiros.map((item) => (
                    <motion.div
                      key={item.id}
                      onClick={() => handlerSetBarbeiro(item)}
                      className={`cursor-pointer overflow-hidden shadow-lg relative border`}
                      style={{
                        backgroundColor: theme.colors.cardBackground,
                        borderColor: isBarbeiroSelecionado(item.id) ? theme.colors.primary : "transparent",
                        borderRadius: theme.borderRadius.large,
                        boxShadow: isBarbeiroSelecionado(item.id) ? `0 10px 25px -5px ${theme.colors.primary}30` : "",
                      }}
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: Number(item.id) * 0.1 }}
                    >
                      <div className="relative h-40">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                        {isBarbeiroSelecionado(item.id) && (
                          <div
                            className="absolute top-2 right-2 rounded-full p-1"
                            style={{ backgroundColor: theme.colors.primary }}
                          >
                            <Check size={16} className="text-white" />
                          </div>
                        )}

                        <div className="absolute bottom-0 left-0 p-3">
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </BarbeariaStep>

            <BarbeariaStep>

              <div className="py-4">
                <EleganteSubTitle title="Data e hora" />

                <div className="space-y-6 pb-10 md:px-16">
                  <div className="space-y-4">
                    <div className="flex flex-col">
                      <div className="flex justify-center items-center max-w-full">
                        <CalendarInput
                          value={novo.dataAgendamento}
                          onChange={(e) => setNovo({ ...novo, dataAgendamento: e.target.value })}
                          inline
                          className="w-130"
                        />
                      </div>
                    </div>

                    {novo.dataAgendamento && (
                      <div className="flex flex-col mt-6">
                        <div className="flex flex-col items-center mb-6">
                          <div className="flex items-center">
                            <div className="h-[1px] w-8" style={{ backgroundColor: theme.colors.primary }}></div>
                            <Clock className="mx-2" size={14} style={{ color: theme.colors.primary }} />
                            <div className="h-[1px] w-8" style={{ backgroundColor: theme.colors.primary }}></div>
                          </div>
                          <p className="text-sm mt-2" style={{ color: theme.colors.textSecondary }}>
                            Selecione o horário
                          </p>
                        </div>
                        <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
                          {[
                            "09:00",
                            "09:30",
                            "10:00",
                            "10:30",
                            "11:00",
                            "11:30",
                            "13:00",
                            "13:30",
                            "14:00",
                            "14:30",
                            "15:00",
                            "15:30",
                            "16:00",
                            "16:30",
                            "17:00",
                            "17:30",
                          ].map((time) => (
                            <motion.div
                              key={time}
                              className={`text-center py-2 px-1 rounded-md cursor-pointer border`}
                              style={{
                                backgroundColor:
                                  (typeof novo.horaAgendamento === "string" ? novo.horaAgendamento : "") === time
                                    ? theme.colors.primary
                                    : theme.colors.cardBackground,
                                color:
                                  (typeof novo.horaAgendamento === "string" ? novo.horaAgendamento : "") === time
                                    ? "white"
                                    : theme.colors.text,
                                borderColor:
                                  (typeof novo.horaAgendamento === "string" ? novo.horaAgendamento : "") === time
                                    ? theme.colors.primary
                                    : theme.colors.secondary,
                                borderRadius: theme.borderRadius.medium,
                              }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => {
                                setNovo({
                                  ...novo,
                                  horaAgendamento: new Date(`00/00/0000 ${time}`),
                                })
                              }}
                            >
                              {time}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>


            </BarbeariaStep>

            <BarbeariaStep>
              {/* <div className="flex flex-col items-center mb-6 pb-10">
                <h3
                  className="text-xl font-normal mb-2"
                  style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}
                >
                  Confirmação
                </h3>
                <div className="flex items-center">
                  <div className="h-[1px] w-8" style={{ backgroundColor: theme.colors.primary }}></div>
                  <Flower className="mx-2" size={14} style={{ color: theme.colors.primary }} />
                  <div className="h-[1px] w-8" style={{ backgroundColor: theme.colors.primary }}></div>
                </div>
                <p className="text-sm mt-2" style={{ color: theme.colors.textSecondary }}>
                  Revise os detalhes do seu agendamento
                </p>
              </div> */}

              <div className="py-4">
                <EleganteSubTitle title="Resumo do Agendamento" />

                <div
                  className="rounded-lg p-6 space-y-6 pb-10 border"
                  style={{
                    backgroundColor: theme.colors.cardBackground,
                    borderColor: theme.colors.primary,
                    borderRadius: theme.borderRadius.large,
                    boxShadow: `0 15px 30px -10px rgba(176, 141, 154, 0.15)`,
                  }}
                >
                  <div>
                    <h4
                      className="text-lg font-semibold mb-3 flex items-center"
                      style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}
                    >
                      <User size={18} className="mr-2" style={{ color: theme.colors.primary }} />
                      Dados do Cliente
                    </h4>
                    <div className="space-y-2 pl-6">
                      <p style={{ color: theme.colors.textSecondary }}>
                        <span className="font-medium" style={{ color: theme.colors.text }}>
                          Nome:
                        </span>{" "}
                        {novo?.nome || "Não informado"}
                      </p>
                      <p style={{ color: theme.colors.textSecondary }}>
                        <span className="font-medium" style={{ color: theme.colors.text }}>
                          Telefone:
                        </span>{" "}
                        {novo?.telefone || "Não informado"}
                      </p>
                      <p style={{ color: theme.colors.textSecondary }}>
                        <span className="font-medium" style={{ color: theme.colors.text }}>
                          CPF:
                        </span>{" "}
                        {novo?.cpf || "Não informado"}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4
                      className="text-lg font-semibold mb-3 flex items-center"
                      style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}
                    >
                      <Scissors size={18} className="mr-2" style={{ color: theme.colors.primary }} />
                      Serviços Selecionados
                    </h4>
                    {novo?.servicos && novo?.servicos?.length > 0 ? (
                      <div className="space-y-2">
                        {novo?.servicos?.map((item) => (
                          <div
                            key={item.id}
                            className="flex justify-between items-center p-3 rounded border"
                            style={{
                              backgroundColor: theme.colors.accent,
                              borderColor: theme.colors.primary,
                              borderRadius: theme.borderRadius.medium,
                            }}
                          >
                            <p style={{ color: theme.colors.text }}>{item.nome}</p>
                            <p className="font-semibold" style={{ color: theme.colors.primary }}>
                              R$ {item.preco.toFixed(2)}
                            </p>
                          </div>
                        ))}
                        <div
                          className="flex justify-between items-center pt-2 mt-2 border-t"
                          style={{ borderColor: theme.colors.secondary }}
                        >
                          <p className="font-medium" style={{ color: theme.colors.text }}>
                            Total:
                          </p>
                          <p className="text-xl font-bold" style={{ color: theme.colors.primary }}>
                            R$ {novo?.servicos?.reduce((acc, item) => acc + item.preco, 0).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p className="italic" style={{ color: theme.colors.textSecondary }}>
                        Nenhum serviço selecionado
                      </p>
                    )}
                  </div>

                  <div>
                    <h4
                      className="text-lg font-semibold mb-3 flex items-center"
                      style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}
                    >
                      <Calendar size={18} className="mr-2" style={{ color: theme.colors.primary }} />
                      Detalhes do Agendamento
                    </h4>
                    <div className="space-y-2 pl-6">
                      <p style={{ color: theme.colors.textSecondary }}>
                        <span className="font-medium" style={{ color: theme.colors.text }}>
                          Profissional:
                        </span>{" "}
                        {novo?.barbeiro?.nome || "Não selecionado"}
                      </p>
                      <div className="flex flex-wrap gap-4 mt-3">
                        <div
                          className="p-3 rounded flex items-center border"
                          style={{
                            backgroundColor: theme.colors.accent,
                            borderColor: theme.colors.primary,
                            borderRadius: theme.borderRadius.medium,
                          }}
                        >
                          <Calendar size={18} className="mr-2" style={{ color: theme.colors.primary }} />
                          <span style={{ color: theme.colors.text }}>
                            {novo.dataAgendamento
                              ? new Date(novo.dataAgendamento).toLocaleDateString("pt-BR")
                              : "Data não selecionada"}
                          </span>
                        </div>
                        <div
                          className="p-3 rounded flex items-center border"
                          style={{
                            backgroundColor: theme.colors.accent,
                            borderColor: theme.colors.primary,
                            borderRadius: theme.borderRadius.medium,
                          }}
                        >
                          <Clock size={18} className="mr-2" style={{ color: theme.colors.primary }} />
                          <span style={{ color: theme.colors.text }}>
                            {novo.horaAgendamento?.toLocaleDateString("pt-BR") || "Horário não selecionado"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BarbeariaStep>
          </BarbeariaStepper>
        </motion.div>
      </div>


    </div>
  )
}

export default FemininoEleganteAgendamento

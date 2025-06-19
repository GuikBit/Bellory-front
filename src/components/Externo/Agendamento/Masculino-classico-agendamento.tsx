"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Ban, Calendar, Clock, BadgeIcon as IdCard, Phone, User, Scissors, Check } from "lucide-react"
import { Calendar as CalendarInput } from "primereact/calendar"
import { NovoAgendamento } from "../../../utils/interfaces"
import { themes } from "../../../theme/theme"
import { formatCPF, formatTelefone } from "../../../utils/functions"
import BarbeariaStepper, { BarbeariaStep } from "../../ui/BarbeariaStepper"
import { BarbeariaInput } from "../../ui"

const MasculinoClassicoAgendamento = () => {
  const theme = themes.masculinoClassico

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
    <div className="relative">
      {/* Classic decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 opacity-5">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M60 0L78.5 41.5L120 60L78.5 78.5L60 120L41.5 78.5L0 60L41.5 41.5L60 0Z"
              fill={theme.colors.primary}
            />
          </svg>
        </div>
        <div className="absolute bottom-10 left-10 opacity-5">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill={theme.colors.secondary} />
          </svg>
        </div>
      </div>

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
          <div className="flex flex-col items-center mb-6">
            <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.text }}>
              Seus Dados
            </h3>
            <div className="flex items-center">
              <div className="h-[1px] w-8" style={{ backgroundColor: theme.colors.primary }}></div>
              <Scissors className="mx-2" size={14} style={{ color: theme.colors.primary }} />
              <div className="h-[1px] w-8" style={{ backgroundColor: theme.colors.primary }}></div>
            </div>
          </div>

          <div className="space-y-4 pb-10 md:px-16">
            <BarbeariaInput
              label="Nome completo"
              leftIcon={<User size={18} />}
              value={novo?.nome}
              placeholder="Pedro Meineres"
              onChange={(e: any) => setNovo({ ...novo, nome: e.target.value })}
            />

            <BarbeariaInput
              label="Telefone"
              leftIcon={<Phone size={18} />}
              value={novo?.telefone}
              placeholder="(32) 99999-9999"
              onChange={(e: any) => handlerTelefone(e.target.value)}
            />

            <BarbeariaInput
              label="CPF"
              leftIcon={<IdCard size={18} />}
              value={novo?.cpf}
              placeholder="123.456.789-00"
              onChange={(e: any) => handlerCPF(e.target.value)}
            />
          </div>
        </BarbeariaStep>

        <BarbeariaStep>
          <div className="flex flex-col items-center mb-6">
            <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.text }}>
              Serviços
            </h3>
            <div className="flex items-center">
              <div className="h-[1px] w-8" style={{ backgroundColor: theme.colors.primary }}></div>
              <Scissors className="mx-2" size={14} style={{ color: theme.colors.primary }} />
              <div className="h-[1px] w-8" style={{ backgroundColor: theme.colors.primary }}></div>
            </div>
            <p className="text-sm mt-2" style={{ color: theme.colors.textSecondary }}>
              Selecione os serviços desejados
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pb-10">
            {list.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => handlerSetServicos(item)}
                className={`cursor-pointer overflow-hidden shadow-lg relative border-2 ${
                  isSelecionado(item.id) ? "" : ""
                }`}
                style={{
                  backgroundColor: theme.colors.cardBackground,
                  borderColor: isSelecionado(item.id) ? theme.colors.primary : theme.colors.secondary,
                  borderRadius: theme.borderRadius.medium,
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
        </BarbeariaStep>

        <BarbeariaStep>
          <div className="flex flex-col items-center mb-6">
            <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.text }}>
              Barbeiro
            </h3>
            <div className="flex items-center">
              <div className="h-[1px] w-8" style={{ backgroundColor: theme.colors.primary }}></div>
              <Scissors className="mx-2" size={14} style={{ color: theme.colors.primary }} />
              <div className="h-[1px] w-8" style={{ backgroundColor: theme.colors.primary }}></div>
            </div>
            <p className="text-sm mt-2" style={{ color: theme.colors.textSecondary }}>
              Escolha seu barbeiro preferido
            </p>
          </div>

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
              className={`cursor-pointer overflow-hidden shadow-lg relative flex flex-col items-center justify-center h-40 border-2 ${
                isBarbeiroSelecionado(0) ? "" : ""
              }`}
              style={{
                backgroundColor: theme.colors.background,
                borderColor: isBarbeiroSelecionado(0) ? theme.colors.primary : theme.colors.secondary,
                borderRadius: theme.borderRadius.medium,
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
                className={`cursor-pointer overflow-hidden shadow-lg relative border-2 ${
                  isBarbeiroSelecionado(item.id) ? "" : ""
                }`}
                style={{
                  backgroundColor: theme.colors.cardBackground,
                  borderColor: isBarbeiroSelecionado(item.id) ? theme.colors.primary : theme.colors.secondary,
                  borderRadius: theme.borderRadius.medium,
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
        </BarbeariaStep>

        <BarbeariaStep>
          <div className="flex flex-col items-center mb-6">
            <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.text }}>
              Data e Hora
            </h3>
            <div className="flex items-center">
              <div className="h-[1px] w-8" style={{ backgroundColor: theme.colors.primary }}></div>
              <Scissors className="mx-2" size={14} style={{ color: theme.colors.primary }} />
              <div className="h-[1px] w-8" style={{ backgroundColor: theme.colors.primary }}></div>
            </div>
            <p className="text-sm mt-2" style={{ color: theme.colors.textSecondary }}>
              Escolha a data e hora do agendamento
            </p>
          </div>

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
                        className={`text-center py-2 px-1 rounded-md cursor-pointer border ${
                          (typeof novo.horaAgendamento === "string" ? novo.horaAgendamento : "") === time
                            ? "border-primary"
                            : "border-secondary"
                        }`}
                        style={{
                          backgroundColor:
                            (typeof novo.horaAgendamento === "string" ? novo.horaAgendamento : "") === time
                              ? theme.colors.primary
                              : theme.colors.background,
                          color:
                            (typeof novo.horaAgendamento === "string" ? novo.horaAgendamento : "") === time
                              ? "white"
                              : theme.colors.text,
                          borderColor:
                            (typeof novo.horaAgendamento === "string" ? novo.horaAgendamento : "") === time
                              ? theme.colors.primary
                              : theme.colors.secondary,
                          borderRadius: theme.borderRadius.small,
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
        </BarbeariaStep>

        <BarbeariaStep>
          <div className="flex flex-col items-center mb-6 pb-10">
            <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.text }}>
              Confirmação
            </h3>
            <div className="flex items-center">
              <div className="h-[1px] w-8" style={{ backgroundColor: theme.colors.primary }}></div>
              <Scissors className="mx-2" size={14} style={{ color: theme.colors.primary }} />
              <div className="h-[1px] w-8" style={{ backgroundColor: theme.colors.primary }}></div>
            </div>
            <p className="text-sm mt-2" style={{ color: theme.colors.textSecondary }}>
              Revise os detalhes do seu agendamento
            </p>
          </div>

          <div
            className="rounded-lg p-6 space-y-6 pb-10 border-2"
            style={{
              backgroundColor: theme.colors.cardBackground,
              borderColor: theme.colors.secondary,
              borderRadius: theme.borderRadius.medium,
            }}
          >
            <div>
              <h4 className="text-lg font-semibold mb-3 flex items-center" style={{ color: theme.colors.text }}>
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
              <h4 className="text-lg font-semibold mb-3 flex items-center" style={{ color: theme.colors.text }}>
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
                        backgroundColor: theme.colors.background,
                        borderColor: theme.colors.secondary,
                        borderRadius: theme.borderRadius.small,
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
              <h4 className="text-lg font-semibold mb-3 flex items-center" style={{ color: theme.colors.text }}>
                <Calendar size={18} className="mr-2" style={{ color: theme.colors.primary }} />
                Detalhes do Agendamento
              </h4>
              <div className="space-y-2 pl-6">
                <p style={{ color: theme.colors.textSecondary }}>
                  <span className="font-medium" style={{ color: theme.colors.text }}>
                    Barbeiro:
                  </span>{" "}
                  {novo?.barbeiro?.nome || "Não selecionado"}
                </p>
                <div className="flex flex-wrap gap-4 mt-3">
                  <div
                    className="p-3 rounded flex items-center border"
                    style={{
                      backgroundColor: theme.colors.background,
                      borderColor: theme.colors.secondary,
                      borderRadius: theme.borderRadius.small,
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
                      backgroundColor: theme.colors.background,
                      borderColor: theme.colors.secondary,
                      borderRadius: theme.borderRadius.small,
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
        </BarbeariaStep>
      </BarbeariaStepper>
    </div>
  )
}

export default MasculinoClassicoAgendamento

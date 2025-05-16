"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Ban, Calendar, Clock, BadgeIcon as IdCard, Phone, User, Scissors, Check } from "lucide-react"
import type { NovoAgendamento } from "../utils/interfaces"
import { formatCPF, formatTelefone } from "../utils/functions"
import BarbeariaStepper, { BarbeariaStep } from "./ui/BarbeariaStepper"
import { BarbeariaInput } from "./ui"
import { Calendar as CalendarInput } from "primereact/calendar"

const Agendamento = () => {
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
          <h3 className="text-xl font-semibold text-white mb-2">SEUS DADOS</h3>
          <div className="flex items-center">
            <div className="h-[1px] w-8 bg-bigode-amber"></div>
            <User className="mx-2 text-bigode-amber" size={14} />
            <div className="h-[1px] w-8 bg-bigode-amber"></div>
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
          <h3 className="text-xl font-semibold text-white mb-2">SERVIÇOS</h3>
          <div className="flex items-center">
            <div className="h-[1px] w-8 bg-bigode-amber"></div>
            <Scissors className="mx-2 text-bigode-amber" size={14} />
            <div className="h-[1px] w-8 bg-bigode-amber"></div>
          </div>
          <p className="text-neutral-400 text-sm mt-2">Selecione os serviços desejados</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pb-10">
          {list.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => handlerSetServicos(item)}
              className={`cursor-pointer rounded-lg overflow-hidden shadow-lg relative ${
                isSelecionado(item.id)
                  ? "ring-2 ring-amber-500 ring-offset-2 ring-offset-neutral-900"
                  : "border border-neutral-700"
              }`}
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
                  <div className="absolute top-2 right-2 bg-amber-500 rounded-full p-1">
                    <Check size={16} className="text-white" />
                  </div>
                )}

                <div className="absolute bottom-0 left-0 p-3">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className={`${isSelecionado(item.id)? 'text-amber-500':'text-white'}  font-semibold`}>R$ {item.price.toFixed(2)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </BarbeariaStep>

      <BarbeariaStep>
        <div className="flex flex-col items-center mb-6">
          <h3 className="text-xl font-semibold text-white mb-2">BARBEIRO</h3>
          <div className="flex items-center">
            <div className="h-[1px] w-8 bg-bigode-amber"></div>
            <Scissors className="mx-2 text-bigode-amber" size={14} />
            <div className="h-[1px] w-8 bg-bigode-amber"></div>
          </div>
          <p className="text-neutral-400 text-sm mt-2">Escolha seu barbeiro preferido</p>
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
            className={`cursor-pointer rounded-lg overflow-hidden shadow-lg relative bg-neutral-800 flex flex-col items-center justify-center h-40 ${
              isBarbeiroSelecionado(0)
                ? "ring-2 ring-amber-500 ring-offset-2 ring-offset-neutral-900"
                : "border border-neutral-700"
            }`}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Ban size={48} className="text-neutral-600 mb-2" />
            <h4 className="text-lg font-semibold text-white text-center">Sem preferência</h4>

            {isBarbeiroSelecionado(0) && (
              <div className="absolute top-2 right-2 bg-amber-500 rounded-full p-1">
                <Check size={16} className="text-white" />
              </div>
            )}
          </motion.div>

          {barbeiros.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => handlerSetBarbeiro(item)}
              className={`cursor-pointer rounded-lg overflow-hidden shadow-lg relative ${
                isBarbeiroSelecionado(item.id)
                  ? "ring-2 ring-amber-500 ring-offset-2 ring-offset-neutral-900"
                  : "border border-neutral-700"
              }`}
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
                  <div className="absolute top-2 right-2 bg-amber-500 rounded-full p-1">
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
          <h3 className="text-xl font-semibold text-white mb-2">DATA E HORA</h3>
          <div className="flex items-center">
            <div className="h-[1px] w-8 bg-bigode-amber"></div>
            <Calendar className="mx-2 text-bigode-amber" size={14} />
            <div className="h-[1px] w-8 bg-bigode-amber"></div>
          </div>
          <p className="text-neutral-400 text-sm mt-2">Escolha a data e hora do agendamento</p>
        </div>

        <div className="space-y-6 pb-10 md:px-16">
          <div className="space-y-4">
            <div className="flex flex-col">
              {/* <h4 className="text-white font-medium mb-2 flex items-center">
                <Calendar size={16} className="text-bigode-amber mr-2" />
                Selecione uma data
              </h4> */}
              <div className="flex justify-center items-center max-w-full">
                <CalendarInput value={novo.dataAgendamento} onChange={(e) => setNovo({ ...novo, dataAgendamento: e.target.value })} inline className="w-130"/>
              </div>
            </div>

            {novo.dataAgendamento && (
              <div className="flex flex-col mt-6">
     <div className="flex flex-col items-center mb-6">
          <div className="flex items-center">
            <div className="h-[1px] w-8 bg-bigode-amber"></div>
            <Clock className="mx-2 text-bigode-amber" size={14} />
            <div className="h-[1px] w-8 bg-bigode-amber"></div>
          </div>
          <p className="text-neutral-400 text-sm mt-2">Escolha a data e hora do agendamento</p>
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
                      className={`text-center py-2 px-1 rounded-md border border-amber-500/10 cursor-pointer ${
                        novo.horaAgendamento === time
                          ? "bg-amber-500 text-white dark:text-neutral-950 font-bold"
                          : "bg-neutral-800 text-white hover:bg-amber-500/10"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setNovo({
                          ...novo,
                          horaAgendamento: time,
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
          <h3 className="text-xl font-semibold text-white mb-2">CONFIRMAÇÃO</h3>
          <div className="flex items-center">
            <div className="h-[1px] w-8 bg-bigode-amber"></div>
            <Scissors className="mx-2 text-bigode-amber" size={14} />
            <div className="h-[1px] w-8 bg-bigode-amber"></div>
          </div>
          <p className="text-neutral-400 text-sm mt-2">Revise os detalhes do seu agendamento</p>
        </div>

        <div className="bg-bigode-neutral-800 rounded-lg p-6 space-y-6 pb-10">
          <div>
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
              <User size={18} className="text-bigode-amber mr-2" />
              Dados do Cliente
            </h4>
            <div className="space-y-2 pl-6">
              <p className="text-neutral-300">
                <span className="font-medium text-white">Nome:</span> {novo?.nome || "Não informado"}
              </p>
              <p className="text-neutral-300">
                <span className="font-medium text-white">Telefone:</span> {novo?.telefone || "Não informado"}
              </p>
              <p className="text-neutral-300">
                <span className="font-medium text-white">CPF:</span> {novo?.cpf || "Não informado"}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
              <Scissors size={18} className="text-bigode-amber mr-2" />
              Serviços Selecionados
            </h4>
            {novo?.servicos && novo?.servicos?.length > 0 ? (
              <div className="space-y-2">
                {novo?.servicos?.map((item) => (
                  <div key={item.id} className="flex justify-between items-center bg-bigode-neutral-700/50 p-3 rounded">
                    <p className="text-white">{item.nome}</p>
                    <p className="text-bigode-amber font-semibold">R$ {item.preco.toFixed(2)}</p>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-2 border-t border-bigode-neutral-700 mt-2">
                  <p className="font-medium text-white">Total:</p>
                  <p className="text-xl font-bold text-bigode-amber">
                    R$ {novo?.servicos?.reduce((acc, item) => acc + item.preco, 0).toFixed(2)}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-neutral-400 italic">Nenhum serviço selecionado</p>
            )}
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
              <Calendar size={18} className="text-bigode-amber mr-2" />
              Detalhes do Agendamento
            </h4>
            <div className="space-y-2 pl-6">
              <p className="text-neutral-300">
                <span className="font-medium text-white">Barbeiro:</span> {novo?.barbeiro?.nome || "Não selecionado"}
              </p>
              <div className="flex flex-wrap gap-4 mt-3">
                <div className="bg-bigode-neutral-700/50 p-3 rounded flex items-center">
                  <Calendar size={18} className="text-bigode-amber mr-2" />
                  <span className="text-white">
                    {novo.dataAgendamento
                      ? new Date(novo.dataAgendamento).toLocaleDateString("pt-BR")
                      : "Data não selecionada"}
                  </span>
                </div>
                <div className="bg-bigode-neutral-700/50 p-3 rounded flex items-center">
                  <Clock size={18} className="text-bigode-amber mr-2" />
                  <span className="text-white">{novo.horaAgendamento || "Horário não selecionado"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BarbeariaStep>

    </BarbeariaStepper>
  )
}

export default Agendamento
"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, User, Scissors, Clock, DollarSign } from "lucide-react"
import { BarbeariaCard, BarbeariaButton, BarbeariaInput } from "../../../components/ui"
import { useTheme } from "../../../global/Theme-context"
import BarbeariaDropdown from "../../ui/BarbeariaDropdown"

interface Colaborador {
  id: string
  nome: string
  especialidades: string[]
}

interface QuickAddAgendamentoModalProps {
  isOpen: boolean
  onClose: () => void
  onAddAgendamento: (data: {
    clienteNome: string
    servicoNome: string
    colaboradorNome: string
    duracao: number
    preco: number
  }) => void
  slotInfo: any
  colaboradores: Colaborador[]
}

// Mock services data
const mockServicos = [
  { value: "Corte Masculino", label: "Corte Masculino", duracao: 30, preco: 25 },
  { value: "Corte + Barba", label: "Corte + Barba", duracao: 60, preco: 45 },
  { value: "Corte Feminino", label: "Corte Feminino", duracao: 45, preco: 35 },
  { value: "Barba", label: "Barba", duracao: 30, preco: 20 },
  { value: "Coloração", label: "Coloração", duracao: 90, preco: 80 },
  { value: "Sobrancelha", label: "Sobrancelha", duracao: 15, preco: 15 },
]

const QuickAddAgendamentoModal = ({
  isOpen,
  onClose,
  onAddAgendamento,
  slotInfo,
  colaboradores,
}: QuickAddAgendamentoModalProps) => {
  const { currentTheme: theme } = useTheme()
  const [formData, setFormData] = useState({
    clienteNome: "",
    servicoNome: "",
    colaboradorNome: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Get selected service details
  const selectedService = mockServicos.find((service) => service.value === formData.servicoNome)

  // Format date and time from slot info
  const formatSlotInfo = () => {
    if (!slotInfo) return { date: "", time: "" }

    const startDate = new Date(slotInfo.start)
    const endDate = new Date(slotInfo.end)

    return {
      date: startDate.toLocaleDateString("pt-BR"),
      startTime: startDate.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      endTime: endDate.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    }
  }

  const { date, startTime, endTime } = formatSlotInfo()

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.clienteNome || !formData.servicoNome || !formData.colaboradorNome) {
      return
    }

    if (!selectedService) return

    setIsSubmitting(true)

    try {
      await onAddAgendamento({
        clienteNome: formData.clienteNome,
        servicoNome: formData.servicoNome,
        colaboradorNome: formData.colaboradorNome,
        duracao: selectedService.duracao,
        preco: selectedService.preco,
      })

      // Reset form
      setFormData({
        clienteNome: "",
        servicoNome: "",
        colaboradorNome: "",
      })
    } catch (error) {
      console.error("Erro ao criar agendamento:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md"
          >
            <BarbeariaCard variant="elevated" size="lg" rounded="lg" className="relative">
              {/* Header */}
              <div
                className="flex items-center justify-between p-6 border-b"
                style={{ borderColor: theme.colors.border }}
              >
                <div>
                  <h2 className="text-xl font-bold" style={{ color: theme.colors.text }}>
                    Novo Agendamento
                  </h2>
                  <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                    Agendar para {date} às {startTime}
                  </p>
                </div>
                <BarbeariaButton variant="ghost" size="sm" onClick={onClose} className="p-2">
                  <X size={20} />
                </BarbeariaButton>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Selected Time Info */}
                <div
                  className="p-3 rounded-lg border"
                  style={{ backgroundColor: `${theme.colors.primary}10`, borderColor: `${theme.colors.primary}30` }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar size={16} style={{ color: theme.colors.primary }} />
                    <span className="text-sm font-medium" style={{ color: theme.colors.text }}>
                      Horário Selecionado
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                    {date} • {startTime} - {endTime}
                  </p>
                </div>

                {/* Client Name */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text }}>
                    Nome do Cliente *
                  </label>
                  <BarbeariaInput
                    placeholder="Digite o nome do cliente"
                    value={formData.clienteNome}
                    leftIcon={<User size={16} />}
                    variant="filled"
                    size="md"
                    rounded="lg"
                    required
                    onChange={(e) => handleInputChange("clienteNome", e.target.value)}
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text }}>
                    Serviço *
                  </label>
                  <BarbeariaDropdown
                    placeholder="Selecione o serviço"
                    value={formData.servicoNome}
                    options={mockServicos}
                    leftIcon={<Scissors size={16} />}
                    variant="filled"
                    size="md"
                    rounded="lg"
                    onChange={(value) => handleInputChange("servicoNome", value)}
                  />
                </div>

                {/* Service Details */}
                {selectedService && (
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: `${theme.colors.primary}05`, border: `1px solid ${theme.colors.border}` }}
                  >
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Clock size={14} style={{ color: theme.colors.primary }} />
                        <span style={{ color: theme.colors.text }}>{selectedService.duracao} minutos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign size={14} style={{ color: theme.colors.primary }} />
                        <span className="font-medium" style={{ color: theme.colors.text }}>
                          R$ {selectedService.preco.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Collaborator */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text }}>
                    Colaborador *
                  </label>
                  <BarbeariaDropdown
                    placeholder="Selecione o colaborador"
                    value={formData.colaboradorNome}
                    options={colaboradores.map((col) => ({ value: col.nome, label: col.nome }))}
                    leftIcon={<User size={16} />}
                    variant="filled"
                    size="md"
                    rounded="lg"
                    onChange={(value) => handleInputChange("colaboradorNome", value)}
                  />
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <BarbeariaButton
                    type="button"
                    variant="outline"
                    size="md"
                    rounded="lg"
                    onClick={onClose}
                    className="flex-1"
                  >
                    Cancelar
                  </BarbeariaButton>
                  <BarbeariaButton
                    type="submit"
                    variant="primary"
                    size="md"
                    rounded="lg"
                    className="flex-1"
                    isLoading={isSubmitting}
                    disabled={!formData.clienteNome || !formData.servicoNome || !formData.colaboradorNome}
                  >
                    Agendar
                  </BarbeariaButton>
                </div>
              </form>
            </BarbeariaCard>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default QuickAddAgendamentoModal

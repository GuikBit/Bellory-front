"use client"

import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  User,
  Phone,
  Scissors,
  Clock,
  DollarSign,
  FileText,
  Calendar,
  Play,
  CheckCircle,
  XCircle,
} from "lucide-react"
import { BarbeariaCard, BarbeariaButton } from "../../../components/ui"
import { useTheme } from "../../../global/Theme-context"

interface Agendamento {
  id: string
  clienteNome: string
  clienteTelefone: string
  servicoNome: string
  colaboradorNome: string
  dataHora: string
  duracao: number
  preco: number
  status: "agendado" | "em_andamento" | "concluido" | "cancelado"
  observacoes?: string
}

interface DetalhesAgendamentoModalProps {
  agendamento: Agendamento | null
  isOpen: boolean
  onClose: () => void
  onStatusChange: (agendamentoId: string, newStatus: Agendamento["status"]) => void
}

const DetalhesAgendamentoModal = ({ agendamento, isOpen, onClose, onStatusChange }: DetalhesAgendamentoModalProps) => {
  const { currentTheme: theme } = useTheme()

  if (!agendamento) return null

  // Status configurations
  const statusConfig = {
    agendado: {
      label: "Agendado",
      color: theme.colors.primary,
      bgColor: `${theme.colors.primary}15`,
    },
    em_andamento: {
      label: "Em Andamento",
      color: "#f59e0b",
      bgColor: "#fef3c7",
    },
    concluido: {
      label: "Concluído",
      color: "#10b981",
      bgColor: "#d1fae5",
    },
    cancelado: {
      label: "Cancelado",
      color: "#ef4444",
      bgColor: "#fee2e2",
    },
  }

  const currentStatus = statusConfig[agendamento.status]

  // Format date and time
  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString)
    return {
      date: date.toLocaleDateString("pt-BR"),
      time: date.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    }
  }

  const { date, time } = formatDateTime(agendamento.dataHora)
  const endTime = new Date(
    new Date(agendamento.dataHora).getTime() + agendamento.duracao * 60 * 1000,
  ).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  })

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
                    Detalhes do Agendamento
                  </h2>
                  <div
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium mt-2"
                    style={{ backgroundColor: currentStatus.bgColor, color: currentStatus.color }}
                  >
                    {currentStatus.label}
                  </div>
                </div>
                <BarbeariaButton variant="ghost" size="sm" onClick={onClose} className="p-2">
                  <X size={20} />
                </BarbeariaButton>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Client Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${theme.colors.primary}15` }}>
                      <User size={16} style={{ color: theme.colors.primary }} />
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                        Cliente
                      </p>
                      <p className="font-semibold" style={{ color: theme.colors.text }}>
                        {agendamento.clienteNome}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${theme.colors.primary}15` }}>
                      <Phone size={16} style={{ color: theme.colors.primary }} />
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                        Telefone
                      </p>
                      <p className="font-semibold" style={{ color: theme.colors.text }}>
                        {agendamento.clienteTelefone}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${theme.colors.primary}15` }}>
                      <Scissors size={16} style={{ color: theme.colors.primary }} />
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                        Serviço
                      </p>
                      <p className="font-semibold" style={{ color: theme.colors.text }}>
                        {agendamento.servicoNome}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${theme.colors.primary}15` }}>
                      <User size={16} style={{ color: theme.colors.primary }} />
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                        Colaborador
                      </p>
                      <p className="font-semibold" style={{ color: theme.colors.text }}>
                        {agendamento.colaboradorNome}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Schedule Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${theme.colors.primary}15` }}>
                      <Calendar size={16} style={{ color: theme.colors.primary }} />
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                        Data
                      </p>
                      <p className="font-semibold" style={{ color: theme.colors.text }}>
                        {date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${theme.colors.primary}15` }}>
                      <Clock size={16} style={{ color: theme.colors.primary }} />
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                        Horário
                      </p>
                      <p className="font-semibold" style={{ color: theme.colors.text }}>
                        {time} - {endTime} ({agendamento.duracao} min)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${theme.colors.primary}15` }}>
                      <DollarSign size={16} style={{ color: theme.colors.primary }} />
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                        Preço
                      </p>
                      <p className="font-semibold" style={{ color: theme.colors.text }}>
                        R$ {agendamento.preco.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Observations */}
                {agendamento.observacoes && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${theme.colors.primary}15` }}>
                      <FileText size={16} style={{ color: theme.colors.primary }} />
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                        Observações
                      </p>
                      <p className="font-semibold" style={{ color: theme.colors.text }}>
                        {agendamento.observacoes}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="p-6 border-t space-y-3" style={{ borderColor: theme.colors.border }}>
                <p className="text-sm font-medium" style={{ color: theme.colors.text }}>
                  Ações Rápidas
                </p>
                <div className="flex gap-2">
                  {agendamento.status === "agendado" && (
                    <>
                      <BarbeariaButton
                        variant="primary"
                        size="sm"
                        leftIcon={<Play size={16} />}
                        onClick={() => onStatusChange(agendamento.id, "em_andamento")}
                        className="flex-1"
                      >
                        Iniciar
                      </BarbeariaButton>
                      <BarbeariaButton
                        variant="outline"
                        size="sm"
                        leftIcon={<XCircle size={16} />}
                        onClick={() => onStatusChange(agendamento.id, "cancelado")}
                      >
                        Cancelar
                      </BarbeariaButton>
                    </>
                  )}

                  {agendamento.status === "em_andamento" && (
                    <>
                      <BarbeariaButton
                        variant="success"
                        size="sm"
                        leftIcon={<CheckCircle size={16} />}
                        onClick={() => onStatusChange(agendamento.id, "concluido")}
                        className="flex-1"
                      >
                        Finalizar
                      </BarbeariaButton>
                      <BarbeariaButton
                        variant="outline"
                        size="sm"
                        leftIcon={<XCircle size={16} />}
                        onClick={() => onStatusChange(agendamento.id, "cancelado")}
                      >
                        Cancelar
                      </BarbeariaButton>
                    </>
                  )}

                  {(agendamento.status === "concluido" || agendamento.status === "cancelado") && (
                    <div className="text-center w-full py-2">
                      <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                        Nenhuma ação disponível para este status
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </BarbeariaCard>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DetalhesAgendamentoModal

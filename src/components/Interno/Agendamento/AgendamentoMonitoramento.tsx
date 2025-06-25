"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  CalendarIcon,
  Clock,
  User,
  Filter,
  RefreshCw,
  CheckCircle,
  XCircle,
  AlertCircle,
  Play,
  Search,
  Users,
} from "lucide-react"
import { BarbeariaCard, BarbeariaButton, BarbeariaInput } from "../../../components/ui"
import { useTheme } from "../../../global/Theme-context"
import BarbeariaDropdown from "../../ui/BarbeariaDropdown"

// Interfaces
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

interface Colaborador {
  id: string
  nome: string
  especialidades: string[]
}

interface AgendamentoMonitoramentoProps {
  className?: string
}

// Mock data
const mockColaboradores: Colaborador[] = [
  { id: "1", nome: "João Silva", especialidades: ["Corte", "Barba"] },
  { id: "2", nome: "Maria Santos", especialidades: ["Coloração", "Corte Feminino"] },
  { id: "3", nome: "Pedro Costa", especialidades: ["Barba", "Bigode"] },
]

const mockAgendamentos: Agendamento[] = [
  {
    id: "1",
    clienteNome: "Carlos Oliveira",
    clienteTelefone: "(11) 99999-9999",
    servicoNome: "Corte + Barba",
    colaboradorNome: "João Silva",
    dataHora: new Date().toISOString(),
    duracao: 60,
    preco: 45,
    status: "em_andamento",
  },
  {
    id: "2",
    clienteNome: "Ana Costa",
    clienteTelefone: "(11) 88888-8888",
    servicoNome: "Corte Feminino",
    colaboradorNome: "Maria Santos",
    dataHora: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
    duracao: 45,
    preco: 35,
    status: "agendado",
  },
  {
    id: "3",
    clienteNome: "Roberto Lima",
    clienteTelefone: "(11) 77777-7777",
    servicoNome: "Barba",
    colaboradorNome: "Pedro Costa",
    dataHora: new Date(Date.now() - 90 * 60 * 1000).toISOString(),
    duracao: 30,
    preco: 25,
    status: "concluido",
  },
  {
    id: "4",
    clienteNome: "Fernanda Silva",
    clienteTelefone: "(11) 66666-6666",
    servicoNome: "Coloração",
    colaboradorNome: "Maria Santos",
    dataHora: new Date(Date.now() - 120 * 60 * 1000).toISOString(),
    duracao: 90,
    preco: 80,
    status: "cancelado",
  },
    {
    id: "1",
    clienteNome: "Carlos Oliveira",
    clienteTelefone: "(11) 99999-9999",
    servicoNome: "Corte + Barba",
    colaboradorNome: "João Silva",
    dataHora: new Date().toISOString(),
    duracao: 60,
    preco: 45,
    status: "em_andamento",
  },
  {
    id: "2",
    clienteNome: "Ana Costa",
    clienteTelefone: "(11) 88888-8888",
    servicoNome: "Corte Feminino",
    colaboradorNome: "Maria Santos",
    dataHora: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
    duracao: 45,
    preco: 35,
    status: "agendado",
  },
  {
    id: "3",
    clienteNome: "Roberto Lima",
    clienteTelefone: "(11) 77777-7777",
    servicoNome: "Barba",
    colaboradorNome: "Pedro Costa",
    dataHora: new Date(Date.now() - 90 * 60 * 1000).toISOString(),
    duracao: 30,
    preco: 25,
    status: "concluido",
  },
  {
    id: "4",
    clienteNome: "Fernanda Silva",
    clienteTelefone: "(11) 66666-6666",
    servicoNome: "Coloração",
    colaboradorNome: "Maria Santos",
    dataHora: new Date(Date.now() - 120 * 60 * 1000).toISOString(),
    duracao: 90,
    preco: 80,
    status: "cancelado",
  },
    {
    id: "1",
    clienteNome: "Carlos Oliveira",
    clienteTelefone: "(11) 99999-9999",
    servicoNome: "Corte + Barba",
    colaboradorNome: "João Silva",
    dataHora: new Date().toISOString(),
    duracao: 60,
    preco: 45,
    status: "em_andamento",
  },
  {
    id: "2",
    clienteNome: "Ana Costa",
    clienteTelefone: "(11) 88888-8888",
    servicoNome: "Corte Feminino",
    colaboradorNome: "Maria Santos",
    dataHora: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
    duracao: 45,
    preco: 35,
    status: "agendado",
  },
  {
    id: "3",
    clienteNome: "Roberto Lima",
    clienteTelefone: "(11) 77777-7777",
    servicoNome: "Barba",
    colaboradorNome: "Pedro Costa",
    dataHora: new Date(Date.now() - 90 * 60 * 1000).toISOString(),
    duracao: 30,
    preco: 25,
    status: "concluido",
  },
  {
    id: "4",
    clienteNome: "Fernanda Silva",
    clienteTelefone: "(11) 66666-6666",
    servicoNome: "Coloração",
    colaboradorNome: "Maria Santos",
    dataHora: new Date(Date.now() - 120 * 60 * 1000).toISOString(),
    duracao: 90,
    preco: 80,
    status: "cancelado",
  },
    {
    id: "1",
    clienteNome: "Carlos Oliveira",
    clienteTelefone: "(11) 99999-9999",
    servicoNome: "Corte + Barba",
    colaboradorNome: "João Silva",
    dataHora: new Date().toISOString(),
    duracao: 60,
    preco: 45,
    status: "em_andamento",
  },
  {
    id: "2",
    clienteNome: "Ana Costa",
    clienteTelefone: "(11) 88888-8888",
    servicoNome: "Corte Feminino",
    colaboradorNome: "Maria Santos",
    dataHora: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
    duracao: 45,
    preco: 35,
    status: "agendado",
  },
  {
    id: "3",
    clienteNome: "Roberto Lima",
    clienteTelefone: "(11) 77777-7777",
    servicoNome: "Barba",
    colaboradorNome: "Pedro Costa",
    dataHora: new Date(Date.now() - 90 * 60 * 1000).toISOString(),
    duracao: 30,
    preco: 25,
    status: "concluido",
  },
  {
    id: "4",
    clienteNome: "Fernanda Silva",
    clienteTelefone: "(11) 66666-6666",
    servicoNome: "Coloração",
    colaboradorNome: "Maria Santos",
    dataHora: new Date(Date.now() - 120 * 60 * 1000).toISOString(),
    duracao: 90,
    preco: 80,
    status: "cancelado",
  },
]

const AgendamentoMonitoramento = ({ className }: AgendamentoMonitoramentoProps) => {
  const { currentTheme: theme } = useTheme()
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>(mockAgendamentos)
  const [colaboradores] = useState<Colaborador[]>(mockColaboradores)
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedColaborador, setSelectedColaborador] = useState<string>("")
  const [selectedStatus, setSelectedStatus] = useState<string>("")
  const [dateRange, setDateRange] = useState<Date[]>([])
  const [currentTime, setCurrentTime] = useState(new Date())

  // URL parameters
  const [urlParams, setUrlParams] = useState({
    hoje: "",
    semana: "",
    historico: false,
  })

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  // Parse URL parameters
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      setUrlParams({
        hoje: params.get("hoje") || "",
        semana: params.get("semana") || "",
        historico: params.get("historico") === "true",
      })
    }
  }, [])

  // Status configurations
  const statusConfig = {
    agendado: {
      label: "Agendado",
      color: theme.colors.primary,
      bgColor: `${theme.colors.primary}15`,
      icon: CalendarIcon,
    },
    em_andamento: {
      label: "Em Andamento",
      color: "#f59e0b",
      bgColor: "#fef3c7",
      icon: Play,
    },
    concluido: {
      label: "Concluído",
      color: "#10b981",
      bgColor: "#d1fae5",
      icon: CheckCircle,
    },
    cancelado: {
      label: "Cancelado",
      color: "#ef4444",
      bgColor: "#fee2e2",
      icon: XCircle,
    },
  }

  // Status options for filter
  const statusOptions = [
    { value: "", label: "Todos os status" },
    { value: "agendado", label: "Agendado" },
    { value: "em_andamento", label: "Em Andamento" },
    { value: "concluido", label: "Concluído" },
    { value: "cancelado", label: "Cancelado" },
  ]

  // Filter agendamentos
  const filteredAgendamentos = useMemo(() => {
    let filtered = agendamentos

    if (searchTerm) {
      filtered = filtered.filter(
        (agendamento) =>
          agendamento.clienteNome.toLowerCase().includes(searchTerm.toLowerCase()) ||
          agendamento.servicoNome.toLowerCase().includes(searchTerm.toLowerCase()) ||
          agendamento.colaboradorNome.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedColaborador) {
      filtered = filtered.filter((agendamento) => agendamento.colaboradorNome === selectedColaborador)
    }

    if (selectedStatus) {
      filtered = filtered.filter((agendamento) => agendamento.status === selectedStatus)
    }

    return filtered
  }, [agendamentos, searchTerm, selectedColaborador, selectedStatus])

  // Group agendamentos by status
  const agendamentosByStatus = useMemo(() => {
    const grouped = {
      agendado: [] as Agendamento[],
      em_andamento: [] as Agendamento[],
      concluido: [] as Agendamento[],
      cancelado: [] as Agendamento[],
    }

    filteredAgendamentos.forEach((agendamento) => {
      grouped[agendamento.status].push(agendamento)
    })

    // Sort each group by date
    Object.keys(grouped).forEach((status) => {
      grouped[status as keyof typeof grouped].sort(
        (a, b) => new Date(a.dataHora).getTime() - new Date(b.dataHora).getTime(),
      )
    })

    return grouped
  }, [filteredAgendamentos])

  // Handle status change
  const handleStatusChange = (agendamentoId: string, newStatus: Agendamento["status"]) => {
    setAgendamentos((prev) =>
      prev.map((agendamento) =>
        agendamento.id === agendamentoId ? { ...agendamento, status: newStatus } : agendamento,
      ),
    )
  }

  // Format time
  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  // Render clean appointment card
  const renderCleanAppointmentCard = (agendamento: Agendamento) => {
    const status = statusConfig[agendamento.status]
    const StatusIcon = status.icon

    return (
      <motion.div
        key={agendamento.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        layout
      >
        <BarbeariaCard variant="outline" size="sm" rounded="lg" hover="lift" className="relative">
          {/* Status indicator line */}
          <div className="absolute top-0 left-0 w-full h-1 rounded-t-lg" style={{ backgroundColor: status.color }} />

          <div className="p-4">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base truncate" style={{ color: theme.colors.text }}>
                  {agendamento.clienteNome}
                </h3>
                <p className="text-sm truncate" style={{ color: theme.colors.textSecondary }}>
                  {agendamento.servicoNome}
                </p>
              </div>

              <div
                className="px-2 py-1 rounded-full flex items-center gap-1 ml-2"
                style={{ backgroundColor: status.bgColor }}
              >
                <StatusIcon size={12} style={{ color: status.color }} />
                <span className="text-xs font-medium whitespace-nowrap" style={{ color: status.color }}>
                  {status.label}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock size={14} style={{ color: theme.colors.primary }} />
                  <span style={{ color: theme.colors.text }}>{formatTime(agendamento.dataHora)}</span>
                </div>
                <span className="font-medium" style={{ color: theme.colors.text }}>
                  R$ {agendamento.preco.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <User size={14} style={{ color: theme.colors.primary }} />
                <span className="truncate" style={{ color: theme.colors.text }}>
                  {agendamento.colaboradorNome}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-4">
              {agendamento.status === "agendado" && (
                <>
                  <BarbeariaButton
                    variant="primary"
                    size="sm"
                    rounded="lg"
                    className="flex-1"
                    onClick={() => handleStatusChange(agendamento.id, "em_andamento")}
                  >
                    Iniciar
                  </BarbeariaButton>
                  <BarbeariaButton
                    variant="outline"
                    size="sm"
                    rounded="lg"
                    onClick={() => handleStatusChange(agendamento.id, "cancelado")}
                  >
                    Cancelar
                  </BarbeariaButton>
                </>
              )}

              {agendamento.status === "em_andamento" && (
                <BarbeariaButton
                  variant="success"
                  size="sm"
                  rounded="lg"
                  className="flex-1"
                  onClick={() => handleStatusChange(agendamento.id, "concluido")}
                >
                  Finalizar
                </BarbeariaButton>
              )}
            </div>
          </div>
        </BarbeariaCard>
      </motion.div>
    )
  }

  // Render status section
  const renderStatusSection = (status: keyof typeof statusConfig, agendamentos: Agendamento[]) => {
    const config = statusConfig[status]
    const StatusIcon = config.icon

    if (selectedStatus && selectedStatus !== status) return null

    return (
      <div key={status} className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg" style={{ backgroundColor: config.bgColor }}>
            <StatusIcon size={20} style={{ color: config.color }} />
          </div>
          <div>
            <h2 className="text-lg font-semibold" style={{ color: theme.colors.text }}>
              {config.label}
            </h2>
            <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
              {agendamentos.length} {agendamentos.length === 1 ? "agendamento" : "agendamentos"}
            </p>
          </div>
        </div>

        {agendamentos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <AnimatePresence>
              {agendamentos.map((agendamento) => renderCleanAppointmentCard(agendamento))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-8">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"
              style={{ backgroundColor: config.bgColor }}
            >
              <StatusIcon size={24} style={{ color: config.color }} />
            </div>
            <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
              Nenhum agendamento {config.label.toLowerCase()}
            </p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={`space-y-6 ${className}`} style={{ backgroundColor: theme.colors.background }}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}>
            Agendamentos
          </h1>
          <p style={{ color: theme.colors.textSecondary }}>Monitore e gerencie todos os agendamentos</p>
        </div>

        <BarbeariaButton
          variant="outline"
          size="sm"
          leftIcon={<RefreshCw size={16} />}
          onClick={() => setIsLoading(true)}
          isLoading={isLoading}
        >
          Atualizar
        </BarbeariaButton>
      </div>

      {/* Filters */}
      <BarbeariaCard variant="filled" size="md" rounded="lg">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={18} style={{ color: theme.colors.primary }} />
            <h3 className="font-semibold" style={{ color: theme.colors.text }}>
              Filtros
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <BarbeariaInput
              placeholder="Buscar cliente, serviço..."
              value={searchTerm}
              leftIcon={<Search size={16} />}
              variant="filled"
              size="md"
              rounded="lg"
              clearable
              onChange={(e) => setSearchTerm(e.target.value)}
              onClear={() => setSearchTerm("")}
            />

            {/* Status Filter */}
            <BarbeariaDropdown
              placeholder="Filtrar por status"
              value={selectedStatus}
              options={statusOptions}
              leftIcon={<AlertCircle size={16} />}
              variant="filled"
              size="md"
              rounded="lg"
              clearable
              onChange={(value) => setSelectedStatus(value)}
              onClear={() => setSelectedStatus("")}
            />

            {/* Colaborador */}
            <BarbeariaDropdown
              placeholder="Todos os colaboradores"
              value={selectedColaborador}
              options={[
                { value: "", label: "Todos os colaboradores" },
                ...colaboradores.map((col) => ({ value: col.nome, label: col.nome })),
              ]}
              leftIcon={<Users size={16} />}
              variant="filled"
              size="md"
              rounded="lg"
              clearable
              onChange={(value) => setSelectedColaborador(value)}
              onClear={() => setSelectedColaborador("")}
            />
          </div>
        </div>
      </BarbeariaCard>

      {/* Status Sections */}
      <div className="space-y-8">
        {Object.entries(agendamentosByStatus).map(([status, agendamentos]) =>
          renderStatusSection(status as keyof typeof statusConfig, agendamentos),
        )}
      </div>

      {/* Empty State */}
      {filteredAgendamentos.length === 0 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
          <BarbeariaCard variant="outline" size="lg" rounded="lg">
            <div className="p-8">
              <CalendarIcon size={48} style={{ color: theme.colors.textSecondary, margin: "0 auto 16px" }} />
              <h3 className="text-lg font-semibold mb-2" style={{ color: theme.colors.text }}>
                Nenhum agendamento encontrado
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>Tente ajustar os filtros para encontrar agendamentos.</p>
            </div>
          </BarbeariaCard>
        </motion.div>
      )}
    </div>
  )
}

export default AgendamentoMonitoramento

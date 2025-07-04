"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import FullCalendar from "@fullcalendar/react"
import timeGridPlugin from "@fullcalendar/timegrid"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import {
  CalendarIcon,
  Filter,
  RefreshCw,
  CheckCircle,
  XCircle,
  AlertCircle,
  Play,
  Search,
  Users,
  User,
  Scissors,
} from "lucide-react"
import { BarbeariaCard, BarbeariaButton, BarbeariaInput } from "../../../components/ui"
import { useTheme } from "../../../global/Theme-context"
import BarbeariaDropdown from "../../ui/BarbeariaDropdown"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import "tippy.js/animations/scale-subtle.css" // Importando a animação
import DetalhesAgendamentoModal from "./AgendamentoDetalhes"
import QuickAddAgendamentoModal from "./AgendamentoNovo"

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
    dataHora: new Date(Date.now() + 120 * 60 * 1000).toISOString(),
    duracao: 30,
    preco: 25,
    status: "agendado",
  },
  {
    id: "4",
    clienteNome: "Fernanda Silva",
    clienteTelefone: "(11) 66666-6666",
    servicoNome: "Coloração",
    colaboradorNome: "Maria Santos",
    dataHora: new Date(Date.now() + 180 * 60 * 1000).toISOString(),
    duracao: 90,
    preco: 80,
    status: "concluido",
  },
  {
    id: "5",
    clienteNome: "Lucas Pereira",
    clienteTelefone: "(11) 55555-5555",
    servicoNome: "Corte",
    colaboradorNome: "João Silva",
    dataHora: new Date(Date.now() + 240 * 60 * 1000).toISOString(),
    duracao: 30,
    preco: 25,
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
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedAgendamento, setSelectedAgendamento] = useState<Agendamento | null>(null)
  const [quickAddModalOpen, setQuickAddModalOpen] = useState(false)
  const [selectedSlotInfo, setSelectedSlotInfo] = useState<any>(null)

  // Status configurations
  const statusConfig = {
    agendado: {
      label: "Agendado",
      color: theme.colors.primary,
      bgColor: theme.colors.primary,
      icon: CalendarIcon,
    },
    em_andamento: {
      label: "Em Andamento",
      color: "#f59e0b",
      bgColor: "#f59e0b",
      icon: Play,
    },
    concluido: {
      label: "Concluído",
      color: "#10b981",
      bgColor: "#10b981",
      icon: CheckCircle,
    },
    cancelado: {
      label: "Cancelado",
      color: "#ef4444",
      bgColor: "#ef4444",
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

  // Map agendamentos to FullCalendar events
  const calendarEvents = useMemo(() => {
    return filteredAgendamentos.map((agendamento) => {
      const startDate = new Date(agendamento.dataHora)
      const endDate = new Date(startDate.getTime() + agendamento.duracao * 60 * 1000)

      return {
        id: agendamento.id,
        title: agendamento.clienteNome,
        start: startDate.toISOString(),
        end: endDate.toISOString(),
        backgroundColor: statusConfig[agendamento.status].bgColor,
        borderColor: statusConfig[agendamento.status].color,
        extendedProps: agendamento,
      }
    })
  }, [filteredAgendamentos])

  // Format time
  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  // Handle status change
  const handleStatusChange = (agendamentoId: string, newStatus: Agendamento["status"]) => {
    setAgendamentos((prev) =>
      prev.map((agendamento) =>
        agendamento.id === agendamentoId ? { ...agendamento, status: newStatus } : agendamento,
      ),
    )
    setModalOpen(false) // Close modal after status change
  }

  // Handle add new agendamento
  const handleAddAgendamento = (data: {
    clienteNome: string
    servicoNome: string
    colaboradorNome: string
    duracao: number
    preco: number
  }) => {
    const novoAgendamento: Agendamento = {
      id: Date.now().toString(), // Simple unique ID
      clienteNome: data.clienteNome,
      clienteTelefone: "", // Default empty
      servicoNome: data.servicoNome,
      colaboradorNome: data.colaboradorNome,
      dataHora: selectedSlotInfo.start.toISOString(),
      duracao: data.duracao,
      preco: data.preco,
      status: "agendado",
    }

    setAgendamentos([...agendamentos, novoAgendamento])
    setQuickAddModalOpen(false)
    setSelectedSlotInfo(null)
  }

  // NOVO COMPONENTE INTERNO PARA O POPOVER
  const AgendamentoPopover = ({ agendamento }: { agendamento: Agendamento }) => {
    return (
      <div
        className="rounded-lg border shadow-lg p-3 w-64 text-sm z-10"
        style={{
          backgroundColor: theme.colors.background,
          color: theme.colors.text,
          borderColor: theme.colors.border,
        }}
      >
        {/* Seção de Informações */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <User size={14} style={{ color: theme.colors.textSecondary }} />
            <span className="font-bold">{agendamento.clienteNome}</span>
          </div>
          <div className="flex items-center gap-2">
            <Scissors size={14} style={{ color: theme.colors.textSecondary }} />
            <span>{agendamento.servicoNome}</span>
          </div>
        </div>

        {/* Divisor */}
        <hr className="my-3" style={{ borderColor: theme.colors.border }} />

        {/* Seção de Ações */}
        <div className="flex items-center justify-between">
          {/* <span className="text-xs font-medium" style={{ color: theme.colors.textSecondary }}>
            Ações:
          </span> */}
          <div className="flex gap-2 w-full justify-center">
            {agendamento.status === "agendado" && (
              <BarbeariaButton
                size="xs"
                variant="primary"
                onClick={() => handleStatusChange(agendamento.id, "em_andamento")}
              >
                <Play size={14} className="mr-1" /> Iniciar
              </BarbeariaButton>
            )}
            {agendamento.status === "em_andamento" && (
              <>
                <BarbeariaButton
                  size="xs"
                  variant="success"
                  fullWidth
                  onClick={() => handleStatusChange(agendamento.id, "concluido")}
                >
                  <CheckCircle size={14} className="mr-1" /> Concluir
                </BarbeariaButton>
                <BarbeariaButton
                  size="xs"
                  variant="error"
                  fullWidth
                  onClick={() => handleStatusChange(agendamento.id, "cancelado")}
                >
                  <XCircle size={14} className="mr-1" /> Cancelar
                </BarbeariaButton>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Custom event content renderer with Tippy popover
  const renderEventContent = (eventInfo: any) => {
    const agendamento = eventInfo.event.extendedProps as Agendamento
    const startTime = formatTime(agendamento.dataHora)
    const endTime = formatTime(
      new Date(new Date(agendamento.dataHora).getTime() + agendamento.duracao * 60 * 1000).toISOString(),
    )

    return (
      <Tippy
        content={<AgendamentoPopover agendamento={agendamento} />}
        interactive={true}
        zIndex={9999}
        trigger="mouseenter"
        placement="top-start"
        animation="scale-subtle"
      >
        <div className="p-2 text-xs overflow-hidden cursor-pointer w-full h-full">
          <div className="font-semibold text-white truncate">{agendamento.clienteNome}</div>
          <div className="text-white/90 truncate">{agendamento.servicoNome}</div>
          <div className="text-white/80 text-xs">
            {startTime} - {endTime}
          </div>
          <div className="text-white/80 text-xs truncate">{agendamento.colaboradorNome}</div>
        </div>
      </Tippy>
    )
  }

  // Handle event click
  const handleEventClick = (clickInfo: any) => {
    const agendamento = clickInfo.event.extendedProps as Agendamento
    setSelectedAgendamento(agendamento)
    setModalOpen(true)
  }

  return (
    <div className={`space-y-6 ${className}`} style={{ backgroundColor: theme.colors.background }}>
      {/* Filters */}
      <div className="p-4 border rounded-lg shadow" style={{ borderColor: theme.colors.border }}>
        <div className="flex items-center gap-2 mb-2">
          <Filter size={18} style={{ color: theme.colors.primary }} />
          <h3 className="font-semibold" style={{ color: theme.colors.text }}>
            Filtros
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
          {/* Search */}
          <div className="md:col-span-3">
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
          </div>

          {/* Status Filter */}
          <div className="md:col-span-2">
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
          </div>

          {/* Colaborador */}
          <div className="md:col-span-2">
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

          <div>
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
        </div>
      </div>

      {/* FullCalendar */}
      <div className="border rounded-lg overflow-hidden shadow" style={{ borderColor: theme.colors.border }}>
        <style>{`
          :root {
            --fc-bg-color: ${theme.colors.background};
            --fc-border-color: ${theme.colors.border};
            --fc-text-color: ${theme.colors.text};
            --fc-main-color: ${theme.colors.primary};
          }
          
          .fc {
            background-color: var(--fc-bg-color);
            color: var(--fc-text-color);
            font-family: ${theme.fonts.body};
          }
          
          .fc .fc-toolbar {
            background-color: var(--fc-bg-color);
            border-bottom: 1px solid var(--fc-border-color);
            padding: 1rem;
          }
          
          .fc .fc-toolbar-title {
            color: var(--fc-text-color);
            font-weight: 600;
            font-size: 1.25rem;
          }
          
          .fc .fc-button {
            background-color: var(--fc-main-color);
            border-color: var(--fc-main-color);
            color: white;
          }
          
          .fc .fc-button:hover {
            background-color: var(--fc-main-color);
            opacity: 0.9;
          }
          
          .fc .fc-button:disabled {
            opacity: 0.6;
          }
          
          .fc-theme-standard .fc-scrollgrid {
            border-color: var(--fc-border-color);
          }
          
          .fc-theme-standard td, .fc-theme-standard th {
            border-color: var(--fc-border-color);
          }
          
          .fc .fc-col-header {
            background-color: ${theme.colors.background};
            color: var(--fc-text-color);
            font-weight: 600;
          }
          
          .fc .fc-timegrid-slot {
            border-color: var(--fc-border-color);
          }
          
          .fc .fc-timegrid-slot-label {
            color: var(--fc-text-color);
            font-size: 0.875rem;
          }
          
          .fc .fc-event {
            border-radius: 6px;
            border-width: 1px;
            font-size: 2.75rem;
            cursor: pointer;
            z-index: 0;
            overflow: visible;
          }
          
          .fc .fc-event:hover {
            opacity: 0.9;
          }
          
          .fc .fc-timegrid-event {
            border-radius: 6px;
            height: auto;
          }
          
          .fc-direction-ltr .fc-timegrid-slot-label-frame {
            text-align: right;
            padding-right: 8px;
          }
        `}</style>

        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridDay"
          locale="pt-br"
          allDaySlot={false}
          selectable={true}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={calendarEvents}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          select={(selectInfo) => {
            setSelectedSlotInfo(selectInfo)
            setQuickAddModalOpen(true)
          }}
          height="auto"
          slotMinTime="08:00:00"
          slotMaxTime="20:00:00"
          slotDuration="00:30:00"
          slotLabelInterval="01:00:00"
          nowIndicator={true}
          businessHours={{
            daysOfWeek: [1, 2, 3, 4, 5, 6],
            startTime: "08:00",
            endTime: "18:00",
          }}
        />
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
      {/* Details Modal */}
      <DetalhesAgendamentoModal
        agendamento={selectedAgendamento}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onStatusChange={handleStatusChange}
      />
      {/* Quick Add Modal */}
      <QuickAddAgendamentoModal
        isOpen={quickAddModalOpen}
        onClose={() => setQuickAddModalOpen(false)}
        onAddAgendamento={handleAddAgendamento}
        slotInfo={selectedSlotInfo}
        colaboradores={colaboradores}
      />
    </div>
  )
}

export default AgendamentoMonitoramento
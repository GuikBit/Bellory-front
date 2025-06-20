"use client"

import { useTheme } from "../../global/Theme-context"
import { BarbeariaCard } from "../../components/ui"


export default function DashboardPage() {
  const { currentTheme: theme } = useTheme()

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.background }}>

      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1
              className="text-3xl font-bold mb-2"
              style={{
                color: theme.colors.text,
                fontFamily: theme.fonts.heading,
              }}
            >
              Dashboard
            </h1>
            <p style={{ color: theme.colors.textSecondary }}>
              Bem-vindo de volta! Aqui está um resumo das suas atividades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: "Agendamentos Hoje", value: "12", change: "+2.5%" },
              { title: "Receita do Mês", value: "R$ 8.450", change: "+12.3%" },
              { title: "Clientes Ativos", value: "234", change: "+5.1%" },
              { title: "Avaliação Média", value: "4.8", change: "+0.2" },
            ].map((stat, index) => (
                <BarbeariaCard variant="outline" disabled key={index}>
                    <div className="text-sm font-medium pb-2" style={{ color: theme.colors.textSecondary }}>
                        {stat.title}
                    </div>
                    <div className="text-2xl font-bold" style={{ color: theme.colors.text }}>
                    {stat.value}
                    </div>
                    <p className="text-xs" style={{ color: theme.colors.primary }}>
                        {stat.change} em relação ao mês anterior
                    </p>
                </BarbeariaCard>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BarbeariaCard fullWidth variant="outline" disabled>
                <div className="p-3">
                    <h2 style={{ 
                        color: theme.colors.text, 
                        fontSize: theme.fonts.sizes?.["2xl"], 
                        fontWeight: theme.fonts.weights?.semibold 
                        }}
                    >
                        Próximos Agendamentos
                    </h2>
                    <div className="space-y-4">
                    {[
                        { client: "Maria Silva", service: "Corte + Escova", time: "14:00" },
                        { client: "Ana Costa", service: "Coloração", time: "15:30" },
                        { client: "João Santos", service: "Barba", time: "16:00" },
                    ].map((appointment, index) => (
                        <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg"
                        style={{ backgroundColor: `${theme.colors.primary}05` }}
                        >
                        <div>
                            <p className="font-medium" style={{ color: theme.colors.text }}>
                            {appointment.client}
                            </p>
                            <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                            {appointment.service}
                            </p>
                        </div>
                        <span className="font-medium" style={{ color: theme.colors.primary }}>
                            {appointment.time}
                        </span>
                        </div>
                    ))}
                    </div>
                </div>
            </BarbeariaCard>

            <BarbeariaCard fullWidth variant="outline" disabled >
                <div className="p-3">
                    <h3 style={{ 
                        color: theme.colors.text, 
                        fontSize: theme.fonts.sizes?.["2xl"], 
                        fontWeight: theme.fonts.weights?.semibold 
                        }}
                    >
                        Atividade Recente
                    </h3>
                    <div className="space-y-4">
                    {[
                        { action: "Novo agendamento", client: "Maria Silva", time: "há 5 min" },
                        { action: "Pagamento recebido", client: "Ana Costa", time: "há 10 min" },
                        { action: "Avaliação recebida", client: "João Santos", time: "há 1h" },
                    ].map((activity, index) => (
                        <div key={index} className="flex items-center justify-between">
                        <div>
                            <p className="font-medium" style={{ color: theme.colors.text }}>
                            {activity.action}
                            </p>
                            <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                            {activity.client}
                            </p>
                        </div>
                        <span className="text-sm" style={{ color: theme.colors.textSecondary }}>
                            {activity.time}
                        </span>
                        </div>
                    ))}
                    </div>
                </div>
            </BarbeariaCard>
          </div>
        </div>
      </main>
    </div>
  )
}

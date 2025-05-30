
"use client"


// import { useGlobalState } from "../global/ContextGlobalState"
import { useTheme } from "../global/Theme-context" 
import { BarbeariaTitle } from "../components/ui" 
import ThemeFeedback from "../components/Feedbacks.tsx/theme-feedback"
import ThemeAgendamento from "../components/Agendamento/theme-agendamento"
import ThemeProdutos from "../components/Produtos/theme-produtos"
import ThemeServicos from "../components/Servicos/theme-servicos"
import ThemeAbout from "../components/About/theme-about"
import ThemePresentation from "../components/Presentation/theme-presentation"
import ThemePlanos from "../components/Planos/theme-planos"

const Home = () => {

  // const { setNovoAgendamento } = useGlobalState();
  const { currentTheme } = useTheme()


  return (

    <div
      className="w-full min-h-screen relative"
      style={{
        backgroundColor: currentTheme.colors.background,
        color: currentTheme.colors.text,
      }}
    >
      {/* Presentation Section */}
      <ThemePresentation />

      {/* About Section */}
      <ThemeAbout />

      {/* Services Section */}
      <div className="py-20" style={{ backgroundColor: currentTheme.colors.background }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2
              className="text-3xl font-bold mb-3"
              style={{
                color: currentTheme.colors.text,
                fontFamily: currentTheme.fonts.heading,
              }}
            >
              Nossos Serviços
            </h2>
          </div>
          <ThemeServicos />
        </div>
      </div>

      <ThemePlanos />

      <ThemeFeedback />

      <section
        className="py-20"
        style={{ backgroundColor: currentTheme.colors.cardBackground }}
      >
        <div className="container mx-auto px-4">
          <BarbeariaTitle
            title="NOSSOS PRODUTOS"
            subtitle="Produtos premium para cuidados masculinos, selecionados para garantir os melhores resultados."
          />
          <ThemeProdutos />
        </div>
      </section>

      <section
        className="py-20"
        style={{ backgroundColor: currentTheme.colors.background }}
      >
        <div className="container mx-auto px-4">
          <BarbeariaTitle
            title="AGENDAMENTO RÁPIDO"
            subtitle="Agende seu horário em poucos passos e garanta o melhor atendimento."
          />
          <div className="max-w-4xl h-auto mx-auto rounded-lg shadow-lg">
            <ThemeAgendamento />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
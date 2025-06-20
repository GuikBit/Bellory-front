
"use client"


// import { useGlobalState } from "../global/ContextGlobalState"
import { useTheme } from "../global/Theme-context" 
import ThemeAgendamento from "../components/Externo/Agendamento/theme-agendamento"
import ThemeProdutos from "../components/Externo/Produtos/theme-produtos"
import ThemeServicos from "../components/Externo/Servicos/theme-servicos"
import ThemeAbout from "../components/Externo/About/theme-about"
import ThemePresentation from "../components/Externo/Presentation/theme-presentation"
import ThemePlanos from "../components/Externo/Planos/theme-planos"
import EleganteSubTitle from "../components/Fragments/Feminino/EleganteSubTitleIcon"
import ThemeFeedback from "../components/Externo/Feedbacks.tsx/theme-feedback"

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

          <EleganteSubTitle title="Nossos Serviços" />
          <ThemeServicos />
        </div>
      </div>

      <ThemePlanos />

      <ThemeFeedback />

      <ThemeProdutos />

      <div className=" h-auto mx-auto rounded-lg">
        <ThemeAgendamento />
      </div>      
    </div>
  )
}

export default Home
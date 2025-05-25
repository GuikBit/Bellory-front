"use client"

import { useTheme } from "../../contexts/Theme-context"
import FemininoEleganteServicosDetalhados from "./Feminino-elegante-servicos-detalhados"
import FemininoModernoServicosDetalhados from "./Feminino-moderno-servicos-detalhados"
import MasculinoClassicoServicosDetalhados from "./Maculino-classico-servicos-detalhados"
import MasculineDefaultServicosDetalhados from "./Maculino-default-servicos-detalhados"
import MasculinoModernoServicosDetalhados from "./Maculino-moderno-servicos-detalhados"



const ThemeServicosDetalhados = () => {
  const { currentTheme } = useTheme()

  // Render the appropriate servicos detalhados component based on the current theme
  switch (currentTheme.id) {
    case "masculine_default":
      return <MasculineDefaultServicosDetalhados />
    case "masculinoModerno":
      return <MasculinoModernoServicosDetalhados />
    case "masculinoClassico":
      return <MasculinoClassicoServicosDetalhados />
    case "femininoElegante":
      return <FemininoEleganteServicosDetalhados />
    case "femininoModerno":
      return <FemininoModernoServicosDetalhados />
    default:
      return <MasculineDefaultServicosDetalhados />
  }
}

export default ThemeServicosDetalhados

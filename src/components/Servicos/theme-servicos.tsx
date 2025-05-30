"use client"

import { useTheme } from "../../global/Theme-context"
import FemininoEleganteServicos from "./Feminino-elegante-servicos"
import FemininoModernoServicos from "./Feminino-moderno-servicos"
import MasculinoClassicoServicos from "./Masculino-classico-servicos"
import MasculineDefaultServicos from "./Masculino-default-servicos"
import MasculinoModernoServicos from "./Masculino-moderno-servicos"



const ThemeServicos = () => {
  const { currentTheme } = useTheme()

  // Render the appropriate servicos component based on the current theme
  switch (currentTheme.id) {
    case "masculine_default":
      return <MasculineDefaultServicos />
    case "masculinoModerno":
      return <MasculinoModernoServicos />
    case "masculinoClassico":
      return <MasculinoClassicoServicos />
    case "femininoElegante":
      return <FemininoEleganteServicos />
    case "femininoModerno":
      return <FemininoModernoServicos />
    default:
      return <MasculineDefaultServicos />
  }
}

export default ThemeServicos

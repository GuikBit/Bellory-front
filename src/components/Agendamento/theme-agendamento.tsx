"use client"

import { useTheme } from "../../contexts/Theme-context"
import FemininoEleganteAgendamento from "./Feminino-elegante-agendamento"
import FemininoModernoAgendamento from "./Feminino-moderno-agendamento"
import MasculinoClassicoAgendamento from "./Masculino-classico-agendamento"
import MasculineDefaultAgendamento from "./Masculino-default-agendamento"
import MasculinoModernoAgendamento from "./Masculino-moderno-agendamento"


const ThemeAgendamento = () => {
  const { currentTheme } = useTheme()

  // Render the appropriate agendamento component based on the current theme
  switch (currentTheme.id) {
    case "masculine_default":
      return <MasculineDefaultAgendamento />
    case "masculinoModerno":
      return <MasculinoModernoAgendamento />
    case "masculinoClassico":
      return <MasculinoClassicoAgendamento />
    case "femininoElegante":
      return <FemininoEleganteAgendamento />
    case "femininoModerno":
      return <FemininoModernoAgendamento />
    default:
      return <MasculineDefaultAgendamento />
  }
}

export default ThemeAgendamento

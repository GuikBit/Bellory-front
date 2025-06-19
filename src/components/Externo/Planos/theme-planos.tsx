"use client"

import { useTheme } from "../../../global/Theme-context"
import FemininoElegantePlanos from "./Feminino-elegante-planos"
import FemininoModernoPlanos from "./Feminino-moderno-planos"
import MasculinoClassicoPlanos from "./Masculino-classico-planos"
import MasculineDefaultPlanos from "./Masculino-default-planos"
import MasculinoModernoPlanos from "./Masculino-moderno-planos"


const ThemePlanos = () => {
  const { currentTheme } = useTheme()

  switch (currentTheme.id) {
    case "masculine_default":
      return <MasculineDefaultPlanos />
    case "masculinoModerno":
      return <MasculinoModernoPlanos />
    case "masculinoClassico":
      return <MasculinoClassicoPlanos />
    case "femininoElegante":
      return <FemininoElegantePlanos />
    case "femininoModerno":
      return <FemininoModernoPlanos />
    default:
      return <MasculineDefaultPlanos />
  }
}

export default ThemePlanos

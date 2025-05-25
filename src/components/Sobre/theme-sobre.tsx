"use client"

import { useTheme } from "../../contexts/Theme-context"
import FemininoEleganteSobre from "./Feminino-elegante-sobre"
import FemininoModernoSobre from "./Feminino-moderno-sobre"
import MasculinoClassicoSobre from "./Masculino-classico-sobre"
import MasculineDefaultSobre from "./Masculino-default-sobre"
import MasculinoModernoSobre from "./Masculino-moderno-sobre"


const ThemeSobre = () => {
  const { currentTheme } = useTheme()

  switch (currentTheme.id) {
    case "masculine_default":
      return <MasculineDefaultSobre />
    case "masculinoModerno":
      return <MasculinoModernoSobre />
    case "masculinoClassico":
      return <MasculinoClassicoSobre />
    case "femininoElegante":
      return <FemininoEleganteSobre />
    case "femininoModerno":
      return <FemininoModernoSobre />
    default:
      return <MasculineDefaultSobre />
  }
}

export default ThemeSobre

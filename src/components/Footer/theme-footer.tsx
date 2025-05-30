"use client"

import { useTheme } from "../../global/Theme-context"
import FemininoEleganteFooter from "./Feminino-elegante-footer"
import FemininoModernoFooter from "./Feminino-moderno-footer"
import MasculinoClassicoFooter from "./Masculino-classico-footer"
import MasculineDefaultFooter from "./Masculino-default-footer"
import MasculinoModernoFooter from "./Masculino-moderno-footer"


const ThemeFooter = () => {
  const { currentTheme } = useTheme()

  switch (currentTheme.id) {
    case "masculine_default":
      return <MasculineDefaultFooter />
    case "masculinoModerno":
      return <MasculinoModernoFooter />
    case "masculinoClassico":
      return <MasculinoClassicoFooter />
    case "femininoElegante":
      return <FemininoEleganteFooter />
    case "femininoModerno":
      return <FemininoModernoFooter />
    default:
      return <MasculineDefaultFooter />
  }
}

export default ThemeFooter

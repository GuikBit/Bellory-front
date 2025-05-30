"use client"

import { useTheme } from "../../global/Theme-context"
import FemininoEleganteAuth from "./Feminino-elegante-auth"
import FemininoModernoAuth from "./Feminino-moderno-auth"
import MasculinoClassicoAuth from "./Masculino-classico-auth"
import MasculineDefaultAuth from "./Masculino-default-auth"
import MasculinoModernoAuth from "./Masculino-moderno-auth"



const ThemeAuth = () => {
  const { currentTheme } = useTheme();

  const renderAuth = () => {
    switch (currentTheme.id) {
      case "masculine_default":
        return <MasculineDefaultAuth />
      case "masculinoModerno":
        return <MasculinoModernoAuth />
      case "masculinoClassico":
        return <MasculinoClassicoAuth />
      case "femininoElegante":
        return <FemininoEleganteAuth />
      case "femininoModerno":
        return <FemininoModernoAuth />
      default:
        return <MasculineDefaultAuth />
    }
  }

  return renderAuth()
}

export default ThemeAuth

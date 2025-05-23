"use client"

import { useTheme } from "../../contexts/Theme-context"
import FemininoEleganteProdutos from "./Feminino-elegante-produtos"
import FemininoModernoProdutos from "./Feminino-moderno-produtos"
import MasculinoClassicoProdutos from "./Masculino-classico-produtos"
import MasculineDefaultProdutos from "./Masculino-default-produtos"
import MasculinoModernoProdutos from "./Masculino-moderno-produtos"


const ThemeProdutos = () => {
  const { currentTheme } = useTheme()

  // Render the appropriate produtos component based on the current theme
  switch (currentTheme.id) {
    case "masculine_default":
      return <MasculineDefaultProdutos />
    case "masculinoModerno":
      return <MasculinoModernoProdutos />
    case "masculinoClassico":
      return <MasculinoClassicoProdutos />
    case "femininoElegante":
      return <FemininoEleganteProdutos />
    case "femininoModerno":
      return <FemininoModernoProdutos />
    default:
      return <MasculineDefaultProdutos />
  }
}

export default ThemeProdutos

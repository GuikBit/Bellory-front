"use client"

import { useTheme } from "../../global/Theme-context"
import FemininoEleganteProdutosLista from "./Feminino-elegante-produtos-lista"
import FemininoModernoProdutosLista from "./Feminino-moderno-produtos-lista"
import MasculinoClassicoProdutosLista from "./Masculino-classico-produtos-lista"
import MasculineDefaultProdutosLista from "./Masculino-default-produtos-lista"
import MasculinoModernoProdutosLista from "./Masculino-moderno-produtos-lista"


const ThemeProdutosLista = () => {
  const { currentTheme } = useTheme()

  // Render the appropriate produtos lista component based on the current theme
  switch (currentTheme.id) {
    case "masculine_default":
      return <MasculineDefaultProdutosLista />
    case "masculinoModerno":
      return <MasculinoModernoProdutosLista />
    case "masculinoClassico":
      return <MasculinoClassicoProdutosLista />
    case "femininoElegante":
      return <FemininoEleganteProdutosLista />
    case "femininoModerno":
      return <FemininoModernoProdutosLista />
    default:
      return <MasculineDefaultProdutosLista />
  }
}

export default ThemeProdutosLista

"use client"

import { useTheme } from "../../global/Theme-context"
import FemininoEleganteProdutosDetalhes from "./Feminino-elegante-produtos-detalhes"
import FemininoModernoProdutosDetalhes from "./Feminino-moderno-produtos-detalhes"
import MasculinoClassicoProdutosDetalhes from "./Masculino-classico-produtos-detalhes"
import MasculineDefaultProdutosDetalhes from "./Masculino-default-produtos-detalhes"
import MasculinoModernoProdutosDetalhes from "./Masculino-moderno-produtos-detalhes"



const ThemeProdutosDetalhes = () => {
  const { currentTheme } = useTheme()

  // Render the appropriate produtos detalhes component based on the current theme
  switch (currentTheme.id) {
    case "masculine_default":
      return <MasculineDefaultProdutosDetalhes />
    case "masculinoModerno":
      return <MasculinoModernoProdutosDetalhes />
    case "masculinoClassico":
      return <MasculinoClassicoProdutosDetalhes />
    case "femininoElegante":
      return <FemininoEleganteProdutosDetalhes />
    case "femininoModerno":
      return <FemininoModernoProdutosDetalhes />
    default:
      return <MasculineDefaultProdutosDetalhes />
  }
}

export default ThemeProdutosDetalhes

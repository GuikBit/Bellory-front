"use client"

import { useTheme } from "../../contexts/Theme-context"
import FemininoEleganteCarrinho from "./Feminino-elegante-carrinho"
import FemininoModernoCarrinho from "./Femino-moderno-carrinho"
import MasculinoClassicoCarrinho from "./Masculino-classico-carrinho"
import MasculineDefaultCarrinho from "./Masculino-default-carrinho"
import MasculinoModernoCarrinho from "./Masculino-moderno-carrinho"



// interface Produto {
//   id: string
//   name: string
//   price: number
//   image: string
//   quantidade: number
// }

// interface ThemeCarrinhoProps {
//   carrinho?: {
//     produtos: Produto[]
//   }
// }

const ThemeCarrinho = ({ carrinho }: any) => {
  const { currentTheme } = useTheme()

  const renderCarrinho = () => {
    switch (currentTheme.id) {
      case "masculinoModerno":
        return <MasculinoModernoCarrinho carrinho={carrinho} />
      case "masculinoClassico":
        return <MasculinoClassicoCarrinho carrinho={carrinho} />
      case "femininoElegante":
        return <FemininoEleganteCarrinho carrinho={carrinho} />
      case "femininoModerno":
        return <FemininoModernoCarrinho carrinho={carrinho} />
      default:
        return <MasculineDefaultCarrinho carrinho={carrinho} />
    }
  }

  return renderCarrinho()
}

export default ThemeCarrinho

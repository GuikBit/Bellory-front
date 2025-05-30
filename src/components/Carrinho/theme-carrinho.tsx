"use client"

import { useTheme } from "../../global/Theme-context"
import FemininoEleganteCarrinho from "./Feminino-elegante-carrinho"
import FemininoModernoCarrinho from "./Feminino-moderno-carrinho"
import MasculinoClassicoCarrinho from "./Masculino-classico-carrinho"
import MasculinoDefaultCarrinho from "./Masculino-default-carrinho"
import MasculinoModernoCarrinho from "./Masculino-moderno-carrinho"


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
        return <MasculinoDefaultCarrinho carrinho={carrinho} />
    }
  }

  return (
  <>
    {renderCarrinho()}
  </>
);
}

export default ThemeCarrinho

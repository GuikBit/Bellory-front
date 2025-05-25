"use client"

import { useTheme } from "../../contexts/Theme-context"
import { FemininoEleganteCupom } from "./Feminino-elegante-cupom"
import { FemininoModernoCupom } from "./Feminino-morderno-cupom"
import { MasculinoClassicoCupom } from "./Masculino-classico-cupom"
import { MasculineDefaultCupom } from "./Masculino-default-cupom"
import { MasculinoModernoCupom } from "./Masculino-moderno-cupom"


interface CupomDescontoProps {
  aplicarDesconto: (desconto: number) => void
}

export const CupomDesconto = ({ aplicarDesconto }: CupomDescontoProps) => {
  const { currentTheme } = useTheme()

  const renderCupom = () => {
    switch (currentTheme.id) {
      case "masculinoModerno":
        return <MasculinoModernoCupom aplicarDesconto={aplicarDesconto} />
      case "masculinoClassico":
        return <MasculinoClassicoCupom aplicarDesconto={aplicarDesconto} />
      case "femininoElegante":
        return <FemininoEleganteCupom aplicarDesconto={aplicarDesconto} />
      case "femininoModerno":
        return <FemininoModernoCupom aplicarDesconto={aplicarDesconto} />
      default:
        return <MasculineDefaultCupom aplicarDesconto={aplicarDesconto} />
    }
  }

  return renderCupom()
}

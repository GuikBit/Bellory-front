"use client"

import { useTheme } from "../../../global/Theme-context"
import FemininoEleganteHeader from "./Feminino-elegante-header"
import FemininoModernoHeader from "./Feminino-moderno-header"
import MasculinoClassicoHeader from "./Masculino-classico-header"
import MasculineDefaultHeader from "./Masculino-default-header"
import MasculinoModernoHeader from "./Masculino-moderno-header"



interface ThemeHeaderProps {
  cartItemCount?: number
  onThemeToggle?: () => void
}

const ThemeHeader = ({ cartItemCount = 0, onThemeToggle }: ThemeHeaderProps) => {
  const { currentTheme } = useTheme()

  switch (currentTheme.id) {
    case "masculine_default":
      return <MasculineDefaultHeader />
    case "masculinoModerno":
      return <MasculinoModernoHeader cartItemCount={cartItemCount} onThemeToggle={onThemeToggle} />
    case "masculinoClassico":
      return <MasculinoClassicoHeader cartItemCount={cartItemCount} onThemeToggle={onThemeToggle} />
    case "femininoElegante":
      return <FemininoEleganteHeader cartItemCount={cartItemCount} onThemeToggle={onThemeToggle} />
    case "femininoModerno":
      return <FemininoModernoHeader cartItemCount={cartItemCount} onThemeToggle={onThemeToggle} />
    default:
      return <MasculineDefaultHeader  />
  }
}

export default ThemeHeader

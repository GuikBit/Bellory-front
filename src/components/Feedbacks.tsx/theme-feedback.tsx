"use client"

import { useTheme } from "../../global/Theme-context"
import FemininoEleganteFeedback from "./Feminino-elegante-feedback"
import FemininoModernoFeedback from "./Feminino-moderno-feedback"
import MasculinoClassicoFeedback from "./Masculino-classico-feedback"
import MasculineDefaultFeedback from "./Masculino-default-feedback"
import MasculinoModernoFeedback from "./Masculino-moderno-feedback"



const ThemeFeedback = () => {
  const { currentTheme } = useTheme()

  // Render the appropriate feedback component based on the current theme
  switch (currentTheme.id) {
    case "masculine_default":
      return <MasculineDefaultFeedback />
    case "masculinoModerno":
      return <MasculinoModernoFeedback />
    case "masculinoClassico":
      return <MasculinoClassicoFeedback />
    case "femininoElegante":
      return <FemininoEleganteFeedback />
    case "femininoModerno":
      return <FemininoModernoFeedback />
    default:
      return <MasculineDefaultFeedback />
  }
}

export default ThemeFeedback
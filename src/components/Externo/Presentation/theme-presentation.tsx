import { useTheme } from "../../../global/Theme-context";
import FemininoElegantePresentation from "./Feminino-elegante-presentation";
import FemininoModernoPresentation from "./Feminino-morderno-presentation";
import MasculinoClassicoPresentation from "./Masculino-classico-presentation";
import MasculineDefaultPresentation from "./Masculino-default-presentation";
import MasculinoModernoPresentation from "./Masculino-moderno-presentation";



const ThemePresentation = () => {
    const onAgendarClick = () => console.log("Agendar clicked");
    const onScrollToNext = () => console.log("Scroll to next");
    const { currentTheme } = useTheme();

    switch (currentTheme.id) {
      case "masculine_default":
        return <MasculineDefaultPresentation onAgendarClick={onAgendarClick} onScrollToNext={onScrollToNext} />
      case "masculinoModerno":
        return <MasculinoModernoPresentation onAgendarClick={onAgendarClick} onScrollToNext={onScrollToNext} />
      case "masculinoClassico":
        return <MasculinoClassicoPresentation onAgendarClick={onAgendarClick} onScrollToNext={onScrollToNext} />
      case "femininoElegante":
        return <FemininoElegantePresentation onAgendarClick={onAgendarClick} onScrollToNext={onScrollToNext} />
      case "femininoModerno":
        return <FemininoModernoPresentation onAgendarClick={onAgendarClick} onScrollToNext={onScrollToNext} />
      default:
        return <MasculineDefaultPresentation onAgendarClick={onAgendarClick} onScrollToNext={onScrollToNext} />
    }
  }


  export default ThemePresentation;
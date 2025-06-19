import { useTheme } from "../../../global/Theme-context";
import FemininoEleganteAbout from "./Feminino-elegante-about";
import FemininoModernoAbout from "./Feminino-moderno-about";
import MasculinoClassicoAbout from "./Masculino-classico-about";
import MasculineDefaultAbout from "./Masculino-default-about";
import MasculinoModernoAbout from "./Masculino-moderno-about";

const ThemeAbout = () => {
    const { currentTheme } = useTheme();

    switch (currentTheme.id) {
        case "masculine_default":
        return <MasculineDefaultAbout />
        case "masculinoModerno":
        return <MasculinoModernoAbout />
        case "masculinoClassico":
        return <MasculinoClassicoAbout />
        case "femininoElegante":
        return <FemininoEleganteAbout />
        case "femininoModerno":
        return <FemininoModernoAbout />
        default:
        return <MasculineDefaultAbout />
    }
}

  export default ThemeAbout;
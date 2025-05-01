import { useTheme } from "../theme/Theme";

const Home = () => {    
    const { theme, setTheme } = useTheme();


    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4">Home Amor da minha vida</h1>
            <p className="text-lg">Bem-vindo à nossa página inicial!</p>
            <div className="flex gap-2">
                <button onClick={() => setTheme("light")}>☀️ Claro</button>
                <button onClick={() => setTheme("dark")}>🌙 Escuro</button>
                <button onClick={() => setTheme("system")}>💻 Sistema</button>
                <span>Modo atual: {theme}</span>
            </div>
        </div>
    );

}

export default Home;
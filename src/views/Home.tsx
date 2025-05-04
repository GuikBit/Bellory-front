import background from "../assets/barbearia01.jpg";
import Produtos from "../components/Produtos";
import Servicos from "../components/Servicos";
import Agendamento from "../components/Agendamento";
import Logo3D from "../components/Fragments/Logo3D";
import { useIsMobile } from "../hooks/useIsMobile";

const Home = () => {    

    const isMobile = useIsMobile();



    return (
        <div className="w-full min-h-screen relative ">
            <div>
                <img src={background} alt="background" className="w-full h-210 object-cover blur-[2px]" />
                <div className="absolute inset-0 bg-black/20 dark:bg-black/70 w-full h-210 flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">                        
                        <Logo3D scale={isMobile?3:4}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
                <h1 className="text-4xl font-bold mb-4">Sobre nós</h1>
                <div className="md:w-7xl h-200">
                  Apresentação 
                </div>                
            </div>
            <div className="flex flex-col items-center justify-center mt-10 p-4">
                <h1 className="text-4xl font-bold mb-4">Nossos serviços</h1>
                <div className="md:w-7xl h-auto  md:p-4">
                  <Servicos/>  
                </div>                
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
                <h1 className="text-4xl font-bold mb-4">Nossos produtos</h1>
                <div className="w-full h-auto ">
                    <Produtos />
                </div>
            </div>
            <div className="flex flex-col  items-center justify-center mt-10">
                <h1 className="text-4xl font-bold mb-4">Agendamento Rápido</h1>
                <div className="w-full p-4 h-auto  pb-24">
                    <Agendamento />
                </div>
            </div>
        </div>
    );

}

export default Home;
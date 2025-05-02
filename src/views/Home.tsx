import background from "../assets/barbearia01.jpg";
import logo from "../assets/logo.png";
import Produtos from "../components/Produtos";
import Servicos from "../components/Servicos";
import Agendamento from "../components/Agendamento";

const Home = () => {    




    return (
        <div className="w-full min-h-screen relative ">
            <div>
                <img src={background} alt="background" className="w-full h-210 object-cover blur-[2px]" />
                <div className="absolute inset-0 bg-black/20 dark:bg-black/70 w-full h-210 flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <img src={logo} alt="Logo do pagina" className="w-100 object-cover " />
                        <div className="text-white text-6xl font-bold mt-4">
                            Bigode
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
                <h1 className="text-4xl font-bold mb-4">Sobre nós</h1>
                <div className="md:w-7xl h-200">
                  Apresentação 
                </div>                
            </div>
            <div className="flex flex-col items-center justify-center mt-10  p-16 ">
                <h1 className="text-4xl font-bold mb-4">Serviços que oferecemos</h1>
                <div className="w-full h-auto  p-4 bg-blue-100">
                  <Servicos/>  
                </div>                
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
                <h1 className="text-4xl font-bold mb-4">Nossos produtos</h1>
                <div className="w-full h-auto p-4 bg-blue-100">
                    <Produtos />
                </div>
            </div>
            <div className="flex flex-col  items-center justify-center mt-10">
                <h1 className="text-4xl font-bold mb-4">Agendamento Rápido</h1>
                <div className="w-full p-4 h-auto">
                    <Agendamento />
                </div>
            </div>
        </div>
    );

}

export default Home;
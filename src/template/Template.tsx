import { Facebook, Instagram, Phone, Menu, X, Sun, MoonStar, ShoppingCart } from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import { useTheme } from "../theme/Theme";
import { useGlobalState } from "../global/ContextGlobalState";
import Footer from "../components/Footer";

const Template = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {theme ,setTheme} = useTheme();
  const {carrinho} = useGlobalState();

  return (
    <div className="flex flex-col min-h-screen w-full bg-neutral-100 dark:bg-neutral-950">
      <header className="bg-neutral-900 text-neutral-200 p-4 sticky top-0 shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="logo"
              className="w-12 hover:scale-105 transition-all duration-300 ease-in-out"
            />
            <h1 className="text-2xl font-bold">Barbearia</h1>
          </div>
           
          <nav className="hidden md:flex gap-4 mt-2">
            <a href="/" className="hover:text-amber-600 font-semibold cursor-pointer">Home</a>
            <a onClick={()=>navigate('/sobre')} className="hover:text-amber-600 font-semibold cursor-pointer">Sobre</a>
            <a onClick={()=>navigate('/produtos')} className="hover:text-amber-600 font-semibold cursor-pointer">Produtos</a>
            <a onClick={()=>navigate('/servicos')} className="hover:text-amber-600 font-semibold cursor-pointer">Serviços</a>
          </nav>
          
          <div className="hidden md:flex items-center">
              <div className="flex gap-4">
                <span className=" hover:bg-neutral-700/30 p-2 rounded-lg shadow-lg cursor-pointer relative" onClick={()=>navigate('/carrinho')}>
                  <ShoppingCart size={24} className="hover:text-neutral-300 cursor-pointer" />
                  {carrinho?.produtos && carrinho?.produtos?.length > 0 ? (
                    <span className="w-4 h-4  rounded-full bg-amber-600 absolute bottom-0 right-0 flex items-center justify-center text-xs"> {carrinho?.produtos?.length} </span>
                  ) : null}                  
                </span>
              </div> 

              <div className="ml-10">
                  <button
                      onClick={() => navigate("/login")}
                      className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700"
                  >
                      Login
                  </button>
              </div> 

              <div className="ml-10">
                  <div className="border border-neutral-600 dark:border-neutral-800 hover:bg-neutral-700/30 p-2 rounded-lg shadow-lg cursor-pointer"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  >
                      {theme === "dark" ? (
                          <Sun
                              size={20}
                              className="cursor-pointer animate-wiggle"
                          />
                      ) : (
                          <MoonStar
                              size={20}
                              className="cursor-pointer animate-wiggle"
                          />
                      )}
                  </div>
              </div>
          </div>

          <div className="flex md:hidden items-center gap-3">
              <div className="flex gap-4">
                <span className=" hover:bg-neutral-700/30 p-2 rounded-lg shadow-lg cursor-pointer relative" onClick={()=>navigate('/carrinho')}>
                <ShoppingCart size={24} className="hover:text-neutral-300 cursor-pointer" />
                  {carrinho?.produtos && carrinho?.produtos?.length > 0 ? (
                    <span className="w-4 h-4  rounded-full bg-amber-600 absolute bottom-0 right-0 flex items-center justify-center text-xs"> {carrinho?.produtos?.length} </span>
                  ) : null} 
                  
                </span>
              </div> 
              <div className="flex gap-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className=" hover:bg-neutral-700/30 p-2 rounded-lg shadow-lg cursor-pointer">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </span>
              </div> 
          </div>
        </div>


        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 px-4">
            <nav className="flex flex-col gap-2">
              <a href="/" className="hover:text-white cursor-pointer">Home</a>
              <a href="/sobre" className="hover:text-white cursor-pointer">Sobre</a>
              <a href="/produtos" className="hover:text-white cursor-pointer">Produtos</a>
              <a href="/servicos" className="hover:text-white cursor-pointer">Serviços</a>
            </nav>

            <div className="flex justify-between items-center mt-2">
              <Facebook size={24} className="hover:text-neutral-300 cursor-pointer" />
              <Instagram size={24} className="hover:text-neutral-300 cursor-pointer" />
              <Phone size={24} className="hover:text-neutral-300 cursor-pointer" />
              <div className="border border-neutral-600 dark:border-neutral-800 hover:bg-neutral-700/30 p-2 rounded-lg shadow-lg cursor-pointer"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Sun
                    size={20}
                    className="cursor-pointer animate-wiggle"
                  />
                ) : (
                  <MoonStar
                    size={20}
                    className="cursor-pointer animate-wiggle"
                  />
                )}
              </div>
            </div>

            <div className="flex justify-center mt-2">

            </div>

            <button
              onClick={() => navigate("/login")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
            >
              Login
            </button>
          </div>
        )}
      </header>

      <main className="flex-grow text-black dark:text-white">
        <Outlet />
      </main>

      {/* <footer className="bg-neutral-800 dark:bg-neutral-900 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4 text-sm">
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Siga nas Redes</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com/suabebearia" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} className="hover:text-blue-400" />
              </a>
              <a href="https://instagram.com/suabebearia" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} className="hover:text-pink-400" />
              </a>
              <a href="tel:+5511999999999">
                <Phone size={20} className="hover:text-green-400" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Map size={18} className="mr-2" /> Endereço
            </h3>
            <p>Rua dos Cabelos, 123</p>
            <p>Bairro Estilo - São Paulo, SP</p>
            <p>CEP: 01234-567</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Calendar size={18} className="mr-2" />
              Horário de Funcionamento
            </h3>
            <p>Seg - Sex: 9h - 19h</p>
            <p>Sábado: 9h - 17h</p>
            <p>Domingo: Fechado</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Info size={18} className="mr-2" />
              Informações
            </h3>
            <p>Email: contato@barbearia.com</p>
            <p>Telefone: (11) 99999-9999</p>
          </div>

          <div className="col-span-1 md:col-span-4 text-center mt-4">
            <p className="mt-2 text-neutral-400 text-xs">
              Desenvolvido por <a href="https://guikbit-portifolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">GUIKBIT</a>
            </p>
          </div>
        </div>

        <div className="text-center text-xs text-neutral-400 mt-6 border-t border-neutral-700 pt-4">
          &copy; {new Date().getFullYear()} Barbearia. Todos os direitos reservados.
        </div>
      </footer> */}

      <Footer />
    </div>
  );
};

export default Template;

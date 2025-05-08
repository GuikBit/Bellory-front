//import { Facebook, Instagram, Phone, Menu, X, Sun, MoonStar, ShoppingCart } from "lucide-react";
import { Outlet, } from "react-router-dom";
// import { useState } from "react";
// import logo from "../assets/logo.png";
// import { useTheme } from "../theme/Theme";
// import { useGlobalState } from "../global/ContextGlobalState";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Template = () => {
  // const navigate = useNavigate();
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const {theme ,setTheme} = useTheme();
  // const {carrinho} = useGlobalState();

  return (
    <div className="flex flex-col min-h-screen w-full bg-neutral-100 dark:bg-neutral-950">
      {/* <header className="bg-neutral-900 text-neutral-200 p-4 sticky top-0 shadow-lg z-50">
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
      </header> */}

      <Header/>

      <main className="flex-grow text-black dark:text-white">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Template;

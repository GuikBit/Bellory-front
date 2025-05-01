import { Facebook, Instagram, Phone, Menu, X } from "lucide-react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/Bigode.png";

const Template = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
            {location.pathname !== "" && (
                <>
                    <nav className="hidden md:flex gap-4 mt-2">
                        <a href="/" className="hover:text-neutral-200">Home</a>
                        <a href="/sobre" className="hover:text-neutral-200">Sobre</a>
                        <a href="/produtos" className="hover:text-neutral-200">Produtos</a>
                        <a href="/servicos" className="hover:text-neutral-200">Serviços</a>
                    </nav>

                    {/* Contatos e botão login para desktop */}
                    <div className="hidden md:flex items-center">
                        <div className="flex gap-4 mt-2">
                        <span><Facebook size={24} className="hover:text-neutral-300 cursor-pointer" /></span>
                        <span><Instagram size={24} className="hover:text-neutral-300 cursor-pointer" /></span>
                        <span><Phone size={24} className="hover:text-neutral-300 cursor-pointer" /></span>
                        </div>
                        <div className="ml-10">
                        <button
                            onClick={() => navigate("/login")}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Login
                        </button>
                        </div>
                    </div>
                </>
            )}

            <button
                className="md:hidden ml-auto"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>


        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 px-4">
            <nav className="flex flex-col gap-2">
              <a href="/" className="hover:text-white">Home</a>
              <a href="/sobre" className="hover:text-white">Sobre</a>
              <a href="/produtos" className="hover:text-white">Produtos</a>
              <a href="/servicos" className="hover:text-white">Serviços</a>
            </nav>

            <div className="flex gap-4 mt-2">
              <Facebook size={24} className="hover:text-neutral-300 cursor-pointer" />
              <Instagram size={24} className="hover:text-neutral-300 cursor-pointer" />
              <Phone size={24} className="hover:text-neutral-300 cursor-pointer" />
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

      <main className="flex-grow p-4 text-black dark:text-white">
        <Outlet />
      </main>

      <footer className="bg-neutral-800 dark:bg-neutral-900 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} Barbearia. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Template;

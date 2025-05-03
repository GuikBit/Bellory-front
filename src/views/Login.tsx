// Login.tsx
import { useState } from 'react';
import background from "../assets/barbearia01.jpg";
import { Eye, EyeOff, IdCard, KeyRound, LogIn, Mail, Pen, User } from 'lucide-react';

const Login = () => {

    const [isLogin, setIsLogin] = useState(true);
    const [isSenhaLogin, setIsSenhaLogin] = useState(false);
    // const [isSenhaRegister, setIsSenhaRegister] = useState(false);



    const cardLogin = () => (
        <div className=" min-h-auto relative ">          
          <img src={background} alt="background" className="w-full h-210 object-cover blur-[2px]" />
          <div className="absolute inset-0 p-4 bg-black/20 dark:bg-black/70 w-full h-210 flex items-center justify-center">
            <form autoComplete='off' className="flex flex-col gap-4 py-14 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 w-full rounded-2xl shadow-lg">
              <div className="flex flex-col">
                <label htmlFor="login" className="mb-1 font-medium flex items-center">
                  <User size={20} className='mr-2'/>
                  Login
                </label>
                <div className="flex items-center border border-neutral-400 dark:border-neutral-600 rounded-lg px-3 py-2">
                  <input type="text" id="login" placeholder="Digite o seu login" className="flex-1 outline-none placeholder:text-neutral-600" />
                </div>
              </div>
      
              <div className="flex flex-col">
                <label htmlFor="password" className="mb-1 font-medium flex items-center">
                  <KeyRound size={20} className='mr-2'/>
                  Senha
                </label>
                <div className="flex items-center border border-neutral-400 dark:border-neutral-600 rounded-lg px-3 py-2">                 
                  <input type={isSenhaLogin? "text":"password"} id="password" placeholder="Digite a sua senha" className="flex-1 outline-none placeholder:text-neutral-600" />
                  {isSenhaLogin? 
                    <EyeOff size={20} className='text-neutral-400 cursor-pointer' onClick={()=>setIsSenhaLogin(false)}/>
                  :
                    <Eye size={20} className='text-neutral-400 cursor-pointer' onClick={()=>setIsSenhaLogin(true)}/>
                  }
                </div>
              </div>
      
              <div className="flex justify-between text-sm text-gray-600 mt-10">
                <label className="flex items-center gap-1">
                  <input type="checkbox" className="accent-blue-500" />
                  Lembre me
                </label>
                <span className="text-blue-600 cursor-pointer hover:underline">Esqueceu a senha?</span>
              </div>
      
              <button type="submit" className="bg-blue-600 text-white py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition flex items-center justify-center">
                <LogIn size={20} className='mr-2'/>
                Entrar
              </button>
      
              <p className="text-center text-sm mt-4">
                Não tem conta? Cri uma <span className="text-blue-600 cursor-pointer hover:underline" onClick={()=>setIsLogin(false)}>aqui</span>
              </p>
      
              {/* <div className="flex gap-2">
                <button type="button" className="flex-1 flex items-center justify-center gap-2 border border-neutral-400 dark:border-neutral-700 rounded-lg py-2 hover:bg-gray-100">
                  <img src="https://logopng.com.br/logos/google-37.png" alt="Logo do google" className='w-4'/>
                  <span>Google</span>
                </button>
                <button type="button" className="flex-1 flex items-center justify-center gap-2 border border-neutral-400 dark:border-neutral-700 rounded-lg py-2 hover:bg-gray-100">
                  <img src="https://macmagazine.com.br/wp-content/uploads/2022/02/11-Apple-Logo-Current-600x600.png" alt="Logo Apple" className='w-4' />
                  <span>Apple</span>
                </button>
              </div> */}
            </form>
          </div>          
      </div>
    )

    const cardRegister = () => (
        
        <div className=" min-h-auto relative">          
          <img src={background} alt="background" className="w-full h-210 object-cover blur-[2px]" />
          <div className="absolute inset-0 p-4 bg-black/20 dark:bg-black/70 w-full h-210 flex items-center justify-center">
            <form autoComplete='off' className="flex flex-col gap-4  border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 w-full rounded-2xl shadow-lg">
              <div className="flex flex-col">
                <label htmlFor="nome" className="mb-1 font-medium flex items-center">
                  <Pen size={20} className='mr-2'/>
                  Nome completo
                </label>
                <input type="text" id="nome" placeholder="" className="border border-neutral-400 dark:border-neutral-600 px-3 py-2 rounded-lg outline-none" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 font-medium flex items-center">
                  <Mail size={20} className='mr-2'/>
                  E-mail
                </label>
                <input type="email" placeholder="" className="border border-neutral-400 dark:border-neutral-600 px-3 py-2 rounded-lg outline-none" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="nome" className="mb-1 font-medium flex items-center">
                  <IdCard size={20} className='mr-2'/>
                  CPF
                </label>
                <input type="text" placeholder="" className="border border-neutral-400 dark:border-neutral-600 px-3 py-2 rounded-lg outline-none" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className="mb-1 font-medium flex items-center">
                  <KeyRound size={20} className='mr-2'/>
                  Senha
                </label>
                <input type="password" placeholder="" className="border border-neutral-400 dark:border-neutral-600 px-3 py-2 rounded-lg outline-none" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className="mb-1 font-medium flex items-center">
                  <KeyRound size={20} className='mr-2'/>
                  Confirmar senha
                </label>
                <input type="password" placeholder="" className="border border-neutral-400 dark:border-neutral-600 px-3 py-2 rounded-lg outline-none" />
              </div>

              <button type="submit" className="bg-green-600 mt-4 text-white py-2 rounded-lg hover:bg-green-700 transition">Criar conta</button>

              <p className="text-center text-sm">
               Já possui uma conta? Entre por <span className="text-blue-600 cursor-pointer hover:underline" onClick={()=>setIsLogin(true)}>aqui</span>
              </p>
            </form>
          </div>
        </div>
    );

    return isLogin ? cardLogin() : cardRegister();
};

export default Login;

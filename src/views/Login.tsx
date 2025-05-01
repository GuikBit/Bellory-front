// Login.tsx
import { useState } from 'react';


const Login = () => {

    const [isLogin, setIsLogin] = useState(true);



    const cardLogin = () => (
        <div className="flex justify-center items-center min-h-screen">
        <form className="flex flex-col gap-4 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 w-[450px] rounded-2xl shadow-lg">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium">Email</label>
            <div className="flex items-center border border-neutral-400 dark:border-neutral-600 rounded-lg px-3 py-2">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 32 32"><path d="..."/></svg>
              <input type="email" id="email" placeholder="Enter your Email" className="flex-1 outline-none" />
            </div>
          </div>
  
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 text-sm font-medium">Password</label>
            <div className="flex items-center border border-neutral-400 dark:border-neutral-600 rounded-lg px-3 py-2">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 32 32"><path d="..."/></svg>
              <input type="password" id="password" placeholder="Enter your Password" className="flex-1 outline-none" />
            </div>
          </div>
  
          <div className="flex justify-between text-sm text-gray-600">
            <label className="flex items-center gap-1">
              <input type="checkbox" className="accent-blue-500" />
              Remember me
            </label>
            <span className="text-blue-600 cursor-pointer hover:underline">Forgot password?</span>
          </div>
  
          <button type="submit" className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Sign In</button>
  
          <p className="text-center text-sm">
            Don't have an account? <span className="text-blue-600 cursor-pointer hover:underline" onClick={()=>setIsLogin(false)}>Sign Up</span>
          </p>
  
          <div className="flex gap-2">
            <button type="button" className="flex-1 flex items-center justify-center gap-2 border border-neutral-400 dark:border-neutral-700 rounded-lg py-2 hover:bg-gray-100">
              <img src="https://logopng.com.br/logos/google-37.png" alt="Logo do google" className='w-4'/>
              <span>Google</span>
            </button>
            <button type="button" className="flex-1 flex items-center justify-center gap-2 border border-neutral-400 dark:border-neutral-700 rounded-lg py-2 hover:bg-gray-100">
              <img src="https://macmagazine.com.br/wp-content/uploads/2022/02/11-Apple-Logo-Current-600x600.png" alt="Logo Apple" className='w-4' />
              <span>Apple</span>
            </button>
          </div>
        </form>
      </div>
    )

    const cardRegister = () => (
        
        <div className="flex justify-center items-center min-h-screen">
        <form className="flex flex-col gap-4 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 w-[450px] rounded-2xl shadow-lg">
            <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Full Name</label>
                <input type="text" placeholder="Enter your name" className="border border-neutral-400 dark:border-neutral-600 px-3 py-2 rounded-lg outline-none" />
            </div>

            <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Email</label>
            <input type="email" placeholder="Enter your email" className="border border-neutral-400 dark:border-neutral-600 px-3 py-2 rounded-lg outline-none" />
            </div>

            <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Password</label>
            <input type="password" placeholder="Create a password" className="border border-neutral-400 dark:border-neutral-600 px-3 py-2 rounded-lg outline-none" />
            </div>

            <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Confirm Password</label>
            <input type="password" placeholder="Confirm your password" className="border border-neutral-400 dark:border-neutral-600 px-3 py-2 rounded-lg outline-none" />
            </div>

            <button type="submit" className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">Register</button>

            <p className="text-center text-sm">
            Already have an account? <span className="text-blue-600 cursor-pointer hover:underline" onClick={()=>setIsLogin(true)}>Login</span>
            </p>
        </form>
        </div>
    );

    return isLogin ? cardLogin() : cardRegister();
};

export default Login;

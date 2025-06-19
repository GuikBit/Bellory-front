"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Eye,
  EyeOff,
  BadgeIcon as IdCard,
  KeyRound,
  LogIn,
  Mail,
  Pen,
  User,
  UserRound,
  Heart,
  ArrowRight,
  UserPlus,
  Lock,
  CheckCircle,
  ChevronLeft,
} from "lucide-react"
import { useGlobalState } from "../../../global/GlobalContext"
import { useNavigate } from "react-router"
import { useAuth } from "../../../global/AuthContext"

const FemininoEleganteAuth = () => {

  const [isLogin, setIsLogin] = useState(true)
  const [isSenhaLogin, setIsSenhaLogin] = useState(false)
  const [isSenhaRegister, setIsSenhaRegister] = useState(false)
  const [isConfirmSenhaVisible, setIsConfirmSenhaVisible] = useState(false)
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    nome: "",
    email: "",
    cpf: "",
    confirmPassword: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-rose-100">
      {/* Elementos decorativos florais */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-rose-300/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-pink-300/20 rounded-full blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-rose-200/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-pink-200/20 rounded-full blur-xl"></div>
      </div>

      {/* Padrão floral sutil */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(244, 114, 182, 0.3) 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo e título */}
          <motion.div
            className="flex flex-col items-center mb-8"
            initial="hidden"
            animate="visible"
            variants={logoVariants}
          >
            <div className="relative w-20 h-20 mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="w-full h-full bg-gradient-to-br from-rose-400 to-pink-500 rounded-full border-2 border-rose-300 flex items-center justify-center shadow-lg">
                <Heart className="text-white" size={32} />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-rose-800 mb-2 font-serif">
              BELLA <span className="text-rose-500">SALON</span>
            </h1>
            <div className="flex items-center">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-rose-400"></div>
              <Heart className="mx-2 text-rose-400" size={16} />
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-rose-400"></div>
            </div>
          </motion.div>

          {/* Card de formulário */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-rose-200">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-pink-50/50 rounded-2xl"></div>
            <AnimatePresence mode="wait">
              {isLogin ? (
                <LoginForm
                  key="login"
                  formVariants={formVariants}
                  itemVariants={itemVariants}
                  isSenhaLogin={isSenhaLogin}
                  setIsSenhaLogin={setIsSenhaLogin}
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                  setIsLogin={setIsLogin}
                />
              ) : (
                <RegisterForm
                  key="register"
                  formVariants={formVariants}
                  itemVariants={itemVariants}
                  isSenhaRegister={isSenhaRegister}
                  setIsSenhaRegister={setIsSenhaRegister}
                  isConfirmSenhaVisible={isConfirmSenhaVisible}
                  setIsConfirmSenhaVisible={setIsConfirmSenhaVisible}
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                  setIsLogin={setIsLogin}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

interface FormProps {
  formVariants: any
  itemVariants: any
  formData: any
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent) => void
  setIsLogin: (value: boolean) => void
}

interface LoginFormProps extends FormProps {
  isSenhaLogin: boolean
  setIsSenhaLogin: (value: boolean) => void
}

const LoginForm = ({
  formVariants,
  itemVariants,
  isSenhaLogin,
  setIsSenhaLogin,
  formData,
  handleInputChange,
  handleSubmit,
  setIsLogin,
}: LoginFormProps) => {

  const { login } = useAuth();
  const navigate = useNavigate();


  const handlerLogin = () => {
    
    const user = {
      id: '1a2b3c4d-5678-90ef-gh12-ijklmnopqrst',
      nome: 'João da Silva',
      email: 'joao.silva@example.com',
      telefone: '+55 11 91234-5678',
      dataNascimento: '1990-05-15',
      endereco: 'Rua das Flores, 123',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '01234-567',
      pais: 'Brasil',
      fotoPerfil: 'https://meusite.com/imagens/joao.jpg',
      dataCadastro: '2023-01-01T10:00:00Z',
      dataUltimoAcesso: '2025-06-19T14:30:00Z',
      tipoUsuario: 'cliente', // ou 'admin', 'funcionario', etc.
      status: 'ativo', // ou 'inativo', 'pendente'
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.fakeTokenParaExemplo'
    }

    login(user);
    navigate('/dashboard')
  }

  
  return (
    <motion.form
      className="p-8 relative"
      onSubmit={handleSubmit}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={formVariants}
    >
      <motion.h2 className="text-xl font-bold text-rose-800 mb-6 flex items-center font-serif" variants={itemVariants}>
        <div className="p-2 bg-rose-100 rounded-xl mr-3 border border-rose-200">
          <LogIn size={20} className="text-rose-500" />
        </div>
        Acesse sua conta
      </motion.h2>

      <motion.div className="space-y-4" variants={itemVariants}>
        <div className="space-y-2">
          <label htmlFor="login" className="block text-sm font-medium text-rose-700 font-serif">
            Usuário
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User size={18} className="text-rose-400" />
            </div>
            <input
              type="text"
              id="login"
              value={formData.login}
              onChange={handleInputChange}
              placeholder="Digite seu usuário"
              className="w-full pl-10 pr-4 py-3 bg-rose-50/50 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-rose-800 placeholder-rose-400 transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-rose-700 font-serif">
            Senha
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock size={18} className="text-rose-400" />
            </div>
            <input
              type={isSenhaLogin ? "text" : "password"}
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Digite sua senha"
              className="w-full pl-10 pr-10 py-3 bg-rose-50/50 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-rose-800 placeholder-rose-400 transition-all"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button
                type="button"
                onClick={() => setIsSenhaLogin(!isSenhaLogin)}
                className="text-rose-400 hover:text-rose-500 focus:outline-none"
              >
                {isSenhaLogin ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div className="flex items-center justify-between mt-6" variants={itemVariants}>
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-rose-300 bg-rose-50 text-rose-500 focus:ring-rose-400"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-rose-600 font-serif">
            Lembrar-me
          </label>
        </div>
        <div className="text-sm">
          <a href="#" className="font-medium text-rose-500 hover:text-rose-400 font-serif">
            Esqueceu a senha?
          </a>
        </div>
      </motion.div>

      <motion.button
        type="submit"
        className="w-full mt-6 bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white py-3 rounded-xl transition-all duration-300 flex items-center justify-center font-medium shadow-lg font-serif"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}

        onClick={()=>handlerLogin()}
      >
        Entrar
        <ArrowRight size={18} className="ml-2" />
      </motion.button>

      <motion.div className="mt-6 text-center text-rose-600 text-sm font-serif" variants={itemVariants}>
        Não tem uma conta?{" "}
        <button
          type="button"
          onClick={() => setIsLogin(false)}
          className="text-rose-500 hover:text-rose-400 font-medium focus:outline-none"
        >
          Cadastre-se
        </button>
      </motion.div>
    </motion.form>
  )
}

interface RegisterFormProps extends FormProps {
  isSenhaRegister: boolean
  setIsSenhaRegister: (value: boolean) => void
  isConfirmSenhaVisible: boolean
  setIsConfirmSenhaVisible: (value: boolean) => void
}

const RegisterForm = ({
  formVariants,
  itemVariants,
  isSenhaRegister,
  setIsSenhaRegister,
  isConfirmSenhaVisible,
  setIsConfirmSenhaVisible,
  formData,
  handleInputChange,
  handleSubmit,
  setIsLogin,
}: RegisterFormProps) => {
  return (
    <motion.form
      className="p-8 relative"
      onSubmit={handleSubmit}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={formVariants}
    >
      <motion.div className="flex items-center mb-6" variants={itemVariants}>
        <button
          type="button"
          onClick={() => setIsLogin(true)}
          className="mr-3 p-2 rounded-xl hover:bg-rose-100 transition-colors duration-200 focus:outline-none"
        >
          <ChevronLeft size={20} className="text-rose-500" />
        </button>
        <h2 className="text-xl font-bold text-rose-800 flex items-center font-serif">
          <div className="p-2 bg-rose-100 rounded-xl mr-3 border border-rose-200">
            <UserPlus size={20} className="text-rose-500" />
          </div>
          Criar nova conta
        </h2>
      </motion.div>

      <motion.div className="grid grid-cols-1 gap-4" variants={itemVariants}>
        <div className="space-y-2">
          <label htmlFor="nome" className="block text-sm font-medium text-rose-700 font-serif">
            Nome completo
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Pen size={18} className="text-rose-400" />
            </div>
            <input
              type="text"
              id="nome"
              value={formData.nome}
              onChange={handleInputChange}
              placeholder="Digite seu nome completo"
              className="w-full pl-10 pr-4 py-3 bg-rose-50/50 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-rose-800 placeholder-rose-400 transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-rose-700 font-serif">
            E-mail
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail size={18} className="text-rose-400" />
            </div>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Digite seu e-mail"
              className="w-full pl-10 pr-4 py-3 bg-rose-50/50 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-rose-800 placeholder-rose-400 transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="cpf" className="block text-sm font-medium text-rose-700 font-serif">
            CPF
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IdCard size={18} className="text-rose-400" />
            </div>
            <input
              type="text"
              id="cpf"
              value={formData.cpf}
              onChange={handleInputChange}
              placeholder="Digite seu CPF"
              className="w-full pl-10 pr-4 py-3 bg-rose-50/50 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-rose-800 placeholder-rose-400 transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="login" className="block text-sm font-medium text-rose-700 font-serif">
            Usuário
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <UserRound size={18} className="text-rose-400" />
            </div>
            <input
              type="text"
              id="login"
              value={formData.login}
              onChange={handleInputChange}
              placeholder="Escolha um nome de usuário"
              className="w-full pl-10 pr-4 py-3 bg-rose-50/50 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-rose-800 placeholder-rose-400 transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-rose-700 font-serif">
            Senha
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <KeyRound size={18} className="text-rose-400" />
            </div>
            <input
              type={isSenhaRegister ? "text" : "password"}
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Crie uma senha forte"
              className="w-full pl-10 pr-10 py-3 bg-rose-50/50 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-rose-800 placeholder-rose-400 transition-all"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button
                type="button"
                onClick={() => setIsSenhaRegister(!isSenhaRegister)}
                className="text-rose-400 hover:text-rose-500 focus:outline-none"
              >
                {isSenhaRegister ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-rose-700 font-serif">
            Confirmar senha
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <KeyRound size={18} className="text-rose-400" />
            </div>
            <input
              type={isConfirmSenhaVisible ? "text" : "password"}
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirme sua senha"
              className="w-full pl-10 pr-10 py-3 bg-rose-50/50 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-rose-800 placeholder-rose-400 transition-all"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button
                type="button"
                onClick={() => setIsConfirmSenhaVisible(!isConfirmSenhaVisible)}
                className="text-rose-400 hover:text-rose-500 focus:outline-none"
              >
                {isConfirmSenhaVisible ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div className="mt-6" variants={itemVariants}>
        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="h-4 w-4 rounded border-rose-300 bg-rose-50 text-rose-500 focus:ring-rose-400"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-rose-600 font-serif">
            Concordo com os{" "}
            <a href="#" className="text-rose-500 hover:text-rose-400">
              termos e condições
            </a>
          </label>
        </div>
      </motion.div>

      <motion.button
        type="submit"
        className="w-full mt-6 bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white py-3 rounded-xl transition-all duration-300 flex items-center justify-center font-medium shadow-lg font-serif"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <CheckCircle size={18} className="mr-2" />
        Criar conta
      </motion.button>

      <motion.div className="mt-6 text-center text-rose-600 text-sm font-serif" variants={itemVariants}>
        Já possui uma conta?{" "}
        <button
          type="button"
          onClick={() => setIsLogin(true)}
          className="text-rose-500 hover:text-rose-400 font-medium focus:outline-none"
        >
          Faça login
        </button>
      </motion.div>
    </motion.form>
  )
}

export default FemininoEleganteAuth

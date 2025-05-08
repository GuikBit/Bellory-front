"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Facebook,
  Instagram,
  Phone,
  MapPin,
  Clock,
  Mail,
  Scissors,
  ChevronRight,
  ExternalLink,
  Calendar,
} from "lucide-react"
import Logo3D from "./Fragments/Logo3D"

const Footer = () => {
  const [hoverSocial, setHoverSocial] = useState<string | null>(null)

  const socialLinks = [
    { id: "facebook", icon: Facebook, url: "https://facebook.com/suabebearia", color: "bg-blue-600" },
    {
      id: "instagram",
      icon: Instagram,
      url: "https://instagram.com/suabebearia",
      color: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500",
    },
    { id: "phone", icon: Phone, url: "tel:+5511999999999", color: "bg-green-600" },
  ]

  const quickLinks = [
    { name: "Nossos Serviços", url: "#services" },
    { name: "Agendar Horário", url: "#booking" },
    { name: "Planos de Assinatura", url: "#plans" },
    { name: "Produtos", url: "#products" },
    { name: "Sobre Nós", url: "#about" },
  ]

  return (
    <footer className="bg-neutral-900 text-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>

      {/* Conteúdo principal do footer */}
      <div className="container mx-auto pt-16 pb-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Coluna 1: Logo e Redes Sociais */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <div className="mb-6 flex justify-center md:justify-start">
              <Logo3D scale={2} />
            </div>

            <p className="text-gray-400 mb-6 text-center md:text-left">
              Onde a tradição encontra o estilo moderno. Experimente o melhor em cuidados masculinos com nossa equipe de
              profissionais especializados.
            </p>

            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="mr-2 text-amber-500">Siga-nos</span>
              <div className="h-[1px] flex-grow bg-neutral-800 ml-2"></div>
            </h3>

            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-300 relative overflow-hidden`}
                  onMouseEnter={() => setHoverSocial(social.id)}
                  onMouseLeave={() => setHoverSocial(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className={`absolute inset-0 ${social.color} opacity-0 transition-opacity duration-300 ${
                      hoverSocial === social.id ? "opacity-100" : ""
                    }`}
                  ></div>
                  <social.icon
                    size={24}
                    className={`relative z-10 ${hoverSocial === social.id ? "text-white" : "text-gray-400"}`}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="mr-2 text-amber-500">Links Rápidos</span>
              <div className="h-[1px] flex-grow bg-neutral-800 ml-2"></div>
            </h3>

            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300 flex items-center"
                  >
                    <ChevronRight size={16} className="mr-2 text-amber-600" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Horário de Funcionamento */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="mr-2 text-amber-500">Horário de Funcionamento</span>
              <div className="h-[1px] flex-grow bg-neutral-800 ml-2"></div>
            </h3>

            <div className="space-y-3">
              <div className="flex items-start">
                {/* <Clock size={18} className="text-amber-600 mt-1 mr-3 flex-shrink-0" /> */}
                <div>
                    
                  <div className="flex justify-between mb-1">
                    <Clock size={18} className="text-amber-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Segunda - Sexta</span>
                    <span className="text-amber-500 font-medium">9h - 19h</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <Clock size={18} className="text-amber-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Sábado</span>
                    <span className="text-amber-500 font-medium">9h - 17h</span>
                  </div>
                  <div className="flex justify-between">
                    <Clock size={18} className="text-amber-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Domingo</span>
                    <span className="text-red-400 font-medium">Fechado</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800">
                <a
                  href="#booking"
                  className="flex items-center text-amber-500 hover:text-amber-400 transition-colors duration-300"
                >
                  <Calendar size={18} className="mr-2" />
                  <span>Agende seu horário</span>
                </a>
              </div>
            </div>
          </div>

          {/* Coluna 4: Contato e Endereço */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="mr-2 text-amber-500">Contato</span>
              <div className="h-[1px] flex-grow bg-neutral-800 ml-2"></div>
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={18} className="text-amber-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Rua dos Cabelos, 123</p>
                  <p className="text-gray-400">Bairro Estilo - São Paulo, SP</p>
                  <p className="text-gray-400">CEP: 01234-567</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone size={18} className="text-amber-600 mr-3 flex-shrink-0" />
                <a
                  href="tel:+5511999999999"
                  className="text-gray-300 hover:text-amber-500 transition-colors duration-300"
                >
                  (11) 99999-9999
                </a>
              </div>

              <div className="flex items-center">
                <Mail size={18} className="text-amber-600 mr-3 flex-shrink-0" />
                <a
                  href="mailto:contato@barbearia.com"
                  className="text-gray-300 hover:text-amber-500 transition-colors duration-300"
                >
                  contato@barbearia.com
                </a>
              </div>

              <div className="pt-3 border-t border-neutral-800">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-amber-500 hover:text-amber-400 transition-colors duration-300"
                >
                  <ExternalLink size={18} className="mr-2" />
                  <span>Ver no mapa</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="flex items-center justify-center my-10">
          <div className="h-[1px] w-16 bg-neutral-800"></div>
          <Scissors className="mx-4 text-amber-600" size={20} />
          <div className="h-[1px] w-16 bg-neutral-800"></div>
        </div>

        {/* Copyright e Créditos */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Barbearia. Todos os direitos reservados.</p>

          <div className="mt-4 md:mt-0 flex items-center">
            <span>Desenvolvido por</span>
            <a
              href="https://guikbit-portifolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-amber-500 hover:text-amber-400 transition-colors duration-300 flex items-center"
            >
              GUIKBIT
              <ExternalLink size={12} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Clock, DollarSign, Filter, Heart, User, Flower, Sparkles } from "lucide-react"
import { themes } from "../../theme/theme"
import EleganteSubTitle from "../Fragments/Feminino/EleganteSubTitleIcon"

const servicos = [
  {
    id: "1",
    nome: "Corte Feminino Elegante",
    categoria: "Cabelo",
    genero: "Feminino",
    descricao: "Corte personalizado com técnicas modernas e acabamento impecável. Inclui lavagem e styling.",
    tempo: "90 min",
    preco: 120.0,
    produtos: ["Shampoo L'Oréal Professionnel", "Condicionador Kerastase", "Sérum Moroccanoil"],
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "2",
    nome: "Coloração Premium",
    categoria: "Coloração",
    genero: "Feminino",
    descricao: "Coloração profissional com produtos de alta qualidade. Cores vibrantes e duradouras.",
    tempo: "180 min",
    preco: 250.0,
    produtos: ["Tintura Wella Professionals", "Oxidante Schwarzkopf", "Tratamento Olaplex"],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "3",
    nome: "Sobrancelha Design",
    categoria: "Sobrancelha",
    genero: "Feminino",
    descricao: "Design personalizado com mapeamento facial e técnicas de micropigmentação.",
    tempo: "60 min",
    preco: 80.0,
    produtos: ["Henna Della & Delle", "Cera Depiladora Italiana", "Sérum Crescimento"],
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "4",
    nome: "Tratamento Hidratante",
    categoria: "Tratamentos",
    genero: "Feminino",
    descricao: "Hidratação profunda com máscaras nutritivas e óleos essenciais.",
    tempo: "75 min",
    preco: 150.0,
    produtos: ["Máscara Kerastase Nutritive", "Óleo Argan Marroquino", "Ampola L'Oréal"],
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "5",
    nome: "Penteado para Eventos",
    categoria: "Penteados",
    genero: "Feminino",
    descricao: "Penteados sofisticados para ocasiões especiais. Elegância e charme garantidos.",
    tempo: "120 min",
    preco: 200.0,
    produtos: ["Spray Fixador Tresemmé", "Mousse Volumizador", "Acessórios Exclusivos"],
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "6",
    nome: "Manicure Francesa",
    categoria: "Estética",
    genero: "Feminino",
    descricao: "Manicure clássica francesa com produtos premium e acabamento perfeito.",
    tempo: "45 min",
    preco: 60.0,
    produtos: ["Esmalte Chanel", "Base Fortalecedora", "Óleo Cutícula"],
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop",
  },
]

const categorias = ["Todos", "Cabelo", "Coloração", "Sobrancelha", "Tratamentos", "Penteados", "Estética"]

const FemininoEleganteServicosDetalhados = () => {
  const theme = themes.femininoElegante
  const [filtroCategoria, setFiltroCategoria] = useState("Todos")
  const [filtroGenero, setFiltroGenero] = useState("Todos")

  const servicosFiltrados = servicos.filter((servico) => {
    const categoriaMatch = filtroCategoria === "Todos" || servico.categoria === filtroCategoria
    const generoMatch = filtroGenero === "Todos" || servico.genero === filtroGenero
    return categoriaMatch && generoMatch
  })

  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: theme.colors.accent }}>
      {/* Elegant decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <svg viewBox="0 0 100 100" fill="none">
            <path
              d="M50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0ZM50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10Z"
              fill={theme.colors.primary}
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        {/* <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1
            className="text-4xl font-semibold mb-4"
            style={{ color: theme.colors.primary, fontFamily: theme.fonts.heading }}
          >
            Nossos Serviços Exclusivos
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto italic"
            style={{ color: theme.colors.textSecondary, fontFamily: theme.fonts.body }}
          >
            Cuidados especiais com produtos premium para realçar sua beleza natural
          </p>
        </motion.div> */}

        <EleganteSubTitle title="Nossos Serviços" />

        {/* Filtros Elegantes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center mb-8 p-6 rounded-lg border"
          style={{
            backgroundColor: theme.colors.cardBackground,
            borderColor: theme.colors.primary,
          }}
        >
          <div className="flex items-center gap-2">
            <Filter size={20} style={{ color: theme.colors.primary }} />
            <span className="font-medium" style={{ color: theme.colors.text, fontFamily: theme.fonts.body }}>
              Filtrar serviços:
            </span>
          </div>

          <select
            value={filtroCategoria}
            onChange={(e) => setFiltroCategoria(e.target.value)}
            className="px-4 py-2 rounded-lg border"
            style={{
              backgroundColor: theme.colors.background,
              borderColor: theme.colors.primary,
              color: theme.colors.text,
            }}
          >
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>

          <select
            value={filtroGenero}
            onChange={(e) => setFiltroGenero(e.target.value)}
            className="px-4 py-2 rounded-lg border"
            style={{
              backgroundColor: theme.colors.background,
              borderColor: theme.colors.primary,
              color: theme.colors.text,
            }}
          >
            <option value="Todos">Todos os Gêneros</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </select>
        </motion.div>

        {/* Grid de Serviços */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {servicosFiltrados.map((servico, index) => (
            <motion.div
              key={servico.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="rounded-lg overflow-hidden shadow-lg border"
              style={{
                backgroundColor: theme.colors.cardBackground,
                borderColor: theme.colors.primary,
                borderRadius: theme.borderRadius.large,
                boxShadow: `0 15px 30px -10px rgba(176, 141, 154, 0.2)`,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={servico.image || "/placeholder.svg"}
                  alt={servico.nome}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                <motion.div
                  className="absolute top-4 right-4"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Flower size={24} style={{ color: theme.colors.primary }} />
                </motion.div>

                <div className="absolute top-4 left-4">
                  <div
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: theme.colors.primary, color: "white" }}
                  >
                    {servico.categoria}
                  </div>
                </div>

                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-semibold text-white mb-1" style={{ fontFamily: theme.fonts.heading }}>
                    {servico.nome}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p
                  className="text-sm mb-4 italic"
                  style={{ color: theme.colors.textSecondary, fontFamily: theme.fonts.body }}
                >
                  {servico.descricao}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock size={16} style={{ color: theme.colors.primary }} />
                    <span className="text-sm font-medium" style={{ color: theme.colors.text }}>
                      Duração: {servico.tempo}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <DollarSign size={16} style={{ color: theme.colors.primary }} />
                    <span className="text-lg font-semibold" style={{ color: theme.colors.primary }}>
                      R$ {servico.preco.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <User size={16} style={{ color: theme.colors.primary }} />
                    <span className="text-sm" style={{ color: theme.colors.textSecondary }}>
                      {servico.genero}
                    </span>
                  </div>

                  {servico.produtos && (
                    <div className="mt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles size={16} style={{ color: theme.colors.primary }} />
                        <span className="text-sm font-medium" style={{ color: theme.colors.text }}>
                          Produtos utilizados:
                        </span>
                      </div>
                      <ul className="text-xs space-y-1" style={{ color: theme.colors.textSecondary }}>
                        {servico.produtos.map((produto, idx) => (
                          <li key={idx}>• {produto}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <motion.button
                  className="w-full mt-6 py-3 rounded-lg flex items-center justify-center gap-2 font-medium border transition-all duration-300"
                  style={{
                    backgroundColor: `${theme.colors.primary}10`,
                    color: theme.colors.primary,
                    borderColor: theme.colors.primary,
                    borderRadius: theme.borderRadius.medium,
                  }}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{
                    backgroundColor: theme.colors.primary,
                    color: "white",
                    boxShadow: `0 10px 25px -5px ${theme.colors.primary}30`,
                  }}
                >
                  <Heart size={16} />
                  Agendar
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {servicosFiltrados.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-lg italic" style={{ color: theme.colors.textSecondary }}>
              Nenhum serviço encontrado com os filtros selecionados.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default FemininoEleganteServicosDetalhados

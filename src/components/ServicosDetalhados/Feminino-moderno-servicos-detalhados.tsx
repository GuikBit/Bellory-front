"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Clock, DollarSign, Filter, Star, User, Sparkles, Zap } from "lucide-react"
import { themes } from "../../theme/theme"

const servicos = [
  {
    id: "1",
    nome: "Corte Moderno Feminino",
    categoria: "Cabelo",
    genero: "Feminino",
    descricao: "Corte inovador com técnicas contemporâneas e styling arrojado. Transformação completa.",
    tempo: "75 min",
    preco: 140.0,
    produtos: ["Shampoo Matrix Biolage", "Leave-in Redken", "Spray Texturizador"],
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "2",
    nome: "Coloração Vibrante",
    categoria: "Coloração",
    genero: "Feminino",
    descricao: "Cores ousadas e vibrantes com técnicas modernas. Expresse sua personalidade única.",
    tempo: "200 min",
    preco: 300.0,
    produtos: ["Tintura Pravana Vivids", "Descolorante Blondor", "Matizador Purple"],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "3",
    nome: "Sobrancelha HD",
    categoria: "Sobrancelha",
    genero: "Feminino",
    descricao: "Design moderno com técnicas de alta definição e micropigmentação.",
    tempo: "50 min",
    preco: 90.0,
    produtos: ["Henna Premium", "Pomada Anastasia Beverly Hills", "Gel Fixador"],
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "4",
    nome: "Botox Capilar",
    categoria: "Tratamentos",
    genero: "Feminino",
    descricao: "Tratamento revolucionário para reconstrução e alisamento natural dos fios.",
    tempo: "150 min",
    preco: 280.0,
    produtos: ["Botox Inoar", "Shampoo Antirresíduo", "Máscara Reconstrutora"],
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "5",
    nome: "Penteado Moderno",
    categoria: "Penteados",
    genero: "Feminino",
    descricao: "Penteados contemporâneos e criativos para eventos especiais.",
    tempo: "90 min",
    preco: 180.0,
    produtos: ["Spray Fixador Strong", "Cera Modeladora", "Glitter Hair"],
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "6",
    nome: "Nail Art",
    categoria: "Estética",
    genero: "Feminino",
    descricao: "Arte em unhas com designs exclusivos e técnicas inovadoras.",
    tempo: "60 min",
    preco: 80.0,
    produtos: ["Gel UV Colorido", "Adesivos Decorativos", "Top Coat Brilhante"],
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop",
  },
]

const categorias = ["Todos", "Cabelo", "Coloração", "Sobrancelha", "Tratamentos", "Penteados", "Estética"]

const FemininoModernoServicosDetalhados = () => {
  const theme = themes.femininoModerno
  const [filtroCategoria, setFiltroCategoria] = useState("Todos")
  const [filtroGenero, setFiltroGenero] = useState("Todos")

  const servicosFiltrados = servicos.filter((servico) => {
    const categoriaMatch = filtroCategoria === "Todos" || servico.categoria === filtroCategoria
    const generoMatch = filtroGenero === "Todos" || servico.genero === filtroGenero
    return categoriaMatch && generoMatch
  })

  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: theme.colors.background }}>
      {/* Modern decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 100 100" fill="none">
            <circle cx="75" cy="25" r="25" fill={theme.colors.primary} />
            <circle cx="25" cy="75" r="25" fill={theme.colors.secondary} />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1
            className="text-5xl font-bold mb-4"
            style={{ color: theme.colors.primary, fontFamily: theme.fonts.heading }}
          >
            SERVIÇOS MODERNOS
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: theme.colors.textSecondary, fontFamily: theme.fonts.body }}
          >
            Inovação e criatividade em cada serviço para mulheres modernas
          </p>
        </motion.div>

        {/* Filtros Modernos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center mb-8 p-6 rounded-lg"
          style={{
            background: `linear-gradient(135deg, ${theme.colors.primary}20, ${theme.colors.secondary}20)`,
            border: `2px solid ${theme.colors.accent}`,
          }}
        >
          <div className="flex items-center gap-2">
            <Filter size={20} style={{ color: theme.colors.primary }} />
            <span className="font-bold" style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}>
              FILTROS:
            </span>
          </div>

          <select
            value={filtroCategoria}
            onChange={(e) => setFiltroCategoria(e.target.value)}
            className="px-4 py-2 rounded-lg font-bold"
            style={{
              background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
              color: "white",
              border: "none",
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
            className="px-4 py-2 rounded-lg font-bold"
            style={{
              background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
              color: "white",
              border: "none",
            }}
          >
            <option value="Todos">TODOS OS GÊNEROS</option>
            <option value="Masculino">MASCULINO</option>
            <option value="Feminino">FEMININO</option>
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
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -15,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="rounded-lg overflow-hidden shadow-lg relative"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.cardBackground}, ${theme.colors.accent}20)`,
                borderRadius: theme.borderRadius.large,
                boxShadow: `0 20px 40px -15px ${theme.colors.primary}30`,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={servico.image || "/placeholder.svg"}
                  alt={servico.nome}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                <motion.div
                  className="absolute top-4 right-4"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                >
                  <Sparkles size={24} style={{ color: theme.colors.primary }} />
                </motion.div>

                <div className="absolute top-4 left-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                      color: "white",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: theme.fonts.heading }}>
                    {servico.nome}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm mb-4" style={{ color: theme.colors.textSecondary, fontFamily: theme.fonts.body }}>
                  {servico.descricao}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock size={16} style={{ color: theme.colors.primary }} />
                    <span className="text-sm font-medium" style={{ color: theme.colors.text }}>
                      Tempo: {servico.tempo}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <DollarSign size={16} style={{ color: theme.colors.primary }} />
                    <span className="text-lg font-bold" style={{ color: theme.colors.primary }}>
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
                        <Zap size={16} style={{ color: theme.colors.primary }} />
                        <span className="text-sm font-bold" style={{ color: theme.colors.text }}>
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
                  className="w-full mt-6 py-3 rounded-lg flex items-center justify-center gap-2 font-bold"
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                    color: "white",
                    borderRadius: theme.borderRadius.large,
                  }}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: `0 15px 30px -10px ${theme.colors.primary}50`,
                  }}
                >
                  <Star size={16} />
                  AGENDAR
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {servicosFiltrados.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-lg font-bold" style={{ color: theme.colors.textSecondary }}>
              NENHUM SERVIÇO ENCONTRADO COM OS FILTROS SELECIONADOS.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default FemininoModernoServicosDetalhados

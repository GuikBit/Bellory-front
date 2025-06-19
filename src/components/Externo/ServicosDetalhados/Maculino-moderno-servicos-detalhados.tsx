"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Clock, DollarSign, Filter, Zap, User, Hexagon } from "lucide-react"
import { themes } from "../../../theme/theme"

const servicos = [
  {
    id: "1",
    nome: "Corte Tech Style",
    categoria: "Cabelo",
    genero: "Masculino",
    descricao: "Corte moderno com técnicas avançadas e styling futurista. Inclui análise digital do formato do rosto.",
    tempo: "50 min",
    preco: 75.0,
    image: "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?q=80&w=1965&auto=format&fit=crop",
  },
  {
    id: "2",
    nome: "Barba Digital",
    categoria: "Barba",
    genero: "Masculino",
    descricao: "Modelagem de barba com precisão digital e acabamento com laser. Tecnologia de ponta.",
    tempo: "40 min",
    preco: 60.0,
    image: "https://images.unsplash.com/photo-1599351431618-317f6a5f9a6b?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "3",
    nome: "Sobrancelha HD",
    categoria: "Sobrancelha",
    genero: "Masculino",
    descricao: "Design de sobrancelha com mapeamento 3D e precisão milimétrica.",
    tempo: "25 min",
    preco: 40.0,
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "4",
    nome: "Pigmentação Nano",
    categoria: "Barba",
    genero: "Masculino",
    descricao: "Pigmentação com nanotecnologia para resultado ultra natural e duradouro.",
    tempo: "75 min",
    preco: 150.0,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "5",
    nome: "Tratamento Molecular",
    categoria: "Tratamentos",
    genero: "Masculino",
    descricao: "Reconstrução capilar com tecnologia molecular avançada.",
    tempo: "120 min",
    preco: 200.0,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "6",
    nome: "Terapia Sonic",
    categoria: "Relaxamento",
    genero: "Masculino",
    descricao: "Massagem com ondas sonoras para relaxamento profundo e estimulação capilar.",
    tempo: "35 min",
    preco: 80.0,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop",
  },
]

const categorias = ["Todos", "Cabelo", "Barba", "Sobrancelha", "Tratamentos", "Relaxamento"]

const MasculinoModernoServicosDetalhados = () => {
  const theme = themes.masculinoModerno
  const [filtroCategoria, setFiltroCategoria] = useState("Todos")
  const [filtroGenero, setFiltroGenero] = useState("Todos")

  const servicosFiltrados = servicos.filter((servico) => {
    const categoriaMatch = filtroCategoria === "Todos" || servico.categoria === filtroCategoria
    const generoMatch = filtroGenero === "Todos" || servico.genero === filtroGenero
    return categoriaMatch && generoMatch
  })

  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: theme.colors.background }}>
      {/* Background Tech Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 opacity-5">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Hexagon size={400} style={{ color: theme.colors.accent }} />
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1
            className="text-5xl font-bold mb-4 uppercase tracking-wider"
            style={{ color: theme.colors.primary, fontFamily: theme.fonts.heading }}
          >
            SERVIÇOS TECH
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: theme.colors.textSecondary, fontFamily: theme.fonts.body }}
          >
            Tecnologia de ponta aplicada ao cuidado masculino moderno
          </p>
        </motion.div>

        {/* Filtros Futuristas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center mb-8 p-6 rounded-lg"
          style={{
            backgroundColor: `${theme.colors.primary}10`,
            border: `2px solid ${theme.colors.accent}`,
          }}
        >
          <div className="flex items-center gap-2">
            <Filter size={20} style={{ color: theme.colors.accent }} />
            <span
              className="font-semibold uppercase tracking-wider"
              style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}
            >
              FILTROS DIGITAIS:
            </span>
          </div>

          <select
            value={filtroCategoria}
            onChange={(e) => setFiltroCategoria(e.target.value)}
            className="px-4 py-2 rounded-lg border-2 font-semibold"
            style={{
              backgroundColor: theme.colors.primary,
              borderColor: theme.colors.accent,
              color: "white",
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
            className="px-4 py-2 rounded-lg border-2 font-semibold"
            style={{
              backgroundColor: theme.colors.primary,
              borderColor: theme.colors.accent,
              color: "white",
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -15,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="rounded-lg overflow-hidden shadow-lg relative"
              style={{
                backgroundColor: theme.colors.primary,
                borderRadius: theme.borderRadius.large,
                outline: `2px solid ${theme.colors.accent}`,
                outlineOffset: "2px",
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={servico.image || "/placeholder.svg"}
                  alt={servico.nome}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

                <div className="absolute top-4 right-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{ backgroundColor: theme.colors.accent, color: "white" }}
                  >
                    {servico.categoria}
                  </motion.div>
                </div>

                <div className="absolute top-4 left-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: theme.colors.accent, color: "white" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="absolute bottom-4 left-4">
                  <h3
                    className="text-xl font-bold text-white mb-1 uppercase tracking-wider"
                    style={{ fontFamily: theme.fonts.heading }}
                  >
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
                    <Clock size={16} style={{ color: theme.colors.accent }} />
                    <span className="text-sm font-medium" style={{ color: theme.colors.text }}>
                      TEMPO: {servico.tempo}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <DollarSign size={16} style={{ color: theme.colors.accent }} />
                    <span className="text-lg font-bold" style={{ color: theme.colors.accent }}>
                      R$ {servico.preco.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <User size={16} style={{ color: theme.colors.accent }} />
                    <span className="text-sm uppercase tracking-wider" style={{ color: theme.colors.textSecondary }}>
                      {servico.genero}
                    </span>
                  </div>
                </div>

                <motion.button
                  className="w-full mt-6 py-3 rounded-lg flex items-center justify-center gap-2 font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: theme.colors.accent,
                    color: "white",
                    borderRadius: theme.borderRadius.medium,
                  }}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: `0 10px 25px -5px ${theme.colors.accent}40`,
                  }}
                >
                  <Zap size={16} />
                  AGENDAR AGORA
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {servicosFiltrados.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-lg uppercase tracking-wider" style={{ color: theme.colors.textSecondary }}>
              NENHUM SERVIÇO ENCONTRADO COM OS FILTROS SELECIONADOS.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default MasculinoModernoServicosDetalhados

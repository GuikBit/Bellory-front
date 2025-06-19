"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Clock, DollarSign, Filter, Calendar, User, Crown } from "lucide-react"
import { themes } from "../../../theme/theme"

const servicos = [
  {
    id: "1",
    nome: "Corte Tradicional",
    categoria: "Cabelo",
    genero: "Masculino",
    descricao:
      "Corte clássico executado com técnicas tradicionais, tesoura e navalha. Experiência autêntica de barbearia.",
    tempo: "60 min",
    preco: 65.0,
    image: "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?q=80&w=1965&auto=format&fit=crop",
  },
  {
    id: "2",
    nome: "Barba Clássica",
    categoria: "Barba",
    genero: "Masculino",
    descricao: "Aparar e modelar com navalha tradicional, toalha quente e óleos aromáticos. Ritual completo.",
    tempo: "45 min",
    preco: 50.0,
    image: "https://images.unsplash.com/photo-1599351431618-317f6a5f9a6b?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "3",
    nome: "Sobrancelha Gentleman",
    categoria: "Sobrancelha",
    genero: "Masculino",
    descricao: "Modelagem refinada e discreta, mantendo a naturalidade masculina.",
    tempo: "30 min",
    preco: 35.0,
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "4",
    nome: "Bigode Vintage",
    categoria: "Barba",
    genero: "Masculino",
    descricao: "Modelagem e cuidado especializado para bigodes clássicos e vintage.",
    tempo: "25 min",
    preco: 30.0,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "5",
    nome: "Tratamento Premium",
    categoria: "Tratamentos",
    genero: "Masculino",
    descricao: "Tratamento capilar com produtos premium e técnicas artesanais.",
    tempo: "90 min",
    preco: 150.0,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "6",
    nome: "Ritual Gentleman",
    categoria: "Relaxamento",
    genero: "Masculino",
    descricao: "Experiência completa com massagem, aromaterapia e cuidados especiais.",
    tempo: "75 min",
    preco: 120.0,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop",
  },
]

const categorias = ["Todos", "Cabelo", "Barba", "Sobrancelha", "Tratamentos", "Relaxamento"]

const MasculinoClassicoServicosDetalhados = () => {
  const theme = themes.masculinoClassico
  const [filtroCategoria, setFiltroCategoria] = useState("Todos")
  const [filtroGenero, setFiltroGenero] = useState("Todos")

  const servicosFiltrados = servicos.filter((servico) => {
    const categoriaMatch = filtroCategoria === "Todos" || servico.categoria === filtroCategoria
    const generoMatch = filtroGenero === "Todos" || servico.genero === filtroGenero
    return categoriaMatch && generoMatch
  })

  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: theme.colors.background }}>
      {/* Classic Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 opacity-5">
          <svg width="200" height="200" viewBox="0 0 120 120" fill="none">
            <path
              d="M60 0L78.5 41.5L120 60L78.5 78.5L60 120L41.5 78.5L0 60L41.5 41.5L60 0Z"
              fill={theme.colors.primary}
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ color: theme.colors.primary, fontFamily: theme.fonts.heading }}
          >
            Serviços Tradicionais
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto italic"
            style={{ color: theme.colors.textSecondary, fontFamily: theme.fonts.body }}
          >
            "A arte tradicional da barbearia, preservada através das gerações"
          </p>
        </motion.div>

        {/* Filtros Elegantes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center mb-8 p-6 rounded-lg border-2"
          style={{
            backgroundColor: theme.colors.cardBackground,
            borderColor: theme.colors.secondary,
          }}
        >
          <div className="flex items-center gap-2">
            <Filter size={20} style={{ color: theme.colors.primary }} />
            <span className="font-medium" style={{ color: theme.colors.text, fontFamily: theme.fonts.body }}>
              Filtrar por:
            </span>
          </div>

          <select
            value={filtroCategoria}
            onChange={(e) => setFiltroCategoria(e.target.value)}
            className="px-4 py-2 rounded-md border-2"
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
            className="px-4 py-2 rounded-md border-2"
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              className="rounded-lg overflow-hidden shadow-lg border-2"
              style={{
                backgroundColor: theme.colors.cardBackground,
                borderColor: theme.colors.secondary,
                borderRadius: theme.borderRadius.medium,
                boxShadow: `0 10px 25px -5px rgba(0,0,0,0.1)`,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={servico.image || "/placeholder.svg"}
                  alt={servico.nome}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>

                <div className="absolute top-4 right-4">
                  <Crown size={24} style={{ color: theme.colors.primary }} />
                </div>

                <div className="absolute top-4 left-4">
                  <div
                    className="px-3 py-1 rounded text-xs font-medium"
                    style={{ backgroundColor: theme.colors.primary, color: "white" }}
                  >
                    {servico.categoria}
                  </div>
                </div>

                {/* Elegant frame border */}
                <div
                  className="absolute inset-4 border-2 opacity-30"
                  style={{
                    borderColor: theme.colors.primary,
                    borderRadius: theme.borderRadius.small,
                  }}
                ></div>

                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: theme.fonts.heading }}>
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
                </div>

                <motion.button
                  className="w-full mt-6 py-2 rounded-md flex items-center justify-center gap-2 font-medium border transition-all duration-300"
                  style={{
                    backgroundColor: theme.colors.primary,
                    color: "white",
                    borderColor: theme.colors.primary,
                    borderRadius: theme.borderRadius.small,
                  }}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{
                    backgroundColor: "transparent",
                    color: theme.colors.primary,
                    borderColor: theme.colors.primary,
                  }}
                >
                  <Calendar size={16} />
                  Agendar Serviço
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

export default MasculinoClassicoServicosDetalhados

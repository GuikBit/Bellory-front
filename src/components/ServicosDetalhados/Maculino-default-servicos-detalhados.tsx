"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Clock, DollarSign, Filter, Scissors, User } from "lucide-react"
import { themes } from "../../theme/theme"

const servicos = [
  {
    id: "1",
    nome: "Corte Masculino Clássico",
    categoria: "Cabelo",
    genero: "Masculino",
    descricao: "Corte tradicional com máquina e tesoura, finalizado com styling. Inclui lavagem e secagem.",
    tempo: "45 min",
    preco: 50.0,
    image: "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?q=80&w=1965&auto=format&fit=crop",
  },
  {
    id: "2",
    nome: "Barba Completa",
    categoria: "Barba",
    genero: "Masculino",
    descricao: "Aparar, modelar e finalizar a barba com navalha. Inclui toalha quente e hidratação.",
    tempo: "30 min",
    preco: 35.0,
    image: "https://images.unsplash.com/photo-1599351431618-317f6a5f9a6b?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "3",
    nome: "Design de Sobrancelha",
    categoria: "Sobrancelha",
    genero: "Masculino",
    descricao: "Modelagem e design de sobrancelha masculina com pinça e cera.",
    tempo: "20 min",
    preco: 25.0,
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "4",
    nome: "Pigmentação de Barba",
    categoria: "Barba",
    genero: "Masculino",
    descricao: "Cobertura de falhas e fios brancos com pigmentação natural.",
    tempo: "60 min",
    preco: 80.0,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "5",
    nome: "Relaxamento Capilar",
    categoria: "Tratamentos",
    genero: "Masculino",
    descricao: "Tratamento para alisar e relaxar cabelos crespos e cacheados.",
    tempo: "90 min",
    preco: 120.0,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "6",
    nome: "Massagem Relaxante",
    categoria: "Relaxamento",
    genero: "Masculino",
    descricao: "Massagem no couro cabeludo e pescoço para relaxamento total.",
    tempo: "25 min",
    preco: 40.0,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop",
  },
]

const categorias = ["Todos", "Cabelo", "Barba", "Sobrancelha", "Tratamentos", "Relaxamento"]

const MasculineDefaultServicosDetalhados = () => {
  const theme = themes.masculine_default
  const [filtroCategoria, setFiltroCategoria] = useState("Todos")
  const [filtroGenero, setFiltroGenero] = useState("Todos")

  const servicosFiltrados = servicos.filter((servico) => {
    const categoriaMatch = filtroCategoria === "Todos" || servico.categoria === filtroCategoria
    const generoMatch = filtroGenero === "Todos" || servico.genero === filtroGenero
    return categoriaMatch && generoMatch
  })

  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: theme.colors.background }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ color: theme.colors.primary, fontFamily: theme.fonts.heading }}
          >
            NOSSOS SERVIÇOS
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: theme.colors.textSecondary, fontFamily: theme.fonts.body }}
          >
            Descubra todos os serviços disponíveis com detalhes completos de tempo e preço
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center mb-8"
        >
          <div className="flex items-center gap-2">
            <Filter size={20} style={{ color: theme.colors.primary }} />
            <span style={{ color: theme.colors.text, fontFamily: theme.fonts.body }}>Filtros:</span>
          </div>

          <select
            value={filtroCategoria}
            onChange={(e) => setFiltroCategoria(e.target.value)}
            className="px-4 py-2 rounded border"
            style={{
              backgroundColor: theme.colors.cardBackground,
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
            className="px-4 py-2 rounded border"
            style={{
              backgroundColor: theme.colors.cardBackground,
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="rounded-lg overflow-hidden shadow-lg border-l-4"
              style={{
                backgroundColor: theme.colors.cardBackground,
                borderColor: theme.colors.primary,
                borderRadius: theme.borderRadius.medium,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={servico.image || "/placeholder.svg"}
                  alt={servico.nome}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                <div className="absolute top-4 right-4">
                  <div
                    className="px-2 py-1 rounded text-xs font-semibold"
                    style={{ backgroundColor: theme.colors.primary, color: "white" }}
                  >
                    {servico.categoria}
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
                </div>

                <motion.button
                  className="w-full mt-6 py-3 rounded flex items-center justify-center gap-2 font-semibold uppercase tracking-wider"
                  style={{
                    backgroundColor: theme.colors.primary,
                    color: "white",
                    borderRadius: theme.borderRadius.small,
                  }}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Scissors size={16} />
                  AGENDAR SERVIÇO
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {servicosFiltrados.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-lg" style={{ color: theme.colors.textSecondary }}>
              Nenhum serviço encontrado com os filtros selecionados.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default MasculineDefaultServicosDetalhados

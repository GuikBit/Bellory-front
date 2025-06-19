"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "primereact/button"
import { ShoppingCart, Eye, Filter, Search, Star, Hexagon, Grid3X3, List, Zap } from "lucide-react"
import { themes } from "../../../theme/theme"
// import { useGlobalState } from "../../global/ContextGlobalState"
interface Produto {
  id: string
  nome: string
  preco: number
  precoOriginal?: number
  descricao: string
  imagem: string
  categoria: string
  genero: string
  marca: string
  avaliacao: number
  desconto?: number
  emEstoque: boolean
  novo?: boolean
  destaque?: boolean
  tecnologia?: string
}

const produtos: Produto[] = [
  {
    id: "1",
    nome: "Pomada Tech Matrix",
    preco: 65.9,
    precoOriginal: 78.9,
    descricao: "Pomada com nanotecnologia para fixação extrema e proteção UV avançada.",
    imagem: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=400",
    categoria: "Styling",
    genero: "Masculino",
    marca: "TechHair",
    avaliacao: 4.9,
    desconto: 16,
    emEstoque: true,
    destaque: true,
    tecnologia: "Nano-Fix",
  },
  {
    id: "2",
    nome: "Óleo Quantum Beard",
    preco: 55.5,
    descricao: "Óleo com fórmula molecular avançada para hidratação profunda da barba.",
    imagem: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=400",
    categoria: "Barba",
    genero: "Masculino",
    marca: "QuantumCare",
    avaliacao: 5.0,
    emEstoque: true,
    novo: true,
    tecnologia: "Molecular-H",
  },
  {
    id: "3",
    nome: "Shampoo Neural Clean",
    preco: 48.9,
    descricao: "Shampoo inteligente que se adapta ao tipo de cabelo automaticamente.",
    imagem: "https://images.unsplash.com/photo-1589782431746-4a05f7d8c0f0?q=80&w=400",
    categoria: "Cabelo",
    genero: "Unissex",
    marca: "NeuralTech",
    avaliacao: 4.7,
    emEstoque: true,
    tecnologia: "AI-Adapt",
  },
  {
    id: "4",
    nome: "Cera Holographic",
    preco: 72.0,
    descricao: "Cera com efeito holográfico e fixação programável por temperatura.",
    imagem: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=400",
    categoria: "Styling",
    genero: "Masculino",
    marca: "HoloStyle",
    avaliacao: 4.8,
    emEstoque: false,
    tecnologia: "Thermo-Fix",
  },
  {
    id: "5",
    nome: "Kit Cyber Grooming",
    preco: 149.9,
    precoOriginal: 200.0,
    descricao: "Kit completo com produtos tech para o homem moderno e conectado.",
    imagem: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=400",
    categoria: "Kits",
    genero: "Masculino",
    marca: "CyberGrooming",
    avaliacao: 5.0,
    desconto: 25,
    emEstoque: true,
    destaque: true,
    tecnologia: "Multi-Tech",
  },
]

export default function MasculinoModernoProdutosLista() {
  const [produtosFiltrados, setProdutosFiltrados] = useState<Produto[]>(produtos)
  const [filtros, setFiltros] = useState({
    categoria: "Todos",
    genero: "Todos",
    ordenacao: "nome",
  })
  const [busca, setBusca] = useState("")
  const [visualizacao, setVisualizacao] = useState<"grid" | "lista">("grid")
  const [mostrarFiltros, setMostrarFiltros] = useState(false)

  // const { adicionarProdutoCarrinho } = useGlobalState()
  const theme = themes.masculinoModerno

  const categorias = ["Todos", ...Array.from(new Set(produtos.map((p) => p.categoria)))]
  const generos = ["Todos", ...Array.from(new Set(produtos.map((p) => p.genero)))]

  useEffect(() => {
    let resultado = produtos

    if (busca) {
      resultado = resultado.filter(
        (produto) =>
          produto.nome.toLowerCase().includes(busca.toLowerCase()) ||
          produto.descricao.toLowerCase().includes(busca.toLowerCase()),
      )
    }

    if (filtros.categoria !== "Todos") {
      resultado = resultado.filter((produto) => produto.categoria === filtros.categoria)
    }

    if (filtros.genero !== "Todos") {
      resultado = resultado.filter((produto) => produto.genero === filtros.genero)
    }

    resultado.sort((a, b) => {
      switch (filtros.ordenacao) {
        case "preco-menor":
          return a.preco - b.preco
        case "preco-maior":
          return b.preco - a.preco
        case "avaliacao":
          return b.avaliacao - a.avaliacao
        default:
          return a.nome.localeCompare(b.nome)
      }
    })

    setProdutosFiltrados(resultado)
  }, [filtros, busca])

  const renderProdutoCard = (produto: Produto, index: number) => (
    <motion.div
      key={produto.id}
      className="bg-slate-800/40 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-blue-500/20 hover:border-cyan-400/40 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div className="relative">
        <img src={produto.imagem || "/placeholder.svg"} alt={produto.nome} className="w-full h-48 object-cover" />

        {/* Overlay tech */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {produto.novo && (
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs px-3 py-1 rounded-full font-bold">
              NEW
            </span>
          )}
          {produto.destaque && (
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-bold">
              TECH
            </span>
          )}
          {produto.desconto && (
            <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold">
              -{produto.desconto}%
            </span>
          )}
        </div>

        {/* Tecnologia badge */}
        {produto.tecnologia && (
          <div className="absolute top-3 right-3">
            <span className="bg-black/60 backdrop-blur-sm text-cyan-400 text-xs px-2 py-1 rounded border border-cyan-500/30">
              {produto.tecnologia}
            </span>
          </div>
        )}

        {!produto.emEstoque && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center backdrop-blur-sm">
            <span className="text-white font-bold text-lg">ESGOTADO</span>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-cyan-400 font-medium">{produto.marca}</span>
          <Hexagon size={8} className="text-blue-500" />
          <span className="text-xs text-blue-400">{produto.categoria}</span>
        </div>

        <h3 className="font-bold text-lg mb-2 text-white">{produto.nome}</h3>
        <p className="text-slate-300 text-sm mb-4 line-clamp-2">{produto.descricao}</p>

        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.floor(produto.avaliacao) ? "text-cyan-400 fill-current" : "text-slate-600"}
            />
          ))}
          <span className="text-sm text-slate-400 ml-2">({produto.avaliacao})</span>
        </div>

        <div className="flex items-center justify-between mb-5">
          <div>
            {produto.precoOriginal && (
              <span className="text-sm text-slate-500 line-through mr-2">R$ {produto.precoOriginal.toFixed(2)}</span>
            )}
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              R$ {produto.preco.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            icon={() => <Eye size={16} />}
            className="flex-1 py-3 text-sm rounded-xl border border-cyan-500/30 hover:bg-cyan-500/10 transition-all"
            style={{
              color: theme.colors.accent,
              backgroundColor: "transparent",
            }}
            onClick={() => {
              /* Navegar para detalhes */
            }}
          >
            Detalhes
          </Button>
          <Button
            icon={() => <ShoppingCart size={16} />}
            className="flex-1 py-3 text-sm rounded-xl transition-all"
            style={{
              background: `linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.secondary})`,
              color: "white",
              border: "none",
            }}
            disabled={!produto.emEstoque}
            // onClick={() => adicionarProdutoCarrinho(produto)}
          >
            Carrinho
          </Button>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-8">
      {/* Background tech elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            PRODUTOS TECH
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[2px] w-16 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            <Zap size={24} className="text-cyan-400" />
            <div className="h-[2px] w-16 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
          </div>
        </motion.div>

        {/* Barra de busca e controles */}
        <div className="mb-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" size={20} />
              <input
                type="text"
                placeholder="Buscar produtos tech..."
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-all"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>

            <div className="flex gap-3">
              <Button
                icon={() => <Filter size={18} />}
                className="px-4 py-3 rounded-xl border border-blue-500/30 transition-all"
                style={{
                  backgroundColor: mostrarFiltros ? `${theme.colors.accent}20` : "transparent",
                  color: theme.colors.accent,
                  borderColor: mostrarFiltros ? theme.colors.accent : "rgba(59, 130, 246, 0.3)",
                }}
                onClick={() => setMostrarFiltros(!mostrarFiltros)}
              >
                Filtros
              </Button>

              <Button
                icon={() => (visualizacao === "grid" ? <List size={18} /> : <Grid3X3 size={18} />)}
                className="px-4 py-3 rounded-xl border border-blue-500/30 transition-all"
                style={{
                  borderColor: theme.colors.accent,
                  color: theme.colors.accent,
                  backgroundColor: "transparent",
                }}
                onClick={() => setVisualizacao(visualizacao === "grid" ? "lista" : "grid")}
              />
            </div>
          </div>

          {/* Filtros */}
          <AnimatePresence>
            {mostrarFiltros && (
              <motion.div
                className="bg-slate-800/40 backdrop-blur-xl p-5 rounded-2xl border border-blue-500/20"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-cyan-400">Categoria</label>
                    <select
                      className="w-full p-3 bg-slate-700/50 border border-blue-500/30 rounded-xl text-white focus:border-cyan-400 transition-all"
                      value={filtros.categoria}
                      onChange={(e) => setFiltros({ ...filtros, categoria: e.target.value })}
                    >
                      {categorias.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-cyan-400">Gênero</label>
                    <select
                      className="w-full p-3 bg-slate-700/50 border border-blue-500/30 rounded-xl text-white focus:border-cyan-400 transition-all"
                      value={filtros.genero}
                      onChange={(e) => setFiltros({ ...filtros, genero: e.target.value })}
                    >
                      {generos.map((gen) => (
                        <option key={gen} value={gen}>
                          {gen}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-cyan-400">Ordenar por</label>
                    <select
                      className="w-full p-3 bg-slate-700/50 border border-blue-500/30 rounded-xl text-white focus:border-cyan-400 transition-all"
                      value={filtros.ordenacao}
                      onChange={(e) => setFiltros({ ...filtros, ordenacao: e.target.value })}
                    >
                      <option value="nome">Nome</option>
                      <option value="preco-menor">Menor preço</option>
                      <option value="preco-maior">Maior preço</option>
                      <option value="avaliacao">Melhor avaliação</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Resultados */}
        <div className="mb-4">
          <p className="text-slate-400">
            {produtosFiltrados.length} produto{produtosFiltrados.length !== 1 ? "s" : ""} tech encontrado
            {produtosFiltrados.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Grid de produtos */}
        {produtosFiltrados.length > 0 ? (
          <div
            className={`grid gap-6 ${
              visualizacao === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
            }`}
          >
            {produtosFiltrados.map((produto, index) => renderProdutoCard(produto, index))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-slate-500 mb-4">
              <Search size={64} className="mx-auto mb-4" />
              <p className="text-xl">Nenhum produto tech encontrado</p>
              <p className="text-sm">Tente ajustar os filtros ou busca</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

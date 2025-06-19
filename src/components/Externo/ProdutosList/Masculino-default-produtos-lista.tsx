"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "primereact/button"
import { ShoppingCart, Eye, Filter, Search, Star, Flame, Grid3X3, List } from "lucide-react"
import { themes } from "../../../theme/theme"
// import { useGlobalState } from "../../global/ContextGlobalState"
import { useNavigate } from "react-router"
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
}

const produtos: Produto[] = [
  {
    id: "1",
    nome: "Pomada Modeladora Strong",
    preco: 45.9,
    precoOriginal: 52.9,
    descricao: "Pomada com fixação forte e acabamento matte para um visual moderno e duradouro.",
    imagem: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=400",
    categoria: "Styling",
    genero: "Masculino",
    marca: "BarberPro",
    avaliacao: 4.8,
    desconto: 13,
    emEstoque: true,
    destaque: true,
  },
  {
    id: "2",
    nome: "Óleo para Barba Premium",
    preco: 38.5,
    descricao: "Óleo hidratante que amacia os fios e proporciona brilho natural à barba.",
    imagem: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=400",
    categoria: "Barba",
    genero: "Masculino",
    marca: "BeardCare",
    avaliacao: 4.9,
    emEstoque: true,
    novo: true,
  },
  {
    id: "3",
    nome: "Shampoo Anticaspa",
    preco: 32.9,
    descricao: "Shampoo especial para combater a caspa e manter o couro cabeludo saudável.",
    imagem: "https://images.unsplash.com/photo-1589782431746-4a05f7d8c0f0?q=80&w=400",
    categoria: "Cabelo",
    genero: "Unissex",
    marca: "HairTech",
    avaliacao: 4.5,
    emEstoque: true,
  },
  {
    id: "4",
    nome: "Cera Modeladora Natural",
    preco: 42.0,
    descricao: "Cera com fixação média e acabamento natural para todos os tipos de cabelo.",
    imagem: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=400",
    categoria: "Styling",
    genero: "Masculino",
    marca: "StyleMax",
    avaliacao: 4.6,
    emEstoque: false,
  },
  {
    id: "5",
    nome: "Kit Barba Completo",
    preco: 89.9,
    precoOriginal: 120.0,
    descricao: "Kit completo com óleo, shampoo, balm e pente para cuidados completos da barba.",
    imagem: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=400",
    categoria: "Kits",
    genero: "Masculino",
    marca: "BarberPro",
    avaliacao: 5.0,
    desconto: 25,
    emEstoque: true,
    destaque: true,
  },
  {
    id: "6",
    nome: "Balm Pós-Barba",
    preco: 29.9,
    descricao: "Balm calmante que hidrata a pele e previne irritações após o barbear.",
    imagem: "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?q=80&w=400",
    categoria: "Barba",
    genero: "Masculino",
    marca: "SkinCare",
    avaliacao: 4.7,
    emEstoque: true,
  },
]

export default function MasculineDefaultProdutosLista() {
  const [produtosFiltrados, setProdutosFiltrados] = useState<Produto[]>(produtos)
  const [filtros, setFiltros] = useState({
    categoria: "Todos",
    genero: "Todos",
    ordenacao: "nome",
  })
  const [busca, setBusca] = useState("")
  const [visualizacao, setVisualizacao] = useState<"grid" | "lista">("grid")
  const [mostrarFiltros, setMostrarFiltros] = useState(false)

  const navigate = useNavigate()

//   const { adicionarProdutoCarrinho } = useGlobalState()
  const theme = themes.masculine_default

  const categorias = ["Todos", ...Array.from(new Set(produtos.map((p) => p.categoria)))]
  const generos = ["Todos", ...Array.from(new Set(produtos.map((p) => p.genero)))]

  useEffect(() => {
    let resultado = produtos

    // Filtro por busca
    if (busca) {
      resultado = resultado.filter(
        (produto) =>
          produto.nome.toLowerCase().includes(busca.toLowerCase()) ||
          produto.descricao.toLowerCase().includes(busca.toLowerCase()),
      )
    }

    // Filtro por categoria
    if (filtros.categoria !== "Todos") {
      resultado = resultado.filter((produto) => produto.categoria === filtros.categoria)
    }

    // Filtro por gênero
    if (filtros.genero !== "Todos") {
      resultado = resultado.filter((produto) => produto.genero === filtros.genero)
    }

    // Ordenação
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
      className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg border-l-4 hover:shadow-xl transition-all duration-300"
      style={{ borderColor: theme.colors.primary }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative">
        <img src={produto.imagem || "/placeholder.svg"} alt={produto.nome} className="w-full h-48 object-cover" />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {produto.novo && <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">NOVO</span>}
          {produto.destaque && <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded">DESTAQUE</span>}
          {produto.desconto && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">-{produto.desconto}%</span>
          )}
        </div>

        {!produto.emEstoque && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-bold">ESGOTADO</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-gray-400">{produto.marca}</span>
          <span className="text-xs text-gray-500">•</span>
          <span className="text-xs text-gray-400">{produto.categoria}</span>
        </div>

        <h3 className="font-semibold text-lg mb-2 text-white">{produto.nome}</h3>
        <p className="text-gray-300 text-sm mb-3 line-clamp-2">{produto.descricao}</p>

        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.floor(produto.avaliacao) ? "text-yellow-400 fill-current" : "text-gray-600"}
            />
          ))}
          <span className="text-sm text-gray-400 ml-1">({produto.avaliacao})</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            {produto.precoOriginal && (
              <span className="text-sm text-gray-500 line-through mr-2">R$ {produto.precoOriginal.toFixed(2)}</span>
            )}
            <span className="text-xl font-bold" style={{ color: theme.colors.primary }}>
              R$ {produto.preco.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            icon={() => <Eye size={16} />}
            className="flex-1 py-2 text-sm border rounded-md"
            style={{
              borderColor: theme.colors.primary,
              color: theme.colors.primary,
              backgroundColor: "transparent",
            }}
            onClick={() => {
              navigate('/produtos/1')
            }}
          >
            Detalhes
          </Button>
          <Button
            icon={() => <ShoppingCart size={16} />}
            className="flex-1 py-2 text-sm rounded-md"
            style={{
              backgroundColor: theme.colors.primary,
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
    <div className="min-h-screen bg-neutral-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold mb-4">PRODUTOS</h1>
          <div className="flex items-center justify-center gap-3">
            <div className="h-0.5 w-12" style={{ backgroundColor: theme.colors.primary }}></div>
            <Flame size={20} style={{ color: theme.colors.primary }} />
            <div className="h-0.5 w-12" style={{ backgroundColor: theme.colors.primary }}></div>
          </div>
        </motion.div>

        {/* Barra de busca e controles */}
        <div className="mb-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full pl-10 pr-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-amber-500"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <Button
                icon={() => <Filter size={18} />}
                className="px-4 py-3 rounded-lg"
                style={{
                  backgroundColor: mostrarFiltros ? theme.colors.primary : "transparent",
                  color: mostrarFiltros ? "white" : theme.colors.primary,
                  border: `1px solid ${theme.colors.primary}`,
                }}
                onClick={() => setMostrarFiltros(!mostrarFiltros)}
              >
                Filtros
              </Button>

              <Button
                icon={() => (visualizacao === "grid" ? <List size={18} /> : <Grid3X3 size={18} />)}
                className="px-4 py-3 rounded-lg border"
                style={{
                  borderColor: theme.colors.primary,
                  color: theme.colors.primary,
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
                className="bg-neutral-800 p-4 rounded-lg border border-neutral-700"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Categoria</label>
                    <select
                      className="w-full p-2 bg-neutral-700 border border-neutral-600 rounded text-white"
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
                    <label className="block text-sm font-medium mb-2">Gênero</label>
                    <select
                      className="w-full p-2 bg-neutral-700 border border-neutral-600 rounded text-white"
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
                    <label className="block text-sm font-medium mb-2">Ordenar por</label>
                    <select
                      className="w-full p-2 bg-neutral-700 border border-neutral-600 rounded text-white"
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
          <p className="text-gray-400">
            {produtosFiltrados.length} produto{produtosFiltrados.length !== 1 ? "s" : ""} encontrado
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
            <div className="text-gray-500 mb-4">
              <Search size={64} className="mx-auto mb-4" />
              <p className="text-xl">Nenhum produto encontrado</p>
              <p className="text-sm">Tente ajustar os filtros ou busca</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

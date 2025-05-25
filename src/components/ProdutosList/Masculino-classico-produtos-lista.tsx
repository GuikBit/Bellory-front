"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "primereact/button"
import { ShoppingCart, Eye, Filter, Search, Star, Crown, Grid3X3, List, Scissors } from "lucide-react"
import { themes } from "../../theme/theme"
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
  tradicional?: boolean
}

const produtos: Produto[] = [
  {
    id: "1",
    nome: "Pomada Clássica Royal",
    preco: 42.9,
    precoOriginal: 48.9,
    descricao: "Pomada tradicional com fórmula centenária para um acabamento elegante e duradouro.",
    imagem: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=400",
    categoria: "Styling",
    genero: "Masculino",
    marca: "Royal Barber",
    avaliacao: 4.9,
    desconto: 12,
    emEstoque: true,
    destaque: true,
    tradicional: true,
  },
  {
    id: "2",
    nome: "Óleo de Barba Heritage",
    preco: 35.5,
    descricao: "Óleo artesanal com essências nobres para barbas distintas e bem cuidadas.",
    imagem: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=400",
    categoria: "Barba",
    genero: "Masculino",
    marca: "Heritage Co.",
    avaliacao: 5.0,
    emEstoque: true,
    novo: true,
    tradicional: true,
  },
  {
    id: "3",
    nome: "Shampoo Gentleman",
    preco: 28.9,
    descricao: "Shampoo refinado com ingredientes naturais para cabelos de cavalheiros.",
    imagem: "https://images.unsplash.com/photo-1589782431746-4a05f7d8c0f0?q=80&w=400",
    categoria: "Cabelo",
    genero: "Masculino",
    marca: "Gentleman's Choice",
    avaliacao: 4.7,
    emEstoque: true,
    tradicional: true,
  },
  {
    id: "4",
    nome: "Cera Vintage Premium",
    preco: 38.0,
    descricao: "Cera com fórmula vintage para penteados clássicos e sofisticados.",
    imagem: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=400",
    categoria: "Styling",
    genero: "Masculino",
    marca: "Vintage Style",
    avaliacao: 4.8,
    emEstoque: false,
    tradicional: true,
  },
  {
    id: "5",
    nome: "Kit Barbeiro Tradicional",
    preco: 89.9,
    precoOriginal: 120.0,
    descricao: "Kit completo com produtos tradicionais para o ritual de barbearia clássica.",
    imagem: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=400",
    categoria: "Kits",
    genero: "Masculino",
    marca: "Classic Barber",
    avaliacao: 5.0,
    desconto: 25,
    emEstoque: true,
    destaque: true,
    tradicional: true,
  },
]

export default function MasculinoClassicoProdutosLista() {
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
  const theme = themes.masculinoClassico

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
      className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-amber-200 hover:border-amber-400 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="relative">
        <img src={produto.imagem || "/placeholder.svg"} alt={produto.nome} className="w-full h-48 object-cover" />

        {/* Overlay vintage */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {produto.novo && (
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
              NOVO
            </span>
          )}
          {produto.destaque && (
            <span className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
              PREMIUM
            </span>
          )}
          {produto.desconto && (
            <span className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
              -{produto.desconto}%
            </span>
          )}
        </div>

        {/* Tradicional badge */}
        {produto.tradicional && (
          <div className="absolute top-3 right-3">
            <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded border-2 border-amber-300 font-medium">
              TRADICIONAL
            </span>
          </div>
        )}

        {!produto.emEstoque && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">ESGOTADO</span>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-amber-700 font-medium">{produto.marca}</span>
          <Crown size={12} className="text-amber-600" />
          <span className="text-xs text-amber-600">{produto.categoria}</span>
        </div>

        <h3 className="font-serif font-bold text-lg mb-2 text-amber-900">{produto.nome}</h3>
        <p className="text-amber-700 text-sm mb-4 line-clamp-2 italic">{produto.descricao}</p>

        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.floor(produto.avaliacao) ? "text-amber-500 fill-current" : "text-amber-300"}
            />
          ))}
          <span className="text-sm text-amber-600 ml-2 font-medium">({produto.avaliacao})</span>
        </div>

        <div className="flex items-center justify-between mb-5">
          <div>
            {produto.precoOriginal && (
              <span className="text-sm text-amber-500 line-through mr-2">R$ {produto.precoOriginal.toFixed(2)}</span>
            )}
            <span className="text-xl font-bold text-amber-800">R$ {produto.preco.toFixed(2)}</span>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            icon={() => <Eye size={16} />}
            className="flex-1 py-3 text-sm rounded-xl border-2 border-amber-300 hover:bg-amber-50 transition-all"
            style={{
              color: theme.colors.primary,
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
            className="flex-1 py-3 text-sm rounded-xl transition-all shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 text-amber-900 py-8">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-200/20 to-amber-200/20 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-serif font-bold mb-4 text-amber-800">PRODUTOS CLÁSSICOS</h1>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[2px] w-16 bg-gradient-to-r from-amber-600 to-orange-600"></div>
            <Scissors size={24} className="text-amber-600" />
            <div className="h-[2px] w-16 bg-gradient-to-r from-orange-600 to-amber-600"></div>
          </div>
          <p className="text-amber-700 mt-2 italic">Tradição e qualidade em cada produto</p>
        </motion.div>

        {/* Barra de busca e controles */}
        <div className="mb-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600" size={20} />
              <input
                type="text"
                placeholder="Buscar produtos tradicionais..."
                className="w-full pl-10 pr-4 py-3 bg-white border-2 border-amber-200 rounded-xl text-amber-900 focus:outline-none focus:border-amber-400 transition-all"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>

            <div className="flex gap-3">
              <Button
                icon={() => <Filter size={18} />}
                className="px-4 py-3 rounded-xl border-2 transition-all"
                style={{
                  backgroundColor: mostrarFiltros ? `${theme.colors.primary}20` : "transparent",
                  color: theme.colors.primary,
                  borderColor: mostrarFiltros ? theme.colors.primary : theme.colors.secondary,
                }}
                onClick={() => setMostrarFiltros(!mostrarFiltros)}
              >
                Filtros
              </Button>

              <Button
                icon={() => (visualizacao === "grid" ? <List size={18} /> : <Grid3X3 size={18} />)}
                className="px-4 py-3 rounded-xl border-2 transition-all"
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
                className="bg-white p-5 rounded-2xl border-2 border-amber-200 shadow-lg"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-amber-800">Categoria</label>
                    <select
                      className="w-full p-3 bg-amber-50 border-2 border-amber-200 rounded-xl text-amber-900 focus:border-amber-400 transition-all"
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
                    <label className="block text-sm font-medium mb-2 text-amber-800">Gênero</label>
                    <select
                      className="w-full p-3 bg-amber-50 border-2 border-amber-200 rounded-xl text-amber-900 focus:border-amber-400 transition-all"
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
                    <label className="block text-sm font-medium mb-2 text-amber-800">Ordenar por</label>
                    <select
                      className="w-full p-3 bg-amber-50 border-2 border-amber-200 rounded-xl text-amber-900 focus:border-amber-400 transition-all"
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
          <p className="text-amber-700">
            {produtosFiltrados.length} produto{produtosFiltrados.length !== 1 ? "s" : ""} tradiciona
            {produtosFiltrados.length !== 1 ? "is" : "l"} encontrado{produtosFiltrados.length !== 1 ? "s" : ""}
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
            <div className="text-amber-600 mb-4">
              <Search size={64} className="mx-auto mb-4" />
              <p className="text-xl font-serif">Nenhum produto encontrado</p>
              <p className="text-sm italic">Tente ajustar os filtros ou busca</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

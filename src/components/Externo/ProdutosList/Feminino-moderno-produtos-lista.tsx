"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "primereact/button"
import { ShoppingCart, Eye, Filter, Search, Star, Sparkles, Grid3X3, List } from "lucide-react"
import { themes } from "../../../theme/theme"
import { Produto } from "../../../utils/interfaces"
import { BarbeariaButton } from "../../ui"
import { useNavigate } from "react-router"
// import { useGlobalState } from "../../global/ContextGlobalState"



const produtos: Produto[] = [
  {
    id: "1",
    nome: "Máscara Neon Glow",
    preco: 75.9,
    precoOriginal: 89.9,
    descricao: "Máscara com efeito neon que revitaliza e ilumina os cabelos instantaneamente.",
    imagem: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400",
    categoria: "Tratamentos",
    genero: "Feminino",
    marca: "Neon Beauty",
    avaliacao: 4.9,
    desconto: 16,
    emEstoque: true,
    destaque: true,
    trending: true,
    produtosUtilizados: ["Proteínas Fluorescentes", "Ácidos Frutais", "Vitamina B12", "Colágeno Vegetal"],
  },
  {
    id: "2",
    nome: "Esmalte Holográfico",
    preco: 35.5,
    descricao: "Esmalte com efeito holográfico que muda de cor conforme a luz.",
    imagem: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=400",
    categoria: "Unhas",
    genero: "Feminino",
    marca: "Holo Nails",
    avaliacao: 4.8,
    emEstoque: true,
    novo: true,
    produtosUtilizados: ["Pigmentos Holográficos", "Base Magnética", "Top Coat 3D"],
  },
  {
    id: "3",
    nome: "Shampoo Color Blast",
    preco: 52.9,
    descricao: "Shampoo que deposita cor temporária enquanto limpa os cabelos.",
    imagem: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400",
    categoria: "Cabelo",
    genero: "Feminino",
    marca: "Color Revolution",
    avaliacao: 4.7,
    emEstoque: true,
    trending: true,
    produtosUtilizados: ["Pigmentos Temporários", "Extratos Naturais", "Proteínas Vegetais"],
  },
  {
    id: "4",
    nome: "Sérum Anti-Gravity",
    preco: 95.0,
    descricao: "Sérum facial com tecnologia anti-gravidade para lifting instantâneo.",
    imagem: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=400",
    categoria: "Skincare",
    genero: "Feminino",
    marca: "Future Skin",
    avaliacao: 5.0,
    emEstoque: false,
    produtosUtilizados: ["Peptídeos Tensores", "Ácido Hialurônico", "Nanopartículas", "Vitamina C"],
  },
  {
    id: "5",
    nome: "Kit Nail Art Futurista",
    preco: 129.9,
    precoOriginal: 180.0,
    descricao: "Kit completo para nail art com produtos inovadores e ferramentas tech.",
    imagem: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=400",
    categoria: "Kits",
    genero: "Feminino",
    marca: "Tech Nails",
    avaliacao: 4.9,
    desconto: 28,
    emEstoque: true,
    destaque: true,
    trending: true,
    produtosUtilizados: ["Gel UV", "Glitters Holográficos", "Adesivos 3D", "LED Pen", "Base Magnética"],
  },
  {
    id: "6",
    nome: "Spray Texturizador Neon",
    preco: 48.9,
    descricao: "Spray que cria texturas incríveis e brilho neon nos cabelos.",
    imagem: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400",
    categoria: "Styling",
    genero: "Feminino",
    marca: "Texture Lab",
    avaliacao: 4.6,
    emEstoque: true,
    produtosUtilizados: ["Polímeros Texturizantes", "Pigmentos Neon", "Óleos Essenciais"],
  },
]

export default function FemininoModernoProdutosLista() {
  const [produtosFiltrados, setProdutosFiltrados] = useState<Produto[]>(produtos)
  const [filtros, setFiltros] = useState({
    categoria: "Todos",
    genero: "Todos",
    ordenacao: "nome",
  })
  const [busca, setBusca] = useState("")
  const [visualizacao, setVisualizacao] = useState<"grid" | "lista">("grid")
  const [mostrarFiltros, setMostrarFiltros] = useState(false)

  const navigate = useNavigate();

  // const { adicionarProdutoCarrinho } = useGlobalState()
  const theme = themes.femininoModerno

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
      className="rounded-lg shadow-lg m-2 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${theme.colors.cardBackground}, ${theme.colors.accent}20)`,
          borderRadius: theme.borderRadius.large,
          boxShadow: theme.colors.primary,
        }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.03 }}
    >
      <div className="relative">
        <img src={produto.imagem || "/placeholder.svg"} alt={produto.nome} className="w-full h-48 object-cover" />

        {/* Overlay futurista */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to top, ${theme.colors.primary}30, transparent)`, // 66 = ~40% de opacidade
          }}
        ></div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {produto.novo && (
            <span
              className="text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg animate-pulse"
              style={{
                backgroundImage: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`,
              }}
            >
              Novo
            </span>
          )}
          {/* {produto.trending && (
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
              TRENDING
            </span>
          )}
          {produto.destaque && (
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
              HOT
            </span>
          )}
          {produto.desconto && (
            <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
              -{produto.desconto}%
            </span>
          )} */}
        </div>

        {!produto.emEstoque && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center backdrop-blur-sm">
            <span className="text-white font-bold text-lg">ESGOTADO</span>
          </div>
        )}
      </div>

      <div className="p-5 h-75 flex flex-col justify-between">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-purple-400 font-bold">{produto.marca}</span>
          <Sparkles size={10} className="text-pink-400" />
          <span className="text-xs text-pink-400">{produto.categoria}</span>
        </div>

        <h3
          className="text-lg font-bold mb-1"
          style={{
            color: theme.colors.text,
            fontFamily: theme.fonts.heading,
          }}
        >
          {produto.nome}
        </h3>
        <p 
        className="text-sm mb-2 line-clamp-2"
        style={{
          color: theme.colors.textSecondary,
          fontFamily: theme.fonts.body,
        }}
        >{produto.descricao}</p>

        {/* Produtos utilizados */}
        {/* {produto.produtosUtilizados && (
          <div className="mb-3">
            <p className="text-xs text-pink-400 font-bold mb-1">Ingredientes tech:</p>
            <div className="flex flex-wrap gap-1">
              {produto.produtosUtilizados.slice(0, 2).map((prod, i) => (
                <span
                  key={i}
                  className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30"
                >
                  {prod}
                </span>
              ))}
              {produto.produtosUtilizados.length > 2 && (
                <span className="text-xs text-pink-400 font-bold">+{produto.produtosUtilizados.length - 2}</span>
              )}
            </div>
          </div>
        )} */}

        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.floor(produto.avaliacao) ? ` fill-current` : ""}
              style={{ color: theme.colors.primary, transition: "color 0.3s" }}
            />
          ))}
          <span className="text-sm ml-2 font-bold" style={{color: theme.colors.primary}}>({produto.avaliacao})</span>
        </div>

        <div className="flex items-center justify-between mb-5">
          <div>
            {produto.precoOriginal && (
              <span className="text-sm text-purple-400 line-through mr-2">R$ {produto.precoOriginal.toFixed(2)}</span>
            )}
            <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
             
            </span>
            <h3
              className="text-xl font-bold"
              style={{
                color: theme.colors.primary,
                fontFamily: theme.fonts.heading,
              }}
            >
               R$ {produto.preco.toFixed(2)}
            </h3>
          </div>
        </div>

        <div className="flex gap-3 justify-between">
          {/* <Button
            icon={() => <Eye size={16} />}
            className="flex-1 py-3 text-sm rounded-xl border border-purple-500/30 hover:bg-purple-500/10 transition-all"
            style={{
              color: theme.colors.primary,
              backgroundColor: "transparent",
            }}
            onClick={() => {
            }}
          >
            Detalhes
          </Button> */}
          <BarbeariaButton
            leftIcon={ <Eye size={18} className="mr-2" style={{ color: theme.colors.primary }} />}
            value="Detalhes"
            variant="text"
            className="border-none py-1 rounded-lg transition cursor-pointer"
            style={{
              color: theme.colors.primary,
              // border: `1px solid ${theme.colors.primary}`,
              borderRadius: theme.borderRadius.large
            }}
            onClick={() => {navigate(`/produtos/${produto.id}`)}}
          />
          {/* <Button
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
          </Button> */}

          <BarbeariaButton 
            leftIcon={ <ShoppingCart size={18} color='white' />}
            value="Adicionar"
            className="border-none py-1 rounded-lg transition cursor-pointer"
            style={{
              background: theme.colors.backgroundLinear,
              color: 'white',
              borderRadius: theme.borderRadius.large
            }}
            onClick={() =>{} /* adicionarProdutoCarrinho(produto) */ }
          />
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-white py-8 relative">
      {/* Background futurista */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.15),transparent_50%)]"></div>
      </div> */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="75" cy="25" r="25" fill={theme.colors.primary} />
            <circle cx="25" cy="75" r="25" fill={theme.colors.secondary} />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100C0 44.7715 44.7715 0 100 0V100H0Z" fill={theme.colors.accent} />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#FF69B4] via-[#FF69B4] to-[#FFC0CB] bg-clip-text text-transparent">
            Nossos Produtos
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[2px] w-16 "style={{ backgroundColor: theme.colors.primary }}></div>
            <Sparkles size={24} style={{ color: theme.colors.primary }} />
            <div className="h-[2px] w-16 "style={{ backgroundColor: theme.colors.primary }}></div>
          </div>
          
        </motion.div>

        {/* Barra de busca e controles */}
        <div className="mb-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 ">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: theme.colors.primary }} size={20} />
              <input
                type="text"
                placeholder="Buscar por produtos..."
                className="w-100 md:w-full pl-10 pr-4 py-3 backdrop-blur-sm border rounded-xl text-white focus:outline-none"
                style={{color: theme.colors.text, border: `1px solid ${theme.colors.primary}`}}
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>

            <div className="flex gap-3">
              <Button
                icon={() => <Filter size={18} />}
                className="px-4 py-3 rounded-xl border "
                style={{
                  backgroundColor: mostrarFiltros ? `${theme.colors.primary}10` : "transparent",
                  color: theme.colors.primary,
                  borderColor: mostrarFiltros ? theme.colors.primary : `${theme.colors.primary}60`,
                }}
                onClick={() => setMostrarFiltros(!mostrarFiltros)}
              >
                Filtros
              </Button>

              <Button
                icon={() => (visualizacao === "grid" ? <List size={18} /> : <Grid3X3 size={18} />)}
                className="px-4 py-3 rounded-xl border transition-all"
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
                className=" backdrop-blur-xl p-5 rounded-2xl border border-purple-500/30"
                style={{backgroundColor: mostrarFiltros ? `${theme.colors.primary}10` : "transparent"}}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2" style={{color: theme.colors.primary}}>Categoria</label>
                    <select
                      className="w-full p-3 border bg-white border-purple-500/30 rounded-xl focus:border-pink-400 transition-all"
                      value={filtros.categoria}
                      style={{color: theme.colors.text}}
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
                    <label className="block text-sm font-bold mb-2 text-pink-400">Gênero</label>
                    <select
                      className="w-full p-3 bg-purple-700/30 border border-purple-500/30 rounded-xl text-white focus:border-pink-400 transition-all"
                      value={filtros.genero}
                      style={{color: theme.colors.text}}
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
                    <label className="block text-sm font-bold mb-2 text-pink-400">Ordenar por</label>
                    <select
                      className="w-full p-3 bg-purple-700/30 border border-purple-500/30 rounded-xl text-white focus:border-pink-400 transition-all"
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
          <p className="text-purple-300">
            {produtosFiltrados.length} produto{produtosFiltrados.length !== 1 ? "s" : ""} futurista
            {produtosFiltrados.length !== 1 ? "s" : ""} encontrado{produtosFiltrados.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Grid de produtos */}
        {produtosFiltrados.length > 0 ? (
          <div
            className={`grid gap-6 ${
              visualizacao === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4" : "grid-cols-1"
            }`}
          >
            {produtosFiltrados.map((produto, index) => renderProdutoCard(produto, index))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-purple-400 mb-4">
              <Search size={64} className="mx-auto mb-4" />
              <p className="text-xl font-bold">Nenhum produto encontrado</p>
              <p className="text-sm">Tente ajustar os filtros ou busca</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "primereact/button"
import { ShoppingCart, Eye, Filter, Search, Star, Heart, Grid3X3, List, Flower, PlusIcon } from "lucide-react"
import { themes } from "../../theme/theme"
import { BarbeariaButton } from "../ui"
import { useGlobalState } from "../../global/ContextGlobalState"
import { useNavigate } from "react-router"
import EleganteSubTitle from "../Fragments/Feminino/EleganteSubTitleIcon"
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
  produtosUtilizados?: string[]
}

const produtos: Produto[] = [
  {
    id: "1",
    nome: "Máscara Hidratante Luxo",
    preco: 85.9,
    precoOriginal: 98.9,
    descricao: "Máscara premium com óleos nobres para hidratação profunda e brilho sedoso.",
    imagem: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400",
    categoria: "Tratamentos",
    genero: "Feminino",
    marca: "Elegance Pro",
    avaliacao: 4.9,
    desconto: 13,
    emEstoque: true,
    destaque: true,
    produtosUtilizados: ["Óleo de Argan", "Queratina Hidrolisada", "Vitamina E", "Colágeno"],
  },
  {
    id: "2",
    nome: "Esmalte Francês Premium",
    preco: 28.5,
    descricao: "Esmalte de longa duração com acabamento francês clássico e elegante.",
    imagem: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=400",
    categoria: "Unhas",
    genero: "Feminino",
    marca: "French Elegance",
    avaliacao: 4.8,
    emEstoque: true,
    novo: true,
    produtosUtilizados: ["Base Fortalecedora", "Esmalte Premium", "Top Coat Brilho"],
  },
  {
    id: "3",
    nome: "Shampoo Nutritivo Deluxe",
    preco: 45.9,
    descricao: "Shampoo com fórmula nutritiva para cabelos ressecados e danificados.",
    imagem: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400",
    categoria: "Cabelo",
    genero: "Feminino",
    marca: "Deluxe Hair",
    avaliacao: 4.7,
    emEstoque: true,
    produtosUtilizados: ["Óleo de Coco", "Proteínas da Seda", "Extrato de Camomila"],
  },
  {
    id: "4",
    nome: "Creme Anti-Idade Facial",
    preco: 120.0,
    descricao: "Creme facial com tecnologia anti-idade para pele madura e exigente.",
    imagem: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=400",
    categoria: "Skincare",
    genero: "Feminino",
    marca: "Age Defense",
    avaliacao: 5.0,
    emEstoque: false,
    produtosUtilizados: ["Ácido Hialurônico", "Retinol", "Peptídeos", "Vitamina C"],
  },
  {
    id: "5",
    nome: "Kit Manicure Francesa",
    preco: 89.9,
    precoOriginal: 120.0,
    descricao: "Kit completo para manicure francesa com produtos profissionais premium.",
    imagem: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=400",
    categoria: "Kits",
    genero: "Feminino",
    marca: "French Pro",
    avaliacao: 4.9,
    desconto: 25,
    emEstoque: true,
    destaque: true,
    produtosUtilizados: ["Base Nutritiva", "Esmalte Branco", "Esmalte Rosa", "Top Coat", "Removedor"],
  },
  {
    id: "6",
    nome: "Sérum Capilar Reparador",
    preco: 65.9,
    descricao: "Sérum intensivo para reparação de pontas duplas e cabelos danificados.",
    imagem: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400",
    categoria: "Tratamentos",
    genero: "Feminino",
    marca: "Repair Plus",
    avaliacao: 4.8,
    emEstoque: true,
    produtosUtilizados: ["Óleo de Argan", "Silicones", "Aminoácidos", "Ceramidas"],
  },
]

export default function FemininoEleganteProdutosLista() {
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

  const { adicionarProdutoCarrinho } = useGlobalState();
  const theme = themes.femininoElegante

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

  // const renderProdutoCard = (produto: Produto, index: number) => (
  //   <motion.div
  //     key={produto.id}
  //     className="bg-white rounded-3xl overflow-hidden shadow-xl border border-rose-200 hover:border-rose-400 transition-all duration-300"
  //     initial={{ opacity: 0, y: 20 }}
  //     animate={{ opacity: 1, y: 0 }}
  //     transition={{ duration: 0.3, delay: index * 0.1 }}
  //     whileHover={{ y: -8, scale: 1.02 }}
  //   >
  //     <div className="relative">
  //       <img src={produto.imagem || "/placeholder.svg"} alt={produto.nome} className="w-full h-48 object-cover" />

  //       {/* Overlay elegante */}
  //       <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent"></div>

  //       {/* Badges */}
  //       <div className="absolute top-3 left-3 flex flex-col gap-2">
  //         {produto.novo && (
  //           <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
  //             NOVO
  //           </span>
  //         )}
  //         {produto.destaque && (
  //           <span className="bg-gradient-to-r from-purple-500 to-rose-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
  //             PREMIUM
  //           </span>
  //         )}
  //         {produto.desconto && (
  //           <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
  //             -{produto.desconto}%
  //           </span>
  //         )}
  //       </div>

  //       {!produto.emEstoque && (
  //         <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
  //           <span className="text-white font-medium text-lg">ESGOTADO</span>
  //         </div>
  //       )}
  //     </div>

  //     <div className="p-5">
  //       <div className="flex items-center gap-2 mb-3">
  //         <span className="text-xs text-rose-600 font-medium">{produto.marca}</span>
  //         <Heart size={10} className="text-rose-500" />
  //         <span className="text-xs text-rose-500">{produto.categoria}</span>
  //       </div>

  //       <h3 className="font-serif font-semibold text-lg mb-2 text-rose-900">{produto.nome}</h3>
  //       <p className="text-rose-700 text-sm mb-3 line-clamp-2 italic">{produto.descricao}</p>

  //       {/* Produtos utilizados */}
  //       {produto.produtosUtilizados && (
  //         <div className="mb-3">
  //           <p className="text-xs text-rose-600 font-medium mb-1">Produtos utilizados:</p>
  //           <div className="flex flex-wrap gap-1">
  //             {produto.produtosUtilizados.slice(0, 2).map((prod, i) => (
  //               <span key={i} className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded-full">
  //                 {prod}
  //               </span>
  //             ))}
  //             {produto.produtosUtilizados.length > 2 && (
  //               <span className="text-xs text-rose-500">+{produto.produtosUtilizados.length - 2}</span>
  //             )}
  //           </div>
  //         </div>
  //       )}

  //       <div className="flex items-center gap-1 mb-4">
  //         {[...Array(5)].map((_, i) => (
  //           <Star
  //             key={i}
  //             size={14}
  //             className={i < Math.floor(produto.avaliacao) ? "text-rose-400 fill-current" : "text-rose-200"}
  //           />
  //         ))}
  //         <span className="text-sm text-rose-600 ml-2 font-medium">({produto.avaliacao})</span>
  //       </div>

  //       <div className="flex items-center justify-between mb-5">
  //         <div>
  //           {produto.precoOriginal && (
  //             <span className="text-sm text-rose-400 line-through mr-2">R$ {produto.precoOriginal.toFixed(2)}</span>
  //           )}
  //           <span className="text-xl font-semibold text-rose-800">R$ {produto.preco.toFixed(2)}</span>
  //         </div>
  //       </div>

  //       <div className="flex gap-3">
  //         <Button
  //           icon={() => <Eye size={16} />}
  //           className="flex-1 py-3 text-sm rounded-2xl border border-rose-300 hover:bg-rose-50 transition-all"
  //           style={{
  //             color: theme.colors.primary,
  //             backgroundColor: "transparent",
  //           }}
  //           onClick={() => {
  //             /* Navegar para detalhes */
  //           }}
  //         >
  //           Detalhes
  //         </Button>
  //         <Button
  //           icon={() => <ShoppingCart size={16} />}
  //           className="flex-1 py-3 text-sm rounded-2xl transition-all shadow-lg"
  //           style={{
  //             background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
  //             color: "white",
  //             border: "none",
  //           }}
  //           disabled={!produto.emEstoque}
  //           // onClick={() => cc(produto)}
  //         >
  //           Carrinho
  //         </Button>
  //       </div>
  //     </div>
  //   </motion.div>
  // )

    const productTemplate = (product: Produto, index: number) => {
      const hasDiscount = product.desconto && product.desconto > 0 ? true : false
      
      return (
        <motion.div
          key={index}
          className="rounded-lg shadow-lg p-4 m-2 relative overflow-hidden border"
          style={{
            backgroundColor: theme.colors.cardBackground,
            borderColor: theme.colors.primary,
            borderRadius: theme.borderRadius.large,
            boxShadow: hasDiscount
              ? `0 15px 30px -10px ${theme.colors.primary}30`
              : `0 15px 30px -10px rgba(176, 141, 154, 0.15)`,
          }}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Tag de Promoção */}
          {hasDiscount && (
            <div
              className="absolute top-4 right-0 text-white text-xs font-semibold px-3 py-1 shadow-md z-10"
              style={{
                backgroundColor: theme.colors.primary,
                fontFamily: theme.fonts.heading,
              }}
            >
              {product.desconto}% OFF
            </div>
          )}
  
          {/* Imagem */}
          <div className="mb-4 rounded-lg overflow-hidden">
            <img
              src={product.imagem || "/placeholder.svg"}
              alt={product.nome}
              className="w-full h-52 object-cover transition border duration-300 ease-in-out hover:scale-105"
              style={{ borderRadius: theme.borderRadius.medium,borderColor: theme.colors.secondary }}
            />
          </div>
  
  
  
          <div className="h-55 flex flex-col justify-between">
            {/* Informações */}
  
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium" style={{color: theme.colors.textSecondary}}>{product.marca}</span>
              <Heart size={10} className=""style={{color: theme.colors.info}} />
              <span className="text-xs " style={{color: theme.colors.inputFocus}}>{product.categoria}</span>
            </div>
  
            <h4
              className="text-lg font-semibold mb-1"
              style={{
                color: theme.colors.text,
                fontFamily: theme.fonts.heading,
              }}
            >
              {product.nome}
            </h4>
  
            <p
              className="text-sm mb-2 line-clamp-2 italic"
              style={{
                color: theme.colors.textSecondary,
                fontFamily: theme.fonts.body,
              }}
            >
              {product.descricao}
            </p>
  
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(product.avaliacao) ? "fill-current" : ""}
                  style={{
                    color: i < Math.floor(product.avaliacao) ? theme.colors.primary : theme.colors.textSecondary,
                  }}
                />
              ))}
              <span className="text-sm ml-2 font-medium" style={{color: theme.colors.primary}}>({product.avaliacao})</span>
            </div>
  
            <div className="flex items-center justify-between mb-5">
              <div>
                {product.precoOriginal && (
                  <span className="text-sm line-through mr-2" style={{ color: theme.colors.error, fontFamily: theme.fonts.heading }} >R$ { product.precoOriginal.toFixed(2) }</span>
                )}
                <span className="text-xl font-semibold" style={{ color: theme.colors.text,  fontFamily: theme.fonts.heading }}>R$ {product.preco.toFixed(2)}</span>
              </div>
            </div>          
          </div>
  
          {/* Botões */}
          <div className=" flex justify-between items-center">
  
            <BarbeariaButton variant="outline" onClick={()=>{navigate('/produtos/1')}} leftIcon={<PlusIcon size={16}/>} rounded="full" size="sm">Detalhes</BarbeariaButton>
  
            <BarbeariaButton variant="primary" onClick={() => adicionarProdutoCarrinho(product)} leftIcon={<ShoppingCart size={16}/>} rounded="full" size="sm">Adicionar</BarbeariaButton>
  
          </div>
        </motion.div>
      )
    }

  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: theme.colors.accent }} >
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-200/30 to-purple-200/30 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        {/* <motion.div className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            Produtos Elegantes
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[2px] w-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"></div>
            <Flower size={24} className="text-rose-500" />
            <div className="h-[2px] w-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"></div>
          </div>
          <p className="text-rose-700 mt-2 italic">Beleza e sofisticação em cada produto</p>
        </motion.div> */}
        <EleganteSubTitle title="Nossos Produtos" />

        {/* Barra de busca e controles */}
        <div className="mb-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2" size={20} color={theme.colors.primary} />
              <input
                type="text"
                placeholder="Pesquisar produtos..."
                className="w-full pl-10 pr-4 py-3 bg-white border focus:outline-none transition-all"
                value={busca}
                style={{
                  borderColor: theme.colors.primary,
                  borderRadius: theme.borderRadius.full
                }}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-3">
              <BarbeariaButton iconOnly rounded="full" leftIcon={<Filter size={26} />} onClick={() => setMostrarFiltros(!mostrarFiltros)} variant="outline" />
              <BarbeariaButton iconOnly rounded="full" leftIcon={visualizacao === "grid" ? <List size={26} /> : <Grid3X3 size={26} />} onClick={() => setVisualizacao(visualizacao === "grid" ? "lista" : "grid")} variant="outline" />
            </div>
          </div>

          {/* Filtros */}
          <AnimatePresence>
            {mostrarFiltros && (
              <motion.div
                className="bg-white p-5 rounded-2xl border"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                style={{
                  borderColor: theme.colors.accent
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{color: theme.colors.text}}>Categoria</label>
                    <select
                      className="w-full p-3 border transition-all"
                      value={filtros.categoria}
                      onChange={(e) => setFiltros({ ...filtros, categoria: e.target.value })}
                      style={{
                        borderColor: theme.colors.primary+'99',
                        borderRadius: theme.borderRadius.full
                      }}
                    >
                      {categorias.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{color: theme.colors.text}}>Gênero</label>
                    <select
                      className="w-full p-3 border transition-all"
                      value={filtros.genero}
                      onChange={(e) => setFiltros({ ...filtros, genero: e.target.value })}
                      style={{
                        borderColor: theme.colors.primary+'99',
                        borderRadius: theme.borderRadius.full
                      }}
                    >
                      {generos.map((gen) => (
                        <option key={gen} value={gen}>
                          {gen}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{color: theme.colors.text}}>Ordenar por</label>
                    <select
                      className="w-full p-3 border transition-all"
                      value={filtros.ordenacao}
                      onChange={(e) => setFiltros({ ...filtros, ordenacao: e.target.value })}
                      style={{
                        borderColor: theme.colors.primary+'99',
                        borderRadius: theme.borderRadius.full
                      }}
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
          <p className="">
            {produtosFiltrados.length} produto{produtosFiltrados.length !== 1 ? "s" : ""} elegante
            {produtosFiltrados.length !== 1 ? "s" : ""} encontrado{produtosFiltrados.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Grid de produtos */}
        {produtosFiltrados.length > 0 ? (
          <div
            className={`grid gap-6 ${
              visualizacao === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
            }`}
          >
            {produtosFiltrados.map((produto, index) => productTemplate(produto, index))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-rose-500 mb-4">
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

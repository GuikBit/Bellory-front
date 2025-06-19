"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ShoppingCart,
  Heart,
  Share2,
  Star,
  ChevronLeft,
  ChevronRight,
  Shield,
  Truck,
  RotateCcw,
  Plus,
  Minus,
  Check,
  Sparkles,
  Zap,
  Flame,
} from "lucide-react"
// import { useGlobalState } from "../../global/ContextGlobalState"
import { themes } from "../../../theme/theme"
import { BarbeariaButton } from "../../ui"

interface ProdutoDetalhes {
  id: string
  nome: string
  preco: number
  precoOriginal?: number
  descricao: string
  descricaoCompleta: string
  imagens: string[]
  categoria: string
  genero: string
  marca: string
  avaliacao: number
  totalAvaliacoes: number
  desconto?: number
  emEstoque: boolean
  comoUsar: string[]
  informacoesImportantes: string[]
  ingredientes: string[]
  especificacoes: { [key: string]: string }
  produtosRelacionados: string[]
  produtosUtilizados?: string[]
  trending?: boolean
  inovacoes: string[]
  efeitos: string[]
}

const produto: ProdutoDetalhes = {
  id: "1",
  nome: "Máscara Neon Glow",
  preco: 75.9,
  precoOriginal: 89.9,
  descricao: "Máscara com efeito neon que revitaliza e ilumina os cabelos instantaneamente.",
  descricaoCompleta:
    "A Máscara Neon Glow é uma revolução no cuidado capilar. Com tecnologia de pigmentos fluorescentes e fórmula inovadora, esta máscara não apenas trata os cabelos, mas cria um efeito visual único que brilha sob luz UV. Perfeita para quem busca um visual futurista e cabelos saudáveis ao mesmo tempo. Sua fórmula avançada penetra profundamente na fibra capilar, reparando danos e criando uma barreira protetora luminosa.",
  imagens: [
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600",
    "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=600",
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600",
  ],
  categoria: "Tratamentos",
  genero: "Feminino",
  marca: "Neon Beauty",
  avaliacao: 4.9,
  totalAvaliacoes: 189,
  desconto: 16,
  emEstoque: true,
  trending: true,
  comoUsar: [
    "Lave os cabelos com shampoo neutro",
    "Aplique a máscara uniformemente nos cabelos úmidos",
    "Massageie suavemente para ativar os pigmentos",
    "Deixe agir por 15-20 minutos",
    "Para efeito neon máximo, use sob luz UV",
    "Enxágue com água fria para fixar a cor",
  ],
  informacoesImportantes: [
    "Efeito neon visível sob luz UV",
    "Fórmula vegana e cruelty-free",
    "Pigmentos temporários seguros",
    "Não danifica a estrutura capilar",
    "Efeito dura até 5 lavagens",
    "Compatível com cabelos coloridos",
  ],
  ingredientes: [
    "Proteínas Fluorescentes",
    "Ácidos Frutais",
    "Vitamina B12",
    "Colágeno Vegetal",
    "Pigmentos Neon",
    "Ceramidas Sintéticas",
  ],
  produtosUtilizados: ["Proteínas Fluorescentes", "Ácidos Frutais", "Vitamina B12", "Colágeno Vegetal"],
  especificacoes: {
    Peso: "200ml",
    Tipo: "Máscara Neon",
    "Tempo de Ação": "15-20 minutos",
    "Efeito Neon": "Até 5 lavagens",
    "Tipo de Cabelo": "Todos",
    Validade: "18 meses",
    Origem: "Laboratório Tech",
    "Cruelty Free": "Sim",
    Vegano: "Sim",
  },
  inovacoes: [
    "Tecnologia de pigmentos fluorescentes",
    "Ativação por luz UV",
    "Fórmula auto-regenerativa",
    "Sistema de liberação gradual",
  ],
  efeitos: ["Brilho neon intenso", "Hidratação profunda", "Reparação instantânea", "Proteção UV"],
  produtosRelacionados: ["2", "3", "6"],
}

export default function FemininoModernoProdutosDetalhes() {
  const [imagemAtual, setImagemAtual] = useState(0)
  const [quantidade, setQuantidade] = useState(1)
  const [abaSelecionada, setAbaSelecionada] = useState("descricao")
  const [favorito, setFavorito] = useState(false)

  // const { adicionarProdutoCarrinho } = useGlobalState()
  const theme = themes.femininoModerno

  const proximaImagem = () => {
    setImagemAtual((prev) => (prev + 1) % produto.imagens.length)
  }

  const imagemAnterior = () => {
    setImagemAtual((prev) => (prev - 1 + produto.imagens.length) % produto.imagens.length)
  }

  const abas = [
    { id: "descricao", label: "Descrição" },
    { id: "inovacao", label: "Inovação" },
    { id: "como-usar", label: "Como Usar" },
    { id: "ingredientes", label: "Ingredientes" },
    { id: "especificacoes", label: "Especificações" },
  ]

  return (
    <div className="min-h-screen bg-white text-white py-8">
      {/* Background futurista */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.15),transparent_50%)]"></div>
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumb */}
        <motion.div
          className="flex items-center gap-2 mb-6 text-sm text-purple-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span>Produtos</span>
          <ChevronRight size={16} />
          <span>{produto.categoria}</span>
          <ChevronRight size={16} />
          <span className="text-pink-400 font-bold">{produto.nome}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Galeria de Imagens */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="relative rounded-2xl overflow-hidden border border-purple-500/30"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.primary}20, ${theme.colors.secondary}20)`,
              }}
            >
              <img
                src={produto.imagens[imagemAtual] || "/placeholder.svg"}
                alt={produto.nome}
                className="w-full h-96 object-cover"
              />

              {/* Overlay futurista */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(to top, ${theme.colors.primary}30, transparent)`, // 66 = ~40% de opacidade
                }}
              ></div>

              {produto.desconto && (
                <div className="absolute top-4 right-4">
                  <span
                    className="text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg animate-pulse"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`,
                    }}
                  >
                    -{produto.desconto}%
                  </span>
                </div>
              )}

              {produto.trending && (
                <div className="absolute top-4 left-4">
                   <span
                      className="text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg animate-pulse"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`,
                      }}
                    >
                      Novo
                    </span>
                </div>
              )}

              <button
                onClick={imagemAnterior}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-purple-500/20 text-purple-400 p-2 rounded-full transition-all border border-purple-500/30"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={proximaImagem}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-purple-500/20 text-purple-400 p-2 rounded-full transition-all border border-purple-500/30"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto">
              {produto.imagens.map((imagem, index) => (
                <button
                  key={index}
                  onClick={() => setImagemAtual(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    index === imagemAtual ? "border-pink-400" : "border-purple-600"
                  }`}
                >
                  <img
                    src={imagem || "/placeholder.svg"}
                    alt={`${produto.nome} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Informações do Produto */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-purple-400 font-bold">{produto.marca}</span>
                <Sparkles size={10} className="text-pink-400" />
                <span className="text-sm text-pink-400">{produto.categoria}</span>
              </div>

              <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#FF69B4] via-[#FF69B4] to-[#FFC0CB] bg-clip-text text-transparent">
                {produto.nome}
              </h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < Math.floor(produto.avaliacao) ? ` fill-current` : ""}
                      style={{ color: theme.colors.primary, transition: "color 0.3s" }}
                    />
                  ))}
                </div>
                <span className="text-sm ml-2 font-bold" style={{color: theme.colors.primary+`80`}}>({produto.totalAvaliacoes} reviews)</span>
              </div>

              <p
                className="text-sm mb-2 line-clamp-2"
                style={{
                  color: theme.colors.textSecondary,
                  fontFamily: theme.fonts.body,
                }}
              >{produto.descricao}</p>

              {/* Produtos utilizados */}
              {/* {produto.produtosUtilizados && (
                <div className="bg-purple-800/20 backdrop-blur-sm p-4 rounded-2xl border border-purple-500/30 mb-6">
                  <h4 className="font-bold text-pink-400 mb-2">Ingredientes Tech</h4>
                  <div className="flex flex-wrap gap-2">
                    {produto.produtosUtilizados.map((prod, i) => (
                      <span
                        key={i}
                        className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30"
                      >
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>
              )} */}
            </div>

            {/* Preço */}
            <div
              className="p-6 rounded-2xl border border-purple-500/30"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.cardBackground}, ${theme.colors.accent}10)`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                {produto.precoOriginal && (
                  <span className="text-lg line-through" 
                    style={{
                    color: theme.colors.textSecondary,
                    fontFamily: theme.fonts.body,
                    }}
                  >
                    R$ {produto.precoOriginal.toFixed(2)}
                  </span>
                )}
                <span className="text-3xl font-bold bg-gradient-to-r from-[#FF69B4] to-[#FF69B4] bg-clip-text text-transparent">
                  R$ {produto.preco.toFixed(2)}
                </span>
              </div>

              {/* Quantidade */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-bold text-pink-400">Quantidade:</span>
                <div className="flex items-center gap-2  rounded-xl p-1 border border-purple-500/30">
                  <button
                    onClick={() => setQuantidade(Math.max(1, quantidade - 1))}
                    className="w-8 h-8 flex items-center justify-center hover:bg-pink-500/10 rounded-lg transition-colors text-purple-600"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center font-bold"
                   style={{
                    color: theme.colors.textSecondary,
                    fontFamily: theme.fonts.body,
                    }}
                  >
                    {quantidade}
                  </span>
                  <button
                    onClick={() => setQuantidade(quantidade + 1)}
                    className="w-8 h-8 flex items-center justify-center hover:bg-pink-500/10 rounded-lg transition-colors text-purple-600"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Botões */}
              <div className="flex gap-3 mb-6 justify-between">
                {/* <Button
                  icon={() => <ShoppingCart size={18} />}
                  className="flex-1 py-3 rounded-xl font-bold transition-all shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                    color: "white",
                    border: "none",
                  }}
                //   onClick={() => adicionarProdutoCarrinho({ ...produto, quantidade })}
                >
                  Adicionar ao Carrinho
                </Button> */}

                <BarbeariaButton 
                  leftIcon={ <ShoppingCart size={18} color='white' />}
                  value="Adicionar ao Carrinho"
                  className="border-none py-3 rounded-xl cursor-pointer font-bold transition-all shadow-lg"
                  style={{
                    background: theme.colors.backgroundLinear,
                    color: 'white',
                    borderRadius: theme.borderRadius.large
                  }}
                  // onClick={() => adicionarProdutoCarrinho({ ...produto, quantidade })}
                />

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setFavorito(!favorito)}
                    className={`p-3 rounded-xl border transition-all ${
                      favorito
                        ? "bg-red-500 border-red-500 text-white"
                        : "border-purple-500/30 text-purple-400 hover:border-red-500 hover:text-red-500"
                    }`}
                  >
                    <Heart size={18} className={favorito ? "fill-current" : ""} />
                  </button>

                  <button className="p-3 rounded-xl border border-purple-500/30 text-purple-400 hover:border-pink-400 hover:text-pink-400 transition-all">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>

              {/* Garantias */}
              <div className="space-y-2 text-sm text-purple-300">
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-green-400" />
                  <span>Tecnologia garantida</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck size={16} className="text-blue-400" />
                  <span>Entrega expressa futurista</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw size={16} className="text-pink-400" />
                  <span>30 dias para teste</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Abas de Informações */}
        <motion.div
          className=" backdrop-blur-xl rounded-2xl overflow-hidden border border-purple-500/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Navegação das Abas */}
          <div className="flex border-b border-purple-500/30 overflow-x-auto">
            {abas.map((aba) => (
              <button
                key={aba.id}
                onClick={() => setAbaSelecionada(aba.id)}
                className={`px-6 py-4 font-bold transition-all whitespace-nowrap ${
                  abaSelecionada === aba.id
                    ? "text-pink-600 border-b-2 border-pink-400 bg-pink-300/10"
                    : "text-pink-400/80 hover:text-pink-400"
                }`}
              >
                {aba.label}
              </button>
            ))}
          </div>

          {/* Conteúdo das Abas */}
          <div className="p-6">
            {abaSelecionada === "descricao" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4 text-pink-400">Descrição</h3>
                <p className="leading-relaxed" 
                  style={{
                    color: theme.colors.textSecondary,
                    fontFamily: theme.fonts.body,
                  }}
                >{produto.descricaoCompleta}</p>

                <h4 className="text-lg font-bold mt-6 mb-3 text-pink-400">Informações Tech</h4>
                <ul className="space-y-2">
                  {produto.informacoesImportantes.map((info, index) => (
                    <li key={index} className="flex items-center gap-2" 
                      style={{
                        color: theme.colors.textSecondary,
                        fontFamily: theme.fonts.body,
                      }}
                    >
                      <Check size={16} className="text-green-400" />
                      {info}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {abaSelecionada === "inovacao" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4 text-pink-400">Inovações & Efeitos</h3>

                <h4 className="text-lg font-bold mb-3 text-purple-400">Tecnologias Inovadoras</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {produto.inovacoes.map((inovacao, index) => (
                    <div key={index} className="bg-purple-700/20 p-4 rounded-xl border border-purple-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap size={16} className="text-pink-400" />
                        <span className="font-bold text-pink-400">Tech {index + 1}</span>
                      </div>
                      <p className="text-purple-200">{inovacao}</p>
                    </div>
                  ))}
                </div>

                <h4 className="text-lg font-bold mb-3 text-purple-400">Efeitos Visuais</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {produto.efeitos.map((efeito, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-3 rounded-xl border border-purple-500/30 text-center"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Flame size={16} className="text-pink-400" />
                        <span className="text-purple-200 font-bold">{efeito}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {abaSelecionada === "como-usar" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4 text-pink-400">Protocolo de Aplicação</h3>
                <ol className="space-y-3">
                  {produto.comoUsar.map((passo, index) => (
                    <li key={index} className="flex gap-3 text-purple-200">
                      <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      {passo}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {abaSelecionada === "ingredientes" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4 text-pink-400">Componentes Futuristas</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {produto.ingredientes.map((ingrediente, index) => (
                    <div
                      key={index}
                      className="bg-purple-700/20 p-3 rounded-xl text-center border border-purple-500/30"
                    >
                      <span className="text-purple-200 font-bold">{ingrediente}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {abaSelecionada === "especificacoes" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4 text-pink-400">Especificações Tech</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(produto.especificacoes).map(([chave, valor]) => (
                    <div
                      key={chave}
                      className="flex justify-between p-3 bg-purple-700/20 rounded-xl border border-purple-500/30"
                    >
                      <span className="font-bold text-purple-400">{chave}:</span>
                      <span className="text-purple-200">{valor}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

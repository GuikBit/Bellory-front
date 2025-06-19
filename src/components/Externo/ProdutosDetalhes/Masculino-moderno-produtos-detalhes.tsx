"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "primereact/button"
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
  Zap,
  Cpu,
} from "lucide-react"
// import { useGlobalState } from "../../global/ContextGlobalState"
import { themes } from "../../../theme/theme"

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
  tecnologia?: string
  inovacoes: string[]
}

const produto: ProdutoDetalhes = {
  id: "1",
  nome: "Pomada Tech Matrix",
  preco: 65.9,
  precoOriginal: 78.9,
  descricao: "Pomada com nanotecnologia para fixação extrema e proteção UV avançada.",
  descricaoCompleta:
    "A Pomada Tech Matrix representa o futuro do styling masculino. Desenvolvida com nanotecnologia avançada, oferece fixação extrema que se adapta às condições ambientais. Sua fórmula inteligente proporciona proteção UV de amplo espectro, mantendo o cabelo saudável e protegido. O sistema de liberação controlada garante performance consistente por até 16 horas.",
  imagens: [
    "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=600",
    "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=600",
    "https://images.unsplash.com/photo-1589782431746-4a05f7d8c0f0?q=80&w=600",
    "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?q=80&w=600",
  ],
  categoria: "Styling",
  genero: "Masculino",
  marca: "TechHair",
  avaliacao: 4.9,
  totalAvaliacoes: 89,
  desconto: 16,
  emEstoque: true,
  tecnologia: "Nano-Fix",
  comoUsar: [
    "Ative o produto aquecendo entre as mãos por 10 segundos",
    "Aplique no cabelo seco com movimentos circulares",
    "Use o aplicador tech para distribuição uniforme",
    "Modele com precisão usando as mãos",
    "Para fixação máxima, aplique em camadas finas",
  ],
  informacoesImportantes: [
    "Tecnologia Nano-Fix patenteada",
    "Proteção UV FPS 30",
    "Resistente à umidade e suor",
    "Fixação adaptativa de 12-16 horas",
    "Compatível com todos os tipos de cabelo",
    "Fórmula livre de sulfatos e parabenos",
  ],
  ingredientes: [
    "Nanopartículas de Silício",
    "Polímeros Inteligentes",
    "Filtros UV Avançados",
    "Ceramidas Sintéticas",
    "Aminoácidos Modificados",
    "Fragrância Cibernética",
  ],
  especificacoes: {
    Peso: "120g",
    Fixação: "Extrema",
    Acabamento: "Matte Tech",
    "Tipo de Cabelo": "Universal",
    "Proteção UV": "FPS 30",
    Validade: "36 meses",
    Origem: "Laboratório Tech",
    Tecnologia: "Nano-Fix 3.0",
  },
  inovacoes: [
    "Sistema de liberação controlada",
    "Adaptação automática à umidade",
    "Proteção UV inteligente",
    "Fórmula auto-regenerativa",
  ],
  produtosRelacionados: ["2", "3", "5"],
}

export default function MasculinoModernoProdutosDetalhes() {
  const [imagemAtual, setImagemAtual] = useState(0)
  const [quantidade, setQuantidade] = useState(1)
  const [abaSelecionada, setAbaSelecionada] = useState("descricao")
  const [favorito, setFavorito] = useState(false)

  // const { adicionarProdutoCarrinho } = useGlobalState()
  const theme = themes.masculinoModerno

  const proximaImagem = () => {
    setImagemAtual((prev) => (prev + 1) % produto.imagens.length)
  }

  const imagemAnterior = () => {
    setImagemAtual((prev) => (prev - 1 + produto.imagens.length) % produto.imagens.length)
  }

  const abas = [
    { id: "descricao", label: "Descrição" },
    { id: "tecnologia", label: "Tecnologia" },
    { id: "como-usar", label: "Como Usar" },
    { id: "ingredientes", label: "Ingredientes" },
    { id: "especificacoes", label: "Especificações" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-8">
      {/* Background tech elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumb */}
        <motion.div
          className="flex items-center gap-2 mb-6 text-sm text-slate-400"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span>Produtos Tech</span>
          <ChevronRight size={16} />
          <span>{produto.categoria}</span>
          <ChevronRight size={16} />
          <span className="text-cyan-400">{produto.nome}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Galeria de Imagens */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative bg-slate-800/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-blue-500/20">
              <img
                src={produto.imagens[imagemAtual] || "/placeholder.svg"}
                alt={produto.nome}
                className="w-full h-96 object-cover"
              />

              {/* Tech overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>

              {produto.desconto && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{produto.desconto}%
                  </span>
                </div>
              )}

              {produto.tecnologia && (
                <div className="absolute top-4 left-4">
                  <span className="bg-black/60 backdrop-blur-sm text-cyan-400 px-3 py-1 rounded-full text-sm font-bold border border-cyan-500/30">
                    {produto.tecnologia}
                  </span>
                </div>
              )}

              <button
                onClick={imagemAnterior}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-cyan-500/20 text-cyan-400 p-2 rounded-full transition-all border border-cyan-500/30"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={proximaImagem}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-cyan-500/20 text-cyan-400 p-2 rounded-full transition-all border border-cyan-500/30"
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
                    index === imagemAtual ? "border-cyan-400" : "border-slate-700"
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
                <span className="text-sm text-cyan-400 font-medium">{produto.marca}</span>
                <Cpu size={12} className="text-blue-400" />
                <span className="text-sm text-blue-400">{produto.categoria}</span>
              </div>

              <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {produto.nome}
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(produto.avaliacao) ? "text-cyan-400 fill-current" : "text-slate-600"}
                    />
                  ))}
                </div>
                <span className="text-sm text-slate-400">({produto.totalAvaliacoes} avaliações tech)</span>
              </div>

              <p className="text-slate-300 mb-6">{produto.descricao}</p>
            </div>

            {/* Preço */}
            <div className="bg-slate-800/40 backdrop-blur-xl p-6 rounded-2xl border border-blue-500/20">
              <div className="flex items-center gap-3 mb-4">
                {produto.precoOriginal && (
                  <span className="text-lg text-slate-500 line-through">R$ {produto.precoOriginal.toFixed(2)}</span>
                )}
                <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  R$ {produto.preco.toFixed(2)}
                </span>
              </div>

              {/* Quantidade */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-cyan-400">Quantidade:</span>
                <div className="flex items-center gap-2 bg-slate-700/50 rounded-xl p-1 border border-blue-500/30">
                  <button
                    onClick={() => setQuantidade(Math.max(1, quantidade - 1))}
                    className="w-8 h-8 flex items-center justify-center hover:bg-cyan-500/20 rounded-lg transition-colors text-cyan-400"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center font-bold">{quantidade}</span>
                  <button
                    onClick={() => setQuantidade(quantidade + 1)}
                    className="w-8 h-8 flex items-center justify-center hover:bg-cyan-500/20 rounded-lg transition-colors text-cyan-400"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Botões */}
              <div className="flex gap-3 mb-6">
                <Button
                  icon={() => <ShoppingCart size={18} />}
                  className="flex-1 py-3 rounded-xl font-medium transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.secondary})`,
                    color: "white",
                    border: "none",
                  }}
                //   onClick={() => adicionarProdutoCarrinho({ ...produto, quantidade })}
                >
                  Adicionar ao Carrinho
                </Button>

                <button
                  onClick={() => setFavorito(!favorito)}
                  className={`p-3 rounded-xl border transition-all ${
                    favorito
                      ? "bg-red-500 border-red-500 text-white"
                      : "border-blue-500/30 text-cyan-400 hover:border-red-500 hover:text-red-500"
                  }`}
                >
                  <Heart size={18} className={favorito ? "fill-current" : ""} />
                </button>

                <button className="p-3 rounded-xl border border-blue-500/30 text-cyan-400 hover:border-cyan-400 hover:text-cyan-300 transition-all">
                  <Share2 size={18} />
                </button>
              </div>

              {/* Garantias */}
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-green-400" />
                  <span>Tecnologia garantida</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck size={16} className="text-blue-400" />
                  <span>Entrega expressa tech</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw size={16} className="text-cyan-400" />
                  <span>30 dias para teste</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Abas de Informações */}
        <motion.div
          className="bg-slate-800/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-blue-500/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Navegação das Abas */}
          <div className="flex border-b border-blue-500/20 overflow-x-auto">
            {abas.map((aba) => (
              <button
                key={aba.id}
                onClick={() => setAbaSelecionada(aba.id)}
                className={`px-6 py-4 font-medium transition-all whitespace-nowrap ${
                  abaSelecionada === aba.id
                    ? "text-cyan-400 border-b-2 border-cyan-400 bg-cyan-500/10"
                    : "text-slate-400 hover:text-cyan-300"
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
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Descrição Completa</h3>
                <p className="text-slate-300 leading-relaxed">{produto.descricaoCompleta}</p>

                <h4 className="text-lg font-semibold mt-6 mb-3 text-blue-400">Informações Importantes</h4>
                <ul className="space-y-2">
                  {produto.informacoesImportantes.map((info, index) => (
                    <li key={index} className="flex items-center gap-2 text-slate-300">
                      <Check size={16} className="text-green-400" />
                      {info}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {abaSelecionada === "tecnologia" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Tecnologia Avançada</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {produto.inovacoes.map((inovacao, index) => (
                    <div key={index} className="bg-slate-700/30 p-4 rounded-xl border border-blue-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap size={16} className="text-cyan-400" />
                        <span className="font-medium text-cyan-400">Inovação {index + 1}</span>
                      </div>
                      <p className="text-slate-300">{inovacao}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {abaSelecionada === "como-usar" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Protocolo de Uso</h3>
                <ol className="space-y-3">
                  {produto.comoUsar.map((passo, index) => (
                    <li key={index} className="flex gap-3 text-slate-300">
                      <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
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
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Componentes Tech</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {produto.ingredientes.map((ingrediente, index) => (
                    <div key={index} className="bg-slate-700/30 p-3 rounded-xl text-center border border-blue-500/20">
                      <span className="text-slate-300">{ingrediente}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {abaSelecionada === "especificacoes" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Especificações Técnicas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(produto.especificacoes).map(([chave, valor]) => (
                    <div
                      key={chave}
                      className="flex justify-between p-3 bg-slate-700/30 rounded-xl border border-blue-500/20"
                    >
                      <span className="font-medium text-blue-400">{chave}:</span>
                      <span className="text-slate-300">{valor}</span>
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

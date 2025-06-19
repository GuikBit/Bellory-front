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
  Flower,
  Sparkles,
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
  destaque?: boolean
  comoUsar: string[]
  informacoesImportantes: string[]
  ingredientes: string[]
  especificacoes: { [key: string]: string }
  produtosRelacionados: string[]
  produtosUtilizados?: string[]
  beneficios: string[]
  resultados: string[]
}

const produto: ProdutoDetalhes = {
  id: "1",
  nome: "Máscara Hidratante Luxo",
  preco: 85.9,
  precoOriginal: 98.9,
  descricao: "Máscara premium com óleos nobres para hidratação profunda e brilho sedoso.",
  descricaoCompleta:
    "A Máscara Hidratante Luxo é uma experiência de spa em casa. Formulada com os mais finos óleos essenciais e extratos botânicos, esta máscara proporciona uma hidratação profunda e duradoura. Sua textura cremosa e sedosa desliza suavemente pelos cabelos, envolvendo cada fio em nutrição intensa. Ideal para cabelos ressecados, danificados ou que necessitam de cuidados especiais.",
  imagens: [
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600",
    "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=600",
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600",
  ],
  categoria: "Tratamentos",
  genero: "Feminino",
  marca: "Elegance Pro",
  avaliacao: 4.9,
  totalAvaliacoes: 234,
  desconto: 13,
  emEstoque: true,
  comoUsar: [
    "Lave os cabelos com shampoo suave",
    "Retire o excesso de água com toalha",
    "Aplique a máscara do meio às pontas",
    "Massageie delicadamente por 2 minutos",
    "Deixe agir por 10-15 minutos",
    "Enxágue abundantemente com água morna",
  ],
  informacoesImportantes: [
    "Fórmula livre de sulfatos e parabenos",
    "Testado dermatologicamente",
    "Adequado para cabelos quimicamente tratados",
    "Resultados visíveis desde a primeira aplicação",
    "Proteção contra danos ambientais",
    "Fragrância delicada e sofisticada",
  ],
  ingredientes: [
    "Óleo de Argan",
    "Queratina Hidrolisada",
    "Vitamina E",
    "Colágeno Marinho",
    "Extrato de Camomila",
    "Óleo de Macadâmia",
  ],
  produtosUtilizados: ["Óleo de Argan", "Queratina Hidrolisada", "Vitamina E", "Colágeno"],
  especificacoes: {
    Peso: "250ml",
    Tipo: "Máscara Hidratante",
    "Tempo de Ação": "10-15 minutos",
    "Tipo de Cabelo": "Todos, especialmente ressecados",
    Validade: "24 meses",
    Origem: "França",
    "Cruelty Free": "Sim",
    Vegano: "Sim",
  },
  beneficios: [
    "Hidratação profunda e duradoura",
    "Brilho natural intenso",
    "Redução do frizz",
    "Maciez sedosa",
    "Proteção contra quebra",
    "Reparação de pontas duplas",
  ],
  resultados: ["Cabelos 3x mais hidratados", "95% mais brilho", "Redução de 80% do frizz", "Maciez por até 72 horas"],
  produtosRelacionados: ["2", "3", "6"],
}

export default function FemininoEleganteProdutosDetalhes() {
  const [imagemAtual, setImagemAtual] = useState(0)
  const [quantidade, setQuantidade] = useState(1)
  const [abaSelecionada, setAbaSelecionada] = useState("descricao")
  const [favorito, setFavorito] = useState(false)

  // const { adicionarProdutoCarrinho } = useGlobalState()
  const theme = themes.femininoElegante

  const proximaImagem = () => {
    setImagemAtual((prev) => (prev + 1) % produto.imagens.length)
  }

  const imagemAnterior = () => {
    setImagemAtual((prev) => (prev - 1 + produto.imagens.length) % produto.imagens.length)
  }

  const abas = [
    { id: "descricao", label: "Descrição" },
    { id: "beneficios", label: "Benefícios" },
    { id: "como-usar", label: "Como Usar" },
    { id: "ingredientes", label: "Ingredientes" },
    { id: "especificacoes", label: "Especificações" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 text-rose-900 py-8">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-200/30 to-purple-200/30 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumb */}
        <motion.div
          className="flex items-center gap-2 mb-6 text-sm text-rose-600"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span>Produtos Elegantes</span>
          <ChevronRight size={16} />
          <span>{produto.categoria}</span>
          <ChevronRight size={16} />
          <span className="text-rose-800 font-medium">{produto.nome}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Galeria de Imagens */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-rose-200">
              <img
                src={produto.imagens[imagemAtual] || "/placeholder.svg"}
                alt={produto.nome}
                className="w-full h-96 object-cover"
              />

              {/* Overlay elegante */}
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent"></div>

              {produto.desconto && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    -{produto.desconto}%
                  </span>
                </div>
              )}

              <button
                onClick={imagemAnterior}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-rose-100 text-rose-800 p-2 rounded-full transition-all shadow-lg border border-rose-300"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={proximaImagem}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-rose-100 text-rose-800 p-2 rounded-full transition-all shadow-lg border border-rose-300"
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
                  className={`flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all ${
                    index === imagemAtual ? "border-rose-400 shadow-lg" : "border-rose-200"
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
                <span className="text-sm text-rose-600 font-medium">{produto.marca}</span>
                <Flower size={10} className="text-rose-500" />
                <span className="text-sm text-rose-500">{produto.categoria}</span>
              </div>

              <h1 className="text-3xl font-serif font-semibold mb-4 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                {produto.nome}
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(produto.avaliacao) ? "text-rose-400 fill-current" : "text-rose-200"}
                    />
                  ))}
                </div>
                <span className="text-sm text-rose-600 font-medium">({produto.totalAvaliacoes} avaliações)</span>
              </div>

              <p className="text-rose-700 mb-6 italic">{produto.descricao}</p>

              {/* Produtos utilizados */}
              {produto.produtosUtilizados && (
                <div className="bg-rose-100 p-4 rounded-2xl border border-rose-300 mb-6">
                  <h4 className="font-serif font-semibold text-rose-800 mb-2">Produtos Utilizados</h4>
                  <div className="flex flex-wrap gap-2">
                    {produto.produtosUtilizados.map((prod, i) => (
                      <span key={i} className="text-xs bg-rose-200 text-rose-700 px-3 py-1 rounded-full">
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Preço */}
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-rose-200">
              <div className="flex items-center gap-3 mb-4">
                {produto.precoOriginal && (
                  <span className="text-lg text-rose-400 line-through">R$ {produto.precoOriginal.toFixed(2)}</span>
                )}
                <span className="text-3xl font-semibold text-rose-800">R$ {produto.preco.toFixed(2)}</span>
              </div>

              {/* Quantidade */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-rose-800">Quantidade:</span>
                <div className="flex items-center gap-2 bg-rose-50 rounded-2xl p-1 border border-rose-200">
                  <button
                    onClick={() => setQuantidade(Math.max(1, quantidade - 1))}
                    className="w-8 h-8 flex items-center justify-center hover:bg-rose-100 rounded-xl transition-colors text-rose-700"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center font-medium text-rose-800">{quantidade}</span>
                  <button
                    onClick={() => setQuantidade(quantidade + 1)}
                    className="w-8 h-8 flex items-center justify-center hover:bg-rose-100 rounded-xl transition-colors text-rose-700"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Botões */}
              <div className="flex gap-3 mb-6">
                <Button
                  icon={() => <ShoppingCart size={18} />}
                  className="flex-1 py-3 rounded-2xl font-medium transition-all shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                    color: "white",
                    border: "none",
                  }}
                //   onClick={() => adicionarProdutoCarrinho({ ...produto, quantidade })}
                >
                  Adicionar ao Carrinho
                </Button>

                <button
                  onClick={() => setFavorito(!favorito)}
                  className={`p-3 rounded-2xl border transition-all ${
                    favorito
                      ? "bg-red-500 border-red-500 text-white"
                      : "border-rose-300 text-rose-700 hover:border-red-500 hover:text-red-500"
                  }`}
                >
                  <Heart size={18} className={favorito ? "fill-current" : ""} />
                </button>

                <button className="p-3 rounded-2xl border border-rose-300 text-rose-700 hover:border-rose-500 hover:text-rose-600 transition-all">
                  <Share2 size={18} />
                </button>
              </div>

              {/* Garantias */}
              <div className="space-y-2 text-sm text-rose-700">
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-green-500" />
                  <span>Qualidade premium garantida</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck size={16} className="text-blue-500" />
                  <span>Entrega delicada e cuidadosa</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw size={16} className="text-rose-500" />
                  <span>30 dias para troca</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Abas de Informações */}
        <motion.div
          className="bg-white rounded-3xl overflow-hidden shadow-xl border border-rose-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Navegação das Abas */}
          <div className="flex border-b border-rose-200 overflow-x-auto">
            {abas.map((aba) => (
              <button
                key={aba.id}
                onClick={() => setAbaSelecionada(aba.id)}
                className={`px-6 py-4 font-medium transition-all whitespace-nowrap ${
                  abaSelecionada === aba.id
                    ? "text-rose-800 border-b-2 border-rose-500 bg-rose-50"
                    : "text-rose-600 hover:text-rose-800"
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
                <h3 className="text-xl font-serif font-semibold mb-4 text-rose-800">Descrição Completa</h3>
                <p className="text-rose-700 leading-relaxed">{produto.descricaoCompleta}</p>

                <h4 className="text-lg font-semibold mt-6 mb-3 text-rose-700">Informações Importantes</h4>
                <ul className="space-y-2">
                  {produto.informacoesImportantes.map((info, index) => (
                    <li key={index} className="flex items-center gap-2 text-rose-700">
                      <Check size={16} className="text-green-500" />
                      {info}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {abaSelecionada === "beneficios" && (
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-semibold mb-4 text-rose-800">Benefícios & Resultados</h3>

                <h4 className="text-lg font-semibold mb-3 text-rose-700">Benefícios</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {produto.beneficios.map((beneficio, index) => (
                    <div key={index} className="bg-rose-50 p-4 rounded-2xl border border-rose-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles size={16} className="text-rose-500" />
                        <span className="font-medium text-rose-800">Benefício {index + 1}</span>
                      </div>
                      <p className="text-rose-700">{beneficio}</p>
                    </div>
                  ))}
                </div>

                <h4 className="text-lg font-semibold mb-3 text-rose-700">Resultados Comprovados</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {produto.resultados.map((resultado, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-rose-100 to-pink-100 p-3 rounded-2xl border border-rose-300 text-center"
                    >
                      <span className="text-rose-800 font-medium">{resultado}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {abaSelecionada === "como-usar" && (
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-semibold mb-4 text-rose-800">Ritual de Aplicação</h3>
                <ol className="space-y-3">
                  {produto.comoUsar.map((passo, index) => (
                    <li key={index} className="flex gap-3 text-rose-700">
                      <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
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
                <h3 className="text-xl font-serif font-semibold mb-4 text-rose-800">Ingredientes Premium</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {produto.ingredientes.map((ingrediente, index) => (
                    <div key={index} className="bg-rose-50 p-3 rounded-2xl text-center border border-rose-200">
                      <span className="text-rose-700 font-medium">{ingrediente}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {abaSelecionada === "especificacoes" && (
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-semibold mb-4 text-rose-800">Especificações</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(produto.especificacoes).map(([chave, valor]) => (
                    <div key={chave} className="flex justify-between p-3 bg-rose-50 rounded-2xl border border-rose-200">
                      <span className="font-medium text-rose-800">{chave}:</span>
                      <span className="text-rose-700">{valor}</span>
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

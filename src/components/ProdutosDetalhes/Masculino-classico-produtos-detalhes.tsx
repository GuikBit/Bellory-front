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
  Crown,
  Award,
} from "lucide-react"
// import { useGlobalState } from "../../global/ContextGlobalState"
import { themes } from "../../theme/theme"

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
  tradicional?: boolean
  historia: string
  premios: string[]
}

const produto: ProdutoDetalhes = {
  id: "1",
  nome: "Pomada Clássica Royal",
  preco: 42.9,
  precoOriginal: 48.9,
  descricao: "Pomada tradicional com fórmula centenária para um acabamento elegante e duradouro.",
  descricaoCompleta:
    "A Pomada Clássica Royal é um tributo à tradição da barbearia clássica. Desenvolvida com uma fórmula centenária que foi aperfeiçoada ao longo de gerações, esta pomada oferece o equilíbrio perfeito entre fixação e flexibilidade. Cada pote é cuidadosamente preparado seguindo métodos artesanais tradicionais, garantindo a qualidade superior que os cavalheiros exigem.",
  imagens: [
    "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=600",
    "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=600",
    "https://images.unsplash.com/photo-1589782431746-4a05f7d8c0f0?q=80&w=600",
    "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?q=80&w=600",
  ],
  categoria: "Styling",
  genero: "Masculino",
  marca: "Royal Barber",
  avaliacao: 4.9,
  totalAvaliacoes: 156,
  desconto: 12,
  emEstoque: true,
  tradicional: true,
  historia: "Criada em 1923 por mestres barbeiros europeus, esta fórmula atravessou gerações mantendo sua excelência.",
  comoUsar: [
    "Aqueça uma pequena quantidade entre as palmas das mãos",
    "Distribua uniformemente pelos cabelos secos ou levemente úmidos",
    "Penteie com movimentos precisos para criar o estilo desejado",
    "Use um pente de madeira para acabamento refinado",
    "Para maior brilho, aplique uma segunda camada fina",
  ],
  informacoesImportantes: [
    "Fórmula tradicional centenária",
    "Ingredientes naturais selecionados",
    "Fixação duradoura sem ressecamento",
    "Aroma clássico de barbearia",
    "Adequado para penteados vintage",
    "Livre de produtos químicos agressivos",
  ],
  ingredientes: [
    "Cera de Abelha Pura",
    "Óleo de Bergamota",
    "Lanolina Premium",
    "Cera Carnaúba",
    "Óleo de Sândalo",
    "Essência de Lavanda",
  ],
  especificacoes: {
    Peso: "100g",
    Fixação: "Média-Forte",
    Acabamento: "Brilho Natural",
    "Tipo de Cabelo": "Todos",
    Tradição: "Desde 1923",
    Validade: "24 meses",
    Origem: "Fórmula Europeia",
    Artesanal: "Sim",
  },
  premios: [
    "Melhor Pomada Tradicional 2023",
    "Prêmio Excelência Barbeiro",
    "Certificado Artesanal Premium",
    "Tradição Centenária Reconhecida",
  ],
  produtosRelacionados: ["2", "3", "5"],
}

export default function MasculinoClassicoProdutosDetalhes() {
  const [imagemAtual, setImagemAtual] = useState(0)
  const [quantidade, setQuantidade] = useState(1)
  const [abaSelecionada, setAbaSelecionada] = useState("descricao")
  const [favorito, setFavorito] = useState(false)

  // const { adicionarProdutoCarrinho } = useGlobalState()
  const theme = themes.masculinoClassico

  const proximaImagem = () => {
    setImagemAtual((prev) => (prev + 1) % produto.imagens.length)
  }

  const imagemAnterior = () => {
    setImagemAtual((prev) => (prev - 1 + produto.imagens.length) % produto.imagens.length)
  }

  const abas = [
    { id: "descricao", label: "Descrição" },
    { id: "tradicao", label: "Tradição" },
    { id: "como-usar", label: "Como Usar" },
    { id: "ingredientes", label: "Ingredientes" },
    { id: "especificacoes", label: "Especificações" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 text-amber-900 py-8">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-200/20 to-amber-200/20 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumb */}
        <motion.div
          className="flex items-center gap-2 mb-6 text-sm text-amber-700"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span>Produtos Clássicos</span>
          <ChevronRight size={16} />
          <span>{produto.categoria}</span>
          <ChevronRight size={16} />
          <span className="text-amber-800 font-medium">{produto.nome}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Galeria de Imagens */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-amber-200">
              <img
                src={produto.imagens[imagemAtual] || "/placeholder.svg"}
                alt={produto.nome}
                className="w-full h-96 object-cover"
              />

              {/* Overlay vintage */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>

              {produto.desconto && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    -{produto.desconto}%
                  </span>
                </div>
              )}

              {produto.tradicional && (
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-bold border-2 border-amber-300 shadow-lg">
                    TRADICIONAL
                  </span>
                </div>
              )}

              <button
                onClick={imagemAnterior}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-amber-100 text-amber-800 p-2 rounded-full transition-all shadow-lg border border-amber-300"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={proximaImagem}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-amber-100 text-amber-800 p-2 rounded-full transition-all shadow-lg border border-amber-300"
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
                    index === imagemAtual ? "border-amber-500 shadow-lg" : "border-amber-300"
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
                <span className="text-sm text-amber-700 font-medium">{produto.marca}</span>
                <Crown size={12} className="text-amber-600" />
                <span className="text-sm text-amber-600">{produto.categoria}</span>
              </div>

              <h1 className="text-3xl font-serif font-bold mb-4 text-amber-800">{produto.nome}</h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(produto.avaliacao) ? "text-amber-500 fill-current" : "text-amber-300"}
                    />
                  ))}
                </div>
                <span className="text-sm text-amber-600 font-medium">({produto.totalAvaliacoes} avaliações)</span>
              </div>

              <p className="text-amber-700 mb-6 italic">{produto.descricao}</p>

              {/* História */}
              <div className="bg-amber-100 p-4 rounded-xl border border-amber-300 mb-6">
                <h4 className="font-serif font-semibold text-amber-800 mb-2">História & Tradição</h4>
                <p className="text-amber-700 text-sm italic">{produto.historia}</p>
              </div>
            </div>

            {/* Preço */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-amber-200">
              <div className="flex items-center gap-3 mb-4">
                {produto.precoOriginal && (
                  <span className="text-lg text-amber-500 line-through">R$ {produto.precoOriginal.toFixed(2)}</span>
                )}
                <span className="text-3xl font-bold text-amber-800">R$ {produto.preco.toFixed(2)}</span>
              </div>

              {/* Quantidade */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-amber-800">Quantidade:</span>
                <div className="flex items-center gap-2 bg-amber-50 rounded-xl p-1 border-2 border-amber-200">
                  <button
                    onClick={() => setQuantidade(Math.max(1, quantidade - 1))}
                    className="w-8 h-8 flex items-center justify-center hover:bg-amber-100 rounded-lg transition-colors text-amber-700"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center font-bold text-amber-800">{quantidade}</span>
                  <button
                    onClick={() => setQuantidade(quantidade + 1)}
                    className="w-8 h-8 flex items-center justify-center hover:bg-amber-100 rounded-lg transition-colors text-amber-700"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Botões */}
              <div className="flex gap-3 mb-6">
                <Button
                  icon={() => <ShoppingCart size={18} />}
                  className="flex-1 py-3 rounded-xl font-medium transition-all shadow-lg"
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
                  className={`p-3 rounded-xl border-2 transition-all ${
                    favorito
                      ? "bg-red-500 border-red-500 text-white"
                      : "border-amber-300 text-amber-700 hover:border-red-500 hover:text-red-500"
                  }`}
                >
                  <Heart size={18} className={favorito ? "fill-current" : ""} />
                </button>

                <button className="p-3 rounded-xl border-2 border-amber-300 text-amber-700 hover:border-amber-500 hover:text-amber-600 transition-all">
                  <Share2 size={18} />
                </button>
              </div>

              {/* Garantias */}
              <div className="space-y-2 text-sm text-amber-700">
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-green-600" />
                  <span>Qualidade tradicional garantida</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck size={16} className="text-blue-600" />
                  <span>Entrega cuidadosa e segura</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw size={16} className="text-amber-600" />
                  <span>15 dias para troca</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Abas de Informações */}
        <motion.div
          className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-amber-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Navegação das Abas */}
          <div className="flex border-b-2 border-amber-200 overflow-x-auto">
            {abas.map((aba) => (
              <button
                key={aba.id}
                onClick={() => setAbaSelecionada(aba.id)}
                className={`px-6 py-4 font-medium transition-all whitespace-nowrap ${
                  abaSelecionada === aba.id
                    ? "text-amber-800 border-b-2 border-amber-600 bg-amber-50"
                    : "text-amber-600 hover:text-amber-800"
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
                <h3 className="text-xl font-serif font-bold mb-4 text-amber-800">Descrição Completa</h3>
                <p className="text-amber-700 leading-relaxed">{produto.descricaoCompleta}</p>

                <h4 className="text-lg font-semibold mt-6 mb-3 text-amber-700">Informações Importantes</h4>
                <ul className="space-y-2">
                  {produto.informacoesImportantes.map((info, index) => (
                    <li key={index} className="flex items-center gap-2 text-amber-700">
                      <Check size={16} className="text-green-600" />
                      {info}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {abaSelecionada === "tradicao" && (
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-bold mb-4 text-amber-800">Tradição & Prêmios</h3>
                <p className="text-amber-700 leading-relaxed mb-6">{produto.historia}</p>

                <h4 className="text-lg font-semibold mb-3 text-amber-700">Reconhecimentos</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {produto.premios.map((premio, index) => (
                    <div key={index} className="bg-amber-50 p-4 rounded-xl border border-amber-300">
                      <div className="flex items-center gap-2 mb-2">
                        <Award size={16} className="text-amber-600" />
                        <span className="font-medium text-amber-800">Prêmio {index + 1}</span>
                      </div>
                      <p className="text-amber-700">{premio}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {abaSelecionada === "como-usar" && (
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-bold mb-4 text-amber-800">Ritual de Aplicação</h3>
                <ol className="space-y-3">
                  {produto.comoUsar.map((passo, index) => (
                    <li key={index} className="flex gap-3 text-amber-700">
                      <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
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
                <h3 className="text-xl font-serif font-bold mb-4 text-amber-800">Ingredientes Nobres</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {produto.ingredientes.map((ingrediente, index) => (
                    <div key={index} className="bg-amber-50 p-3 rounded-xl text-center border border-amber-300">
                      <span className="text-amber-700 font-medium">{ingrediente}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {abaSelecionada === "especificacoes" && (
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-bold mb-4 text-amber-800">Especificações</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(produto.especificacoes).map(([chave, valor]) => (
                    <div
                      key={chave}
                      className="flex justify-between p-3 bg-amber-50 rounded-xl border border-amber-300"
                    >
                      <span className="font-medium text-amber-800">{chave}:</span>
                      <span className="text-amber-700">{valor}</span>
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

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
}

// Produto exemplo
const produto: ProdutoDetalhes = {
  id: "1",
  nome: "Pomada Modeladora Strong",
  preco: 45.9,
  precoOriginal: 52.9,
  descricao: "Pomada com fixação forte e acabamento matte para um visual moderno e duradouro.",
  descricaoCompleta:
    "A Pomada Modeladora Strong é o produto ideal para homens que buscam um penteado impecável com fixação duradoura. Sua fórmula exclusiva proporciona controle total sobre o cabelo, permitindo criar desde looks clássicos até estilos mais modernos e ousados. Com acabamento matte, oferece um visual natural sem brilho excessivo.",
  imagens: [
    "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=600",
    "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=600",
    "https://images.unsplash.com/photo-1589782431746-4a05f7d8c0f0?q=80&w=600",
    "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?q=80&w=600",
  ],
  categoria: "Styling",
  genero: "Masculino",
  marca: "BarberPro",
  avaliacao: 4.8,
  totalAvaliacoes: 127,
  desconto: 13,
  emEstoque: true,
  comoUsar: [
    "Aplique uma pequena quantidade nas mãos",
    "Espalhe uniformemente entre as palmas",
    "Distribua no cabelo seco ou levemente úmido",
    "Modele conforme desejado",
    "Para maior fixação, aplique em camadas",
  ],
  informacoesImportantes: [
    "Produto testado dermatologicamente",
    "Não contém parabenos",
    "Resistente à água",
    "Fixação de 8 a 12 horas",
    "Adequado para todos os tipos de cabelo",
  ],
  ingredientes: ["Cera de Abelha", "Óleo de Jojoba", "Lanolina", "Cera Carnaúba", "Vitamina E", "Fragrância Masculina"],
  especificacoes: {
    Peso: "100g",
    Fixação: "Forte",
    Acabamento: "Matte",
    "Tipo de Cabelo": "Todos",
    Validade: "24 meses",
    Origem: "Brasil",
  },
  produtosRelacionados: ["2", "3", "5"],
}

export default function MasculineDefaultProdutosDetalhes() {
  const [imagemAtual, setImagemAtual] = useState(0)
  const [quantidade, setQuantidade] = useState(1)
  const [abaSelecionada, setAbaSelecionada] = useState("descricao")
  const [favorito, setFavorito] = useState(false)

  // const { adicionarProdutoCarrinho } = useGlobalState()
  const theme = themes.masculine_default

  const proximaImagem = () => {
    setImagemAtual((prev) => (prev + 1) % produto.imagens.length)
  }

  const imagemAnterior = () => {
    setImagemAtual((prev) => (prev - 1 + produto.imagens.length) % produto.imagens.length)
  }

  const abas = [
    { id: "descricao", label: "Descrição" },
    { id: "como-usar", label: "Como Usar" },
    { id: "ingredientes", label: "Ingredientes" },
    { id: "especificacoes", label: "Especificações" },
  ]

  return (
    <div className="min-h-screen bg-neutral-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <motion.div
          className="flex items-center gap-2 mb-6 text-sm text-gray-400"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span>Produtos</span>
          <ChevronRight size={16} />
          <span>{produto.categoria}</span>
          <ChevronRight size={16} />
          <span className="text-white">{produto.nome}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Galeria de Imagens */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative bg-neutral-800 rounded-lg overflow-hidden">
              <img
                src={produto.imagens[imagemAtual] || "/placeholder.svg"}
                alt={produto.nome}
                className="w-full h-96 object-cover"
              />

              {produto.desconto && (
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{produto.desconto}%
                  </span>
                </div>
              )}

              <button
                onClick={imagemAnterior}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={proximaImagem}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
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
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    index === imagemAtual ? "border-amber-500" : "border-neutral-700"
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
                <span className="text-sm text-gray-400">{produto.marca}</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-400">{produto.categoria}</span>
              </div>

              <h1 className="text-3xl font-bold mb-4">{produto.nome}</h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(produto.avaliacao) ? "text-yellow-400 fill-current" : "text-gray-600"}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-400">({produto.totalAvaliacoes} avaliações)</span>
              </div>

              <p className="text-gray-300 mb-6">{produto.descricao}</p>
            </div>

            {/* Preço */}
            <div className="bg-neutral-800 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                {produto.precoOriginal && (
                  <span className="text-lg text-gray-500 line-through">R$ {produto.precoOriginal.toFixed(2)}</span>
                )}
                <span className="text-3xl font-bold" style={{ color: theme.colors.primary }}>
                  R$ {produto.preco.toFixed(2)}
                </span>
              </div>

              {/* Quantidade */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium">Quantidade:</span>
                <div className="flex items-center gap-2 bg-neutral-700 rounded-lg p-1">
                  <button
                    onClick={() => setQuantidade(Math.max(1, quantidade - 1))}
                    className="w-8 h-8 flex items-center justify-center hover:bg-neutral-600 rounded transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center">{quantidade}</span>
                  <button
                    onClick={() => setQuantidade(quantidade + 1)}
                    className="w-8 h-8 flex items-center justify-center hover:bg-neutral-600 rounded transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Botões */}
              <div className="flex gap-3 mb-4">
                <Button
                  icon={() => <ShoppingCart size={18} />}
                  className="flex-1 py-3 rounded-lg font-medium"
                  style={{
                    backgroundColor: theme.colors.primary,
                    color: "white",
                    border: "none",
                  }}
                //   onClick={() => adicionarProdutoCarrinho({ ...produto, quantidade })}
                >
                  Adicionar ao Carrinho
                </Button>

                <button
                  onClick={() => setFavorito(!favorito)}
                  className={`p-3 rounded-lg border transition-all ${
                    favorito
                      ? "bg-red-500 border-red-500 text-white"
                      : "border-neutral-600 text-gray-400 hover:border-red-500 hover:text-red-500"
                  }`}
                >
                  <Heart size={18} className={favorito ? "fill-current" : ""} />
                </button>

                <button className="p-3 rounded-lg border border-neutral-600 text-gray-400 hover:border-amber-500 hover:text-amber-500 transition-all">
                  <Share2 size={18} />
                </button>
              </div>

              {/* Garantias */}
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-green-500" />
                  <span>Produto original garantido</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck size={16} className="text-blue-500" />
                  <span>Frete grátis acima de R$ 99</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw size={16} className="text-yellow-500" />
                  <span>7 dias para troca ou devolução</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Abas de Informações */}
        <motion.div
          className="bg-neutral-800 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Navegação das Abas */}
          <div className="flex border-b border-neutral-700">
            {abas.map((aba) => (
              <button
                key={aba.id}
                onClick={() => setAbaSelecionada(aba.id)}
                className={`px-6 py-4 font-medium transition-all ${
                  abaSelecionada === aba.id
                    ? "text-amber-500 border-b-2 border-amber-500"
                    : "text-gray-400 hover:text-white"
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
                <h3 className="text-xl font-bold mb-4">Descrição Completa</h3>
                <p className="text-gray-300 leading-relaxed">{produto.descricaoCompleta}</p>

                <h4 className="text-lg font-semibold mt-6 mb-3">Informações Importantes</h4>
                <ul className="space-y-2">
                  {produto.informacoesImportantes.map((info, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300">
                      <Check size={16} className="text-green-500" />
                      {info}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {abaSelecionada === "como-usar" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4">Como Usar</h3>
                <ol className="space-y-3">
                  {produto.comoUsar.map((passo, index) => (
                    <li key={index} className="flex gap-3 text-gray-300">
                      <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-black rounded-full flex items-center justify-center text-sm font-bold">
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
                <h3 className="text-xl font-bold mb-4">Ingredientes</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {produto.ingredientes.map((ingrediente, index) => (
                    <div key={index} className="bg-neutral-700 p-3 rounded-lg text-center">
                      <span className="text-gray-300">{ingrediente}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {abaSelecionada === "especificacoes" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4">Especificações Técnicas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(produto.especificacoes).map(([chave, valor]) => (
                    <div key={chave} className="flex justify-between p-3 bg-neutral-700 rounded-lg">
                      <span className="font-medium">{chave}:</span>
                      <span className="text-gray-300">{valor}</span>
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

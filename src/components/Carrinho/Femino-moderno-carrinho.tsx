"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Avatar } from "primereact/avatar"
import { CupomDesconto } from "../Cupom/theme-cupom"
import { Trash2, ShoppingBag, CreditCard, ArrowRight, Zap, Plus, Minus, Star } from "lucide-react"

interface Produto {
  id: string
  name: string
  price: number
  image: string
  quantidade: number
}

interface CarrinhoProps {
  carrinho?: {
    produtos: Produto[]
  }
}

const FemininoModernoCarrinho = ({ carrinho }: CarrinhoProps) => {
  const produtos = carrinho?.produtos || []
  const [descontoCupom, setDescontoCupom] = useState(0)
  const [metodoPagamento, setMetodoPagamento] = useState("pix")

  const subtotal = produtos.reduce((total, item) => total + item.price * item.quantidade, 0)
  const descontoMetodo = metodoPagamento === "pix" ? subtotal * 0.1 : 0
  const descontoCupomValor = subtotal * descontoCupom
  const descontoTotal = descontoMetodo + descontoCupomValor
  const total = subtotal - descontoTotal

  const handleQuantidadeChange = (produtoId: string, novaQuantidade: number) => {
    if (novaQuantidade > 0) {
      console.log(produtoId, novaQuantidade)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 text-white py-12 relative overflow-hidden">
      {/* Elementos decorativos modernos */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.15),transparent_50%)]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            CARRINHO DIGITAL
          </h1>
          <div className="flex items-center justify-center mb-4">
            <div className="h-[2px] w-16 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <Star className="mx-4   w-16 bg-gradient-to-r from-purple-500 to-pink-500"></Star>
            <Star className="mx-4 text-pink-400" size={24} />
            <div className="h-[2px] w-16 bg-gradient-to-r from-pink-500 to-purple-500"></div>
          </div>
          <p className="text-purple-300 font-medium">Estilo e inovação em cada compra</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Lista de produtos */}
          <motion.div
            className="flex-grow bg-purple-800/20 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-purple-500/30"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30">
                <ShoppingBag size={24} className="text-pink-400" />
              </div>
              <h2 className="text-xl font-semibold">Produtos Selecionados</h2>
            </div>

            {produtos.length === 0 ? (
              <div className="text-center py-16">
                <div className="mb-6">
                  <div className="relative mx-auto w-20 h-20 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
                    <ShoppingBag size={64} className="text-purple-400 mx-auto relative z-10" />
                  </div>
                  <p className="text-purple-300 mb-6 text-lg">Carrinho vazio - Descubra produtos incríveis</p>
                </div>
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-medium transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg border border-purple-500/30"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Zap size={20} />
                  EXPLORAR PRODUTOS
                </motion.button>
              </div>
            ) : (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {produtos.map((produto, index) => (
                  <motion.div
                    key={produto.id}
                    className="flex items-center gap-4 p-4 bg-purple-700/20 backdrop-blur-sm rounded-xl border border-purple-500/30 hover:border-pink-400/40 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.01, y: -2 }}
                  >
                    <div className="relative">
                      <Avatar
                        image={produto.image}
                        size="large"
                        shape="circle"
                        className="border-2 border-pink-400 shadow-lg"
                      />
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xs font-bold">
                        {produto.quantidade}
                      </div>
                    </div>

                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg">{produto.name}</h3>
                      <p className="text-pink-400 font-medium">R$ {produto.price.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center gap-3 bg-purple-800/30 rounded-xl p-1 border border-purple-500/20">
                      <motion.button
                        className="w-8 h-8 flex items-center justify-center bg-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-lg transition-all"
                        onClick={() => handleQuantidadeChange(produto.id, produto.quantidade - 1)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Minus size={14} />
                      </motion.button>
                      <span className="w-8 text-center font-medium">{produto.quantidade}</span>
                      <motion.button
                        className="w-8 h-8 flex items-center justify-center bg-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-lg transition-all"
                        onClick={() => handleQuantidadeChange(produto.id, produto.quantidade + 1)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Plus size={14} />
                      </motion.button>
                    </div>

                    <div className="text-right min-w-[100px]">
                      <p className="font-bold text-lg text-pink-400">
                        R$ {(produto.price * produto.quantidade).toFixed(2)}
                      </p>
                    </div>

                    <motion.button
                      className="text-red-400 hover:text-red-300 p-2 hover:bg-red-500/10 rounded-lg transition-all"
                      onClick={() => {}}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Trash2 size={18} />
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Resumo */}
          <motion.div
            className="lg:w-[400px] bg-purple-800/20 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-purple-500/30 h-fit"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30">
                <CreditCard size={24} className="text-pink-400" />
              </div>
              <h2 className="text-xl font-semibold">Checkout Moderno</h2>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between py-3 border-b border-purple-700">
                <span className="text-purple-300">Subtotal:</span>
                <span className="font-medium">R$ {subtotal.toFixed(2)}</span>
              </div>

              {/* Método de pagamento */}
              <div>
                <p className="text-purple-300 mb-3 font-medium">Método de pagamento:</p>
                <div className="grid grid-cols-2 gap-3">
                  <motion.button
                    className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                      metodoPagamento === "pix"
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg border border-pink-400/30"
                        : "bg-purple-700/30 text-purple-300 hover:bg-purple-600/30 border border-purple-600"
                    }`}
                    onClick={() => setMetodoPagamento("pix")}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    PIX (10% OFF)
                  </motion.button>
                  <motion.button
                    className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                      metodoPagamento === "cartao"
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg border border-pink-400/30"
                        : "bg-purple-700/30 text-purple-300 hover:bg-purple-600/30 border border-purple-600"
                    }`}
                    onClick={() => setMetodoPagamento("cartao")}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    CARTÃO
                  </motion.button>
                </div>
              </div>

              {/* Cupom de desconto */}
              <CupomDesconto aplicarDesconto={(desconto: any) => setDescontoCupom(desconto)} />

              {/* Descontos */}
              {descontoTotal > 0 && (
                <div className="flex justify-between py-3 border-b border-purple-700">
                  <span className="text-purple-300">Descontos:</span>
                  <span className="text-green-400 font-medium">- R$ {descontoTotal.toFixed(2)}</span>
                </div>
              )}

              {/* Total */}
              <div className="flex justify-between py-4 text-xl font-bold bg-gradient-to-r from-purple-700/30 to-pink-700/30 rounded-xl px-4 border border-purple-500/30">
                <span>Total:</span>
                <span className="text-pink-400">R$ {total.toFixed(2)}</span>
              </div>
            </div>

            <motion.button
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 shadow-lg border border-pink-400/30 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: produtos.length > 0 ? 1.02 : 1, y: produtos.length > 0 ? -2 : 0 }}
              whileTap={{ scale: produtos.length > 0 ? 0.98 : 1 }}
              disabled={produtos.length === 0}
            >
              FINALIZAR COMPRA
              <ArrowRight size={20} />
            </motion.button>

            <div className="text-center mt-4">
              <p className="text-sm text-purple-300">⚡ Pagamento rápido e seguro</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default FemininoModernoCarrinho

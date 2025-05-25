"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Avatar } from "primereact/avatar"
import { Trash2, ShoppingBag, CreditCard, ArrowRight, Heart, Plus, Minus, Sparkles } from "lucide-react"
import { CupomDesconto } from "../Cupom/theme-cupom"

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

const FemininoEleganteCarrinho = ({ carrinho }: CarrinhoProps) => {
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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 text-rose-900 py-12 relative overflow-hidden">
      {/* Elementos decorativos elegantes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-200/30 to-purple-200/30 rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            Meu Carrinho
          </h1>
          <div className="flex items-center justify-center mb-4">
            <div className="h-[2px] w-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"></div>
            <Heart className="mx-4 text-rose-500" size={24} />
            <div className="h-[2px] w-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"></div>
          </div>
          <p className="text-rose-700 font-medium italic">Beleza e elegância em cada escolha</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Lista de produtos */}
          <motion.div
            className="flex-grow bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-rose-200"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl border border-rose-300">
                <ShoppingBag size={24} className="text-rose-600" />
              </div>
              <h2 className="text-xl font-serif font-semibold text-rose-800">Produtos Selecionados</h2>
            </div>

            {produtos.length === 0 ? (
              <div className="text-center py-16">
                <div className="mb-6">
                  <div className="relative mx-auto w-20 h-20 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-200/40 to-pink-200/40 rounded-full"></div>
                    <ShoppingBag size={64} className="text-rose-400 mx-auto relative z-10" />
                  </div>
                  <p className="text-rose-600 mb-6 text-lg font-medium italic">
                    Seu carrinho aguarda por produtos especiais
                  </p>
                </div>
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-2xl font-medium transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Sparkles size={20} />
                  EXPLORAR PRODUTOS
                </motion.button>
              </div>
            ) : (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {produtos.map((produto, index) => (
                  <motion.div
                    key={produto.id}
                    className="flex items-center gap-4 p-4 bg-rose-50/50 rounded-2xl border border-rose-200 hover:border-rose-400 transition-all duration-300 shadow-sm"
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
                        className="border-2 border-rose-400 shadow-lg"
                      />
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                        {produto.quantidade}
                      </div>
                    </div>

                    <div className="flex-grow">
                      <h3 className="font-serif font-semibold text-lg text-rose-800">{produto.name}</h3>
                      <p className="text-rose-600 font-medium">R$ {produto.price.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center gap-3 bg-white rounded-2xl p-1 border border-rose-200">
                      <motion.button
                        className="w-8 h-8 flex items-center justify-center bg-rose-100 hover:bg-gradient-to-r hover:from-rose-500 hover:to-pink-500 hover:text-white rounded-xl transition-all"
                        onClick={() => handleQuantidadeChange(produto.id, produto.quantidade - 1)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Minus size={14} />
                      </motion.button>
                      <span className="w-8 text-center font-medium text-rose-800">{produto.quantidade}</span>
                      <motion.button
                        className="w-8 h-8 flex items-center justify-center bg-rose-100 hover:bg-gradient-to-r hover:from-rose-500 hover:to-pink-500 hover:text-white rounded-xl transition-all"
                        onClick={() => handleQuantidadeChange(produto.id, produto.quantidade + 1)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Plus size={14} />
                      </motion.button>
                    </div>

                    <div className="text-right min-w-[100px]">
                      <p className="font-bold text-lg text-rose-700">
                        R$ {(produto.price * produto.quantidade).toFixed(2)}
                      </p>
                    </div>

                    <motion.button
                      className="text-red-400 hover:text-red-500 p-2 hover:bg-red-50 rounded-xl transition-all"
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
            className="lg:w-[400px] bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-rose-200 h-fit"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl border border-rose-300">
                <CreditCard size={24} className="text-rose-600" />
              </div>
              <h2 className="text-xl font-serif font-semibold text-rose-800">Resumo do Pedido</h2>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between py-3 border-b border-rose-200">
                <span className="text-rose-700 font-medium">Subtotal:</span>
                <span className="font-semibold text-rose-800">R$ {subtotal.toFixed(2)}</span>
              </div>

              {/* Método de pagamento */}
              <div>
                <p className="text-rose-700 mb-3 font-medium">Método de pagamento:</p>
                <div className="grid grid-cols-2 gap-3">
                  <motion.button
                    className={`py-3 px-4 rounded-2xl text-sm font-medium transition-all ${
                      metodoPagamento === "pix"
                        ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg"
                        : "bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200"
                    }`}
                    onClick={() => setMetodoPagamento("pix")}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    PIX (10% OFF)
                  </motion.button>
                  <motion.button
                    className={`py-3 px-4 rounded-2xl text-sm font-medium transition-all ${
                      metodoPagamento === "cartao"
                        ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg"
                        : "bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200"
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
                <div className="flex justify-between py-3 border-b border-rose-200">
                  <span className="text-rose-700 font-medium">Descontos:</span>
                  <span className="text-green-600 font-semibold">- R$ {descontoTotal.toFixed(2)}</span>
                </div>
              )}

              {/* Total */}
              <div className="flex justify-between py-4 text-xl font-bold bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl px-4 border border-rose-300">
                <span className="text-rose-800">Total:</span>
                <span className="text-rose-700">R$ {total.toFixed(2)}</span>
              </div>
            </div>

            <motion.button
              className="w-full py-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-3 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: produtos.length > 0 ? 1.02 : 1, y: produtos.length > 0 ? -2 : 0 }}
              whileTap={{ scale: produtos.length > 0 ? 0.98 : 1 }}
              disabled={produtos.length === 0}
            >
              FINALIZAR COMPRA
              <ArrowRight size={20} />
            </motion.button>

            <div className="text-center mt-4">
              <p className="text-sm text-rose-600 font-medium italic">💖 Compra segura e elegante</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default FemininoEleganteCarrinho

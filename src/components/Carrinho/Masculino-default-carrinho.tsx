"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Avatar } from "primereact/avatar"
import { CupomDesconto } from "../Cupom/theme-cupom"
import { Trash2, ShoppingBag, CreditCard, ArrowRight, Scissors, Plus, Minus } from "lucide-react"

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

const MasculineDefaultCarrinho = ({ carrinho }: CarrinhoProps) => {
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
    <div className="min-h-screen bg-neutral-900 text-white py-12 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">SEU CARRINHO</h1>
          <div className="flex items-center justify-center mb-4">
            <div className="h-[1px] w-12 bg-amber-500"></div>
            <ShoppingBag className="mx-4 text-amber-500" size={20} />
            <div className="h-[1px] w-12 bg-amber-500"></div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Lista de produtos */}
          <motion.div
            className="flex-grow bg-neutral-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-6 border border-neutral-700"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-600/20 rounded-lg">
                <ShoppingBag size={24} className="text-amber-500" />
              </div>
              <h2 className="text-xl font-semibold">Produtos no Carrinho</h2>
            </div>

            {produtos.length === 0 ? (
              <div className="text-center py-16">
                <div className="mb-6">
                  <ShoppingBag size={64} className="text-neutral-600 mx-auto mb-4" />
                  <p className="text-gray-400 mb-6 text-lg">Seu carrinho está vazio</p>
                </div>
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Scissors size={20} />
                  EXPLORAR PRODUTOS
                </motion.button>
              </div>
            ) : (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {produtos.map((produto, index) => (
                  <motion.div
                    key={produto.id}
                    className="flex items-center gap-4 p-4 bg-neutral-700/50 rounded-xl border border-neutral-600 hover:border-amber-500/30 transition-all duration-300"
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
                        className="border-2 border-amber-500 shadow-lg"
                      />
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center text-xs font-bold">
                        {produto.quantidade}
                      </div>
                    </div>

                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg">{produto.name}</h3>
                      <p className="text-amber-400 font-medium">R$ {produto.price.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center gap-3 bg-neutral-800 rounded-lg p-1">
                      <motion.button
                        className="w-8 h-8 flex items-center justify-center bg-neutral-600 hover:bg-amber-600 rounded-md transition-colors"
                        onClick={() => handleQuantidadeChange(produto.id, produto.quantidade - 1)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Minus size={14} />
                      </motion.button>
                      <span className="w-8 text-center font-medium">{produto.quantidade}</span>
                      <motion.button
                        className="w-8 h-8 flex items-center justify-center bg-neutral-600 hover:bg-amber-600 rounded-md transition-colors"
                        onClick={() => handleQuantidadeChange(produto.id, produto.quantidade + 1)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Plus size={14} />
                      </motion.button>
                    </div>

                    <div className="text-right min-w-[100px]">
                      <p className="font-bold text-lg text-amber-400">
                        R$ {(produto.price * produto.quantidade).toFixed(2)}
                      </p>
                    </div>

                    <motion.button
                      className="text-red-400 hover:text-red-500 p-2 hover:bg-red-500/10 rounded-lg transition-all"
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
            className="lg:w-[400px] bg-neutral-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-6 border border-neutral-700 h-fit"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-600/20 rounded-lg">
                <CreditCard size={24} className="text-amber-500" />
              </div>
              <h2 className="text-xl font-semibold">Resumo do Pedido</h2>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between py-3 border-b border-neutral-700">
                <span className="text-gray-300">Subtotal:</span>
                <span className="font-medium">R$ {subtotal.toFixed(2)}</span>
              </div>

              {/* Método de pagamento */}
              <div>
                <p className="text-gray-300 mb-3 font-medium">Método de pagamento:</p>
                <div className="grid grid-cols-2 gap-3">
                  <motion.button
                    className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                      metodoPagamento === "pix"
                        ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg"
                        : "bg-neutral-700 text-gray-300 hover:bg-neutral-600 border border-neutral-600"
                    }`}
                    onClick={() => setMetodoPagamento("pix")}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    PIX (10% OFF)
                  </motion.button>
                  <motion.button
                    className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                      metodoPagamento === "cartao"
                        ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg"
                        : "bg-neutral-700 text-gray-300 hover:bg-neutral-600 border border-neutral-600"
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
                <div className="flex justify-between py-3 border-b border-neutral-700">
                  <span className="text-gray-300">Descontos:</span>
                  <span className="text-green-400 font-medium">- R$ {descontoTotal.toFixed(2)}</span>
                </div>
              )}

              {/* Total */}
              <div className="flex justify-between py-4 text-xl font-bold bg-neutral-700/50 rounded-lg px-4">
                <span>Total:</span>
                <span className="text-amber-400">R$ {total.toFixed(2)}</span>
              </div>
            </div>

            <motion.button
              className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-3 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: produtos.length > 0 ? 1.02 : 1, y: produtos.length > 0 ? -2 : 0 }}
              whileTap={{ scale: produtos.length > 0 ? 0.98 : 1 }}
              disabled={produtos.length === 0}
            >
              FINALIZAR COMPRA
              <ArrowRight size={20} />
            </motion.button>

            <div className="text-center mt-4">
              <p className="text-sm text-gray-400">🔒 Pagamentos processados com segurança</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default MasculineDefaultCarrinho

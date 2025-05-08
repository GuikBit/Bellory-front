"use client"

import { useGlobalState } from "../global/ContextGlobalState"
import { useState } from "react"
import { motion } from "framer-motion"
import { Avatar } from "primereact/avatar"
import { CupomDesconto } from "../components/Fragments/CupomDesconto"
import { Trash2, ShoppingBag, CreditCard, ArrowRight, Scissors } from "lucide-react"

const Carrinho = () => {
  const { carrinho,  } = useGlobalState() //removerProdutoCarrinho, atualizarQuantidadeProduto, 
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
      console.log(produtoId);
      //atualizarQuantidadeProduto(produtoId, novaQuantidade)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          SEU CARRINHO
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Lista de produtos */}
          <motion.div
            className="flex-grow bg-neutral-800 rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <ShoppingBag size={24} className="text-amber-500" />
              <h2 className="text-xl font-semibold">Produtos no Carrinho</h2>
            </div>

            {produtos.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 mb-4">Seu carrinho está vazio</p>
                <motion.button
                  className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-medium transition-all duration-300 flex items-center gap-2 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Scissors size={18} />
                  EXPLORAR PRODUTOS
                </motion.button>
              </div>
            ) : (
              <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2">
                {produtos.map((produto) => (
                  <motion.div
                    key={produto.id}
                    className="flex items-center gap-4 p-4 bg-neutral-700 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <Avatar image={produto.image} size="large" shape="circle" className="border-2 border-amber-500" />

                    <div className="flex-grow">
                      <h3 className="font-semibold">{produto.name}</h3>
                      <p className="text-sm text-gray-300">R$ {produto.price.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        className="w-8 h-8 flex items-center justify-center bg-neutral-600 hover:bg-neutral-500 rounded-md"
                        onClick={() => handleQuantidadeChange(produto.id, produto.quantidade - 1)}
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{produto.quantidade}</span>
                      <button
                        className="w-8 h-8 flex items-center justify-center bg-neutral-600 hover:bg-neutral-500 rounded-md"
                        onClick={() => handleQuantidadeChange(produto.id, produto.quantidade + 1)}
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right min-w-[80px]">
                      <p className="font-semibold">R$ {(produto.price * produto.quantidade).toFixed(2)}</p>
                    </div>

                    <button
                      className="text-red-400 hover:text-red-500"
                      onClick={() => {}} //removerProdutoCarrinho(produto.id)
                    >
                      <Trash2 size={18} />
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Resumo */}
          <motion.div
            className="md:w-[350px] bg-neutral-800 rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <CreditCard size={24} className="text-amber-500" />
              <h2 className="text-xl font-semibold">Resumo do Pedido</h2>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between py-2 border-b border-neutral-700">
                <span className="text-gray-300">Subtotal:</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>

              {/* Método de pagamento */}
              <div>
                <p className="text-gray-300 mb-2">Método de pagamento:</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    className={`py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      metodoPagamento === "pix"
                        ? "bg-amber-600 text-white"
                        : "bg-neutral-700 text-gray-300 hover:bg-neutral-600"
                    }`}
                    onClick={() => setMetodoPagamento("pix")}
                  >
                    PIX (10% OFF)
                  </button>
                  <button
                    className={`py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      metodoPagamento === "cartao"
                        ? "bg-amber-600 text-white"
                        : "bg-neutral-700 text-gray-300 hover:bg-neutral-600"
                    }`}
                    onClick={() => setMetodoPagamento("cartao")}
                  >
                    CARTÃO
                  </button>
                </div>
              </div>

              {/* Cupom de desconto */}
              <CupomDesconto aplicarDesconto={(desconto: any) => setDescontoCupom(desconto)} />

              {/* Descontos */}
              {descontoTotal > 0 && (
                <div className="flex justify-between py-2 border-b border-neutral-700">
                  <span className="text-gray-300">Descontos:</span>
                  <span className="text-green-500">- R$ {descontoTotal.toFixed(2)}</span>
                </div>
              )}

              {/* Total */}
              <div className="flex justify-between py-2 text-lg font-bold">
                <span>Total:</span>
                <span className="text-amber-500">R$ {total.toFixed(2)}</span>
              </div>
            </div>

            <motion.button
              className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={produtos.length === 0}
            >
              FINALIZAR COMPRA
              <ArrowRight size={18} />
            </motion.button>

            <p className="text-center text-sm text-gray-400 mt-4">Pagamentos processados com segurança</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Carrinho

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Avatar } from "primereact/avatar"
import { Trash2, ShoppingBag, CreditCard, ArrowRight, Plus, Minus } from "lucide-react"
import { useTheme } from "../../contexts/Theme-context"
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

const MasculinoDefaultCarrinho = ({ carrinho }: CarrinhoProps) => {
  const { currentTheme } = useTheme()
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
    <div
      className="min-h-screen py-12 relative overflow-hidden"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      {/* Elementos decorativos de fundo */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full translate-x-1/2 -translate-y-1/2 opacity-10"
        style={{ backgroundColor: currentTheme.colors.primary }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full -translate-x-1/2 translate-y-1/2 opacity-10"
        style={{ backgroundColor: currentTheme.colors.accent }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: currentTheme.colors.text }}>
            SEU CARRINHO
          </h1>
          <div className="flex items-center justify-center mb-4">
            <div className="h-[1px] w-12" style={{ backgroundColor: currentTheme.colors.primary }}></div>
            <ShoppingBag className="mx-4" size={20} style={{ color: currentTheme.colors.primary }} />
            <div className="h-[1px] w-12" style={{ backgroundColor: currentTheme.colors.primary }}></div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Lista de produtos */}
          <motion.div
            className="flex-grow backdrop-blur-sm rounded-xl shadow-2xl p-6 border"
            style={{
              backgroundColor: `${currentTheme.colors.surface}80`,
              borderColor: currentTheme.colors.border,
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${currentTheme.colors.primary}20` }}>
                <ShoppingBag size={24} style={{ color: currentTheme.colors.primary }} />
              </div>
              <h2 className="text-xl font-semibold" style={{ color: currentTheme.colors.text }}>
                Produtos no Carrinho
              </h2>
            </div>

            {produtos.length === 0 ? (
              <div className="text-center py-16">
                <div className="mb-6">
                  <ShoppingBag size={64} className="mx-auto mb-4" style={{ color: currentTheme.colors.muted }} />
                  <p className="mb-6 text-lg" style={{ color: currentTheme.colors.muted }}>
                    Seu carrinho está vazio
                  </p>
                </div>
                <motion.button
                  className="px-8 py-4 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg"
                  style={{ backgroundColor: currentTheme.colors.primary }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <currentTheme.icon size={20} />
                  EXPLORAR PRODUTOS
                </motion.button>
              </div>
            ) : (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {produtos.map((produto, index) => (
                  <motion.div
                    key={produto.id}
                    className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-300"
                    style={{
                      backgroundColor: `${currentTheme.colors.surface}50`,
                      borderColor: currentTheme.colors.border,
                    }}
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
                        className="border-2 shadow-lg"
                        style={{ borderColor: currentTheme.colors.primary }}
                      />
                      <div
                        className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                        style={{ backgroundColor: currentTheme.colors.accent }}
                      >
                        {produto.quantidade}
                      </div>
                    </div>

                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg" style={{ color: currentTheme.colors.text }}>
                        {produto.name}
                      </h3>
                      <p className="font-medium" style={{ color: currentTheme.colors.primary }}>
                        R$ {produto.price.toFixed(2)}
                      </p>
                    </div>

                    <div
                      className="flex items-center gap-3 rounded-lg p-1"
                      style={{ backgroundColor: currentTheme.colors.surface }}
                    >
                      <motion.button
                        className="w-8 h-8 flex items-center justify-center rounded-md transition-colors"
                        style={{
                          backgroundColor: currentTheme.colors.muted,
                          color: currentTheme.colors.text,
                        }}
                        onClick={() => handleQuantidadeChange(produto.id, produto.quantidade - 1)}
                        whileHover={{ scale: 1.1, backgroundColor: currentTheme.colors.primary }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Minus size={14} />
                      </motion.button>
                      <span className="w-8 text-center font-medium" style={{ color: currentTheme.colors.text }}>
                        {produto.quantidade}
                      </span>
                      <motion.button
                        className="w-8 h-8 flex items-center justify-center rounded-md transition-colors"
                        style={{
                          backgroundColor: currentTheme.colors.muted,
                          color: currentTheme.colors.text,
                        }}
                        onClick={() => handleQuantidadeChange(produto.id, produto.quantidade + 1)}
                        whileHover={{ scale: 1.1, backgroundColor: currentTheme.colors.primary }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Plus size={14} />
                      </motion.button>
                    </div>

                    <div className="text-right min-w-[100px]">
                      <p className="font-bold text-lg" style={{ color: currentTheme.colors.primary }}>
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
            className="lg:w-[400px] backdrop-blur-sm rounded-xl shadow-2xl p-6 border h-fit"
            style={{
              backgroundColor: `${currentTheme.colors.surface}80`,
              borderColor: currentTheme.colors.border,
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${currentTheme.colors.primary}20` }}>
                <CreditCard size={24} style={{ color: currentTheme.colors.primary }} />
              </div>
              <h2 className="text-xl font-semibold" style={{ color: currentTheme.colors.text }}>
                Resumo do Pedido
              </h2>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between py-3 border-b" style={{ borderColor: currentTheme.colors.border }}>
                <span style={{ color: currentTheme.colors.muted }}>Subtotal:</span>
                <span className="font-medium" style={{ color: currentTheme.colors.text }}>
                  R$ {subtotal.toFixed(2)}
                </span>
              </div>

              {/* Método de pagamento */}
              <div>
                <p className="mb-3 font-medium" style={{ color: currentTheme.colors.muted }}>
                  Método de pagamento:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <motion.button
                    className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                      metodoPagamento === "pix" ? "text-white shadow-lg" : "border"
                    }`}
                    style={{
                      backgroundColor: metodoPagamento === "pix" ? currentTheme.colors.primary : "transparent",
                      borderColor: currentTheme.colors.border,
                      color: metodoPagamento === "pix" ? "white" : currentTheme.colors.text,
                    }}
                    onClick={() => setMetodoPagamento("pix")}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    PIX (10% OFF)
                  </motion.button>
                  <motion.button
                    className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                      metodoPagamento === "cartao" ? "text-white shadow-lg" : "border"
                    }`}
                    style={{
                      backgroundColor: metodoPagamento === "cartao" ? currentTheme.colors.primary : "transparent",
                      borderColor: currentTheme.colors.border,
                      color: metodoPagamento === "cartao" ? "white" : currentTheme.colors.text,
                    }}
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
                <div className="flex justify-between py-3 border-b" style={{ borderColor: currentTheme.colors.border }}>
                  <span style={{ color: currentTheme.colors.muted }}>Descontos:</span>
                  <span className="text-green-400 font-medium">- R$ {descontoTotal.toFixed(2)}</span>
                </div>
              )}

              {/* Total */}
              <div
                className="flex justify-between py-4 text-xl font-bold rounded-lg px-4"
                style={{ backgroundColor: `${currentTheme.colors.surface}50` }}
              >
                <span style={{ color: currentTheme.colors.text }}>Total:</span>
                <span style={{ color: currentTheme.colors.primary }}>R$ {total.toFixed(2)}</span>
              </div>
            </div>

            <motion.button
              className="w-full py-4 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-3 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: currentTheme.colors.primary }}
              whileHover={{ scale: produtos.length > 0 ? 1.02 : 1, y: produtos.length > 0 ? -2 : 0 }}
              whileTap={{ scale: produtos.length > 0 ? 0.98 : 1 }}
              disabled={produtos.length === 0}
            >
              FINALIZAR COMPRA
              <ArrowRight size={20} />
            </motion.button>

            <div className="text-center mt-4">
              <p className="text-sm" style={{ color: currentTheme.colors.muted }}>
                🔒 Pagamentos processados com segurança
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default MasculinoDefaultCarrinho

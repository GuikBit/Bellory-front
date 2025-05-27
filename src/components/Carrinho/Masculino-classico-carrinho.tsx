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

const MasculinoClassicoCarrinho = ({ carrinho }: CarrinhoProps) => {
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
      {/* Elementos decorativos clássicos */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full translate-x-1/2 -translate-y-1/2 opacity-20"
        style={{
          background: `linear-gradient(to bottom right, ${currentTheme.colors.primary}20, ${currentTheme.colors.accent}20)`,
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full -translate-x-1/2 translate-y-1/2 opacity-20"
        style={{
          background: `linear-gradient(to top right, ${currentTheme.colors.accent}20, ${currentTheme.colors.primary}20)`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4" style={{ color: currentTheme.colors.text }}>
            CARRINHO DE COMPRAS
          </h1>
          <div className="flex items-center justify-center mb-4">
            <div
              className="h-[2px] w-16"
              style={{
                background: `linear-gradient(to right, ${currentTheme.colors.primary}, ${currentTheme.colors.accent})`,
              }}
            ></div>
            {/* <currentTheme.icon className="mx-4" size={24} style={{ color: currentTheme.colors.primary }} /> */}
            <div
              className="h-[2px] w-16"
              style={{
                background: `linear-gradient(to right, ${currentTheme.colors.accent}, ${currentTheme.colors.primary})`,
              }}
            ></div>
          </div>
          <p className="font-medium" style={{ color: currentTheme.colors.muted }}>
            Tradição e qualidade em cada produto
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Lista de produtos */}
          <motion.div
            className="flex-grow backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2"
            style={{
              backgroundColor: `${currentTheme.colors.surface}80`,
              borderColor: currentTheme.colors.border,
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="p-3 rounded-xl border-2"
                style={{
                  background: `linear-gradient(to bottom right, ${currentTheme.colors.primary}10, ${currentTheme.colors.accent}10)`,
                  borderColor: currentTheme.colors.border,
                }}
              >
                <ShoppingBag size={24} style={{ color: currentTheme.colors.primary }} />
              </div>
              <h2 className="text-xl font-serif font-semibold" style={{ color: currentTheme.colors.text }}>
                Produtos Selecionados
              </h2>
            </div>

            {produtos.length === 0 ? (
              <div className="text-center py-16">
                <div className="mb-6">
                  <div className="relative mx-auto w-20 h-20 mb-6">
                    <div
                      className="absolute inset-0 rounded-full opacity-30"
                      style={{
                        background: `linear-gradient(to bottom right, ${currentTheme.colors.primary}30, ${currentTheme.colors.accent}30)`,
                      }}
                    ></div>
                    <ShoppingBag
                      size={64}
                      className="mx-auto relative z-10"
                      style={{ color: currentTheme.colors.muted }}
                    />
                  </div>
                  <p className="mb-6 text-lg font-medium" style={{ color: currentTheme.colors.muted }}>
                    Seu carrinho aguarda por produtos especiais
                  </p>
                </div>
                <motion.button
                  className="px-8 py-4 text-white rounded-xl font-medium transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg border-2"
                  style={{
                    background: `linear-gradient(to right, ${currentTheme.colors.primary}, ${currentTheme.colors.accent})`,
                    borderColor: currentTheme.colors.primary,
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* <currentTheme.icon size={20} /> */}
                  EXPLORAR COLEÇÃO
                </motion.button>
              </div>
            ) : (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {produtos.map((produto, index) => (
                  <motion.div
                    key={produto.id}
                    className="flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 shadow-sm"
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
                        className="border-3 shadow-lg"
                        style={{ borderColor: currentTheme.colors.primary }}
                      />
                      <div
                        className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                        style={{
                          background: `linear-gradient(to right, ${currentTheme.colors.primary}, ${currentTheme.colors.accent})`,
                        }}
                      >
                        {produto.quantidade}
                      </div>
                    </div>

                    <div className="flex-grow">
                      <h3 className="font-serif font-semibold text-lg" style={{ color: currentTheme.colors.text }}>
                        {produto.name}
                      </h3>
                      <p className="font-medium" style={{ color: currentTheme.colors.primary }}>
                        R$ {produto.price.toFixed(2)}
                      </p>
                    </div>

                    <div
                      className="flex items-center gap-3 rounded-xl p-1 border-2"
                      style={{
                        backgroundColor: currentTheme.colors.surface,
                        borderColor: currentTheme.colors.border,
                      }}
                    >
                      <motion.button
                        className="w-8 h-8 flex items-center justify-center rounded-lg transition-all border"
                        style={{
                          backgroundColor: `${currentTheme.colors.primary}10`,
                          borderColor: currentTheme.colors.border,
                          color: currentTheme.colors.text,
                        }}
                        onClick={() => handleQuantidadeChange(produto.id, produto.quantidade - 1)}
                        whileHover={{
                          scale: 1.1,
                          background: `linear-gradient(to right, ${currentTheme.colors.primary}, ${currentTheme.colors.accent})`,
                          color: "white",
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Minus size={14} />
                      </motion.button>
                      <span className="w-8 text-center font-medium" style={{ color: currentTheme.colors.text }}>
                        {produto.quantidade}
                      </span>
                      <motion.button
                        className="w-8 h-8 flex items-center justify-center rounded-lg transition-all border"
                        style={{
                          backgroundColor: `${currentTheme.colors.primary}10`,
                          borderColor: currentTheme.colors.border,
                          color: currentTheme.colors.text,
                        }}
                        onClick={() => handleQuantidadeChange(produto.id, produto.quantidade + 1)}
                        whileHover={{
                          scale: 1.1,
                          background: `linear-gradient(to right, ${currentTheme.colors.primary}, ${currentTheme.colors.accent})`,
                          color: "white",
                        }}
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
                      className="text-red-500 hover:text-red-600 p-2 hover:bg-red-50 rounded-lg transition-all border border-transparent hover:border-red-200"
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
            className="lg:w-[400px] backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 h-fit"
            style={{
              backgroundColor: `${currentTheme.colors.surface}80`,
              borderColor: currentTheme.colors.border,
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="p-3 rounded-xl border-2"
                style={{
                  background: `linear-gradient(to bottom right, ${currentTheme.colors.primary}10, ${currentTheme.colors.accent}10)`,
                  borderColor: currentTheme.colors.border,
                }}
              >
                <CreditCard size={24} style={{ color: currentTheme.colors.primary }} />
              </div>
              <h2 className="text-xl font-serif font-semibold" style={{ color: currentTheme.colors.text }}>
                Resumo do Pedido
              </h2>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between py-3 border-b-2" style={{ borderColor: currentTheme.colors.border }}>
                <span className="font-medium" style={{ color: currentTheme.colors.muted }}>
                  Subtotal:
                </span>
                <span className="font-semibold" style={{ color: currentTheme.colors.text }}>
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
                    className={`py-3 px-4 rounded-xl text-sm font-medium transition-all border-2 ${
                      metodoPagamento === "pix" ? "text-white shadow-lg" : ""
                    }`}
                    style={{
                      background:
                        metodoPagamento === "pix"
                          ? `linear-gradient(to right, ${currentTheme.colors.primary}, ${currentTheme.colors.accent})`
                          : `${currentTheme.colors.primary}10`,
                      borderColor: metodoPagamento === "pix" ? currentTheme.colors.primary : currentTheme.colors.border,
                      color: metodoPagamento === "pix" ? "white" : currentTheme.colors.text,
                    }}
                    onClick={() => setMetodoPagamento("pix")}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    PIX (10% OFF)
                  </motion.button>
                  <motion.button
                    className={`py-3 px-4 rounded-xl text-sm font-medium transition-all border-2 ${
                      metodoPagamento === "cartao" ? "text-white shadow-lg" : ""
                    }`}
                    style={{
                      background:
                        metodoPagamento === "cartao"
                          ? `linear-gradient(to right, ${currentTheme.colors.primary}, ${currentTheme.colors.accent})`
                          : `${currentTheme.colors.primary}10`,
                      borderColor:
                        metodoPagamento === "cartao" ? currentTheme.colors.primary : currentTheme.colors.border,
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
                <div
                  className="flex justify-between py-3 border-b-2"
                  style={{ borderColor: currentTheme.colors.border }}
                >
                  <span className="font-medium" style={{ color: currentTheme.colors.muted }}>
                    Descontos:
                  </span>
                  <span className="text-green-600 font-semibold">- R$ {descontoTotal.toFixed(2)}</span>
                </div>
              )}

              {/* Total */}
              <div
                className="flex justify-between py-4 text-xl font-bold rounded-xl px-4 border-2"
                style={{
                  background: `linear-gradient(to right, ${currentTheme.colors.primary}10, ${currentTheme.colors.accent}10)`,
                  borderColor: currentTheme.colors.border,
                }}
              >
                <span style={{ color: currentTheme.colors.text }}>Total:</span>
                <span style={{ color: currentTheme.colors.primary }}>R$ {total.toFixed(2)}</span>
              </div>
            </div>

            <motion.button
              className="w-full py-4 text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 shadow-lg border-2 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: `linear-gradient(to right, ${currentTheme.colors.primary}, ${currentTheme.colors.accent})`,
                borderColor: currentTheme.colors.primary,
              }}
              whileHover={{ scale: produtos.length > 0 ? 1.02 : 1, y: produtos.length > 0 ? -2 : 0 }}
              whileTap={{ scale: produtos.length > 0 ? 0.98 : 1 }}
              disabled={produtos.length === 0}
            >
              FINALIZAR COMPRA
              <ArrowRight size={20} />
            </motion.button>

            <div className="text-center mt-4">
              <p className="text-sm font-medium" style={{ color: currentTheme.colors.muted }}>
                🛡️ Compra segura e confiável
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default MasculinoClassicoCarrinho

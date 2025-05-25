"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tag, Check, X } from "lucide-react"

interface CupomDescontoProps {
  aplicarDesconto: (desconto: number) => void
}

export const MasculineDefaultCupom = ({ aplicarDesconto }: CupomDescontoProps) => {
  const [cupom, setCupom] = useState("")
  const [cupomAplicado, setCupomAplicado] = useState(false)
  const [erro, setErro] = useState("")

  const validarCupom = () => {
    const cuponsValidos = {
      BEMVINDO10: 0.1,
      BARBA20: 0.2,
      PROMO15: 0.15,
    }

    const cupomNormalizado = cupom.trim().toUpperCase()

    if (!cupomNormalizado) {
      setErro("Digite um cupom válido")
      return
    }

    if (cupomAplicado) {
      setErro("Você já aplicou um cupom")
      return
    }

    // @ts-ignore
    const descontoCupom = cuponsValidos[cupomNormalizado]

    if (descontoCupom) {
      aplicarDesconto(descontoCupom)
      setCupomAplicado(true)
      setErro("")
    } else {
      setErro("Cupom inválido")
    }
  }

  const removerCupom = () => {
    aplicarDesconto(0)
    setCupomAplicado(false)
    setCupom("")
    setErro("")
  }

  return (
    <div className="py-2">
      <p className="text-gray-300 mb-3 flex items-center gap-2 font-medium">
        <div className="p-1 bg-amber-600/20 rounded">
          <Tag size={16} className="text-amber-500" />
        </div>
        Cupom de desconto:
      </p>

      <div className="flex gap-3">
        <input
          type="text"
          value={cupom}
          onChange={(e) => setCupom(e.target.value)}
          disabled={cupomAplicado}
          placeholder="Digite seu cupom"
          className="flex-grow px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all disabled:opacity-50"
        />

        {!cupomAplicado ? (
          <motion.button
            onClick={validarCupom}
            className="px-4 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-lg transition-all font-medium shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Aplicar
          </motion.button>
        ) : (
          <motion.button
            onClick={removerCupom}
            className="px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <X size={18} />
          </motion.button>
        )}
      </div>

      {erro && (
        <motion.p
          className="text-red-400 text-sm mt-2 flex items-center gap-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <X size={14} /> {erro}
        </motion.p>
      )}

      {cupomAplicado && (
        <motion.p
          className="text-green-400 text-sm mt-2 flex items-center gap-1 font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Check size={14} /> Cupom aplicado com sucesso!
        </motion.p>
      )}
    </div>
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tag, Check, X } from "lucide-react"

interface CupomDescontoProps {
  aplicarDesconto: (desconto: number) => void
}

export const CupomDesconto = ({ aplicarDesconto }: CupomDescontoProps) => {
  const [cupom, setCupom] = useState("")
  const [cupomAplicado, setCupomAplicado] = useState(false)
  const [erro, setErro] = useState("")

  const validarCupom = () => {
    // Simulação de cupons válidos
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
      <p className="text-gray-300 mb-2 flex items-center gap-2">
        <Tag size={16} className="text-amber-500" />
        Cupom de desconto:
      </p>

      <div className="flex gap-2">
        <input
          type="text"
          value={cupom}
          onChange={(e) => setCupom(e.target.value)}
          disabled={cupomAplicado}
          placeholder="Digite seu cupom"
          className="flex-grow px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
        />

        {!cupomAplicado ? (
          <motion.button
            onClick={validarCupom}
            className="px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            Aplicar
          </motion.button>
        ) : (
          <motion.button
            onClick={removerCupom}
            className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <X size={18} />
          </motion.button>
        )}
      </div>

      {erro && <p className="text-red-500 text-sm mt-1">{erro}</p>}

      {cupomAplicado && (
        <motion.p
          className="text-green-500 text-sm mt-1 flex items-center gap-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Check size={14} /> Cupom aplicado com sucesso!
        </motion.p>
      )}
    </div>
  )
}

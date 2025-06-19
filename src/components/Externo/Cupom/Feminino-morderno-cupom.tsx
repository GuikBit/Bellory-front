"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tag, Check, X } from "lucide-react"
import { themes } from "../../../theme/theme"
import { BarbeariaButton } from "../../ui"

interface CupomDescontoProps {
  aplicarDesconto: (desconto: number) => void
}

export const FemininoModernoCupom = ({ aplicarDesconto }: CupomDescontoProps) => {
  const [cupom, setCupom] = useState("")
  const [cupomAplicado, setCupomAplicado] = useState(false)
  const [erro, setErro] = useState("")

  const theme = themes.femininoModerno;

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
      <p className=" mb-3 flex items-center gap-2 font-medium" style={{ color: theme.colors.text }}>
        {/* <div 
          className="rounded-lg border"
          style={{
            padding: "0.4rem",
            borderColor: `${theme.colors.primary}60`,
          }}>
          <Tag size={16} style={{ color: theme.colors.primary }} />
        </div> */}
        Cupom de desconto:
      </p>

      <div className="flex gap-3">
        <input
          type="text"
          value={cupom}
          onChange={(e) => setCupom(e.target.value.toUpperCase())}
          disabled={cupomAplicado}
          placeholder="Digite seu cupom"
          className="flex-grow px-4 py-3 backdrop-blur-sm border rounded-xl transition-all focus:outline-none disabled:opacity-50 font-medium"
          style={{
            borderColor: `${theme.colors.primary}60`,
            color: theme.colors.text,
          }}
        />

        

        {!cupomAplicado ? (
          // <motion.button
          //   onClick={validarCupom}
          //   className="px-4 py-3 bg-gradient-to-r text-white rounded-xl transition-all font-medium shadow-lg border border-pink-400/30"
          //   whileHover={{ scale: 1.02 }}
          //   whileTap={{ scale: 0.98 }}
          // >
          //   <Star size={16} className="inline mr-1" />
          //   Aplicar
          // </motion.button>
          <BarbeariaButton 
            value="Aplicar"
            leftIcon={ <Tag size={16} /> }
            className="border-none py-1 rounded-lg transition cursor-pointer"
            style={{
              background: theme.colors.backgroundLinear,
              color: 'white',
              borderRadius: theme.borderRadius.large
            }}
            onClick={validarCupom}
          />
        ) : (
          <motion.button
            onClick={removerCupom}
            className="px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-2xl transition-all shadow cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <X size={20} />
          </motion.button>
        )}
      </div>

      {erro && (
        <motion.p
          className="text-red-500 text-sm mt-2 h-7 flex items-center gap-1 font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <X size={20} /> {erro}
        </motion.p>
      )}

      {cupomAplicado && (
        <motion.p
          className="text-green-700 text-sm mt-2 h-7 flex items-center gap-1 font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Check size={20} /> Cupom aplicado com sucesso!
        </motion.p>
      )}
    </div>
  )
}

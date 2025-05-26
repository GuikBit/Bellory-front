"use client"

import MasculinoModernoCarrinho from "../components/Carrinho/Masculino-moderno-carrinho"
import ThemeCarrinho from "../components/Carrinho/theme-carrinho"
import { useGlobalState } from "../global/ContextGlobalState"

const Carrinho = () => {
  const { carrinho } = useGlobalState() //removerProdutoCarrinho, atualizarQuantidadeProduto, 

  return (
    <>
      <MasculinoModernoCarrinho carrinho={carrinho} />
    </>
  )
}

export default Carrinho

"use client"

import { useGlobalState } from "../global/ContextGlobalState"
import ThemeCarrinho from "../components/Carrinho/theme-carrinho"

const Carrinho = () => {
  const { carrinho,  } = useGlobalState() //removerProdutoCarrinho, atualizarQuantidadeProduto, 
  const produtos = carrinho?.produtos || []

  return (
    <>
      <ThemeCarrinho carrinho={produtos}/>
    </>
  )
}

export default Carrinho

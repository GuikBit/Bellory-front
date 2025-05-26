import ThemeCarrinho from "../components/Carrinho/theme-carrinho"
import { useGlobalState } from "../global/ContextGlobalState"

const Carrinho = () => {
  const { carrinho } = useGlobalState() //removerProdutoCarrinho, atualizarQuantidadeProduto, 

  return (
    <>
      <ThemeCarrinho carrinho={carrinho} />
    </>
  )
}

export default Carrinho

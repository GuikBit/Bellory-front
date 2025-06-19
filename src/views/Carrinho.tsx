import ThemeCarrinho from "../components/Externo/Carrinho/theme-carrinho"
import { useGlobalState } from "../global/GlobalContext"

const Carrinho = () => {
  const { carrinho } = useGlobalState() //removerProdutoCarrinho, atualizarQuantidadeProduto, 

  return (
    <>
      <ThemeCarrinho carrinho={carrinho} />
    </>
  )
}

export default Carrinho

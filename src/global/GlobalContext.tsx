import { createContext, ReactNode, useContext, useState } from "react";
import { CarrinhoCompras, GlobalState, Produto } from "../utils/interfaces";

const GlobalContext = createContext<GlobalState | undefined>(undefined);

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [novoAgendamento, setNovoAgendamento] = useState<boolean>(false);

  const [carrinho, setCarrinhoState] = useState<CarrinhoCompras | null>(() => {
    const stored = localStorage.getItem("carrinho");
    return stored ? JSON.parse(stored) : { produtos: [] };
  });

  const setCarrinho = (cart: CarrinhoCompras | null) => {
    if (cart) {
      localStorage.setItem("carrinho", JSON.stringify(cart));
    } else {
      localStorage.removeItem("carrinho");
    }
    setCarrinhoState(cart);
  };

  const adicionarProdutoCarrinho = (produto: Produto) => {
    const novoCarrinho: CarrinhoCompras = { ...carrinho };

    if (!novoCarrinho.produtos) {
      novoCarrinho.produtos = [];
    }

    const itemExistente = novoCarrinho.produtos.find((p) => p.id === produto.id);

    if (itemExistente) {
      itemExistente.quantidade += 1;
    } else {
      novoCarrinho.produtos.push({ ...produto, quantidade: 1 });
    }

    setCarrinho(novoCarrinho);
  };

  return (
    <GlobalContext.Provider
      value={{
        carrinho,
        setCarrinho,
        adicionarProdutoCarrinho,
        novoAgendamento,
        setNovoAgendamento,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};

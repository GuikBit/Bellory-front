import { createContext, ReactNode, useContext, useState } from "react";
import { CarrinhoCompras, GlobalState, Product, UserLogado } from "../utils/interfaces";

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {

  // Inicializa o userLogado a partir do localStorage
  const [userLogado, setUserLogadoState] = useState<UserLogado | null>(() => {
    const stored = localStorage.getItem('userLogado');
    return stored ? JSON.parse(stored) : null;
  });

  // Inicializa o carrinho a partir do localStorage
  const [carrinho, setCarrinhoState] = useState<CarrinhoCompras | null>(() => {
    const stored = localStorage.getItem('carrinho');
    return stored ? JSON.parse(stored) : { produtos: [] };
  });

  // Setter customizado para userLogado que salva no localStorage
  const setUserLogado = (user: UserLogado | null) => {
    if (user) {
      localStorage.setItem('userLogado', JSON.stringify(user));
    } else {
      localStorage.removeItem('userLogado');
    }
    setUserLogadoState(user);
  };

  // Setter customizado para carrinho que salva no localStorage
  const setCarrinho = (cart: CarrinhoCompras | null) => {
    if (cart) {
      localStorage.setItem('carrinho', JSON.stringify(cart));
    } else {
      localStorage.removeItem('carrinho');
    }
    setCarrinhoState(cart);
  };

  const adicionarProdutoCarrinho = (produto: Product) => {
    const novoCarrinho: CarrinhoCompras = { ...carrinho };

    if (!novoCarrinho.produtos) {
      novoCarrinho.produtos = [];
    }

    const itemExistente = novoCarrinho.produtos.find(p => p.id === produto.id);

    if (itemExistente) {
      itemExistente.quantidade += 1;
    } else {
      novoCarrinho.produtos.push({ ...produto, quantidade: 1 });
    }

    setCarrinho(novoCarrinho); // Atualiza estado + localStorage
  };

  return (
    <GlobalStateContext.Provider
      value={{ userLogado, setUserLogado, carrinho, setCarrinho, adicionarProdutoCarrinho }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};

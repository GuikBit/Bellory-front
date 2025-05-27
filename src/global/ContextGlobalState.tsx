import { createContext, ReactNode, useContext, useState } from "react";
import { CarrinhoCompras, GlobalState, Product, Produto, UserLogado } from "../utils/interfaces";

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {

  // Inicializa o userLogado a partir do localStorage
  const [userLogado, setUserLogadoState] = useState<UserLogado | null>(() => {
    const stored = localStorage.getItem('userLogado');
    return stored ? JSON.parse(stored) : null;
  });

  const [novoAgendamento, setNovoAgendamento] = useState<boolean>(false);

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

  const adicionarProdutoCarrinho = (produto: Produto) => {
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

  // const removerProdutoCarrinho = (produtoId: string) => {
  //   setCarrinho((prevCarrinho: any) => ({
  //     ...prevCarrinho,
  //     produtos: prevCarrinho.produtos.filter((p: { id: string; }) => p.id !== produtoId),
  //   }))
  // }

  // const atualizarQuantidadeProduto = (produtoId: string, quantidade: number) => {
  //   setCarrinho((prevCarrinho: { produtos: any[]; }) => ({
  //     ...prevCarrinho,
  //     produtos: prevCarrinho.produtos.map((p: { id: string; }) => (p.id === produtoId ? { ...p, quantidade } : p)),
  //   }))
  // }

  return (
    <GlobalStateContext.Provider
      value={{ userLogado, setUserLogado, carrinho, setCarrinho, adicionarProdutoCarrinho, novoAgendamento, setNovoAgendamento }}
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

export interface UsuarioBase {
    id: string;
    nome: string;
    email: string;
    telefone: string;
    dataNascimento: string;
    endereco?: string;
    cidade?: string;
    estado?: string;
    cep?: string;
    pais?: string;
    fotoPerfil: string;
    dataCadastro: string;
    dataUltimoAcesso: string;
    tipoUsuario: string;
    status: string;
    token: string;
}
  
export type UserLogado = UsuarioBase;
export type Cliente = UsuarioBase;

export interface Servico {
    id: string;
    nome: string;
    preco: number;
    duracao: number;
}
  
export interface Barbeiro {
    id: string;
    nome: string;
    especialidades: string[];
}
  
export interface NovoAgendamento {
    nome?: string;
    telefone?: string;
    cpf?: string;
    data?: string;
    horario?: string;
    servicos?: Servico[];
    observacao?: string;
    status?: 'pendente' | 'confirmado' | 'cancelado';
    barbeiro?: Barbeiro | null;
    dataAgendamento?: Date | null ;
    horaAgendamento?: Date | null ;
}
export interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
    discount: number;
}
export interface Produto {
  id: string
  nome: string
  preco: number
  precoOriginal?: number
  descricao: string
  imagem: string
  categoria: string
  genero: string
  marca: string
  avaliacao: number
  desconto?: number
  emEstoque: boolean
  novo?: boolean
  destaque?: boolean
  produtosUtilizados?: string[]
  trending?: boolean
}

export interface ProductCarrinho extends Product {
    quantidade: number; 
}

export interface Pagamento {
    metodo: 'pix' | 'credito' | 'debito' | 'dinheiro';
    status: 'pendente' | 'confirmado' | 'falhou';
    valorTotal: number;
    dataPagamento?: string;
}

export interface CarrinhoCompras {
    cliente?: Cliente;
    produtos?: (Produto & { quantidade: number })[];
    pagamento?: Pagamento;

    
}

export interface GlobalState {
    novoAgendamento: boolean; 
    setNovoAgendamento: (item: boolean)=>void;

    userLogado: UserLogado | null;
    setUserLogado: (userLogado: UserLogado | null) => void;

    carrinho: CarrinhoCompras | null;
    setCarrinho: (carrinho: CarrinhoCompras | null) => void;

    adicionarProdutoCarrinho: (produto: Produto) => void;
}
  


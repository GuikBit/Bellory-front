export interface UserLogado {
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


export interface GlobalState {
    userLogado: UserLogado | null;
    setUserLogado: (userLogado: UserLogado | null) => void;
}
  
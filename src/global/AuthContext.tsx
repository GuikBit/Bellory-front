import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { UserLogado, AuthState} from "../utils/interfaces";


const AuthContext = createContext<AuthState | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userLogado, setUserLogadoState] = useState<UserLogado | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Carrega dados do localStorage ao iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem("userLogado");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserLogadoState(parsedUser);
      setToken(parsedUser.token || null);
    }
  }, []);

  // Salva no localStorage sempre que o usuário muda
  useEffect(() => {
    if (userLogado) {
      localStorage.setItem("userLogado", JSON.stringify(userLogado));
    } else {
      localStorage.removeItem("userLogado");
    }
  }, [userLogado]);

  const login = (user: UserLogado) => {
    setUserLogadoState(user);
    setToken(user.token || null);
  };

  const logout = () => {
    setUserLogadoState(null);
    setToken(null);
    localStorage.removeItem("userLogado");
  };

  const isAutenticado = () => !!userLogado;

  return (
    <AuthContext.Provider value={{ userLogado, token, login, logout, isAutenticado }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthState => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

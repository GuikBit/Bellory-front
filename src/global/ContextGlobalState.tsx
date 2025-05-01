import { createContext, ReactNode, useContext, useState } from "react";
import { GlobalState, UserLogado } from "../utils/interfaces";


const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {

    const [userLogado, setUserLogado] = useState<UserLogado | null>(null);  

    return (
        <GlobalStateContext.Provider value={{ userLogado, setUserLogado }}>
            {children}
        </GlobalStateContext.Provider>
    )
}

export const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (context === undefined) {
        throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
};
  
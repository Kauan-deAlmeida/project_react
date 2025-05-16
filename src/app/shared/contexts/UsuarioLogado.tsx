import { createContext, useCallback } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
    logout: () => void;
}

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({children}) => {

    const handleLogout = useCallback(() => {
        console.log("Logout executado")
    }, []);

    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Alex Brown', logout: handleLogout }}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
};
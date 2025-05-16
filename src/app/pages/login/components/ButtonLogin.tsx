import { useContext } from "react";
import { UsuarioLogadoContext } from "../../../shared/contexts";

interface IButtonLoginProps {
    id: string;
    onClick: () => void;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({ id, onClick, children, type }) => {
    const { nomeDoUsuario } = useContext(UsuarioLogadoContext);

    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
        >
            {nomeDoUsuario} - {children}
        </button>
    );
}
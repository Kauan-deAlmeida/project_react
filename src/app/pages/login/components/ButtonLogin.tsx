import { useUsuarioLogado } from "../../../shared/hooks";

interface IButtonLoginProps {
    id: string;
    onClick: () => void;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({ id, onClick, children, type }) => {
    const { nomeDoUsuario } = useUsuarioLogado();

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
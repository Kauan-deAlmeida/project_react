interface IButtonLoginProps {
    id: string;
    onClick: () => void;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({ id, onClick, children, type }) => {
    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
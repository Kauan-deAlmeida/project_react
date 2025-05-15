

interface IButtonLoginProps {
    onClick: () => void;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({ type, onClick, children }) => {
    return (
        <button
            id="button"
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
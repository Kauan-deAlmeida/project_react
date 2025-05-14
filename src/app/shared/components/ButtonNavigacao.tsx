import { useNavigate } from 'react-router-dom';

interface ButtonProps {
    texto: string
    pagina: string;
}

export const Button = ({ pagina, texto }: ButtonProps) => {
    const navigate = useNavigate();

    const handleClock = () => {
        navigate(pagina);
    }

    return (
        <button onClick={handleClock}>{texto}</button> 
    );
}
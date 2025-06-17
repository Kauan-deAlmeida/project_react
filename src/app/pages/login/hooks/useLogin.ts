import { useCallback, useMemo, useRef, useState } from "react";
import { useUsuarioLogado } from "../../../shared/hooks";

const useLogin = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const { nomeDoUsuario } = useUsuarioLogado();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const emailLength = useMemo(() => {
        console.log('Executou')
        return email.length * 1000;
    }, [email]);

    const handleEntrar = useCallback(() => {
        console.log(email)
        console.log(senha)
    }, [email, senha]);

    return {
        inputPasswordRef,
        nomeDoUsuario,
        email,
        senha,
        emailLength,
        setEmail,
        setSenha,
        handleEntrar
    }
}

export default useLogin;
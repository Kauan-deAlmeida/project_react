import { useCallback, useMemo, useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);

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

    return (
        <div>
            <form>
                <p>Quantidade de caracteres no email: {emailLength}</p>
                
                <InputLogin
                    id="email"
                    label="Email"
                    autocomplete="on"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                    id="senha"
                    label="Senha"
                    type="password"
                    value={senha}
                    onChange={newValue => setSenha(newValue)}
                />

                <button id="button" type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    );
}
import { useCallback, useMemo, useRef, useState } from "react";

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
                <label>
                    <span>Email</span>
                    <input
                        id="email"
                        autoComplete="on"
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' ? inputPasswordRef.current?.focus() : undefined}
                    />
                </label>

                <label>
                    <span>Senha</span>
                    <input
                        id="senha"
                        type="password"
                        value={senha}
                        ref={inputPasswordRef}
                        onChange={e => setSenha(e.target.value)}
                    />
                </label>

                <button id="button" type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    );
}
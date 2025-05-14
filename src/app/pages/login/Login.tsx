import { useEffect, useMemo, useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // useEffect(() => {
    //     console.log(email)
    // }, [email]);

    // useEffect(() => {
    //     console.log(senha)
    // }, [senha]);

    const emailLength = useMemo(() => {
        console.log('Executou')
        return email.length * 1000;
    }, [email]);

    const handleEntrar = () => {
        console.log(email)
    }

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
                    />
                </label>

                <label>
                    <span>Senha</span>
                    <input
                        id="senha"
                        type="password"
                        value={senha}
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
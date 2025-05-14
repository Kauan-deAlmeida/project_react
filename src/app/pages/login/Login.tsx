import { useEffect, useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        console.log(email)
    }, [email]);

    useEffect(() => {
        console.log(senha)
    }, [senha]);

    const handleEntrar = () => {
        console.log(email)
    }

    return (
        <div>
            <form>

                <label>
                    <span>Email</span>
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>

                <label>
                    <span>Senha</span>
                    <input
                        type="password"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                </label>

                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    );
}
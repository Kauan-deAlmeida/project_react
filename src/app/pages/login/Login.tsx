import { useCallback, useContext, useMemo, useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
import { UsuarioLogadoContext } from "../../shared/contexts";

export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const { nomeDoUsuario } = useContext(UsuarioLogadoContext);

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
                <p>{nomeDoUsuario}</p>
                <p>Quantidade de caracteres no email: {emailLength}</p>

                <InputLogin
                    id="email"
                    label="Email"
                    autocomplete="off"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                    id="senha"
                    label="Senha"
                    type="password"
                    value={senha}
                    ref={inputPasswordRef}
                    onChange={newValue => setSenha(newValue)}
                />

                <ButtonLogin id="entrar" type="button" onClick={handleEntrar}>Entrar</ButtonLogin>
            </form>
        </div>
    );
}
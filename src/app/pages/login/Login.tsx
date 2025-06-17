import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
import useLogin from "./hooks/useLogin";

export const Login = () => {
    const {
        inputPasswordRef,
        nomeDoUsuario,
        email,
        senha,
        emailLength,
        setEmail,
        setSenha,
        handleEntrar
    } = useLogin();

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
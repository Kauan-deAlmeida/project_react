import { Link } from "react-router-dom"
import { Button } from "../../shared/components/ButtonNavigacao"
import { useContext, useRef } from "react"
import { UsuarioLogadoContext } from "../../shared/contexts"

export const Dashboard = () => {

    const counterRef = useRef({ counter: 0 });
    const usuarioLogadoContext = useContext(UsuarioLogadoContext);

    return (
        <div>
            <p>{usuarioLogadoContext.nomeDoUsuario}</p>
            <p>Dashboard</p>

            <p>Contador: {counterRef.current.counter}</p>

            <button onClick={() => counterRef.current.counter++}>Somar</button>
            <button onClick={() => console.log(counterRef.current.counter)}>Somar</button>

            <Link to="/entrar">Login</Link>
            <Button
                texto="Entrar"
                pagina="/entrar"
            />
        </div>
    )
}
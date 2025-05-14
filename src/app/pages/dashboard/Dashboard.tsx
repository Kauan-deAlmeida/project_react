import { Link } from "react-router-dom"
import { Button } from "../../shared/components/ButtonNavigacao"
import { useRef } from "react"

export const Dashboard =() => {

    const counterRef = useRef({ counter: 0});

    return ( 
        <div>
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
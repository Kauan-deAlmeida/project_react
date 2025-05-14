import { Link } from "react-router-dom"
import { Button } from "../../shared/components/ButtonNavigacao"

export const Dashboard =() => {
    return ( 
        <div>
            <p>Dashboard</p>
            <Link to="/entrar">Login</Link>
            <Button
                texto="Entrar"
                pagina="/entrar"
            />
        </div>
    )
}
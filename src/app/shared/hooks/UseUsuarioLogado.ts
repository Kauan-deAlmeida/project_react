import { useContext } from "react";
import { UsuarioLogadoContext } from "../contexts"

export const useUsuarioLogado = () => {
    const usuarioLogadoContext = useContext(UsuarioLogadoContext);
    return usuarioLogadoContext;
}
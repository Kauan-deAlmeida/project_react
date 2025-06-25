import axios from "axios"

export const Api = () => {
    return axios.create({
        baseURL: 'https://projeto-exemplo-lista-produto.onrender.com',
    });
}
import { useCallback, useState } from "react"

export const Dashboard = () => {
    const [lista, setLista] = useState<string[]>(['Teste1', 'Teste2', 'Teste3']);

    const handleInputOnKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {
            if (e.currentTarget.value.trim().length === 0) return;

            const valor = e.currentTarget.value;
            e.currentTarget.value = '';

            setLista((oldLista) => {
                if (oldLista.includes(valor)) return oldLista;
                return [...oldLista, valor];
            });
        }
    }, []);

    return (
        <div>
            <p>List</p>

            <input id="inputLista" onKeyDown={handleInputOnKeyDown} />

            <ul>
                {lista.map((value, index) => {
                    return <li key={index}>{value}</li>;
                })}
            </ul>

        </div>
    )
}
import { useCallback, useState } from "react"

interface ITarefa {
    id: number;
    title: string;
    isCompleted: boolean;
}

export const Dashboard = () => {
    const [lista, setLista] = useState<ITarefa[]>([]);

    const handleInputOnKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {
            if (e.currentTarget.value.trim().length === 0) return;

            const valor = e.currentTarget.value;
            e.currentTarget.value = '';

            setLista((oldLista) => {
                if (oldLista.some((listItem) => listItem.title === valor)) return oldLista;
                
                return [...oldLista, {
                    id: oldLista.length,
                    title: valor,
                    isCompleted: false
                }];
            });
        }
    }, []);

    return (
        <div>
            <p>List</p>

            <input id="inputLista" onKeyDown={handleInputOnKeyDown} />

            <p>{lista.filter((listItem) => listItem.isCompleted).length}</p>

            <ul>
                {lista.map((listItem, index) => {
                    return <li key={index} id="liLista">
                        <input 
                            id={`checkbox-${index}`}
                            type="checkbox"
                            checked={listItem.isCompleted}
                            onChange={() => {
                                setLista((oldLista) => {
                                    return oldLista.map(oldListItem => {
                                        const newIsCompleted = oldListItem.title === listItem.title 
                                        ? !oldListItem.isCompleted 
                                        : oldListItem.isCompleted; 
                                        
                                        return {
                                            ...oldListItem,
                                            isCompleted: newIsCompleted
                                        }
                                    })
                                })
                            }} />
                        {listItem.title}
                    </li>;
                })}
            </ul>

        </div>
    )
}
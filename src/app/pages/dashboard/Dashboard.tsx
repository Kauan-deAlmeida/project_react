import { useCallback, useState } from "react"

interface IListItem {
    title: string,
    isSelected: boolean
}

export const Dashboard = () => {
    const [lista, setLista] = useState<IListItem[]>([]);

    const handleInputOnKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {
            if (e.currentTarget.value.trim().length === 0) return;

            const valor = e.currentTarget.value;
            e.currentTarget.value = '';

            setLista((oldLista) => {
                if (oldLista.some((listItem) => listItem.title === valor)) return oldLista;
                
                return [...oldLista, {
                    title: valor,
                    isSelected: false
                }];
            });
        }
    }, []);

    return (
        <div>
            <p>List</p>

            <input id="inputLista" onKeyDown={handleInputOnKeyDown} />

            <p>{lista.filter((listItem) => listItem.isSelected).length}</p>

            <ul>
                {lista.map((listItem, index) => {
                    return <li key={index} id="liLista">
                        <input 
                            id={`checkbox-${index}`}
                            type="checkbox"
                            checked={listItem.isSelected}
                            onChange={() => {
                                setLista((oldLista) => {
                                    return oldLista.map(oldListItem => {
                                        const newIsSelected = oldListItem.title === listItem.title 
                                        ? !oldListItem.isSelected 
                                        : oldListItem.isSelected; 
                                        
                                        return {
                                            ...oldListItem,
                                            isSelected: newIsSelected
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
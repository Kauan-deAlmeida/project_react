import useDashboard from "./hooks/useDashboard";

export const Dashboard = () => {
    const {
        lista,
        handleInputOnKeyDown,
        handleToggleComplete,
        handleDeletar
    } = useDashboard();

    return (
        <div>
            <p>List</p>

            <input id="inputLista" onKeyDown={handleInputOnKeyDown} />

            <p>{lista.filter((listItem) => listItem.preco === 1).length}</p>

            <ul>
                {lista.map((listItem, index) => {
                    return <li key={index} id="liLista">
                        <input
                            id={`checkbox-${index}`}
                            type="checkbox"
                            checked={listItem.preco === 1}
                            onChange={() => handleToggleComplete(listItem.id)} />

                        {listItem.nome}

                        <button onClick={() => handleDeletar(listItem.id)}>Apagar</button>
                    </li>;
                })}
            </ul>

        </div>
    )
}
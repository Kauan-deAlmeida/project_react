import { useCallback, useEffect, useState } from "react"
import { ITarefa, TarefasService } from "../../../shared/services/api/tarefas/TarefasService";
import { ApiException } from "../../../shared/services/api/ApiException";

const useDashboard = () => {
    const [lista, setLista] = useState<ITarefa[]>([]);

    useEffect(() => {
        TarefasService.getAll()
            .then((result) => {
                if (result instanceof ApiException) {
                    alert(result.message);
                } else {
                    setLista(result);
                }
            })
    }, []);

    const handleInputOnKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {
            if (e.currentTarget.value.trim().length === 0) return;

            const valor = e.currentTarget.value;
            e.currentTarget.value = '';

            if (lista.some((listItem) => listItem.title === valor)) return;

            TarefasService.create({ title: valor, isCompleted: false })
                .then((result) => {
                    if (result instanceof ApiException) {
                        alert(result.message);
                    }
                    else {
                        setLista((oldLista) => {
                            return [...oldLista, result];
                        });
                    }
                });
        }
    }, [lista]);

    const handleToggleComplete = useCallback((id: number) => {
        const tarefaToUpdate = lista.find((tarefa) => tarefa.id === id);
        if (!tarefaToUpdate) return;

        TarefasService.updateById(id, {
            ...tarefaToUpdate,
            isCompleted: !tarefaToUpdate.isCompleted
        })
            .then((result) => {
                if (result instanceof ApiException) {
                    alert(result.message);
                } else {
                    setLista(oldLista => {
                        return oldLista.map(oldListItem => {
                            if (oldListItem.id === id) return result;

                            return oldListItem;
                        })
                    })
                }
            })
    }, [lista]);

    const handleDeletar = useCallback((id: number) => {
        TarefasService.deleteById(id)
            .then((result) => {
                if (result instanceof ApiException) {
                    alert(result.message);
                } else {
                    setLista(oldLista => {
                        return oldLista.filter(oldListItem => oldListItem.id !== id);
                    })
                }
            })
    }, []);

    return {
        lista,
        handleInputOnKeyDown,
        handleToggleComplete,
        handleDeletar,
    };
}

export default useDashboard;
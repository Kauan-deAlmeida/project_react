import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

export interface ITarefa {
    id: number;
    title: string;
    isCompleted: boolean;
}

const getAll = async (): Promise<ITarefa[] | ApiException> => {
    try{
        const { data } = await Api().get('/tarefas');
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao buscar todas as tarefas.');
    }
};

const getById = async (id: number): Promise<ITarefa | ApiException> => {
    try{
        const { data } = await Api().get(`/tarefas/${id}`);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || `Erro ao buscar a tarefa de ID ${id}.`);
    }
};

const create = async (dataToCreate: Omit<ITarefa, "id">): Promise<ITarefa | ApiException> => {
    try{
        const { data } = await Api().post<any>('/tarefas', dataToCreate);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao criar a tarefa.');
    }
};

const updateById = async (id: number, dataToUpdate: ITarefa): Promise<ITarefa | ApiException> => {
    try{
        const { data } = await Api().put(`/tarefas/${id}`, dataToUpdate);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || `Erro ao atualizar a tarefa com ID ${id}.`);
    }
};

const deleteById = async (id: number): Promise<undefined | ApiException> => {
    try{
        await Api().delete(`/tarefas/${id}`);
        return undefined;
    } catch (error: any) {
        return new ApiException(error.message || `Erro ao deletar a tarefa com ID ${id}.`);
    }
};

export const TarefasService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}
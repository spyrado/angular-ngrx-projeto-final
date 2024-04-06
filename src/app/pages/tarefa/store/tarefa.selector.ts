import { IAppState } from "../../../store/app.state";

export const carregaTarefas = (state: IAppState) => state.tarefas.data;
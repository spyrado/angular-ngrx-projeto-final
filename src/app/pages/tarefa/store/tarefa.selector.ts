import { IAppState } from "../../../store/app.state";

const carregarTarefas = (state: IAppState) => state.tarefas.data;

export const tarefaSelectors = {
  carregarTarefas
}
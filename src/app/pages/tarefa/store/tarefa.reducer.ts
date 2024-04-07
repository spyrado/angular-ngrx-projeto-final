import { createReducer, on } from "@ngrx/store";
import { IPayloadReducer, ITarefa } from "../../../interfaces";
import { EtapaEnum, StatusEnum } from "../../../enums";
import { tarefaActions } from "./tarefa.actions";

const initialState: IPayloadReducer<ITarefa[]> = {
  data: [],
  error: null,
  status: StatusEnum.pendente
};

export const tarefaReducer = createReducer(
  initialState,
  on(tarefaActions.carregarTarefas, (state) => {
    return {
      ...state,
      status: StatusEnum.carregando
    }
  }),
  on(tarefaActions.tarefasCarregadasComSucesso, (state, data) => {
    console.log('tarefasCarregadasComSucesso ')
    return {
      ...state,
      data: [...state.data, ...data.tarefas],
      status: StatusEnum.sucesso
    }
  }),
  on(tarefaActions.iniciarTarefa, (state, tarefa) => {
    const novoEstado = {...state};
    novoEstado.data = novoEstado.data.filter(item => item.id !== tarefa.id);
    const tarefaAtualizada: ITarefa = {
      ...tarefa, 
      etapa: EtapaEnum.INICIADA 
    };
    return {
      ...novoEstado,
      data: [
        ...novoEstado.data,
        tarefaAtualizada,
      ],
      status: StatusEnum.carregando
    };
  })
)
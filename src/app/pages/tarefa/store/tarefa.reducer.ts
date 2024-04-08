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
    return {
      ...state,
      status: StatusEnum.carregando
    };
  }),
  on(tarefaActions.tarefaIniciadaComSucesso, (state, tarefa) => {
    const tarefas = state.data.filter(item => item.id !== tarefa.id);
    tarefas.push(tarefa);
    return {
      ...state,
      data: [...tarefas],
      status: StatusEnum.sucesso
    };
  }),
  on(tarefaActions.deletaTarefa, (state) => {
    return {
      ...state,
      status: StatusEnum.carregando
    };
  }),
  on(tarefaActions.tarefaDeletadaComSucesso, (state, data) => {
    const tarefas = state.data.filter(tarefa => tarefa.id !== data.id);
    return {
      ...state,
      data: [...tarefas],
      status: StatusEnum.sucesso
    };
  }),
  on(tarefaActions.tarefaFinalizadaComSucesso, (state, tarefa) => {
    const tarefas = state.data.filter(item => item.id !== tarefa.id);
    return {
      ...state,
      data: [...tarefas, tarefa],
      status: StatusEnum.sucesso
    }
  }),
  on(tarefaActions.tarefaRetornadaComSucesso, (state, tarefa) => {
    const tarefas = state.data.filter(item => item.id !== tarefa.id);
    return {
      ...state,
      data: [...tarefas, tarefa],
      status: StatusEnum.sucesso
    }
  }),
  on(tarefaActions.tarefaCadastradaComSucesso, (state, tarefa) => {
    return {
      ...state,
      data: [...state.data, tarefa],
      status: StatusEnum.sucesso
    }
  }),
)
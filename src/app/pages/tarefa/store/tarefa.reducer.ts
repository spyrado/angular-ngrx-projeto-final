import { createReducer, on } from "@ngrx/store";
import { IPayloadReducer as IPayloadReducer, ITarefa } from "../../../interfaces";
import { StatusEnum } from "../../../enums";
import { tarefaActions } from "./tarefa.actions";

const initialState: IPayloadReducer<ITarefa[]> = {
  data: [],
  error: null,
  status: StatusEnum.carregando
};

export const tarefaReducer = createReducer(
  initialState,
  on(tarefaActions.carregaTarefas, (state) => {
    console.log('CARREGANDO TAREFAS')
    return {
      ...state,
      data: tarefas
    }
  })
)

const tarefas: ITarefa[] = [
  {
    etapa: 'backlog',
    nome: 'passear com o cachorro'
  }
];
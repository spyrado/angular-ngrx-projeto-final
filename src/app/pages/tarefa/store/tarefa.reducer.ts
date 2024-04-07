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
  on(tarefaActions.carregaTarefas, (state) => {
    console.log('CARREGANDO TAREFAS')
    return {
      ...state,
      data: tarefas,
      status: StatusEnum.carregando
    }
  }),
  on(tarefaActions.iniciarTarefa, (state, tarefa) => {
    console.log("state: ", state);
    console.log("tarefa: ", tarefa);
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

const tarefas: ITarefa[] = [
  {
    id: 1,
    etapa: EtapaEnum.BACKLOG,
    nome: 'passear com o cachorro'
  },
  {
    id: 2,
    etapa: EtapaEnum.INICIADA,
    nome: 'estudar'
  },
];
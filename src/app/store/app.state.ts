import { IPayloadReducer, ITarefa } from "../interfaces";


export interface IAppState {
  tarefas: IPayloadReducer<ITarefa[]>;
}
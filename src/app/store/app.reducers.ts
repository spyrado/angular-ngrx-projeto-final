import { ActionReducerMap } from "@ngrx/store";
import { tarefaReducer } from "../pages/tarefa/store/tarefa.reducer";
import { IAppState } from "./app.state";

export const appReducers: ActionReducerMap<IAppState> = {
  tarefas: tarefaReducer
}
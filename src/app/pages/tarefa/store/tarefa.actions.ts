import { createAction, props } from "@ngrx/store";
import { ITarefa } from "../../../interfaces";

const carregaTarefas = createAction('[TAREFA] carrega tarefas');
const cadastraTarefa = createAction('[TAREFA] cadastra tarefa');
const iniciarTarefa = createAction('[TAREFA] inicia tarefa', props<ITarefa>());
const deletaTarefa = createAction('[TAREFA] deleta tarefa');

export const tarefaActions = {
  carregaTarefas,
  cadastraTarefa,
  iniciarTarefa,
  deletaTarefa
};
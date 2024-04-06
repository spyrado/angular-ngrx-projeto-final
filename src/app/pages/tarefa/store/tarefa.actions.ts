import { createAction } from "@ngrx/store";

const carregaTarefas = createAction('[TAREFA] carrega tarefas');
const cadastraTarefa = createAction('[TAREFA] cadastra tarefa');
const atualizaTarefa = createAction('[TAREFA] atualiza tarefa');
const deletaTarefa = createAction('[TAREFA] deleta tarefa');

export const tarefaActions = {
  carregaTarefas,
  cadastraTarefa,
  atualizaTarefa,
  deletaTarefa
};
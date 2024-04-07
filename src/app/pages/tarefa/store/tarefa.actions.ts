import { createAction, props } from "@ngrx/store";
import { ITarefa } from "../../../interfaces";

const carregarTarefas = createAction('[TAREFA] carrega tarefas');
const tarefasCarregadasComSucesso = createAction('[TAREFA] tarefas carregadas com sucesso', props<{ tarefas: ITarefa[] }>());
const cadastraTarefa = createAction('[TAREFA] cadastra tarefa');
const iniciarTarefa = createAction('[TAREFA] inicia tarefa', props<ITarefa>());
const deletaTarefa = createAction('[TAREFA] deleta tarefa');

export const tarefaActions = {
  carregarTarefas,
  tarefasCarregadasComSucesso,
  cadastraTarefa,
  iniciarTarefa,
  deletaTarefa
};
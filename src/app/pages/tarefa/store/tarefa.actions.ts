import { createAction, props } from "@ngrx/store";
import { ITarefa } from "../../../interfaces";

const carregarTarefas = createAction('[TAREFA] carrega tarefas');
const tarefasCarregadasComSucesso = createAction('[TAREFA] tarefas carregadas com sucesso', props<{ tarefas: ITarefa[] }>());
const cadastraTarefa = createAction('[TAREFA] cadastra tarefa');
const iniciarTarefa = createAction('[TAREFA] inicia tarefa', props<ITarefa>());
const finalizaTarefa = createAction('[TAREFA] finaliza tarefa', props<ITarefa>());
const tarefaFinalizadaComSucesso = createAction('[TAREFA] tarefa finalizada com sucesso', props<ITarefa>());
const tarefaIniciadaComSucesso = createAction('[TAREFA] tarefa iniciada com sucesso', props<ITarefa>());
const retornarTarefa = createAction('[TAREFA] retornar tarefa', props<ITarefa>());
const tarefaRetornadaComSucesso = createAction('[TAREFA] tarefa retornada com sucesso', props<ITarefa>());
const deletaTarefa = createAction('[TAREFA] deleta tarefa', props<{ id: number }>());
const tarefaDeletadaComSucesso = createAction('[TAREFA] tarefa deletada com sucesso', props<{ id: number }>());

export const tarefaActions = {
  carregarTarefas,
  tarefasCarregadasComSucesso,
  cadastraTarefa,
  iniciarTarefa,
  tarefaIniciadaComSucesso,
  finalizaTarefa,
  tarefaFinalizadaComSucesso,
  retornarTarefa,
  tarefaRetornadaComSucesso,
  deletaTarefa,
  tarefaDeletadaComSucesso
};
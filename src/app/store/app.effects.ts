import { tarefaEffects } from "../pages/tarefa/store/tarefa.effects";

export const appEffects = { 
  carregarTarefasEffect: tarefaEffects.carregarTarefasEffect,
  iniciarTarefaEffect: tarefaEffects.iniciarTarefaEffect,
  deletaTarefaEffect: tarefaEffects.deletaTarefaEffect,
  finalizaTarefaEffect: tarefaEffects.finalizaTarefaEffect,
  tarefaRetornadaEffect: tarefaEffects.tarefaRetornadaEffect,
  cadastraTarefaEffect: tarefaEffects.cadastraTarefaEffect,
}
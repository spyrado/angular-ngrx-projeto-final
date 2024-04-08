import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TarefaService } from "../../../services/tarefa/tarefa.service";
import { tarefaActions } from "./tarefa.actions";
import { map, of, switchMap, tap } from "rxjs";
import { EtapaEnum } from "../../../enums";
import { ITarefa } from "../../../interfaces";

const carregarTarefasEffect = createEffect(
  (actions$ = inject(Actions), tarefaService = inject(TarefaService)) => {
    return actions$
      .pipe(
        tap(() => console.log('passei nos effects')),
        ofType(tarefaActions.carregarTarefas),
        switchMap(
          () => tarefaService.carregarTarefas()
            .pipe(map(tarefas => tarefaActions.tarefasCarregadasComSucesso({ tarefas })))
        ),
      )
  },
  {
    functional: true
  }
);

const iniciarTarefaEffect = createEffect(
  (actions$ = inject(Actions), tarefaService = inject(TarefaService)) => {
    return actions$
      .pipe(
        ofType(tarefaActions.iniciarTarefa),
        tap(tarefa => console.log("TAREFA EFFECT", tarefa)),
        map(tarefa => {
          const tarefaIniciada = {...tarefa};
          tarefaIniciada.etapa = EtapaEnum.INICIADA;
          return tarefaIniciada;
        }),
        switchMap((tarefa) => 
          tarefaService.atualiza(tarefa)
          .pipe(map(tarefa => tarefaActions.tarefaIniciadaComSucesso(tarefa)))
        ),
      )
  },
  {
    functional: true
  }
);


const deletaTarefaEffect = createEffect(
  (actions$ = inject(Actions), tarefaService = inject(TarefaService)) => {
    return actions$
      .pipe(
        ofType(tarefaActions.deletaTarefa),
        switchMap((data) => 
          tarefaService.deletar(data.id)
          .pipe(map(() => tarefaActions.tarefaDeletadaComSucesso(data)))
        ),
      )
  },
  {
    functional: true
  }
);

const finalizaTarefaEffect = createEffect(
  (actions$ = inject(Actions), tarefaService = inject(TarefaService)) => {
    return actions$
      .pipe(
        ofType(tarefaActions.finalizaTarefa),
        map(tarefa => {
          const tarefaFinalizada = { ...tarefa };
          tarefaFinalizada.etapa = EtapaEnum.FINALIZADA;
          return tarefaFinalizada
        }),
        switchMap((tarefa) => 
          tarefaService.atualiza(tarefa)
            .pipe(map(() => tarefaActions.tarefaFinalizadaComSucesso(tarefa)))
        ),
      )
  },
  {
    functional: true
  }
);

const tarefaRetornadaEffect = createEffect(
  (actions$ = inject(Actions), tarefaService = inject(TarefaService)) => {
    return actions$
      .pipe(
        ofType(tarefaActions.retornarTarefa),
        map(tarefa => retornaEtapa(tarefa)),
        switchMap((tarefa) => 
          tarefaService.atualiza(tarefa)
            .pipe(map(() => tarefaActions.tarefaRetornadaComSucesso(tarefa)))
        ),
      )
  },
  {
    functional: true
  }
);

const cadastraTarefaEffect = createEffect(
  (actions$ = inject(Actions), tarefaService = inject(TarefaService)) => {
    return actions$
      .pipe(
        ofType(tarefaActions.cadastraTarefa),
        switchMap((tarefa) => 
          tarefaService.cria(tarefa)
            .pipe(map((novaTarefa) => tarefaActions.tarefaCadastradaComSucesso(novaTarefa)))
        ),
      )
  },
  {
    functional: true
  }
);

function retornaEtapa(tarefa: ITarefa): ITarefa {
  const tarefaRetornada = { ...tarefa };
  if(tarefa.etapa === EtapaEnum.INICIADA) {
    tarefaRetornada.etapa = EtapaEnum.BACKLOG;
  }
  return tarefaRetornada;
}

export const tarefaEffects = {
  carregarTarefasEffect,
  iniciarTarefaEffect,
  deletaTarefaEffect,
  finalizaTarefaEffect,
  tarefaRetornadaEffect,
  cadastraTarefaEffect
};
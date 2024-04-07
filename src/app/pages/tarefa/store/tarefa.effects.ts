import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TarefaService } from "../../../services/tarefa.service";
import { tarefaActions } from "./tarefa.actions";
import { map, switchMap, tap } from "rxjs";

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

export const tarefaEffects = {
  carregarTarefasEffect
};
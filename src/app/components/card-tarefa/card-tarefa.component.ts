import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
import { ITarefa } from '../../interfaces';
import { Store } from '@ngrx/store';
import { carregaTarefas } from '../../pages/tarefa/store/tarefa.selector';
import { CommonModule } from '@angular/common';
import { tarefaActions } from '../../pages/tarefa/store/tarefa.actions';
import { IAppState } from '../../store/app.state';
import { EtapaEnum } from '../../enums';
import { FiltraPorEtapaPipe } from "../../pipes/filtra-por-etapa.pipe";

@Component({
    selector: 'app-card-tarefa',
    standalone: true,
    templateUrl: './card-tarefa.component.html',
    styleUrl: './card-tarefa.component.scss',
    imports: [CommonModule, FiltraPorEtapaPipe]
})
export class CardTarefaComponent implements AfterViewInit, OnInit {

  @Input() titulo: string = '';
  @Input({ required: true }) etapa!: EtapaEnum;

  public tarefas$ = this._store.select<ITarefa[]>(carregaTarefas);
  public EtapaEnum = EtapaEnum;

  constructor(private _store: Store<IAppState>) {}

  ngOnInit(): void {
    this._store.dispatch(tarefaActions.carregaTarefas());
  }

  ngAfterViewInit(): void {
    feather.replace();
  }

  public iniciarTarefa(tarefa: ITarefa): void {
    this._store.dispatch(tarefaActions.iniciarTarefa(tarefa));
  }
}

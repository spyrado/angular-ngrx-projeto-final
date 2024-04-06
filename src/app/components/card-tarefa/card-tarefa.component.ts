import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
import { ITarefa } from '../../interfaces';
import { Store } from '@ngrx/store';
import { carregaTarefas } from '../../pages/tarefa/store/tarefa.selector';
import { CommonModule } from '@angular/common';
import { tarefaActions } from '../../pages/tarefa/store/tarefa.actions';
import { IAppState } from '../../store/app.state';

@Component({
  selector: 'app-card-tarefa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-tarefa.component.html',
  styleUrl: './card-tarefa.component.scss'
})
export class CardTarefaComponent implements AfterViewInit, OnInit {

  @Input() titulo: string = '';

  public tarefas$ = this._store.select<ITarefa[]>(carregaTarefas);

  constructor(private _store: Store<IAppState>) {}

  ngOnInit(): void {
    this._store.dispatch(tarefaActions.carregaTarefas());
  }

  ngAfterViewInit(): void {
    feather.replace();
  }
}

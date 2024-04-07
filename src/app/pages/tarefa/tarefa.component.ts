import { Component } from '@angular/core';
import { CardTarefaComponent } from '../../components/card-tarefa/card-tarefa.component';
import { EtapaEnum } from '../../enums';
import { tarefaSelectors } from './store/tarefa.selector';
import { Store } from '@ngrx/store';
import { ITarefa } from '../../interfaces';
import { IAppState } from '../../store/app.state';
import { tarefaActions } from './store/tarefa.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [CardTarefaComponent, CommonModule],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.scss'
})
export class TarefaComponent {

  public EtapaEnum = EtapaEnum;
  public tarefas$ = this._store.select<ITarefa[]>(tarefaSelectors.carregarTarefas);

  constructor(private _store: Store<IAppState>) {}

  ngOnInit(): void {
    this._store.dispatch(tarefaActions.carregarTarefas());
  }
  
}

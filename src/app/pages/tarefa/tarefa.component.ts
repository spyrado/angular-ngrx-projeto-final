import { Component } from '@angular/core';
import { CardTarefaComponent } from '../../components/card-tarefa/card-tarefa.component';
import { EtapaEnum } from '../../enums';
import { tarefaSelectors } from './store/tarefa.selector';
import { Store } from '@ngrx/store';
import { ITarefa } from '../../interfaces';
import { IAppState } from '../../store/app.state';
import { tarefaActions } from './store/tarefa.actions';
import { CommonModule } from '@angular/common';
import { AlertaService } from '../../services/alerta/alerta.service';
import { CadastrarTarefaComponent } from '../../cadastrar-tarefa/cadastrar-tarefa.component';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [CardTarefaComponent, CommonModule, CadastrarTarefaComponent],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.scss'
})
export class TarefaComponent {

  public EtapaEnum = EtapaEnum;
  public tarefas$ = this._store.select<ITarefa[]>(tarefaSelectors.carregarTarefas);

  constructor(
    private _store: Store<IAppState>,
    public alertaService: AlertaService
  ) {}

  ngOnInit(): void {
    this._store.dispatch(tarefaActions.carregarTarefas());
  }
  
}

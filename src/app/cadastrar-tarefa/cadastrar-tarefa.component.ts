import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IAppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { tarefaActions } from '../pages/tarefa/store/tarefa.actions';
import { ITarefa } from '../interfaces';
import { EtapaEnum } from '../enums';

@Component({
  selector: 'app-cadastrar-tarefa',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrl: './cadastrar-tarefa.component.scss'
})
export class CadastrarTarefaComponent {

  public nomeTarefa?: string;

  constructor(private _store: Store<IAppState>) {}

  public cadastrarTarefa(nomeTarefa?: string): void {
    if(!nomeTarefa) { console.error('SEM NOME PARA CADASTRAR'); return; }
    const tarefa = {
      etapa: EtapaEnum.BACKLOG,
      nome: nomeTarefa
    } as ITarefa;
    this._store.dispatch(tarefaActions.cadastraTarefa(tarefa))
  }
}

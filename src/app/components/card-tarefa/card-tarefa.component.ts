import { Component, Input } from '@angular/core';
import { ITarefa } from '../../interfaces';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { tarefaActions } from '../../pages/tarefa/store/tarefa.actions';
import { IAppState } from '../../store/app.state';
import { EtapaEnum } from '../../enums';
import { FiltraPorEtapaPipe } from "../../pipes/filtra-por-etapa.pipe";
import { IconsModule } from '../../modules/icons/icons.module';

@Component({
    selector: 'app-card-tarefa',
    standalone: true,
    templateUrl: './card-tarefa.component.html',
    styleUrl: './card-tarefa.component.scss',
    imports: [CommonModule, FiltraPorEtapaPipe, IconsModule]
})
export class CardTarefaComponent {

  @Input() titulo: string = '';
  @Input({ required: true }) etapa!: EtapaEnum;
  @Input() tarefas: ITarefa[] = [];
  
  public EtapaEnum = EtapaEnum;

  constructor(private _store: Store<IAppState>) {}

  public iniciarTarefa(tarefa: ITarefa): void {
    this._store.dispatch(tarefaActions.iniciarTarefa(tarefa));
  }
}

import { Component } from '@angular/core';
import { CardTarefaComponent } from '../../components/card-tarefa/card-tarefa.component';
import { EtapaEnum } from '../../enums';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [CardTarefaComponent],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.scss'
})
export class TarefaComponent {

  public EtapaEnum = EtapaEnum;
  
}

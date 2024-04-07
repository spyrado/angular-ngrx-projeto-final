import { Pipe, PipeTransform } from '@angular/core';
import { ITarefa } from '../interfaces';
import { EtapaEnum } from '../enums';

@Pipe({
  name: 'filtraPorEtapa',
  standalone: true
})
export class FiltraPorEtapaPipe implements PipeTransform {

  transform(tarefas: ITarefa[] | null, etapa: EtapaEnum): ITarefa[] {
    let tarefasFiltradasPorEtapa: ITarefa[] = [];
    if(!tarefas?.length) { return []; }
    tarefasFiltradasPorEtapa = tarefas.filter(tarefa => tarefa.etapa === etapa);
    return tarefasFiltradasPorEtapa;
  }

}

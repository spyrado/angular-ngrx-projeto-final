import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITarefa } from '../../interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  

  constructor(private _http: HttpClient) { }

  public carregarTarefas(): Observable<ITarefa[]> {
    return this._http.get<ITarefa[]>(`${environment.baseUrlApi}/tarefas`);
  }

  public atualiza(tarefa: ITarefa) {
    return this._http.put<ITarefa>(`${environment.baseUrlApi}/tarefas/${tarefa.id}`, tarefa);
  }

  public deletar(id: number) {
    return this._http.delete<ITarefa>(`${environment.baseUrlApi}/tarefas/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITarefa } from '../interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private _http: HttpClient) { }

  public buscaTarefas(): Observable<ITarefa[]> {
    return this._http.get<ITarefa[]>(`${environment.baseUrlApi}/tarefas`);
  }
}

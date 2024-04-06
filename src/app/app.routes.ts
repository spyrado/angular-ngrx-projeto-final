import { Routes } from '@angular/router';
import { TarefaComponent } from './pages/tarefa/tarefa.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tarefas',
    pathMatch: 'full'
  },
  {
    path: 'tarefas',
    component: TarefaComponent
  },
];

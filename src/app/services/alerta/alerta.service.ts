import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  public exibeAlerta = false;

  constructor() { }

  exibir() {
    this.exibeAlerta = true;
  }

  ocultar() {
    this.exibeAlerta = false;
  }


}

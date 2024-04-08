import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { AlertaService } from "../services/alerta/alerta.service";

export const errorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  
  const alertaService = inject(AlertaService);

  return next(req)
    .pipe(catchError(error => {
      
      alertaService.exibeAlerta = true;
      setTimeout(() => alertaService.exibeAlerta = false, 3000);
      console.log("erro aqui: ", error);
      return throwError(() => new Error(error));
    }));
};
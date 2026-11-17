
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  
  public usuario = 'admin';
  public clave = '123456';

  
  public nombreUsuario = 'Alex Loor';

  private usuarioSubject =
    new BehaviorSubject<string | null>(null);

  usuarioActual$ = this.usuarioSubject.asObservable();

  get usuarioActual(): string | null {
    return this.usuarioSubject.value;
  }

  validarLogin(usuario: string, clave: string): boolean {

    if (
      usuario === this.usuario &&
      clave === this.clave
    ) {
      this.usuarioSubject.next(this.nombreUsuario);
      return true;
    }

    return false;
  }

  cerrarSesion(): void {
    this.usuarioSubject.next(null);
  }
}

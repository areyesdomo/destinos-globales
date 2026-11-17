
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [],
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.css'
})
export class Encabezado {

  constructor(
    public auth: Auth,
    private router: Router
  ) {}

  get nombreUsuario(): string | null {
    return this.auth.usuarioActual;
  }

  cerrarSesion(): void {
    this.auth.cerrarSesion();
    this.router.navigate(['/login']);
  }
}

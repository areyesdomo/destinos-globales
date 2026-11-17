
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  constructor(
    public auth: Auth,
    private router: Router
  ) {
    
    if (!this.auth.usuarioActual) {
      this.router.navigate(['/login']);
    }
  }

  get nombreUsuario(): string {
    return this.auth.usuarioActual ?? 'Administrador';
  }

  cerrarSesion(): void {
    this.auth.cerrarSesion();
    this.router.navigate(['/login']);
  }
}

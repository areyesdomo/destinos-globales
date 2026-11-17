
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  mostrarAlerta = false;
  tituloAlerta = '';
  mensajeAlerta = '';
  tipoAlerta: 'error' | 'success' = 'success';

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  validarAcceso(usuario: string, clave: string): void {

    if (!usuario.trim() || !clave.trim()) {
      this.tipoAlerta = 'error';
      this.tituloAlerta = 'Campos incompletos';
      this.mensajeAlerta =
        'Por favor, ingrese su usuario y contraseña.';
      this.mostrarAlerta = true;
      return;
    }

    const acceso = this.auth.validarLogin(usuario.trim(), clave);

    if (acceso) {

      this.tipoAlerta = 'success';
      this.tituloAlerta = 'Acceso concedido';
      this.mensajeAlerta =
        'Bienvenido a Destinos Globales. Redirigiendo...';

      this.mostrarAlerta = true;

      setTimeout(() => {
        this.router.navigateByUrl('/dashboard');
      }, 1000);

    } else {

      this.tipoAlerta = 'error';
      this.tituloAlerta = 'Error en credenciales';
      this.mensajeAlerta =
        'El usuario o la contraseña son incorrectos.';

      this.mostrarAlerta = true;
    }
  }

  cerrarAlerta(): void {
    this.mostrarAlerta = false;
  }
}

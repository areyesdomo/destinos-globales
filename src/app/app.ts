
import { Component } from '@angular/core';
import {
  Router,
  RouterOutlet,
  NavigationEnd
} from '@angular/router';

import { Encabezado } from './components/encabezado/encabezado';
import { PiePagina } from './components/pie-pagina/pie-pagina';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Encabezado,
    PiePagina
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  mostrarEncabezadoPie = false;

  constructor(private router: Router) {

    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {

        this.mostrarEncabezadoPie =
          event.urlAfterRedirects === '/login';

      }

    });

  }
}

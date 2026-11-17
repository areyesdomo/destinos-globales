
import { Routes } from '@angular/router';

import { Login } from './components/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Reservas } from './pages/reservas/reservas';
import { Paquetes } from './pages/paquetes/paquetes';
import { Clientes } from './pages/clientes/clientes';
import { Reportes } from './pages/reportes/reportes';
import { Usuarios } from './pages/usuarios/usuarios';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'reservas', component: Reservas },
  { path: 'paquetes', component: Paquetes },
  { path: 'clientes', component: Clientes },
  { path: 'reportes', component: Reportes },
  { path: 'usuarios', component: Usuarios },

  { path: '**', redirectTo: 'login' }
];

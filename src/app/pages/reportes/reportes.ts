import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DialogReporte, Reporte } from '../../components/dialog-reporte/dialog-reporte';

interface Metric {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
  accent: string;
}

interface RevenuePoint {
  month: string;
  sales: number;
}

interface DistributionItem {
  name: string;
  value: number;
  total: string;
  color: string;
}

interface DestinationRow {
  destino: string;
  ventas: string;
  reservas: number;
  crecimiento: string;
}

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogReporte],
  styleUrl: './reportes.css',
  templateUrl: './reportes.html',
})
export class Reportes {
  periodos = ['Semana', 'Mes', 'Trimestre', 'Año'];
  periodoActual = 'Mes';
  filtro = '';
  dialogAbierto = false;
  creandoReporte = false;
  reporteSeleccionado: Reporte | null = null;

  reportes: Reporte[] = [
    {
      id: 1,
      codigo: 'RES-1042',
      cliente: 'Ana García',
      destino: 'París',
      fecha: '2026-11-12',
      paquete: 'Paquete Europa',
      estado: 'Confirmada',
      monto: 2450,
    },
    {
      id: 2,
      codigo: 'RES-1188',
      cliente: 'Luis Alberto',
      destino: 'Bali',
      fecha: '2026-11-15',
      paquete: 'Aventura Tropical',
      estado: 'Pendiente',
      monto: 3200,
    },
    {
      id: 3,
      codigo: 'RES-1204',
      cliente: 'María López',
      destino: 'Roma',
      fecha: '2026-11-18',
      paquete: 'Historia y Cultura',
      estado: 'Finalizada',
      monto: 1970,
    },
    {
      id: 4,
      codigo: 'RES-1276',
      cliente: 'Daniel Ruiz',
      destino: 'Cancún',
      fecha: '2026-11-20',
      paquete: 'Vacaciones Familiares',
      estado: 'Confirmada',
      monto: 2880,
    },
    {
      id: 5,
      codigo: 'RES-1301',
      cliente: 'Sofía Torres',
      destino: 'Tokio',
      fecha: '2026-11-25',
      paquete: 'Rutas Modernas',
      estado: 'Pendiente',
      monto: 4050,
    },
  ];

  metricas: Metric[] = [
    {
      label: 'Ingresos totales',
      value: '$284.6K',
      change: '+18.4%',
      trend: 'up',
      icon: '💰',
      accent: 'accent-emerald',
    },
    {
      label: 'Reservas confirmadas',
      value: '1,248',
      change: '+12.1%',
      trend: 'up',
      icon: '📅',
      accent: 'accent-blue',
    },
    {
      label: 'Nuevos clientes',
      value: '356',
      change: '+8.7%',
      trend: 'up',
      icon: '👥',
      accent: 'accent-violet',
    },
    {
      label: 'Tasa de conversión',
      value: '68.2%',
      change: '-2.1%',
      trend: 'down',
      icon: '📈',
      accent: 'accent-amber',
    },
  ];

  ingresosMensuales: RevenuePoint[] = [
    { month: 'Ene', sales: 32 },
    { month: 'Feb', sales: 38 },
    { month: 'Mar', sales: 42 },
    { month: 'Abr', sales: 48 },
    { month: 'May', sales: 54 },
    { month: 'Jun', sales: 62 },
    { month: 'Jul', sales: 58 },
    { month: 'Ago', sales: 72 },
    { month: 'Sep', sales: 66 },
    { month: 'Oct', sales: 76 },
    { month: 'Nov', sales: 80 },
    { month: 'Dic', sales: 88 },
  ];

  distribucion: DistributionItem[] = [
    { name: 'Tours de lujo', value: 42, total: '$124K', color: 'cyan' },
    { name: 'Aventura', value: 28, total: '$82K', color: 'blue' },
    { name: 'Vacaciones familiares', value: 21, total: '$61K', color: 'violet' },
    { name: 'Cruceros', value: 9, total: '$17K', color: 'amber' },
  ];

  topDestinos: DestinationRow[] = [
    { destino: 'París', ventas: '$48,200', reservas: 154, crecimiento: '+14%' },
    { destino: 'Bali', ventas: '$42,600', reservas: 132, crecimiento: '+11%' },
    { destino: 'Roma', ventas: '$38,900', reservas: 117, crecimiento: '+9%' },
    { destino: 'Cancún', ventas: '$33,700', reservas: 103, crecimiento: '+7%' },
    { destino: 'Tokio', ventas: '$29,400', reservas: 82, crecimiento: '+12%' },
  ];

  actividades = [
    { titulo: 'Reporte de reservas de junio', detalle: 'Generado por el equipo de ventas', hora: 'Hace 2 horas' },
    { titulo: 'Análisis de clientes recurrentes', detalle: 'Se detectó un aumento del 9% en renovación', hora: 'Hoy, 09:40' },
    { titulo: 'Presupuesto de marketing', detalle: 'Se revisó la campaña de canales digitales', hora: 'Ayer' },
    { titulo: 'Comparativo por destinos', detalle: 'Se exportó la base del último trimestre', hora: 'Lunes' },
  ];

  get reportesFiltrados(): Reporte[] {
    const texto = this.filtro.trim().toLowerCase();

    if (!texto) {
      return this.reportes;
    }

    return this.reportes.filter((reporte) =>
      [reporte.codigo, reporte.cliente, reporte.destino, reporte.paquete, reporte.estado]
        .join(' ')
        .toLowerCase()
        .includes(texto)
    );
  }

  seleccionarPeriodo(periodo: string): void {
    this.periodoActual = periodo;
  }

  abrirDialog(reporte: Reporte): void {
    this.creandoReporte = false;
    this.reporteSeleccionado = { ...reporte };
    this.dialogAbierto = true;
  }

  abrirDialogNuevo(): void {
    this.creandoReporte = true;
    this.reporteSeleccionado = null;
    this.dialogAbierto = true;
  }

  cerrarDialog(): void {
    this.dialogAbierto = false;
    this.creandoReporte = false;
    this.reporteSeleccionado = null;
  }

  guardarReporte(reporteActualizado: Reporte): void {
    if (this.creandoReporte) {
      const nuevoId = Math.max(0, ...this.reportes.map((reporte) => reporte.id)) + 1;
      this.reportes = [...this.reportes, { ...reporteActualizado, id: nuevoId }];
    } else {
      this.reportes = this.reportes.map((reporte) =>
        reporte.id === reporteActualizado.id ? reporteActualizado : reporte
      );
    }

    this.cerrarDialog();
  }

  eliminarReporte(id: number): void {
    this.reportes = this.reportes.filter((reporte) => reporte.id !== id);
  }
}

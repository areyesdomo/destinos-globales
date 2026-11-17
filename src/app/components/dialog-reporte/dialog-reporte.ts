import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Reporte {
  id: number;
  codigo: string;
  cliente: string;
  destino: string;
  fecha: string;
  paquete: string;
  estado: 'Confirmada' | 'Pendiente' | 'Finalizada';
  monto: number;
}

@Component({
  selector: 'app-dialog-reporte',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dialog-reporte.html',
  styleUrl: './dialog-reporte.css',
})
export class DialogReporte implements OnChanges {
  @Input() reporte: Reporte | null = null;
  @Output() cerrar = new EventEmitter<void>();
  @Output() guardar = new EventEmitter<Reporte>();

  formData: Reporte = {
    id: 0,
    codigo: '',
    cliente: '',
    destino: '',
    fecha: '',
    paquete: '',
    estado: 'Pendiente',
    monto: 0,
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['reporte']) {
      this.formData = this.reporte
        ? { ...this.reporte }
        : {
            id: 0,
            codigo: '',
            cliente: '',
            destino: '',
            fecha: '',
            paquete: '',
            estado: 'Pendiente',
            monto: 0,
          };
    }
  }

  cancelar(): void {
    this.cerrar.emit();
  }

  guardarCambios(): void {
    const payload: Reporte = {
      ...this.formData,
      monto: Number(this.formData.monto),
    };

    this.guardar.emit(payload);
    this.cerrar.emit();
  }
}

import { Component, OnInit } from '@angular/core';
import { habitacionDto } from 'src/app/model/habitacionDto';
import { turnoDto } from 'src/app/model/turnoDto';
import { HabitacionService } from 'src/app/service/habitacion.service';
import { TurnosService } from 'src/app/service/turnos.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-turno-dialog',
  templateUrl: './create-turno-dialog.component.html',
  styleUrls: ['./create-turno-dialog.component.scss']
})
export class CreateTurnoDialogComponent implements OnInit {
  habitacionList: habitacionDto[] = [];
  habitacionSelected!: habitacionDto;
  patente: string = '';

  constructor(
    public dialogRef: MatDialogRef<CreateTurnoDialogComponent>,
    private habitacionService: HabitacionService,
    private turnosService: TurnosService
  ) { }

  ngOnInit(): void {
    this.getHabitacionesDisponibles();
  }

  createTurno() {
    const turnoDto: turnoDto = {
      patente: this.patente,
      dateFinish: undefined,
      cantHoras: 0,
      habitacionDto: this.habitacionSelected,
      status: 'ACT',
      progress: 0,
      precioTotal: 0
    }
    this.turnosService.createTurno(turnoDto).subscribe({
      next: (response) => {
        this.closeDialog();
      },
      error: (err) => {

      }
    })
  }

  getHabitacionesDisponibles() {
    this.habitacionService.getAllActiveHabitacionService().subscribe({
      next: (response) => {
        this.habitacionList = response;
      },
      error: (err) => {

      }
    })
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

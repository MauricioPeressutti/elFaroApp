import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { turnoDto } from 'src/app/model/turnoDto';
import { TurnosService } from 'src/app/service/turnos.service';

@Component({
  selector: 'app-add-time-dialog',
  templateUrl: './add-time-dialog.component.html',
  styleUrls: ['./add-time-dialog.component.scss']
})
export class AddTimeDialogComponent implements OnInit {
  timeSelected: any;
  timeList = [
    {
      nombre: 'Otro Turno',
      tiempo: 2
    },
    {
      nombre: 'Media Pencion',
      tiempo: 4
    },
    {
      nombre: 'Pencion Completa',
      tiempo: 12
    },
  ]
  turnoDto: turnoDto = {
    habitacionDto: {
      id: 0,
      precio: 0
    },
    status: '',
    progress: 0,
    precioTotal: 0
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private turnoService: TurnosService
  ) { }

  ngOnInit(): void {
  }

  addTime() {
    this.turnoDto = this.data;
    this.turnoDto.cantHoras = this.timeSelected.tiempo;
    this.turnoService.updateTurno(this.turnoDto).subscribe({
      next: (response) => {
        if (response) {

        }
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}

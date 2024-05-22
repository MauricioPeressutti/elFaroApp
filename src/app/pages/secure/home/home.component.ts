import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { interval } from 'rxjs';
import { turnoDto } from 'src/app/model/turnoDto';
import { TurnosService } from 'src/app/service/turnos.service';
import { CreateTurnoDialogComponent } from '../dialog/create-turno-dialog/create-turno-dialog.component';
import { AddMercaderiaDialogComponent } from '../dialog/add-mercaderia-dialog/add-mercaderia-dialog.component';
import { AddTimeDialogComponent } from '../dialog/add-time-dialog/add-time-dialog.component';
import { MercaderiaDto } from 'src/app/model/MercaderiaDto';
import { ListadoMercaderiaDialogComponent } from '../dialog/listado-mercaderia-dialog/listado-mercaderia-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tunoList: turnoDto[] = [];
  panelOpenState = false;

  constructor(
    private turnoService: TurnosService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.turnoService.getAllActiveTurnos().subscribe({
      next: (response) => {
        this.tunoList = response;
        if (this.tunoList && this.tunoList.length > 0) {
          interval(3000).subscribe(() => {
            this.tunoList.forEach((item: turnoDto) => {
              if (item.dateFinish) {
                const dateInit = new Date(item.dateInit ?? '');
                const dateFinish = new Date(item.dateFinish);
                const currentDate = new Date();
                const totalTime = dateFinish.getTime() - dateInit.getTime();
                const elapsedTime = currentDate.getTime() - dateInit.getTime();
                item.progress = (elapsedTime / totalTime) * 100;
              }
            });
          });
        }
      },
      error: (err) => {

      }
    })
  }

  getTurnosList() {
    this.turnoService.getAllActiveTurnos().subscribe({
      next: (response) => {
        this.tunoList = response;
      },
      error: (err) => {

      }
    })
  }

  closeTurno(turno: turnoDto) {
    turno.status = "BAJ"
    this.turnoService.closeTurno(turno).subscribe({
      next: (response) => {
        if (response) {
          this.getTurnosList();
          this._snackBar.open("Turno finalizado correctamente", '', { horizontalPosition: 'right', verticalPosition: 'top', duration: 3000 })
        }
      },
      error: (err) => {

      }
    })
  }

  listadoMercaderia(listado: MercaderiaDto[], hab: any) {
    const dialogRef = this.dialog.open(ListadoMercaderiaDialogComponent, {
      minWidth: '50vw',
      data: {
        list: listado,
        habitacion: hab
      }
    });
  }

  createNewTurno() {
    const dialogRef = this.dialog.open(CreateTurnoDialogComponent, {
      minWidth: '50vw'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getTurnosList();
      }
    });
  }

  addTimeDialog(turno: turnoDto) {
    const dialogRef = this.dialog.open(AddTimeDialogComponent, {
      minWidth: '50vw',
      data: turno
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getTurnosList();
      }
    });
  }


  addMercaderiaDialog(turno: turnoDto) {
    const dialogRef = this.dialog.open(AddMercaderiaDialogComponent, {
      minWidth: '50vw',
      data: turno
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getTurnosList();
      }
    });
  }

  calcularTotal(turno: turnoDto): number {
    let total = 0;
    // Comprobar si turno y turno.mercaderiaList son diferentes de undefined
    if (turno && turno.mercaderiaList) {
      for (const merc of turno.mercaderiaList) {
        total += Number(merc.precio);
      }
    }
    return total;
  }
}

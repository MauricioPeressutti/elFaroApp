import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { interval } from 'rxjs';
import { turnoDto } from 'src/app/model/turnoDto';
import { TurnosService } from 'src/app/service/turnos.service';
import { CreateTurnoDialogComponent } from '../dialog/create-turno-dialog/create-turno-dialog.component';
import { AddMercaderiaDialogComponent } from '../dialog/add-mercaderia-dialog/add-mercaderia-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tunoList: turnoDto[] = [];

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
        debugger
      }
    })
  }

  getTurnosList() {
    this.turnoService.getAllActiveTurnos().subscribe({
      next: (response) => {
        this.tunoList = response;
      },
      error: (err) => {
        debugger
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
        debugger
      }
    })
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

  addMercaderiaDialog() {
    const dialogRef = this.dialog.open(AddMercaderiaDialogComponent, {
      minWidth: '50vw'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getTurnosList();
      }
    });
  }

}

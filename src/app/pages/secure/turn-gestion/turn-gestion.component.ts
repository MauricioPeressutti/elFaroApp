import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { turnoDto } from 'src/app/model/turnoDto';
import { TurnosService } from 'src/app/service/turnos.service';

@Component({
  selector: 'app-turn-gestion',
  templateUrl: './turn-gestion.component.html',
  styleUrls: ['./turn-gestion.component.scss']
})
export class TurnGestionComponent implements OnInit {
  tunoList: turnoDto[] = [];
  displayedColumns: string[] = ['id', 'patente', 'dateInit', 'dateFinish', 'precioTotal', 'habitacion'];
  dataSource: MatTableDataSource<turnoDto>;
  balance: any;

  constructor(
    private turnoService: TurnosService
  ) {
    this.dataSource = new MatTableDataSource<turnoDto>([]);
  }

  ngOnInit(): void {
    this.getTurnosList();
  }

  getTurnosList() {
    this.turnoService.getAllBalanceTurnos().subscribe({
      next: (response) => {
        this.balance = response;
        this.dataSource.data = response.turnoList;
      },
      error: (err) => {
        console.error('Error fetching turnos', err);
      }
    })
  }

  getTurnosListForDays(days: Number) {
    this.turnoService.getAllBalanceTurnosByDays(days).subscribe({
      next: (response) => {
        this.balance = response;
        this.dataSource.data = response.turnoList;
      },
      error: (err) => {
        console.error('Error fetching turnos', err);
      }
    })
  }
}

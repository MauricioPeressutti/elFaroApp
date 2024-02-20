import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MercaderiaDto } from 'src/app/model/MercaderiaDto';
import { turnoDto } from 'src/app/model/turnoDto';
import { MercaderiaService } from 'src/app/service/mercadeeria.service';

@Component({
  selector: 'app-add-mercaderia-dialog',
  templateUrl: './add-mercaderia-dialog.component.html',
  styleUrls: ['./add-mercaderia-dialog.component.scss']
})
export class AddMercaderiaDialogComponent implements OnInit {
  mercaderiaList: MercaderiaDto[] = [];
  mercaderiaSelected: any;
  gratis: boolean = false;

  // Turno para enviar al BE y crear consumiciones
  tuernoDto: turnoDto = {
    habitacionDto: {
      id: 0,
      precio: 0
    },
    status: 'ACT',
    progress: 0,
    precioTotal: 0
  }
  listado: MercaderiaDto[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: turnoDto,
    private mercaderiaService: MercaderiaService
  ) { }

  ngOnInit(): void {
    this.loadMercaderia()
    this.tuernoDto = this.data
  }

  loadMercaderia() {
    this.mercaderiaService.getAllMercaderia().subscribe({
      next: (response) => {
        if (response) {
          // Asignar resultados a la lista de opciones
          this.mercaderiaList = response;
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }


  addListado(mercDto: MercaderiaDto) {

    let obj = { ...mercDto }; // Creamos una copia independiente del objeto
    if (this.gratis) {
      obj.precio = 0;
    }
    this.listado.push(obj);

    //Limpio el form

    this.gratis = false;
    this.mercaderiaSelected = null
  }

  createMercaderia() {
    this.tuernoDto.mercaderiaList = this.listado;
    this.mercaderiaService.addMercaderia(this.tuernoDto).subscribe({
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

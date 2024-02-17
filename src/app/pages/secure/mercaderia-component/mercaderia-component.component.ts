import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { MercaderiaDto } from 'src/app/model/MercaderiaDto';
import { MercaderiaService } from 'src/app/service/mercadeeria.service';

@Component({
  selector: 'app-mercaderia-component',
  templateUrl: './mercaderia-component.component.html',
  styleUrls: ['./mercaderia-component.component.scss']
})
export class MercaderiaComponentComponent implements OnInit {
  producto: string | undefined; // Cambiado a tipo string
  filteredOptions: MercaderiaDto[] = [];
  mercaderiaControl = new FormControl();
  cantidad: number = 0
  precio: number = 0
  mercaderiaList: MercaderiaDto[] = [];
  displayedColumns: string[] = ['Nombre', 'Cantidad', 'Precio'];
  dataSource: MatTableDataSource<MercaderiaDto> = new MatTableDataSource<MercaderiaDto>([]);


  constructor(private mercaderiaService: MercaderiaService) { }

  ngOnInit(): void {
    this.mercaderiaControl.valueChanges.subscribe(value => {
      if (typeof value === 'string') {
        this.getMercaderiaPorAproximacion(value);
      }
    });
    this.loadMercaderia();
  }

  getMercaderiaPorAproximacion(nombre: string) {
    if (nombre && nombre.length > 2) {
      this.mercaderiaService.getForAproximation(nombre).subscribe({
        next: (response) => {
          if (response) {
            this.filteredOptions = response;
          }
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }

  updateMercaderia() {
    let dto: MercaderiaDto = {
      nombre: '',
      cantidad: 0,
      precio: 0
    }
    let prodSearch;
    dto.cantidad = this.cantidad;
    dto.precio = this.precio;
    prodSearch = this.filteredOptions.find(element => element.nombre === this.mercaderiaControl.value);
    if (prodSearch) {
      dto.id = prodSearch.id;
      this.update(dto);
    } else {
      dto.nombre = this.mercaderiaControl.value;
      this.create(dto);
    }
  }

  update(dto: MercaderiaDto) {
    this.mercaderiaService.updateMercaderia(dto).subscribe({
      next: (response) => {
        if (response) {
          this.loadMercaderia()
        }
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  create(dto: MercaderiaDto) {
    this.mercaderiaService.createMercaderia(dto).subscribe({
      next: (response) => {
        if (response) {
          this.loadMercaderia()
        }
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  loadMercaderia() {
    this.mercaderiaService.getAllMercaderia().subscribe({
      next: (response) => {
        if (response) {
          // Asignar resultados a la lista de opciones
          this.mercaderiaList = response;
          this.dataSource = new MatTableDataSource(response);
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}



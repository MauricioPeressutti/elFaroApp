import { Component, OnInit } from '@angular/core';
import { MercaderiaDto } from 'src/app/model/MercaderiaDto';
import { MercaderiaService } from 'src/app/service/mercadeeria.service';

@Component({
  selector: 'app-add-mercaderia-dialog',
  templateUrl: './add-mercaderia-dialog.component.html',
  styleUrls: ['./add-mercaderia-dialog.component.scss']
})
export class AddMercaderiaDialogComponent implements OnInit {
  mercaderiaList: MercaderiaDto[] = [];
  mercaderiaSelected: any;
  cantidad: any;
  constructor(
    private mercaderiaService: MercaderiaService
  ) { }

  ngOnInit(): void {
    this.loadMercaderia()
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
}

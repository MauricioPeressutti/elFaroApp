import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-listado-mercaderia-dialog',
  templateUrl: './listado-mercaderia-dialog.component.html',
  styleUrls: ['./listado-mercaderia-dialog.component.scss']
})
export class ListadoMercaderiaDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

}

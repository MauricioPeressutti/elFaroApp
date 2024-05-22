import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMercaderiaDialogComponent } from './listado-mercaderia-dialog.component';

describe('ListadoMercaderiaDialogComponent', () => {
  let component: ListadoMercaderiaDialogComponent;
  let fixture: ComponentFixture<ListadoMercaderiaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoMercaderiaDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoMercaderiaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

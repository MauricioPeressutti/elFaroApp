import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMercaderiaDialogComponent } from './add-mercaderia-dialog.component';

describe('AddMercaderiaDialogComponent', () => {
  let component: AddMercaderiaDialogComponent;
  let fixture: ComponentFixture<AddMercaderiaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMercaderiaDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMercaderiaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

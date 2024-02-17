import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTurnoDialogComponent } from './create-turno-dialog.component';

describe('CreateTurnoDialogComponent', () => {
  let component: CreateTurnoDialogComponent;
  let fixture: ComponentFixture<CreateTurnoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTurnoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTurnoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

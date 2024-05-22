import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnGestionComponent } from './turn-gestion.component';

describe('TurnGestionComponent', () => {
  let component: TurnGestionComponent;
  let fixture: ComponentFixture<TurnGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnGestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

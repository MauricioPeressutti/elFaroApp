import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercaderiaComponentComponent } from './mercaderia-component.component';

describe('MercaderiaComponentComponent', () => {
  let component: MercaderiaComponentComponent;
  let fixture: ComponentFixture<MercaderiaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercaderiaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercaderiaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWithoutLoggingInComponentComponent } from './layout-without-logging-in-component.component';

describe('LayoutWithoutLoggingInComponentComponent', () => {
  let component: LayoutWithoutLoggingInComponentComponent;
  let fixture: ComponentFixture<LayoutWithoutLoggingInComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutWithoutLoggingInComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutWithoutLoggingInComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

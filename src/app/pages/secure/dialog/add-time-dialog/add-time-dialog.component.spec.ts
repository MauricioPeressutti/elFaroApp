import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimeDialogComponent } from './add-time-dialog.component';

describe('AddTimeDialogComponent', () => {
  let component: AddTimeDialogComponent;
  let fixture: ComponentFixture<AddTimeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTimeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTimeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

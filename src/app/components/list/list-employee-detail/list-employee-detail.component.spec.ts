import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeeDetailComponent } from './list-employee-detail.component';

describe('ListEmployeeDetailComponent', () => {
  let component: ListEmployeeDetailComponent;
  let fixture: ComponentFixture<ListEmployeeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmployeeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEmployeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeeAddHistoryComponent } from './list-employee-add-history.component';

describe('ListEmployeeAddHistoryComponent', () => {
  let component: ListEmployeeAddHistoryComponent;
  let fixture: ComponentFixture<ListEmployeeAddHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmployeeAddHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEmployeeAddHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

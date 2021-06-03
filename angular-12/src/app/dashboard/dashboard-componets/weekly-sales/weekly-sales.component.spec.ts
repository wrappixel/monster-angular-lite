import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklySalesComponent } from './weekly-sales.component';

describe('WeeklySalesComponent', () => {
  let component: WeeklySalesComponent;
  let fixture: ComponentFixture<WeeklySalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklySalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklySalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

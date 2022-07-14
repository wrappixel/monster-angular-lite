import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySalesComponent } from './daily-sales.component';

describe('DailySalesComponent', () => {
  let component: DailySalesComponent;
  let fixture: ComponentFixture<DailySalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailySalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailySalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

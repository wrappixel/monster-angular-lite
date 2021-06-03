import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueStaticGraphComponent } from './revenue-static-graph.component';

describe('RevenueStaticGraphComponent', () => {
  let component: RevenueStaticGraphComponent;
  let fixture: ComponentFixture<RevenueStaticGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueStaticGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueStaticGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMonthComponent } from './project-month.component';

describe('ProjectMonthComponent', () => {
  let component: ProjectMonthComponent;
  let fixture: ComponentFixture<ProjectMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

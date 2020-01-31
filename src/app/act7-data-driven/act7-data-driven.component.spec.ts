import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Act7DataDrivenComponent } from './act7-data-driven.component';

describe('Act7DataDrivenComponent', () => {
  let component: Act7DataDrivenComponent;
  let fixture: ComponentFixture<Act7DataDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Act7DataDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Act7DataDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

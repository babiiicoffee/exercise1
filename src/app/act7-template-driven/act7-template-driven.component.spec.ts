import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Act7TemplateDrivenComponent } from './act7-template-driven.component';

describe('Act7TemplateDrivenComponent', () => {
  let component: Act7TemplateDrivenComponent;
  let fixture: ComponentFixture<Act7TemplateDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Act7TemplateDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Act7TemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

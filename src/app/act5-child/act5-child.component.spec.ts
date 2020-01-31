import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Act5ChildComponent } from './act5-child.component';

describe('Act5ChildComponent', () => {
  let component: Act5ChildComponent;
  let fixture: ComponentFixture<Act5ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Act5ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Act5ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

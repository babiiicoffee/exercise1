import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Act5ParentComponent } from './act5-parent.component';

describe('Act5ParentComponent', () => {
  let component: Act5ParentComponent;
  let fixture: ComponentFixture<Act5ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Act5ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Act5ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

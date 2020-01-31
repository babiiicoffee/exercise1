import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliExerciseComponent } from './cli-exercise.component';

describe('CliExerciseComponent', () => {
  let component: CliExerciseComponent;
  let fixture: ComponentFixture<CliExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

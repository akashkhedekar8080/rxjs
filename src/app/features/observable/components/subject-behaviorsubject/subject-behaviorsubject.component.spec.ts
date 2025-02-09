import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectBehaviorsubjectComponent } from './subject-behaviorsubject.component';

describe('SubjectBehaviorsubjectComponent', () => {
  let component: SubjectBehaviorsubjectComponent;
  let fixture: ComponentFixture<SubjectBehaviorsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectBehaviorsubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectBehaviorsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

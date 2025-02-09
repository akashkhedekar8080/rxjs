import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncsubjectComponent } from './asyncsubject.component';

describe('AsyncsubjectComponent', () => {
  let component: AsyncsubjectComponent;
  let fixture: ComponentFixture<AsyncsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncsubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

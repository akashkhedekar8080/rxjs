import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebouncetimeDistinctuntilchangedComponent } from './debouncetime-distinctuntilchanged.component';

describe('DebouncetimeDistinctuntilchangedComponent', () => {
  let component: DebouncetimeDistinctuntilchangedComponent;
  let fixture: ComponentFixture<DebouncetimeDistinctuntilchangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebouncetimeDistinctuntilchangedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebouncetimeDistinctuntilchangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

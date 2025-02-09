import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatcherrorThrowerrorComponent } from './catcherror-throwerror.component';

describe('CatcherrorThrowerrorComponent', () => {
  let component: CatcherrorThrowerrorComponent;
  let fixture: ComponentFixture<CatcherrorThrowerrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatcherrorThrowerrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatcherrorThrowerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinelatestWithlatestfromComponent } from './combinelatest-withlatestfrom.component';

describe('CombinelatestWithlatestfromComponent', () => {
  let component: CombinelatestWithlatestfromComponent;
  let fixture: ComponentFixture<CombinelatestWithlatestfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombinelatestWithlatestfromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombinelatestWithlatestfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

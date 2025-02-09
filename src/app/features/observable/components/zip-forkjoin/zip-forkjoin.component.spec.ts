import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipForkjoinComponent } from './zip-forkjoin.component';

describe('ZipForkjoinComponent', () => {
  let component: ZipForkjoinComponent;
  let fixture: ComponentFixture<ZipForkjoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZipForkjoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZipForkjoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

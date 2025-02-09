import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharereplayComponent } from './sharereplay.component';

describe('SharereplayComponent', () => {
  let component: SharereplayComponent;
  let fixture: ComponentFixture<SharereplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharereplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharereplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

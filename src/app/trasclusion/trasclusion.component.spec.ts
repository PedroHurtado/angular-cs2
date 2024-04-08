import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasclusionComponent } from './trasclusion.component';

describe('TrasclusionComponent', () => {
  let component: TrasclusionComponent;
  let fixture: ComponentFixture<TrasclusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrasclusionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrasclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

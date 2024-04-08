import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayooutComponent } from './layoout.component';

describe('LayooutComponent', () => {
  let component: LayooutComponent;
  let fixture: ComponentFixture<LayooutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayooutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayooutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

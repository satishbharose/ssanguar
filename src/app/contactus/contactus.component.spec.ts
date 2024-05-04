import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinnowComponent } from './contactus.component';

describe('JoinnowComponent', () => {
  let component: JoinnowComponent;
  let fixture: ComponentFixture<JoinnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinnowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoinnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

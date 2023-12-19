import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseBehauviurComponent } from './mouse-behauviur.component';

describe('MouseBehauviurComponent', () => {
  let component: MouseBehauviurComponent;
  let fixture: ComponentFixture<MouseBehauviurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MouseBehauviurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MouseBehauviurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

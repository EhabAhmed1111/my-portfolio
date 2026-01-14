import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeckStackComponent } from './teck-stack.component';

describe('TeckStackComponent', () => {
  let component: TeckStackComponent;
  let fixture: ComponentFixture<TeckStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeckStackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeckStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

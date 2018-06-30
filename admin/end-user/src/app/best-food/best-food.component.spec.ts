import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestFoodComponent } from './best-food.component';

describe('BestFoodComponent', () => {
  let component: BestFoodComponent;
  let fixture: ComponentFixture<BestFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDetailIntroComponent } from './food-detail-intro.component';

describe('FoodDetailIntroComponent', () => {
  let component: FoodDetailIntroComponent;
  let fixture: ComponentFixture<FoodDetailIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodDetailIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDetailIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

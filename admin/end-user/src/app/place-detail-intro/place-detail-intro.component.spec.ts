import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceDetailIntroComponent } from './place-detail-intro.component';

describe('PlaceDetailIntroComponent', () => {
  let component: PlaceDetailIntroComponent;
  let fixture: ComponentFixture<PlaceDetailIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceDetailIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceDetailIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFoodsHintComponent } from './admin-foods-hint.component';

describe('AdminFoodsHintComponent', () => {
  let component: AdminFoodsHintComponent;
  let fixture: ComponentFixture<AdminFoodsHintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFoodsHintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFoodsHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

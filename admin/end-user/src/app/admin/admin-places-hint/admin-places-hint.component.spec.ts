import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlacesHintComponent } from './admin-places-hint.component';

describe('AdminPlacesHintComponent', () => {
  let component: AdminPlacesHintComponent;
  let fixture: ComponentFixture<AdminPlacesHintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPlacesHintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPlacesHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

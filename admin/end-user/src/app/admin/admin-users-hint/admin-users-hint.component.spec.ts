import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersHintComponent } from './admin-users-hint.component';

describe('AdminUsersHintComponent', () => {
  let component: AdminUsersHintComponent;
  let fixture: ComponentFixture<AdminUsersHintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsersHintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

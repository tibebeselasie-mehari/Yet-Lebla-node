import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailIntroComponent } from './user-detail-intro.component';

describe('UserDetailIntroComponent', () => {
  let component: UserDetailIntroComponent;
  let fixture: ComponentFixture<UserDetailIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

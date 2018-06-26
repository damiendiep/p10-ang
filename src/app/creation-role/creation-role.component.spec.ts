import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationRoleComponent } from './creation-role.component';

describe('CreationRoleComponent', () => {
  let component: CreationRoleComponent;
  let fixture: ComponentFixture<CreationRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

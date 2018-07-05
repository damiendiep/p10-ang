import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerSalonComponent } from './creer-salon.component';

describe('CreerSalonComponent', () => {
  let component: CreerSalonComponent;
  let fixture: ComponentFixture<CreerSalonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerSalonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

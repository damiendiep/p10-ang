import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationSportComponent } from './creation-sport.component';

describe('CreationSportComponent', () => {
  let component: CreationSportComponent;
  let fixture: ComponentFixture<CreationSportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationSportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

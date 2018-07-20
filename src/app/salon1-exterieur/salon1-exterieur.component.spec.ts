import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Salon1ExterieurComponent } from './salon1-exterieur.component';

describe('Salon1ExterieurComponent', () => {
  let component: Salon1ExterieurComponent;
  let fixture: ComponentFixture<Salon1ExterieurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Salon1ExterieurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Salon1ExterieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

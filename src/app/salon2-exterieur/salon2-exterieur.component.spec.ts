import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Salon2ExterieurComponent } from './salon2-exterieur.component';

describe('Salon2ExterieurComponent', () => {
  let component: Salon2ExterieurComponent;
  let fixture: ComponentFixture<Salon2ExterieurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Salon2ExterieurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Salon2ExterieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

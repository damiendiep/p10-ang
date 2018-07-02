import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonInterieurAttenteComponent } from './salon-interieur-attente.component';

describe('SalonInterieurAttenteComponent', () => {
  let component: SalonInterieurAttenteComponent;
  let fixture: ComponentFixture<SalonInterieurAttenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalonInterieurAttenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonInterieurAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

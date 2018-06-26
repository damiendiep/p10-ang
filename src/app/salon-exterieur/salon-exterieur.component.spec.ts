import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonExterieurComponent } from './salon-exterieur.component';

describe('SalonExterieurComponent', () => {
  let component: SalonExterieurComponent;
  let fixture: ComponentFixture<SalonExterieurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalonExterieurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonExterieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

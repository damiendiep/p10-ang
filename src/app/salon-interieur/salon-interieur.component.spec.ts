import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonInterieurComponent } from './salon-interieur.component';

describe('SalonInterieurComponent', () => {
  let component: SalonInterieurComponent;
  let fixture: ComponentFixture<SalonInterieurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalonInterieurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonInterieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

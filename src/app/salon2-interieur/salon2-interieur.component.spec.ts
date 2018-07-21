import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Salon2InterieurComponent } from './salon2-interieur.component';

describe('Salon2InterieurComponent', () => {
  let component: Salon2InterieurComponent;
  let fixture: ComponentFixture<Salon2InterieurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Salon2InterieurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Salon2InterieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

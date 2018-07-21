import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Salon1InterieurComponent } from './salon1-interieur.component';

describe('Salon1InterieurComponent', () => {
  let component: Salon1InterieurComponent;
  let fixture: ComponentFixture<Salon1InterieurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Salon1InterieurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Salon1InterieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Joueur2Component } from './joueur2.component';

describe('Joueur2Component', () => {
  let component: Joueur2Component;
  let fixture: ComponentFixture<Joueur2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Joueur2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Joueur2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

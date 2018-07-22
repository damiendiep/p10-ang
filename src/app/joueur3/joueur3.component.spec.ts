import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Joueur3Component } from './joueur3.component';

describe('Joueur3Component', () => {
  let component: Joueur3Component;
  let fixture: ComponentFixture<Joueur3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Joueur3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Joueur3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

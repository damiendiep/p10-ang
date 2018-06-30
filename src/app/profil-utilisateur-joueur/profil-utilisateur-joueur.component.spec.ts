import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilUtilisateurJoueurComponent } from './profil-utilisateur-joueur.component';

describe('ProfilUtilisateurJoueurComponent', () => {
  let component: ProfilUtilisateurJoueurComponent;
  let fixture: ComponentFixture<ProfilUtilisateurJoueurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilUtilisateurJoueurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilUtilisateurJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

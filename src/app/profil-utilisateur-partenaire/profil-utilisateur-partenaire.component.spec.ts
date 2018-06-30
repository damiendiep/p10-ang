import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilUtilisateurPartenaireComponent } from './profil-utilisateur-partenaire.component';

describe('ProfilUtilisateurPartenaireComponent', () => {
  let component: ProfilUtilisateurPartenaireComponent;
  let fixture: ComponentFixture<ProfilUtilisateurPartenaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilUtilisateurPartenaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilUtilisateurPartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

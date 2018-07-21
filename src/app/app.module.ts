import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionUtilisateurComponent } from './inscription-utilisateur/inscription-utilisateur.component';
import { FooterComponent } from './footer/footer.component';
import { GpsmapComponent } from './gpsmap/gpsmap.component';
import { AgmCoreModule } from '@agm/core';
import { ContactComponent } from './contact/contact.component';
import { CreationSportComponent } from './creation-sport/creation-sport.component';
import { CreationRoleComponent } from './creation-role/creation-role.component';
import { SalonExterieurComponent } from './salon-exterieur/salon-exterieur.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { GestionTerrainComponent } from './gestion-terrain/gestion-terrain.component';
import { FicheTerrainComponent } from './fiche-terrain/fiche-terrain.component';
import { ProfilUtilisateurComponent } from './profil-utilisateur/profil-utilisateur.component';
import { ProfilUtilisateurJoueurComponent } from './profil-utilisateur-joueur/profil-utilisateur-joueur.component';
import { ProfilUtilisateurPartenaireComponent } from './profil-utilisateur-partenaire/profil-utilisateur-partenaire.component';
import { SalonInterieurComponent } from './salon-interieur/salon-interieur.component';
import { SalonInterieurAttenteComponent } from './salon-interieur-attente/salon-interieur-attente.component';
import { SalonInterieurCompletComponent } from './salon-interieur-complet/salon-interieur-complet.component';
import { VignetteJoueurTrouveComponent } from './vignette-joueur-trouve/vignette-joueur-trouve.component';
import { VignetteJoueurInconnuComponent } from './vignette-joueur-inconnu/vignette-joueur-inconnu.component';
import { SalonService } from './services/salon.service';
import DatePipe from './pipes/todate.pipe';
import { CreerSalonComponent } from './creer-salon/creer-salon.component';
import { Salon1ExterieurComponent } from './salon1-exterieur/salon1-exterieur.component';
import { Salon2ExterieurComponent } from './salon2-exterieur/salon2-exterieur.component';
import { Salon1InterieurComponent } from './salon1-interieur/salon1-interieur.component';
import { Salon2InterieurComponent } from './salon2-interieur/salon2-interieur.component';

const appRoutes: Routes = [
  { path: 'accueil', component: IndexComponent },
  { path: 'inscription', component: InscriptionUtilisateurComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'creation-sport', component: CreationSportComponent },
  { path: 'creation-role', component: CreationRoleComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'gestion-terrain', component: GestionTerrainComponent },
  { path: 'profil-utilisateur', component: ProfilUtilisateurComponent },
  { path: 'salon-interieur', component: SalonInterieurComponent },
  { path: 'creer-salon', component: CreerSalonComponent },
  { path: 'salon-interieur/1', component: Salon1InterieurComponent },
  { path: 'salon-interieur/2', component: Salon2InterieurComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    InscriptionUtilisateurComponent,
    FooterComponent,
    GpsmapComponent,
    ContactComponent,
    CreationSportComponent,
    CreationRoleComponent,
    SalonExterieurComponent,
    ConnexionComponent,
    GestionTerrainComponent,
    FicheTerrainComponent,
    ProfilUtilisateurComponent,
    ProfilUtilisateurJoueurComponent,
    ProfilUtilisateurPartenaireComponent,
    SalonInterieurComponent,
    SalonInterieurAttenteComponent,
    SalonInterieurCompletComponent,
    VignetteJoueurTrouveComponent,
    VignetteJoueurInconnuComponent,
    DatePipe,
    CreerSalonComponent,
    Salon1ExterieurComponent,
    Salon2ExterieurComponent,
    Salon1InterieurComponent,
    Salon2InterieurComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCnwPHZTMDzBEkcEcGSdDq_D5vOQrbMidc'
    }),
  ],
  providers: [SalonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

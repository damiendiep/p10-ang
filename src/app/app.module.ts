import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

const appRoutes: Routes = [
  { path: 'accueil', component: IndexComponent },
  { path: 'inscription', component: InscriptionUtilisateurComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'creation-sport', component: CreationSportComponent },
  { path: 'creation-role', component: CreationRoleComponent },
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

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCnwPHZTMDzBEkcEcGSdDq_D5vOQrbMidc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

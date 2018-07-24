import { Component, OnInit, Input } from '@angular/core';
import { Salon } from '../entity/salon.interface';
import { SalonService } from '../services/salon.service';
import { ActivatedRoute, Route, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-salon1-interieur',
  templateUrl: './salon1-interieur.component.html',
  styleUrls: ['./salon1-interieur.component.scss']
})
export class Salon1InterieurComponent implements OnInit {
  @Input() rejoindre1 = false;
  complet = false;
  id: number;
  sport: String;
  club: String;
  date: Date;
  joueurMax: number;
  nbJoueurs: number;
  description: String;
  joueurs: any;

  joueur = {
    prenom: 'Olivier',
    photo: '../../assets/images/olivier.jpg'
  };


  constructor(private salonService: SalonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const event = this.route.snapshot.params['id'];
    console.log('event test' + event);
    this.id = this.salonService.getEventById(+event).id;
    this.sport = this.salonService.getEventById(+event).sport;
    this.club = this.salonService.getEventById(+event).club;
    this.date = this.salonService.getEventById(+event).date;
    this.joueurMax = this.salonService.getEventById(+event).joueurMax;
    this.nbJoueurs = this.salonService.getEventById(+event).nbJoueurs;
    this.description = this.salonService.getEventById(+event).description;
    this.joueurs = this.salonService.getEventById(+event).joueurs;
  }

  rejoindreSalle() {
    this.salonService.addPlayer(this.id, this.joueur);
    this.rejoindre1 = true;
    if (this.salonService.listeSalons[1].joueurs.length == 4) {
      this.complet = true;
    }
    // if (this.salonService.listeSalons[2].joueurs[4].prenom === 'Olivier') {
    //   const complet = true;
    // }
  }

  quitterSalle() {
    this.rejoindre1 = false;
    this.salonService.removePlayer(this.id);
    const complet = false;
  }
}

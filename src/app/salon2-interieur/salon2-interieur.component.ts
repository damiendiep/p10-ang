import { Component, OnInit, Input } from '@angular/core';
import { Salon } from '../entity/salon.interface';
import { SalonService } from '../services/salon.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-salon2-interieur',
  templateUrl: './salon2-interieur.component.html',
  styleUrls: ['./salon2-interieur.component.scss']
})
export class Salon2InterieurComponent implements OnInit {
  @Input() rejoindre2 = false;
  id: number;
  sport: String;
  club: String;
  date: Date;
  joueurMax: number;
  nbJoueurs: number;
  description: String;

  constructor(private salonService: SalonService, private route: ActivatedRoute) { }

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
  }
  rejoindreSalle() {
    this.rejoindre2 = true;
    this.salonService.addPlayer(this.id);
  }
  quitterSalle() {
    this.rejoindre2 = false;
    this.salonService.removePlayer(this.id);
  }
}

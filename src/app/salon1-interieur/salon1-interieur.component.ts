import { Component, OnInit, Input } from '@angular/core';
import { Salon } from '../entity/salon.interface';
import { SalonService } from '../services/salon.service';

@Component({
  selector: 'app-salon1-interieur',
  templateUrl: './salon1-interieur.component.html',
  styleUrls: ['./salon1-interieur.component.scss']
})
export class Salon1InterieurComponent implements OnInit {
  @Input() salon: Salon;
  @Input() rejoindre1 = false;

  constructor() { }

  ngOnInit() {
  }

  rejoindreSalle() {
    this.rejoindre1 = true;
  }

  quitterSalle() {
    this.rejoindre1 = false;
  }
}

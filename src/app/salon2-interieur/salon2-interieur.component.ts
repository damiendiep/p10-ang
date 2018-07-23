import { Component, OnInit, Input } from '@angular/core';
import { Salon } from '../entity/salon.interface';

@Component({
  selector: 'app-salon2-interieur',
  templateUrl: './salon2-interieur.component.html',
  styleUrls: ['./salon2-interieur.component.scss']
})
export class Salon2InterieurComponent implements OnInit {
  @Input() salon: Salon;
  @Input() rejoindre2 = false;

  constructor() { }

  ngOnInit() {
  }
  rejoindreSalle() {
    this.rejoindre2 = true;
  }
  quitterSalle() {
    this.rejoindre2 = false;
  }
}

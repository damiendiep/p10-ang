import { Component, OnInit, Input } from '@angular/core';
import { Salon } from '../entity/salon.interface';

@Component({
  selector: 'app-salon-interieur-attente',
  templateUrl: './salon-interieur-attente.component.html',
  styleUrls: ['./salon-interieur-attente.component.scss']
})
export class SalonInterieurAttenteComponent implements OnInit {
  @Input() salon: Salon;
  constructor() { }

  ngOnInit() {
  }

}

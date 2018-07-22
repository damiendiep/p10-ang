import { Component, OnInit, Input } from '@angular/core';
import { Salon } from '../entity/salon.interface';

@Component({
  selector: 'app-salon-interieur',
  templateUrl: './salon-interieur.component.html',
  styleUrls: ['./salon-interieur.component.scss']
})
export class SalonInterieurComponent implements OnInit {

  @Input() salon: Salon;

  constructor() { }

  ngOnInit() {
  }

}

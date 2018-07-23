import { Component, OnInit, Input } from '@angular/core';
import { Salon } from '../entity/salon.interface';

@Component({
  selector: 'app-salon-exterieur',
  templateUrl: './salon-exterieur.component.html',
  styleUrls: ['./salon-exterieur.component.scss']
})
export class SalonExterieurComponent implements OnInit {
  @Input() salon: Salon;
  route: any;

  constructor() { }


  ngOnInit() {
    this.salon.date = new Date(this.salon.date);
  }

  sendToSalon(id: any) {
    if (id = 1) {
      const route = "['/salon1-interieur/']";
    } else if (id = 2) {
      const route = "['/salon2-interieur/']";
    } else {
      const route = "['/salon-interieur/']";
    }
    return this.route;
  }
}

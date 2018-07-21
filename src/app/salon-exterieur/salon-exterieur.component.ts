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
    console.log(this.salon);
  }

  sendToSalon(id: any) {
    if (id = 1) {
      let route = "['/salon1-interieur/']";
    } else if (id = 2) {
      let route = "['/salon2-interieur/']";
    } else {
      let route = "['/salon-interieur/']";
    }
    return this.route;
  }
}

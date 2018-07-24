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
}

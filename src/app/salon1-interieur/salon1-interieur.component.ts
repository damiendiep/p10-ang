import { Component, OnInit, Input } from '@angular/core';
import { Salon } from '../entity/salon.interface';

@Component({
  selector: 'app-salon1-interieur',
  templateUrl: './salon1-interieur.component.html',
  styleUrls: ['./salon1-interieur.component.scss']
})
export class Salon1InterieurComponent implements OnInit {
  @Input() salon: Salon;
  constructor() { }

  ngOnInit() {
  }

}

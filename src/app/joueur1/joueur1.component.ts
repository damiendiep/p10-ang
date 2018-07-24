import { Component, OnInit, Input } from '@angular/core';
import { SalonService } from '../services/salon.service';

@Component({
  selector: 'app-joueur1',
  templateUrl: './joueur1.component.html',
  styleUrls: ['./joueur1.component.scss']
})
export class Joueur1Component implements OnInit {

  @Input() prenom: string;
  @Input() photo: string;
  constructor(private salonService: SalonService) { }

  ngOnInit() {
  }

}

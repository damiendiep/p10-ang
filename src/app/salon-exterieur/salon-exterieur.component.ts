import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-salon-exterieur',
  templateUrl: './salon-exterieur.component.html',
  styleUrls: ['./salon-exterieur.component.scss']
})
export class SalonExterieurComponent implements OnInit {
  @Input() id: number;
  @Input() date: any;

  constructor() { }


  ngOnInit() {
    this.date = new Date(this.date);
  }

  onClick() {
    console.log(this.id);
  }

}

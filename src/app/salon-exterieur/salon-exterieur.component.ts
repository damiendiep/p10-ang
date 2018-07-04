import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salon-exterieur',
  templateUrl: './salon-exterieur.component.html',
  styleUrls: ['./salon-exterieur.component.scss']
})
export class SalonExterieurComponent implements OnInit {

  constructor() { }

id;


  ngOnInit() {
  }

  onClick() {
    console.log(this.id);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-gpsmap',
  templateUrl: './gpsmap.component.html',
  styleUrls: ['./gpsmap.component.scss']
})
export class GpsmapComponent implements OnInit {
  lat: number = 50.633989;
  lng: number = 3.021326;

  constructor() { }

  ngOnInit() {
  }

  getLat() {
    return this.lat;
  }
  getLng() {
    return this.lng;
  }
  setLng(newLng) {
    this.lng = newLng;
  }
  setLat(newLat) {
    this.lng = newLat;
  }
  // Pointeur et zoom sur la map à rajouter pour une meilleure visu
}

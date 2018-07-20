import { Component, OnInit } from '@angular/core';
import { SalonService } from '../services/salon.service';
import { Router } from '../../../node_modules/@angular/router';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-creer-salon',
  templateUrl: './creer-salon.component.html',
  styleUrls: ['./creer-salon.component.scss']
})
export class CreerSalonComponent implements OnInit {

  constructor(private salonService: SalonService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const sport = form.value['sport'];
    const club = form.value['club'];
    const joueurMax = form.value['joueurMax'];
    const description = form.value['description'];
    this.salonService.CreateSalon(sport, club, joueurMax, description);
    this.router.navigate(['/']);
  }
}

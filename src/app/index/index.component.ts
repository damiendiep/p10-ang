import { Component, OnInit, Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Salon } from '../entity/salon.interface';
import { map } from 'rxjs/operators';
import { error } from 'protractor';
import { Observable } from 'rxjs';
import { SalonService } from '../services/salon.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  objectKeys = Object.keys;
  // @Input()
  listeSalons: any;

  constructor(private salonService: SalonService) { }

  ngOnInit() {
    // this.salonService.findAllSalons().subscribe(data => {
    //   this.list = data;
    //   this.list = this.list.salons;
    //   console.log(this.list);
    // });
    this.listeSalons = this.salonService.listeSalons;
  }
}

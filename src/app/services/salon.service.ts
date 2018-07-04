import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Salon } from '../entity/salon.interface';
import { Observable } from 'rxjs';

@Injectable()
export class SalonService {
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    private salonUrl = 'http://localhost:8080/api/salons';
    constructor(private http: HttpClient) {
    }

    getAll(): Observable<any> {
        return this.http.get(this.salonUrl);
    }

    public findAllSalons() {
        console.log('findAllSalons coucou');
        return this.http.get<Salon[]>(this.salonUrl);
    }

}

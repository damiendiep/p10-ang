import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Salon} from '../entity/salon.interface';
import { Observable } from 'rxjs';

@Injectable()
export class SalonService {
    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient) {

    }

    getAll(): Observable<any> {
        return this.http.get('http://localhost:8080/api/salons');
      }

}
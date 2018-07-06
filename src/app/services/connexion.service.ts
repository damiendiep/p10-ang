import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Utilisateur } from '../entity/utilisateur.interface';
import { Observable } from 'rxjs';

@Injectable()
export class ConnexionService {
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    private connexionUrl = 'http://localhost:8080/api/connexion';
    constructor(private http: HttpClient) {
    }

    getAll(): Observable<any> {
        return this.http.get(this.connexionUrl);
    }

    public findByPseudoAndPassword() {
        return this.http.get<Utilisateur>(this.connexionUrl);
    }
}

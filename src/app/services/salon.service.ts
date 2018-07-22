import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Salon } from '../entity/salon.interface';
import { Observable } from 'rxjs';

@Injectable()
export class SalonService {
    listeSalons = [
        {
            id: 1,
            sport: 'Tennis',
            club: 'Tennis Fun Club',
            date: new Date('2017/08/15'),
            joueurMax: 4,
            nbJoueurs:2,
            description: `Bonjour! Je m\'appelle David, je cherche 3 joueurs
            niveau débutant / intermédiaire pour faire une partie de Tennis
            le Vendredi 27 Juillet au Tennis Fun Club à Villeneuve:) `
        }, {
            id: 2,
            sport: 'Tennis',
            club: 'Tennis Fun Club',
            date: new Date('2017/08/15'),
            joueurMax: 4,
            nbJoueurs:3,
            description: `Bonjour! Je m\'appelle David, je cherche 3 joueurs
            niveau débutant / intermédiaire pour faire une partie de Tennis
            le Vendredi 27 Juillet au Tennis Fun Club à Villeneuve:) `
        },
    ];

    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    private salonUrl = 'http://localhost:8080/api/salons';
    constructor(private http: HttpClient) {
    }

    getAll(): Observable<any> {
        return this.http.get(this.salonUrl);
    }

    public findAllSalons() {
        return this.http.get<Salon[]>(this.salonUrl);
    }

    public CreateSalon( sport: string, club: string, joueurMax: number, description: string) {
        const nouveauSalon = {
            id: 0,
            sport: '',
            club: '',
            date: new Date(),
            joueurMax: 0,
            nbJoueurs:1,
            description: ''
        };
        nouveauSalon.id = this.listeSalons[(this.listeSalons.length - 1)].id + 1;
        nouveauSalon.sport = sport;
        nouveauSalon.club = club;
        nouveauSalon.joueurMax = joueurMax;
        nouveauSalon.description = description;
        this.listeSalons.push(nouveauSalon);
    }
}

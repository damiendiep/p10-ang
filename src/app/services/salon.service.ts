import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Salon } from '../entity/salon.interface';
import { Observable } from 'rxjs';

@Injectable()
export class SalonService {
    rejoindre1 = false;
    listeSalons = [
        {
            id: 1,
            sport: 'Tennis',
            club: 'Tennis Fun Club 1',
            date: new Date('2017/08/15'),
            joueurMax: 4,
            nbJoueurs: 2,
            description: `Bonjour! Je m\'appelle Roger, je cherche 3 joueurs
            niveau débutant / intermédiaire pour faire une partie de Tennis
            le Vendredi 27 Juillet au Tennis Fun Club à Villeneuve:) `,
            joueurs: [{
                prenom: 'Roger',
                photo: '../../assets/images/Roger.jpg'
            },
            {
                prenom: 'Rafael',
                photo: '../../assets/images/rafael.jpg'
            },
                // {
                //     prenom: 'Inconnu',
                //     photo: '../../assets/images/portrait inconnu.jpg'
                // },
                // {
                //     prenom: 'Inconnu',
                //     photo: '../../assets/images/portrait inconnu.jpg'
                // },

            ]
        },
        {
            id: 2,
            sport: 'Tennis',
            club: 'Tennis Fun Club 2',
            date: new Date('2017/08/18'),
            joueurMax: 4,
            nbJoueurs: 3,
            description: `Bonjour! Je m\'appelle Roger, je cherche 3 joueurs
            niveau débutant / intermédiaire pour faire une partie de Tennis
            le Vendredi 27 Juillet au Tennis Fun Club à Villeneuve:) `,
            joueurs: [{
                prenom: 'Roger',
                photo: '../../assets/images/Roger.jpg'
            },
            {
                prenom: 'Rafael',
                photo: '../../assets/images/rafael.jpg'
            },
            {
                prenom: 'Novak',
                photo: '../../assets/images/novak.jpg'
            },
                // {
                //     prenom: 'Inconnu',
                //     photo: '../../assets/images/portrait inconnu.jpg'
                // },
            ]
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

    public CreateSalon(sport: string, club: string, joueurMax: number, description: string) {
        const nouveauSalon = {
            id: null,
            sport: '',
            club: '',
            date: new Date(),
            joueurMax: 0,
            nbJoueurs: 1,
            description: '',
            joueurs: [{
                prenom: 'Olivier',
                photo: '../../assets/images/Oliver.jpg'
            },
                //  {
                //     prenom: 'Inconnu',
                //     photo: '../../assets/images/portrait inconnu.jpg'
                // }, {
                //     prenom: 'Inconnu',
                //     photo: '../../assets/images/portrait inconnu.jpg'
                // },
                // {
                //     prenom: 'Inconnu',
                //     photo: '../../assets/images/portrait inconnu.jpg'
                // }
            ]
        };
        nouveauSalon.id = (this.listeSalons.length - 1) + 2;
        nouveauSalon.sport = sport;
        nouveauSalon.club = club;
        nouveauSalon.joueurMax = joueurMax;
        nouveauSalon.description = description;
        this.listeSalons.push(nouveauSalon);
    }


    public rejoindreSalon1() {
        if (this.rejoindre1 = false) {
            this.rejoindre1 = true;
        } else {
            this.rejoindre1 = false;
        }
        return this.rejoindre1;
    }

    public getEventById(id: number) {
        const event = this.listeSalons.find((e) => {
            return e.id === id;
        });
        return event;
    }

    public addPlayer(id: number, joueur: any) {
        if (this.listeSalons[id - 1].joueurs.length < 4) {
            this.listeSalons[id - 1].nbJoueurs += 1;
            this.listeSalons[id - 1].joueurs.push(joueur);
            console.log(joueur);
        }
    }

    public removePlayer(id: number) {
        this.listeSalons[id - 1].nbJoueurs -= 1;
    }
}

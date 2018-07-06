import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  login: string;
  constructor() { }

  ngOnInit() {
  }

  loginUtilisateur(e) {
    const utilisateur = e.target.elements[0].value;
    const mdp = e.target.elements[1].value;
    console.log(utilisateur, mdp);
  }
}

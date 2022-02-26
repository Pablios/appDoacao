import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}

  doarAlimentos() {
    this.abrirUrl('https://www.google.com/maps/search/Ponto+Doacao+Alimento');
  }

  doarRoupas() {
    this.abrirUrl('https://www.google.com/maps/search/Ponto+Doacao+Roupas');
  }

  doarSangue() {
    this.abrirUrl('https://www.google.com/maps/search/Ponto+Doacao+Sangue');
  }

  abrirUrl(url: string) {
    window.open(url, '_blank').focus();
  }
}

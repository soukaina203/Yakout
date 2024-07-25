import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chiffre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chiffre.component.html',
  styleUrls: ['./chiffre.component.scss']
})
export class ChiffreComponent {
    Props = [
        { title: " ont été récoltés et redistribués pour l’Ukraine", years: "22 000€",
         icon: 'fa-solid fa-award'},
        { title: "ont été distribués à des projets associatifs", years: "7 000€", icon:'fa-solid fa-location-dot'},
        { title: "ont été redistribués à des œuvres de bienfaisance", years: "13 000€", icon: 'fa-solid fa-handshake'},
      ]
}

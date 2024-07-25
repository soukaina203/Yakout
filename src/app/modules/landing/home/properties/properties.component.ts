import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from 'app/mat.module';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [CommonModule,MatModule],
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent {
     Props = [
        { title: "d'experience reconue", years: "10 ans",
         icon: 'fa-solid fa-award'},
        { title: "Cabinets d'excellence", years: "+7 ", icon:'fa-solid fa-location-dot'},
        { title: "expertises pour vous accoumpagner", years: "10", icon: 'fa-solid fa-handshake'},
        { title: "collaboration a votre service ", years: "+20", icon:'fa-solid fa-users'  },
      ]
}

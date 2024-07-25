import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../home/header/header.component';
import { FooterComponent } from '../home/footer/footer.component';
import { Hero1Component } from './hero1/hero1.component';
import { ChiffreComponent } from './chiffre/chiffre.component';
import { TeamComponent } from './team/team.component';
import { About1Component } from './about1/about1.component';

@Component({
  selector: 'app-actualite',
  standalone: true,
  imports: [CommonModule,HeaderComponent,
    FooterComponent,Hero1Component,ChiffreComponent
    ,About1Component,TeamComponent],
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.scss']
})
export class ActualiteComponent {

}

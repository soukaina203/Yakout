import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealiseHeroComponent } from './realise-hero/realise-hero.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from '../../home/header/header.component';
import { FooterComponent } from '../../home/footer/footer.component';
import { ChiffreComponent } from '../../actualite/chiffre/chiffre.component';
import { About1Component } from '../../actualite/about1/about1.component';
import { TeamComponent } from '../../actualite/team/team.component';

@Component({
  selector: 'app-realise',
  standalone: true,
  imports: [CommonModule,RealiseHeroComponent,
    HeaderComponent
    ,FooterComponent,ProjectsComponent,
    ChiffreComponent
    ,About1Component,TeamComponent],
  templateUrl: './realise.component.html',
  styleUrls: ['./realise.component.scss']
})
export class RealiseComponent {

}

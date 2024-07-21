import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHeroComponent } from './about-hero/about-hero.component';
import { HeaderComponent } from '../home/header/header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,AboutHeroComponent,HeaderComponent],
  templateUrl: './about.component.html',

})
export class AboutComponent {

}

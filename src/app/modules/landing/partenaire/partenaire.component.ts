import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../home/header/header.component';
import { FooterComponent } from '../home/footer/footer.component';

@Component({
  selector: 'app-partenaire',
  standalone: true,
  imports: [CommonModule,HeaderComponent,FooterComponent],
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.scss']
})
export class PartenaireComponent {

    brands=[
        {name:'info Academie',img:'one1.jpeg'},
        {name:'Dish',img:'one3.png'},
        {name:'Medium',img:'one1.jpeg'},
        {name:'Medium',img:'one1.jpeg'},
        {name:'Medium',img:'one1.jpeg'},
        {name:'info Academie',img:'one1.jpeg'},
        {name:'Dish',img:'one3.png'},
        {name:'Medium',img:'one1.jpeg'},


    ]
}

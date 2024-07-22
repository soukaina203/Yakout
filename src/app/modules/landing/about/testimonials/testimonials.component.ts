import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {

    people=[
        {img:'brian.jpg',name:'Brian Markise',work:'CTO At Workflow' , review:'CF Expertise Comptable nous accompagne de l’établissement de notre bilan comptable, comptes auprès de nos actionnaires '},
        {img:'male-01.jpg',name:'Brian Markise',work:'CTO At Workflow' , review:'CF Expertise Comptable nous accompagne de l’établissement de notre bilan comptable, à la présentation de nos comptes auprès de nos actionnaires '},
        {img:'male-02.jpg',name:'Brian Markise',work:'CTO At Workflow' , review:'CF Expertise Comptable nous accompagne dans tous nos besoins en comptabilité'},
        {img:'male-07.jpg   ',name:'Brian Markise',work:'CTO At Workflow' , review:'CF Expertise Comptable nous accompagne dans tous nos besoins en comptabilité : de l’établissement de notre bilan comptable, à la présentation de nos comptes auprès de nos actionnaires '},
        {img:'male-16.jpg',name:'Brian Markise',work:'CTO At Workflow' , review:'CF Expertise Comptable nous accompagne d'},
        {img:'male-18.jpg',name:'Brian Markise',work:'CTO At Workflow' , review:'CF Expertise Comptable nous accompagne d'},
    ]
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../home/header/header.component';
import { FooterComponent } from '../home/footer/footer.component';

@Component({
  selector: 'app-annonces',
  standalone: true,
  imports: [CommonModule,HeaderComponent,FooterComponent],
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent {
    people=[
        {img:'brian.jpg',name:'Info Academie',tag:'figma',tag1:'StarUml',tag2:'Github', work:'CTO At Workflow' , review:'CF Expertise Comptable nous accompagne de l’établissement de notre bilan comptable, comptes auprès de nos actionnaires '},
        {img:'male-01.jpg',name:'Info Academie',tag:'figma',tag1:'StarUml',tag2:'Github',work:'CTO At Workflow' , review:'CF Expertise Comptable nous accompagne de l’établissement de notre bilan comptable, à la présentation de nos comptes auprès de nos actionnaires '},
        {img:'male-07.jpg   ',name:'Info Academie',tag:'figma',tag1:'StarUml',tag2:'Github',work:'CTO At Workflow' , review:'CF Expertise Comptable nous accompagne dans tous nos besoins en comptabilité : de l’établissement de notre bilan comptable, à la présentation de nos comptes auprès de nos actionnaires '},
        {img:'brian.jpg',name:'Info Academie',tag:'figma',tag1:'StarUml',tag2:'Github',work:'CTO At Workflow' , review:'CF Expertise Comptable nous accompagne de l’établissement de notre bilan comptable, comptes auprès de nos actionnaires '},
        {img:'male-01.jpg',name:'Info Academie',tag:'figma',tag1:'StarUml',tag2:'Github',work:'CTO At Workflow' , review:'CF Expertise Comptable nous accompagne de l’établissement de notre bilan comptable, à la présentation de nos comptes auprès de nos actionnaires '},
        {img:'male-07.jpg   ',name:'Info Academie',tag:'figma',tag1:'StarUml',tag2:'Github',work:'CTO At Workflow' , review:'CF Expertise Comptable nous accompagne dans tous nos besoins en comptabilité : de l’établissement de notre bilan comptable, à la présentation de nos comptes auprès de nos actionnaires '},

        {img:'brian.jpg',name:'Info Academie',tag:'figma',tag1:'StarUml',tag2:'Github',work:'CTO At Workflow' , review:'CF Expertise Comptable nous accompagne de l’établissement de notre bilan comptable, comptes auprès de nos actionnaires '},
        {img:'male-01.jpg',name:'Info Academie',tag:'figma',tag1:'StarUml',tag2:'Github',work:'CTO At Workflow' , review:'CF Expertise Comptable nous accompagne de l’établissement de notre bilan comptable, à la présentation de nos comptes auprès de nos actionnaires '},
        {img:'male-07.jpg   ',name:'Info Academie',tag:'figma',tag1:'StarUml',tag2:'Github',work:'CTO At Workflow' , review:'CF Expertise Comptable nous accompagne dans tous nos besoins en comptabilité : de l’établissement de notre bilan comptable, à la présentation de nos comptes auprès de nos actionnaires '},

    ]
}

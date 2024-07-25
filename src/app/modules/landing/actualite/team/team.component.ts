import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
    currentIndex = 0;
    isLargeScreen = window.innerWidth >= 1024;
    slides = [
      { image: 'male-01.jpg', name: 'Laurent Carponsin', description: 'Expert-Comptable et Commissaire aux comptes', post:'Associé CF' },
      { image: 'male-10.jpg', name: 'Laurent Carponsin', description: 'Expert-Comptable et Commissaire aux comptes', post:'Associé CF' },
      { image: 'male-14.jpg', name: 'Laurent Carponsin', description: 'Expert-Comptable et Commissaire aux comptes', post:'Associé CF' },
      { image: 'male-15.jpg', name: 'Laurent Carponsin', description: 'Expert-Comptable et Commissaire aux comptes', post:'Associé CF' },
      { image: 'male-16.jpg', name: 'Laurent Carponsin', description: 'Expert-Comptable et Commissaire aux comptes', post:'Associé CF' },
    ];


    ngOnInit(): void {

    }

    ngOnDestroy(): void {
      window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
      this.isLargeScreen = window.innerWidth >= 1024;
    };

    handleNext(): void {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }

    handlePrev(): void {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    }


}

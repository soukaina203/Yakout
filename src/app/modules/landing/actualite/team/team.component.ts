import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
    currentIndex = 0;
    isLargeScreen = false;

    slides = [
      {
        name: 'Laurent Carponsin',
        content: 'Expert-Comptable et Commissaire aux comptes',
        image: 'assets/images/avatars/path_to_image1.jpg',
      },
      {
        name: 'Tristan de La Rivière',
        content: 'Avocat à la cour',
        image: 'assets/images/avatars/path_to_image2.jpg',
      },
      {
        name: 'Gregory Dupont',
        content: 'Expert-Comptable et Commissaire aux Comptes',
        image: 'assets/images/avatars/path_to_image3.jpg',
      },
      {
        name: 'Frédéric Huguet',
        content: 'Expert-Comptable',
        image: 'assets/images/avatars/path_to_image4.jpg',
      }
    ];

    constructor() {
      this.updateScreenSize();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.updateScreenSize();
    }

    updateScreenSize() {
      this.isLargeScreen = window.innerWidth >= 1024; // Tailwind's lg breakpoint
    }

    handlePrev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    }

    handleNext() {
      if (this.currentIndex < this.slides.length - (this.isLargeScreen ? 3 : 1)) {
        this.currentIndex++;
      }
    }
}

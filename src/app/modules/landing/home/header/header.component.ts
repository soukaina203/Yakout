import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from 'app/mat.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,MatModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}

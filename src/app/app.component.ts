import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './modules/landing/home/header/header.component';
import { HomeComponent } from './modules/landing/home/home.component';
import { MatModule } from './mat.module';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss'],
    standalone : true,
    imports    : [RouterOutlet,HeaderComponent,HomeComponent,MatModule],
})
export class AppComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}

import { PropertiesComponent } from './properties/properties.component';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { FutureComponent } from './future/future.component';
import { ValuesComponent } from './values/values.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticlesComponent } from './articles/articles.component';

@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatButtonModule, ArticlesComponent,FooterComponent, HeaderComponent, RouterLink, MatIconModule,HeroComponent,PropertiesComponent,FutureComponent,ValuesComponent],
})
export class HomeComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}

import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { HeaderService } from './header.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor (private headerService: HeaderService) { }

  get title(): string { 
    return this.headerService.headerData.title
  }   

  get icon(): string { 
    return this.headerService.headerData.icon
  } 

  get routeUrl(): string { 
    return this.headerService.headerData.routeUrl
  } 

}

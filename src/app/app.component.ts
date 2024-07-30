import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, HeaderComponent, 
    MatSlideToggleModule, FooterComponent,
    NavComponent, RouterLink, RouterLinkActive, ProductCreateComponent,
    ProductReadComponent
    
  ],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'meu-app';
}

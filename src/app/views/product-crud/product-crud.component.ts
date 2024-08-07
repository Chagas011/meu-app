import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import { Router } from '@angular/router';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent {

  constructor(private router: Router, private headerService: HeaderService) { 

    headerService.headerData = { 
      title: 'Cadastro de produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  navigateToProductCreate(): void { 
    this.router.navigate(['/products/create'])
  }

  navigateToProductRead(): void { 
    this.router.navigate(['/products/read'])
  }
}

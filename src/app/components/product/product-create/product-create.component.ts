import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {


 constructor(private productService: ProductService,
  private router: Router) {}

 createProduct(): void { 
    const product: Product = { 
      name: 'prduto novo5',
      price: 99.99
    }
    this.productService.create(product).subscribe(() => { 
      this.productService.showMessage('operacao executada')
    })
   
 }

 cancel(): void { 
  this.router.navigate(['/'])
 }
}

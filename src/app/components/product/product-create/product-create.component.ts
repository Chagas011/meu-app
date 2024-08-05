import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import {FormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [MatButtonModule, FormsModule, 
    MatFormFieldModule, MatInputModule, MatCardModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {
  product: Product = { 
    id: 0,
    name: '',
    price: 0
  }

 constructor(private productService: ProductService,
  private router: Router) {}

 createProduct(): void { 
    
    this.productService.create(this.product).subscribe(() => { 
      this.productService.showMessage('Produto Cadastrado com sucesso')
    })
    this.router.navigate(['/products/read'])
   
 }

 cancel(): void { 
  this.router.navigate(['/'])
 }
}

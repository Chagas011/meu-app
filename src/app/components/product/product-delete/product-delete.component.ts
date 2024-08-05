import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import {FormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import { Product } from '../product.model';
@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [MatCardModule, FormsModule, MatFormFieldModule, 
    MatInputModule, MatButtonModule
  ],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent {

  product: Product = { 
    id: 0,
    name: '',
    price: 0
  }
  constructor (private productService: ProductService, 
    private router: Router, private route: ActivatedRoute
  ) {}

  ngOnInit(): void { 
    const id =  this.route.snapshot.paramMap.get('id')
    if (id === null) { 
      throw Error
    }
    this.productService.readById(id).subscribe(product => { 
      this.product = product
    })
  }

  deleteProduct(): void { 
    this.productService.delete(this.product.id).subscribe(() => { 
      this.productService.showMessage('Produto excluido com sucesso')
      this.router.navigate(['/products/read'])
    })
  }

  cancel(): void { 
    this.router.navigate(['/products/read'])
  }
}

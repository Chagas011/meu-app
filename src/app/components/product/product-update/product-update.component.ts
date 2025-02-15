import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import {FormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, 
      MatInputModule, MatCardModule, MatButtonModule
  ],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent {

  product: Product = { 
    id: 0,
    name: '',
    price: 0
  }

  constructor (private productService: ProductService,
      private router: Router, private route: ActivatedRoute
  ) { }
  ngOnInit(): void { 
    const id =  this.route.snapshot.paramMap.get('id')
    if (id === null) { 
      throw Error
    }
    this.productService.readById(id).subscribe(product => { 
      this.product = product
    })
  }
  updateProduct(): void { 
      this.productService.update(this.product).subscribe(() => { 
        this.productService.showMessage('Produto atualizado com sucesso')
        this.router.navigate(['/products/read'])
      })
  }

  cancel(): void { 
    this.router.navigate(['/products/read'])
   }
}

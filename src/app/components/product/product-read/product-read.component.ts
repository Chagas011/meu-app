import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [CommonModule, MatTableModule, RouterOutlet,
    RouterLink, RouterLinkActive
  ],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})
export class ProductReadComponent {

    constructor (private productService: ProductService) {}

    products: Product[] = []
    displayedColumns = ['id', 'name', 'price', 'action']

    ngOnInit(): void { 
      this.productService.read().subscribe(products => { 
        this.products = products
      })
    }
}

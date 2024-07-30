import { Routes } from '@angular/router';
import {ProductCrudComponent } from'./views/product-crud/product-crud.component'
import { HomeComponent } from './views/home/home.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';

export const routes: Routes = [
    { 
        path: "",
        component: HomeComponent
    }, 
    {
        path: "products",
        component: ProductCrudComponent
    },
    { 
        path: "products/create",
        component: ProductCreateComponent
    }, 
    {
        path: "products/read",
        component: ProductReadComponent
    },
    { 
        path: "products/update/:id", 
        component: ProductUpdateComponent
    }



];

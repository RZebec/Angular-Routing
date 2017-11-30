import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductEditComponent } from "./product-edit.component";

const ROUTES = [
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'products/:id/edit', component: ProductEditComponent }
  ];

@NgModule({
    imports: [
        RouterModule.forChild( ROUTES )
    ],
    exports: [ RouterModule ]
})
export class ProductRoutingModule {}

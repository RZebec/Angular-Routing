import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductResolver } from './product-resolver.service';
import { ProductEditInfoComponent } from './product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit-tags.component';

const ROUTES = [
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'products/:id',
        component: ProductDetailComponent,
        resolve: { product: ProductResolver }
    },
    {
        path: 'products/:id/edit',
        component: ProductEditComponent,
        resolve: { product: ProductResolver },
        children: [
            {
                path: '',
                redirectTo: 'info',
                pathMatch: 'full'
            },
            {
                path: 'info',
                component: ProductEditInfoComponent
            },
            {
                path: 'tags',
                component: ProductEditTagsComponent
            }
        ]
    }
  ];

@NgModule({
    imports: [
        RouterModule.forChild( ROUTES )
    ],
    exports: [ RouterModule ],
    providers: [ ProductResolver ],
})
export class ProductRoutingModule {}

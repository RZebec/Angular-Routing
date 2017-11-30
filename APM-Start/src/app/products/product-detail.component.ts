import { Component } from '@angular/core';

import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './app/products/product-detail.component.html'
})
export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {
        this.activatedRoute.data.subscribe(
            data => {
                this.product = data['product'];
            }
        );
    }

    onBack() {
        this.router.navigate(['/products'], {
            preserveQueryParams: true
        });
    }
}

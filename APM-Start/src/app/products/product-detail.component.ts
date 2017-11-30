import { Component } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
    templateUrl: './app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit{
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;


    constructor(
        private productService: ProductService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {
        this.activatedRoute.params.subscribe(
            params => {
                let id = +this.activatedRoute.snapshot.params['id'];
                this.getProduct(id);
            }
        )
    }

    ngOnInit() {
    }

    getProduct(id: number) {
        this.productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    onBack() {
        this.router.navigate(['/products'],
            { preserveQueryParams: true
        });
    }
}

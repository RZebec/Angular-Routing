import { CanDeactivate } from '@angular/router';
import { ProductEditComponent } from './product-edit.component';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductEditGuard implements CanDeactivate<ProductEditComponent> {

    canDeactivate(component: ProductEditComponent): boolean {
        if (component.isDirty) {
            let productname = component.product.productCode || 'New Product';
            return confirm(`Navigate away and lose all changes to ${productname}?`);
        }
        return true;
    }
}
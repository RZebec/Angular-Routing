import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './user/auth-guard.service';
import { SelectiveStrategy } from './selective-stretegy.service';

const ROUTES = [
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'products',
        loadChildren: 'app/products/product.module#ProductModule',
        canActivate: [ AuthGuard ],
        data: { preload: false }
    },
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES, {enableTracing: true, preloadingStrategy: SelectiveStrategy })
    ],
    exports: [ RouterModule ],
    providers: [ SelectiveStrategy ]
})
export class AppRoutingModule {}

import { Injectable } from '@angular/core';
import { PreloadingStrategy } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Route } from '@angular/router';
import 'rxjs/add/observable/of';

@Injectable()
export class SelectiveStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        if (route.data && route.data['preload']) {
            return load();
        }
        return Observable.of(null);
    }
}
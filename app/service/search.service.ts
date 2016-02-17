/**
 * Created by dlebel on 15/02/16.
 */
import { Injectable } from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';

@Injectable()
export class SearchService{
    value$: Observable<string>;
    private _searchObserver: any;
    constructor(){
         this.value$ = new Observable(observer =>
            this._searchObserver = observer).share();
    }

    nextValue(value: string){
        console.log(value);
        if(value){
            this._searchObserver.next(value);
        }else{
            this._searchObserver.next('*');
        }
    }
}
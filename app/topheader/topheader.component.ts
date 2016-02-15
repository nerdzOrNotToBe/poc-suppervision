import {Component} from "angular2/core";
import {SearchService} from "app/service/search.service"

@Component({
    selector:'top-header',
    templateUrl:'app/topheader/template.html',
})

export class TopHeader implements AfterViewChecked{
    search: string;

    constructor(private _searchService: SearchService){
        this.search = null;
    }
    onChange(){
        this._searchService.nextValue(this.search);
    }
}
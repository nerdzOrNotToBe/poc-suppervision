/**
 * Created by dimitri on 16/02/2016.
 */

import {Component} from "angular2/core";
import {Input} from "angular2/core";
import {SearchService} from "../service/search.service";
declare var jQuery:JQueryStatic;

@Component({
    selector:'kibana',
    template: `<iframe [src]="url" [attr.id]="'iframe'+index" style="height: 95%;width: 100%" frameBorder="0"></iframe>`
})

export class Kibana{
    @Input() url: string;
    @Input() index: number;
    constructor(private searchService: SearchService){
        this.searchService.value$.subscribe(value => {this.updateIframe(value)})
    }

    private updateIframe(value:String):void {
        var temp = this.url.replace("query:'*'","query:'"+value+"'");
        var child = document.getElementById('iframe'+this.index);
        var parent = child.parentNode;
        var newChild = document.createElement("iframe");
        newChild.setAttribute("src",temp);
        newChild.setAttribute("id", 'iframe'+this.index)
        newChild.setAttribute("style", 'height: 95%;width: 100%');
        parent.replaceChild(newChild,child);
    }
    replaceAll(s:string){

    }
}
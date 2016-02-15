/**
 * Created by dimitri on 13/02/2016.
 */
import {Component} from "angular2/core";
import {View} from "angular2/core";
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector:'menu',
    directives: [ROUTER_DIRECTIVES],
    templateUrl:'app/leftmenu/template.html'
})

export class LeftMenu{
    constructor(){}
}
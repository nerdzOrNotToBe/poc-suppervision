/**
 * Created by dlebel on 12/02/16.
 */
import {Component, OnInit} from 'angular2/core'
import {
    RouteConfig,
    ROUTER_DIRECTIVES
} from 'angular2/router';

import {DashboardKibana} from "./dashbordKibana/dashbord.component";
import {RouterOutlet} from "angular2/router";
import {LeftMenu} from "./leftmenu/leftmenu.component";
import {View} from "angular2/core";


@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'app/app.html',
    directives: [DashboardKibana, RouterOutlet, LeftMenu]
})
@RouteConfig([
    {path: '/', component: DashboardKibana, name: 'DashbordKibana'},
    { path: '/**', redirectTo: ['DashbordKibana'] }
])
export class AppComponent{
    constructor(){

    }

}
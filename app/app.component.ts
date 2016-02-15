/**
 * Created by dlebel on 12/02/16.
 */
import {Component, OnInit, AfterContentChecked} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {DashboardKibana} from "./dashbordKibana/dashbord.component";
import {LeftMenu} from "./leftmenu/leftmenu.component";
import {Gridster} from "./gridster/gridster.component";
import {TopHeader} from "./topheader/topheader.component";
import { SearchService } from './service/search.service';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [Gridster, LeftMenu, DashboardKibana, TopHeader, ROUTER_DIRECTIVES ],
    providers: [ ROUTER_PROVIDERS, SearchService ]
})

@RouteConfig([
    {path: '/dashboardkibana', component: DashboardKibana, name: 'DashbordKibana', useAsDefault:true},
    {path: '/gridster', component: Gridster, name: 'Gridster'},
])
export class AppComponent{
    constructor(){}
}
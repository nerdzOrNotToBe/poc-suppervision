/**
 * Created by dimitri on 12/02/2016.
 */
import {Component} from "angular2/core";
import {View} from "angular2/core";
import {TopHeader} from "app/topheader/topheader.component";
import { SearchService } from 'app/service/search.service';
declare var jQuery:JQueryStatic;

@Component({
    selector:'dashboard-kinaba',
    templateUrl:'app/dashbordKibana/template.html',
})

export class DashboardKibana{
    query: string;
    constructor(private _searchService: SearchService){
        this.query = '*';
    }
    ngOnInit(){
        this._searchService.value$.subscribe(value => jQuery('#frame').html(this.getIframe(value)));
        jQuery('#frame').html(this.getIframe(null));
        jQuery("#frame").height(jQuery(window).height() - 100)
    }
    getIframe(query){
        if(query){
            this.query = query;
        }
        return "<iframe id='myFrame' src=\"http://cbox-kibana.spotter.com/app/kibana#/dashboard/Main-Dashboard?embed&_g=(filters:!(),refreshInterval:(display:'5%20minutes',pause:!f,section:2,value:300000),time:(from:now-7d,mode:quick,to:now))&_a=(filters:!(),options:(darkTheme:!f),panels:!((col:1,id:'Users:-List',row:1,size_x:3,size_y:5,type:visualization),(col:4,id:'Connections:-Total',row:6,size_x:3,size_y:2,type:visualization),(col:4,id:'Search:-Total',row:10,size_x:3,size_y:3,type:visualization),(col:1,id:'Top-5-Countries-(per-Connections)',row:6,size_x:3,size_y:5,type:visualization),(col:4,id:'Connections:-Number-of-users-per-date',row:1,size_x:9,size_y:3,type:visualization),(col:7,id:'Connections:-Top-5-Countries-per-date',row:8,size_x:6,size_y:3,type:visualization),(col:7,id:'Data:-Number-of-reports-published',row:11,size_x:3,size_y:2,type:visualization),(col:4,id:'Data:-Number-of-documents-saved',row:8,size_x:3,size_y:2,type:visualization),(col:1,id:'Newsletter:-Volume-by-day-(2)',row:13,size_x:12,size_y:2,type:visualization),(col:7,id:Avg-session-time,row:6,size_x:3,size_y:2,type:visualization),(col:10,id:Number-of-distinct-users,row:6,size_x:3,size_y:2,type:visualization),(col:4,id:'Connections:-Unique-user-count-by-day',row:4,size_x:9,size_y:2,type:visualization),(col:10,id:Password-recovery,row:11,size_x:3,size_y:2,type:visualization)),query:(query_string:(analyze_wildcard:!t,query:'"+this.query+"')),title:'Main%20Dashboard')\" allowtransparency=true frameborder=0 style='overflow: hidden;width: 100%' height='100%' width='100%'></iframe>";
    }
}
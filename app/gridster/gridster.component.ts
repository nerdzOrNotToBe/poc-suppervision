/**
 * Created by dlebel on 15/02/16.
 */
import {Component} from "angular2/core";
import {View} from "angular2/core";
import {StandardItem} from "app/gridster/standardItem";
import {Kibana} from "../widget/iframe.component";
import {Custom} from "../widget/custom.component";
declare var jQuery:JQueryStatic;

@Component({
    selector:'gridster',
    templateUrl:'app/gridster/template.html',
    directives: [Kibana, Custom]
})

export class Gridster{
    standardItems : Array<StandardItem>;
    options: any;
    listWidget:any;
    selected:any;

    constructor(){
        this.options = {};
        this.standardItems = [];
        this.listWidget =  [
            {
                name:'Top-5-Country-(Distribution-per-day)',
                type:"iframe",
                src:"http://cbox-kibana.spotter.com/app/kibana#/visualize/edit/Connections-:-Top-5-Country-(Distribution-per-day)?embed&_g=(filters:!(),refreshInterval:(display:'5%20minutes',pause:!f,section:2,value:300000),time:(from:now%2Fy,mode:quick,to:now))&_a=(filters:!(),linked:!f,query:(query_string:(analyze_wildcard:!t,query:'-mdc.username:%20(%22cbonnin%22%20%7C%20%22rcatay%22%20%7C%20%22rcatay1%22%7C%20%22testuser%22%20%7C%20%22anaathayde%22%20%7C%20%22lathayde%22%20%7C%20%22rweetman%22%20%7C%20%22dlebel%22%20%7C%20%20%22spotterAdmin%22%20%7C%20%22ade%22%20%7C%20%22Claudia_V%22%20%7C%20%22Cynthia_F%22%20%7C%20%22pabulo%22%20%7C%20%22Muriel%20S%22%20%7C%20%22Oph%C3%A9lia%22%20%7C%20%22Oph%C3%A9lia%20User%22%20%7C%20%22Muriel%20user%22%20%7C%20%22synchro%22%20%7C%20%22Muriel%22)')),vis:(aggs:!((id:'3',params:(customInterval:'2h',extended_bounds:(),field:'@timestamp',interval:d,min_doc_count:1),schema:segment,type:date_histogram),(id:'2',params:(),schema:metric,type:count),(id:'4',params:(field:geoip.country_name.raw,order:desc,orderBy:'2',size:5),schema:group,type:terms)),listeners:(),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,defaultYExtents:!f,mode:stacked,scale:linear,setYExtents:!f,shareYAxis:!t,times:!(),yAxis:()),type:histogram))"
            },
            {
                name:'Number-of-users-per-date',
                type:"iframe",
                src:"http://cbox-kibana.spotter.com/app/kibana#/visualize/edit/Connections:-Number-of-users-per-date?embed&_g=(filters:!(),refreshInterval:(display:'5%20minutes',pause:!f,section:2,value:300000),time:(from:now%2Fy,mode:quick,to:now))&_a=(filters:!((meta:(disabled:!f,index:'cbox-stats*',key:message,negate:!f,value:Get),query:(match:(message:(query:Get,type:phrase))))),linked:!f,query:(query_string:(analyze_wildcard:!t,query:'-mdc.username:%20(%22cbonnin%22%20%7C%20%22rcatay%22%20%7C%20%22rcatay1%22%7C%20%22testuser%22%20%7C%20%22anaathayde%22%20%7C%20%22lathayde%22%20%7C%20%22rweetman%22%20%7C%20%22dlebel%22%20%7C%20%20%22spotterAdmin%22%20%7C%20%22ade%22%20%7C%20%22Claudia_V%22%20%7C%20%22Cynthia_F%22%20%7C%20%22pabulo%22%20%7C%20%22Muriel%20S%22%20%7C%20%22Oph%C3%A9lia%22%20%7C%20%22Oph%C3%A9lia%20User%22%20%7C%20%22Muriel%20user%22%20%7C%20%22synchro%22%20%7C%20%22Muriel%22)')),vis:(aggs:!((id:'3',params:(customInterval:'2h',extended_bounds:(),field:'@timestamp',interval:auto,min_doc_count:1),schema:segment,type:date_histogram),(id:'2',params:(field:mdc.username.raw),schema:metric,type:cardinality)),listeners:(),params:(addLegend:!f,addTimeMarker:!f,addTooltip:!t,defaultYExtents:!f,drawLinesBetweenPoints:!t,interpolate:linear,mode:stacked,radiusRatio:9,scale:linear,setYExtents:!f,shareYAxis:!t,showCircles:!t,smoothLines:!t,times:!(),yAxis:()),type:line))"
            },
            {
                name:'Top-20-Companies',
                type:"iframe",
                src:"http://cbox-kibana.spotter.com/app/kibana#/visualize/edit/Top-20-Companies?embed&_g=(filters:!(),refreshInterval:(display:'5%20minutes',pause:!f,section:2,value:300000),time:(from:now%2Fy,mode:quick,to:now))&_a=(filters:!((meta:(disabled:!f,index:'cbox-stats*',key:message,negate:!f,value:'Get%20Theme'),query:(match:(message:(query:'Get%20Theme',type:phrase))))),linked:!f,query:(query_string:(analyze_wildcard:!t,query:'*')),vis:(aggs:!((id:'3',params:(field:mdc.company.raw,order:desc,orderBy:'2',size:20),schema:segment,type:terms),(id:'2',params:(),schema:metric,type:count)),listeners:(),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,defaultYExtents:!f,mode:stacked,scale:linear,setYExtents:!f,shareYAxis:!t,times:!(),yAxis:()),type:histogram))"
            },
            {
                name:'Number-of-documents-published',
                type:"iframe",
                src:"http://cbox-kibana.spotter.com/app/kibana#/visualize/edit/Data:-Number-of-documents-published?embed&_g=(filters:!(),refreshInterval:(display:'5%20minutes',pause:!f,section:2,value:300000),time:(from:now%2Fy,mode:quick,to:now))&_a=(filters:!(),linked:!t,query:(query_string:(query:'*')),vis:(aggs:!((id:'1',params:(),schema:metric,type:count)),listeners:(),params:(fontSize:60),type:metric))"
            },
            {
                name:'Custom',
                type:"custom"
            },
            {
                name:'Custom2',
                type:"custom"
            }
        ]
    }

    ngAfterViewInit(){
        $('.grid-stack').gridstack({
            width: 12,
            always_show_resize_handle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            resizable: {
                handles: 'e, se, s, sw, w'
            }
        });
    }

    add(){
        var widget = this.listWidget[this.selected]
        var i = this.standardItems.push({
            col: 1,
            row: 1,
            sizeY: 6,
            sizeX: 4,
            name: widget.name,
            url: widget.src,
            type: widget.type
        });

        this.transformToWidget(i);
    }

    transformToWidget(i: number){
        setTimeout(function(){
            var grid = $('.grid-stack').data('gridstack');
            var widget = grid.make_widget('#grid-'+(i-1));
            if(!widget){
                this.transformToWidget(i);
            }
        },100);
    }
}
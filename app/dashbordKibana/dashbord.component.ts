/**
 * Created by dimitri on 12/02/2016.
 */
import {Component} from "angular2/core";
import {View} from "angular2/core";
declare var jQuery:JQueryStatic;

@Component({
    selector:'dashboard-kinaba'
})
@View({
    templateUrl:'app/dashbordKibana/template.html'
})

export class DashboardKibana{
    constructor(){}
    ngOnInit(){
        jQuery("iframe").height(jQuery(window).height() - 10)
    }
}
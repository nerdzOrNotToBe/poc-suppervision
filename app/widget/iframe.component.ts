/**
 * Created by dimitri on 16/02/2016.
 */

import {Component} from "angular2/core";
import {Input} from "angular2/core";
@Component({
    selector:'kibana',
    template: `<iframe [src]="url" style="height: 95%;width: 100%"></iframe>`
})

export class Kibana{
    @Input() url: string;
}
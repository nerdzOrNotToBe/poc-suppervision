/**
 * Created by dlebel on 12/02/16.
 */
import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {ROUTER_PROVIDERS,ROUTER_DIRECTIVES} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";
import {provide} from "angular2/core";
import {LocationStrategy} from "angular2/router";
import {HashLocationStrategy} from "angular2/router";

bootstrap(AppComponent,[ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
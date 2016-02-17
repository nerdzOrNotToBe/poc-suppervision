/**
 * Created by dlebel on 17/02/16.
 */
import {Component,Input} from 'angular2/core';
import {Http} from 'angular2/http';
import { SearchService } from '../service/search.service';
@Component({
    selector:'custom',
    templateUrl:'app/widget/customTemplate.html'
})

export class Custom{
    url: string;
    data: any;
    query: any;
    constructor(private http: Http,private _searchService: SearchService ){
        this.url = "http://cbox-stat.spotter.com:9200/cbox-stat*/_search";

        this.query = {
            "query": {
                "filtered": {
                    "query": {
                        "query_string": {
                            "analyze_wildcard": true,
                            "query": "*"
                        }
                    },
                    "filter": {
                        "bool": {
                            "must": [
                                {
                                    "query": {
                                        "match": {
                                            "message": {
                                                "query": "Query Index",
                                                "type": "phrase"
                                            }
                                        }
                                    }
                                },
                                {
                                    "range": {
                                        "@timestamp": {
                                            "gte": 1451602800000,
                                            "lte": 1455700510706,
                                            "format": "epoch_millis"
                                        }
                                    }
                                }
                            ],
                            "must_not": []
                        }
                    }
                }
            },
            "size": 0,
            "aggs": {
                "3": {
                    "terms": {
                        "field": "mdc.username",
                        "size": 20,
                        "order": {
                            "_count": "desc"
                        }
                    }
                }
            }
        };
    }
    ngOnInit(){
        this._searchService.value$.subscribe(value => {this.query.query.filtered.query.query_string.query=value; this.loadData();});
        this.loadData();
    }
    loadData(){
        this.http.post(this.url,JSON.stringify(this.query)).subscribe(res => this.data = res.json().aggregations[3].buckets);
    }
}

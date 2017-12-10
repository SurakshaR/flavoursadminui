import {Injectable} from "@angular/core";
import {Headers, RequestOptions, Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class rateService {
    constructor( private http: Http) {
        
        
      }
      getRating(): any {
    
        
                let headers = new Headers({
                    'Content-Type': 'application/json'
        
                });
                let options = new RequestOptions({ headers: headers });
                //let reqObj = requestObject;
        
                 let url='https://flavourapi.herokuapp.com/get/rating/'; 
        
                return this.http.get(url, options)
                    .map((res: Response) => {
                        console.log("inside map", res.json());
                        return res.json();
                    })
                    .catch((error: any) => {
                        console.log("inside catch");
                        return Observable.throw(error.json().error || "Server error");
                    });
            }
            getFeedback(): any {
                
                    
                            let headers = new Headers({
                                'Content-Type': 'application/json'
                    
                            });
                            let options = new RequestOptions({ headers: headers });
                            //let reqObj = requestObject;
                    
                             let url='https://flavourapi.herokuapp.com/get/feedback/'; 
                    
                            return this.http.get(url, options)
                                .map((res: Response) => {
                                    console.log("inside map", res.json());
                                    return res.json();
                                })
                                .catch((error: any) => {
                                    console.log("inside catch");
                                    return Observable.throw(error.json().error || "Server error");
                                });
                        }
        
}
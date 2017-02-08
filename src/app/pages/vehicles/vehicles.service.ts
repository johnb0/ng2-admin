import { Injectable }     from '@angular/core';
import { Vehicle }     from './vehicle';
import { PagedModel }     from 'app/common/models/pagedModel.interface';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class VehiclesService {
    // Resolve HTTP using the constructor
    constructor (private http: Http) {}
    // private instance variable to hold base url
    private commentsUrl = 'http://dev.garageservice.gelekoka.com/api/v1/vehicles';

    // Fetch existing vehicle
    getVehicle(id:number) : Observable<Vehicle>{
        // ...using get request
        return this.http.get(`${this.commentsUrl}/${id}`)
                      // ...and calling .json() on the response to return data
                        .map((res:Response) => res.json())
                        //...errors if any
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

    // Fetch all existing vehicles
    getVehicles() : Observable<PagedModel<Vehicle>>{
        // ...using get request
        return this.http.get(this.commentsUrl)
                      // ...and calling .json() on the response to return data
                        .map((res:Response) => res.json())
                        //...errors if any
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

    //  // Add a new comment
    // addComment (body: Object): Observable<Comment[]> {
    //     let bodyString = JSON.stringify(body); // Stringify payload
    //     let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    //     let options = new RequestOptions({ headers: headers }); // Create a request option

    //     return this.http.post(this.commentsUrl, body, options) // ...using post request
    //                      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //                      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    // }

    // // Update a comment
    // updateComment (body: Object): Observable<Comment[]> {
    //     let bodyString = JSON.stringify(body); // Stringify payload
    //     let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    //     let options = new RequestOptions({ headers: headers }); // Create a request option

    //     return this.http.put(`${this.commentsUrl}/${body['id']}`, body, options) // ...using put request
    //                      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //                      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    // }
    // // Delete a comment
    // removeComment (id:string): Observable<Comment[]> {
    //     return this.http.delete(`${this.commentsUrl}/${id}`) // ...using put request
    //                      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //                      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    // }
}

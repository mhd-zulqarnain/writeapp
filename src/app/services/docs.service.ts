import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
//const httpOption = new HttpParams()
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})


export class DocsService {
  constructor(private http: HttpClient) { }
//   private rootUrl = 'http://localhost:3000/users';
 
  generateDoc(body): Observable<any> {
    return this.http.post('http://localhost:3000/users', {body},{responseType: 'text'})
  };
  }
//     console.log('body', body)
//     let data = JSON.stringify(body);
//   //  let httpHeaders = new HttpHeaders()
// //     let options = {
// //       headers: httpHeaders
// //  }; 
//     //let bodyString = JSON.stringify(body); // Stringify payload
//     let headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
//      let options ={headers: headers }; // Create a request option
    
//     return this.http.post('http://localhost:3000/users',{data}) // ...using post request
//     .map((res: Response) =>{
//       console.log(res,"sdasdsadls';d")
//       res.json()
//     })  // ...and calling .json() on the response to return data
//     .catch(error => Observable.throw("Error in x service"));

//   }

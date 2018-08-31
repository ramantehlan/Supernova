import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  url: string = "https://www.metaweather.com/api/location/search/?lattlong=50.068,-5.316?&lattlong=28.704060%2C77.102493;"
  // This is to store http parameters and options
   httpOptions: any;

  constructor(public navCtrl: NavController,
  	private HttpClient: HttpClient) {

  	 this.httpOptions = {
          headers: new HttpHeaders()
      }

  	this.HttpClient.get<any>(this.url , this.httpOptions).pipe(
  		tap(heroes => console.log('fetched')),
        catchError(this.handleError("test", []))
        ).subscribe(
        	 data => {
          		console.log(data);
        	}
        );
  }



    private handleError<T>(operation = 'Unknown', result?: T) {
      return (error: any): Observable<T> => {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
        console.log("error");
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

  

}

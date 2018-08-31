import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { AndroidPermissions } from '@ionic-native/android-permissions';

import { HttpService} from "../../service/http.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



	 /*********************
    * Variables
    **********************/

    // Date 
    uvData: object;
    test:string = "Test"

    /*
	Constant values
    */

    // weather
    metaWeather: string = "https://www.metaweather.com/api/location/search/";
    mwPara: object = {
    	"lattlong": "28.704060,77.102493"
    }
    mwHeader: object= {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': 'https://www.metaweather.com',
        'Access-Control-Allow-Methods': 'GET,POST',
        'Access-Control-Allow-Headers': 'Content-Type',
        "Authorization": "Negotiate"
    }

    // Url from where the data is to be fetched
    air: string = "https://api.breezometer.com/baqi/"
    uv: string = "http://api.openweathermap.org/data/2.5/uvi";
    weather: string = "http://api.openweathermap.org/data/2.5/weather?appid=b48d71c76bc12ce4415b45cbb858195f&lat=28.704060&lon=77.102493&callback=JSONP_CALLBACK";
    // Parameters object for login api
    uvPara:object = {
    	"appid": "b48d71c76bc12ce4415b45cbb858195f",
    	"lat": "28.704060",
    	"lon": "77.102493",
    }
    // Para for air
    para2: object ={
    	"appid": "2d2a717abed743c982bf247bb59be090",
    	"lat": "28.632430",
    	"lon": "77.218790",
    	"callback": "JSONP_CALLBACK"
    }
    // Header object for login api
    uvHeader:object =  {

        'Content-Type': 'application/json; charset=utf-8',
         /*
        'x-api-key': 'b48d71c76bc12ce4415b45cbb858195f',
        'X-Cache-Key': '/data/2.5/uviweather?appid=b48d71c76bc12ce4415b45cbb858195f&lat=28.704060&lon=77.102493',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST',
        'Access-Control-Allow-Headers': 'Content-Type'
        */

    }

    /*********************
    * Functions
    **********************/

    /*
    *    To Check credentials to uv
    *    This function should start after setDAta
    *
    */
    getUV(): Observable<any>{
            return this.HttpService.fetch(this.uv, this.uvHeader, this.uvPara, "UV");
    }


  constructor(private androidPermissions: AndroidPermissions,
  			  private HttpService: HttpService,
  			  public navCtrl: NavController) {

  	// To get the required permissions
  	this.androidPermissions.requestPermissions([
  				this.androidPermissions.PERMISSION.CAMERA, 
  				this.androidPermissions.PERMISSION.GET_ACCOUNTS,
  				this.androidPermissions.PERMISSION.INTERNET,
  				this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
  				this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
  				this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION,
  				this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION,
  				this.androidPermissions.PERMISSION.CAMERA,

  				]);

  	// To get the UV Data
  	// This is to make a http call to fetch user information
    this.getUV().subscribe(
        data => {
          this.uvData = data;
          console.log(data);
        }, 
        error => alert("error")
      );


  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AndroidPermissions } from '@ionic-native/android-permissions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private androidPermissions: AndroidPermissions,
  			  public navCtrl: NavController) {

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

  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public base64Image: string;
  imageURL

options: CameraOptions = {
  /*
  quality: 100,
  destinationType: this.camera.DestinationType.FILE_URI,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
  */
}

  constructor(
    private camera: Camera,
    public navCtrl: NavController
            ) {
  }

takePhoto(){

    this.camera.getPicture(this.options).then((imageData) => {
  // imageData is either a base64 encoded string or a file URI
  // If it's base64 (DATA_URL):
  let base64Image = 'data:image/jpeg;base64,' + imageData;
  this.imageURL = imageData
 }, (err) => {
  // Handle error
 });
  }
  }


  





/*

const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.FILE_URI,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}


*/
import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource,ImageOptions } from '@capacitor/camera';


@Component({
  selector: 'app-fhoto',
  templateUrl: './fhoto.component.html',
  styleUrls: ['./fhoto.component.scss'],
})
export class FhotoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Prompt
    });
  
  
    // this.imageSource=image.dataUrl;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { CameraResultType } from '@capacitor/camera';
import { Camera, CameraResultType,ImageOptions } from '@capacitor/camera';

// import { Plugins } from '@capacitor/core';

// const {Camera}=Plugins
@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {
  // imageSource:any;
  // images:string[]=[]
  constructor(private router:Router) { }

  ngOnInit() {
    Camera.requestPermissions();
  }

  paginaprincipal(){
    this.router.navigate(['home']);
  }

// takePic(){
//   let options:CameraOptions={
//     quality:100,
//     resultType:CameraResultType.DataUrl,
//     saveToGallery:true
//   }
//   Camera.getPhoto(options).then((result)=>{})
// }

////////////////////////////////CODIGO 2
// async takeFhoto(){
//   debugger;
// const takePicture = async () => {
//   const image = await Camera.getPhoto({
//     quality: 90,
//     allowEditing: false,
//     resultType: CameraResultType.Uri,
//     source:CameraSource.Camera
//   });

//   // image.webPath will contain a path that can be set as an image src.
//   // You can access the original file using image.path, which can be
//   // passed to the Filesystem API to read the raw data of the image,
//   // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
//   var imageUrl = image.webPath;

//   // Can be set to the src of an image now
//   // imageElement.src = imageUrl;

//   this.imageSource=image.dataUrl;
// }
// }

// capture(){
//   var options:ImageOptions={
//     quality: 90,
//     resultType:CameraResultType.DataUrl
//   }
// }

//   camara.getPhoto(options).then((result)=>{
//   this.images.push(result.dataUrl);
//   },(err)=>{
//   alert(JSON.stringify(err));

/////////////////CODIGO 4

// })
}

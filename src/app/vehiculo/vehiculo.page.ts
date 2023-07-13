import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Vehiculo } from '../interfaces/producto';
import { Vehiculo } from '../interfaces/producto';
import { ProductoService } from '../services/producto.service';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.page.html',
  styleUrls: ['./vehiculo.page.scss'],
})
export class VehiculoPage implements OnInit {
  vehiculos:Vehiculo[] = [];
pdfojb=null;
  constructor(private router:Router,
    private productoService:ProductoService,
    private alertController:AlertController,
    private toastController:ToastController) { }

  ngOnInit():void {
    this.getAllVehiculos();
  }
  paginaprincipal(){
    this.router.navigate(['home']);
  }

  paginatikete(){
    this.router.navigate(['tikete']);
  }
  getAllVehiculos(){
    //promesa
    this.productoService.getAllVehiculos().subscribe(vehiculos=>{
      this.vehiculos=vehiculos;
    })
  }

  async openAlert(){
    const alert = await this.alertController.create({
      header:"Nuevo Vehiculo",
      inputs:[
        {
          name:"placa",
          type:"text",
          placeholder:"Numero Placa"
        },
        {
        name:"modelo",
        type:"text",
        placeholder:"Modelo del Vehiculo"
      },
      {
        name:"marca",
        type:"textarea",
        placeholder:"Marca del Vehiculo"
      },
      {
        name:"color",
        type:"text",
        placeholder:"Color del Vehiculo"
      },
      {
        name:"cliente",
        type:"text",
        placeholder:"Cliente del vehiculo"
      }
  ],
  buttons:[
    {
      text:"Cancelar",
      role:"cancel",
      cssClass:"secondary",
      handler:()=>{
        console.log("Confirmar cancelar");
      }
    },
    {
      text:"Crear",
      handler:(data)=>{
        this.addVehiculo(data.placa,data.modelo,data.marca,data.color,data.cliente);
        console.log("Confirmar crear");
      }
    }

  ] 
  
  });
  
  await alert.present();
  
  }

  addVehiculo(placa:string,modelo:number,marca:string,color:string,cliente:string){
    const vehiculos = {
      placa,modelo,marca,color,cliente
    };
    this.productoService.createVehiculos(vehiculos).subscribe ((data)=>{
      this.getAllVehiculos();
      this.presentToast("El vehiculo fue creado correctamente");
    });
  }
  async presentToast(message:string){
    const toast = await this.toastController.create({
      message:message,
      duration:3000
    });
    toast.present();
  }

  deleteVehiculos(placa: string, index: number){
    this.productoService.deleteVehiculos(placa)
    .subscribe(()=>{
      this.vehiculos.splice(index, 1);
      this.presentToast("El vehiculo fue Eliminado correctamente");
    }
    );
  }

  // deleteVehiculos(item){
  //   this.productoService.deleteItem(item.placa).subscribe(Response=>{
  //     this.getAllVehiculos();
  //     this.presentToast("El cliente fue Eliminado correctamente");
  //   }
  //   );
  // }

  handleRefresh(event:any) {
    this.getAllVehiculos();
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

// crearpdf(){
//   const doc= new jsPDF();
//   doc.fromHTML(document.getElementById('fromEquipos'),10,10)
//   doc.save('Lista')

// }




}

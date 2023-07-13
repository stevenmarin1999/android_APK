import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Tikete } from '../interfaces/producto';
import { ProductoService } from '../services/producto.service';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-tikete',
  templateUrl: './tikete.page.html',
  styleUrls: ['./tikete.page.scss'],
})
export class TiketePage implements OnInit {
  tiketes:Tikete[] = [];
  constructor(private router:Router,
    private productoService:ProductoService,
    private alertController:AlertController,
    private toastController:ToastController) { }

  ngOnInit():void {
    this.getAllTikete();
  }

  paginaprincipal(){
    this.router.navigate(['home']);
  }

  getAllTikete(){
    //promesa
    this.productoService.getAllTikete().subscribe(tiketes=>{
      this.tiketes=tiketes;
    })
  }

  async openAlert(){
    const alert = await this.alertController.create({
      header:"Nuevo Tikete",
      inputs:[
        {
          name:"codigo_tikete",
          type:"text",
          placeholder:"Codigo Tikete"
        },
        {
        name:"hora_entrada",
        type:"date",
        placeholder:"Hora de entrada"
      },
      {
        name:"hora_salida",
        type:"textarea",
        placeholder:"Hora Salida"
      },
     
      {
        name:"vehiculo",
        type:"text",
        placeholder:"Vehiculo"
      },
      {
        name:"empleado",
        type:"text",
        placeholder:"Empleado"
      },
      {
        name:"parqueadero",
        type:"text",
        placeholder:"Empleado"
      },
      {
        name:"tarifa",
        type:"text",
        placeholder:"Tarifa"
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
        this.addProducto(data.codigo_tikete,data.hora_entrada,data.hora_salida,data.vehiculo,data.empleado,data.parqueadero,data.tarifa);
        console.log("Confirmar crear");
        this.presentToast("El Tikete fue creado correctamente");
      }
    }

  ] 
  
  });
  
  await alert.present();
  
  }

  addProducto(codigo_tikete:number,hora_entrada:Date,hora_salida:Date,vehiculo:string,empleado:string,parqueadero:string,tarifa:string){
    const producto = {
      codigo_tikete,hora_entrada,hora_salida,vehiculo,empleado,parqueadero,tarifa
    };
    this.productoService.createTikete(producto).subscribe ((data)=>{
      this.getAllTikete();
      this.presentToast("El Tikete fue creado correctamente");
    });
  }
  async presentToast(message:string){
    const toast = await this.toastController.create({
      message:message,
      duration:3000
    });
    toast.present();
  }

  deleteTikete(cedula: number, index: number){
    this.productoService.deleteTikete(cedula)
    .subscribe(()=>{
      this.tiketes.splice(index, 1);
      this.presentToast("El Tikete fue Eliminado correctamente");
    }
    );
  }
  handleRefresh(event:any) {
    this.getAllTikete();
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../interfaces/producto';
import { ProductoService } from '../services/producto.service';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.page.html',
  styleUrls: ['./empleado.page.scss'],
})
export class EmpleadoPage implements OnInit {
  productos:Empleado[] = [];
  constructor(private router:Router,
    private productoService:ProductoService,
    private alertController:AlertController,
    private toastController:ToastController) { }

  ngOnInit():void {
    this.getAllEmpleados();
  }

  paginaprincipal(){
    this.router.navigate(['home']);
  }

  getAllEmpleados(){
    //promesa
    this.productoService.getAllEmpleados().subscribe(productos=>{
      this.productos=productos;
    })
  }

  async openAlert(){
    const alert = await this.alertController.create({
      header:"Nuevo Empleado",
      inputs:[
      
        {
          name:"cedula",
          type:"number",
          placeholder:"Cedula del Empleado"
        },
        {
        name:"nombre",
        type:"text",
        placeholder:"Nombre del Empleado"
      },
      {
        name:"edad",
        type:"number",
        placeholder:"Edad del Empleado"
      },
      {
        name:"cargo",
        type:"text",
        placeholder:"Cargo del Empleado"
      },
      {
        name:"celular",
        type:"text",
        placeholder:"Celular del Empleado"
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
        this.addProducto(data.cedula,data.nombre,data.edad,data.cargo,data.celular);
        console.log("Confirmar crear");
        this.presentToast("El Empleado fue creado correctamente");
      }
    }

  ] 
  
  });
  
  await alert.present();
  
  }

  addProducto(cedula:number,nombre:string,edad:number,cargo:string,celular:string){
    const producto = {
      cedula,nombre,edad,cargo,celular
    };
    this.productoService.createEmpleados(producto).subscribe ((data)=>{
      this.getAllEmpleados();
      this.presentToast("El Empleado fue creado correctamente");
    });
  }
  async presentToast(message:string){
    const toast = await this.toastController.create({
      message:message,
      duration:3000
    });
    toast.present();
  }

  deleteEmpleado(cedula: number, index: number){
    this.productoService.deleteEmpleados(cedula)
    .subscribe(()=>{
      this.productos.splice(index, 1);
      this.presentToast("El Empleado fue Eliminado correctamente");
    }
    );
  }


  
  // deleteEmpleado(cedula: number, index: number){
  //   this.productoService.deleteEmpleados(cedula)
  //   .subscribe(()=>{
  //     this.productos.splice(index, 1);
  //     this.presentToast("El Empleado fue Eliminado correctamente");
  //   }
  //   );
  // }

  handleRefresh(event:any) {
    this.getAllEmpleados();
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }


}

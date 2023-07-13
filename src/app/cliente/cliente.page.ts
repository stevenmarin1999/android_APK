import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../interfaces/producto';
import { ProductoService } from '../services/producto.service';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
  productos:Cliente[] = [];
  constructor(private router:Router,
    private productoService:ProductoService,
    private alertController:AlertController,
    private toastController:ToastController) { }

  ngOnInit():void {
    this.getAllCliente();
  }

  paginaprincipal(){
    this.router.navigate(['home']);
  }

  paginaactualizar(){
    this.router.navigate(['cliente']);
  }

  getAllCliente(){
    //promesa
    this.productoService.getAllCliente().subscribe(productos=>{
      this.productos=productos;
    })
  }


  async openAlert(){
    const alert = await this.alertController.create({
      header:"Nuevo Cliente",
      inputs:[
        {
          name:"cedula",
          type:"number",
          placeholder:"Cedula del Cliente"
        },
        {
        name:"nombres",
        type:"text",
        placeholder:"Nombre del cliente"
      },
      {
        name:"apellidos",
        type:"textarea",
        placeholder:"Apellidos del cliente"
      },
      {
        name:"celular",
        type:"text",
        placeholder:"Celular del cliente"
      },
      {
        name:"direccion",
        type:"text",
        placeholder:"Direccion del cliente"
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
        this.addProducto(data.cedula,data.nombres,data.apellidos,data.celular,data.direccion);
        console.log("Confirmar crear");
        
      }
    }

  ] 
  
  });
  
  await alert.present();
  
  }

  addProducto(cedula:number,nombres:string,apellidos:string,celular:string,direccion:string){
    const producto = {
      cedula,nombres,apellidos,celular,direccion
    };
    this.productoService.createCliente(producto).subscribe ((data)=>{
      this.getAllCliente();
      this.presentToast("El cliente fue creado correctamente");
    });
  }
  async presentToast(message:string){
    const toast = await this.toastController.create({
      message:message,
      duration:3000
    });
    toast.present();
  }

  deleteCliente(cedula: number, index: number){
    this.productoService.deleteCliente(cedula)
    .subscribe(()=>{
      this.productos.splice(index, 1);
      this.presentToast("El cliente fue Eliminado correctamente");
    }
    );
  }

  handleRefresh(event:any) {
    this.getAllCliente();
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }


}






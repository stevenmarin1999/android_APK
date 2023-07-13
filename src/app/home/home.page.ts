import { Component, OnInit } from '@angular/core';
// import { Producto } from '../interfaces/producto';
import { ProductoService } from '../services/producto.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // productos:Producto[] = [];
  constructor(private router:Router,
              public productoService:ProductoService,
              private alertController:AlertController,
              private toastController:ToastController) {}
  ngOnInit(){
    // this.getAllProductos();
  }

  paginavehiculo(){
    this.router.navigate(['vehiculo']);
  }

  paginaempleado(){
    this.router.navigate(['empleado']);
  }
  paginacamara(){
    this.router.navigate(['camara']);
  }
  paginafhoto(){
    this.router.navigate(['fhoto']);
  }
  paginacliente(){
    this.router.navigate(['cliente']);
  }
  paginanosotros(){
    this.router.navigate(['nosotros']);
  }
  paginacodigoqr(){
    this.router.navigate(['codigoqr']);
  }

paginaestacionar(){
  this.router.navigate(['estacionar']);
}

}
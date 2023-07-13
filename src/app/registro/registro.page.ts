import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioRegistro: FormGroup;
  constructor(private router:Router,
    public fb:FormBuilder,
    public alertController:AlertController) { 
      this.formularioRegistro=this.fb.group({
        'nombre': new FormControl("",Validators.required),
        'password': new FormControl("",Validators.required),
        'confirmacion': new FormControl("",Validators.required)
      })
    }

  ngOnInit() {
  }
  paginahome(){
    this.router.navigate(['home']);
  }
  paginalogin(){
    this.router.navigate(['login']);
  }

  async guardar(){
    var f=this.formularioRegistro.value;
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos Incompletos',
        message: 'Tienes que llenar los datos',
        buttons:['Aceptar']
      });
      await alert.present();
      return;
    }
    var usuario={
      nombre: f.nombre,
      password: f.password
    }
    const alert = await this.alertController.create({
      header: 'Usuario Creado',
      message: 'Datos Ingresados Correctos',
      buttons:['Aceptar']
    });
    await alert.present();

    localStorage.setItem('usuario',JSON.stringify(usuario))
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;
  constructor(private router:Router,
    public fb:FormBuilder, 
    public alertController:AlertController) { 
      this.formularioLogin=this.fb.group({
        'nombre': new FormControl("",Validators.required),
        'password': new FormControl("",Validators.required)
      })
    }

  ngOnInit() {
  }

  paginaregistro(){
    this.router.navigate(['registro']);
  }

  paginahome(){
    this.router.navigate(['home']);
  }

 async  ingresar(){
  var f = this.formularioLogin.value;

  var usuario= JSON.parse(localStorage.getItem('usuario')|| '{}');
if(usuario.nombre == f.nombre && usuario.password == f.password){
  console.log('Ingresado')
  
  const alert = await this.alertController.create({
    header: 'Datos Correctos',
    message: 'Los datos que ingresastes son correctos',
    buttons:['Aceptar']
   
  });
  await alert.present();
  this.router.navigate(['home']);
}

else{
  const alert = await this.alertController.create({
    header: 'Datos Incorrectos',
    message: 'Los datos que ingresastes son incorrectos',
    buttons:['Aceptar']
  });
  await alert.present();
  
}
}

}

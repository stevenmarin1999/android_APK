import { Injectable } from '@angular/core';
import {Camera, CameraResultType } from '@capacitor/camera';
// import{Plugins, } from '@capacitor/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../interfaces/producto';
import { Vehiculo } from '../interfaces/producto';
import { Empleado } from '../interfaces/producto';
import { Tikete } from '../interfaces/producto';
// import { Vehiculo } from '../interfaces/vehiculo';
// const{Camera}=Plugins;
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private api = "http://localhost:3000";
  constructor(private httpClient:HttpClient) { }
  
//////////////CLIENTES


  getAllCliente(){
    const path=`${this.api}/cliente`;
    return this.httpClient.get<Cliente[]>(path);
  }

  createCliente(producto:Cliente){
    const path=`${this.api}/cliente`;
    return this.httpClient.post(path,producto);
  }

  updateCliente(producto:Cliente){
    const path=`${this.api}/cliente/${producto.cedula}`;
    return this.httpClient.put<Cliente[]>(path,producto);

}

deleteCliente(id:number){
  const path=`${this.api}/cliente/:${id}`;
  return this.httpClient.delete(path);

}

//////////////////////////////////////////VEHICULOS
getAllVehiculos(){
  const path=`${this.api}/vehiculo`;
  return this.httpClient.get<Vehiculo[]>(path);
}

createVehiculos(vehiculo:Vehiculo){
  const path=`${this.api}/vehiculo`;
  return this.httpClient.post(path,vehiculo);
}

updateVehiculos(vehiculo:Vehiculo){
  const path=`${this.api}/vehiculo/${vehiculo.placa}`;
  return this.httpClient.put<Vehiculo[]>(path,vehiculo);

}

deleteVehiculos(placa:string){
const path=`${this.api}/vehiculo/${placa}`;
return this.httpClient.delete(path);

}

//////////////////////////////////////////EMPLEADOS
getAllEmpleados(){
  const path=`${this.api}/empleado`;
  return this.httpClient.get<Empleado[]>(path);
}

createEmpleados(vehiculo:Empleado){
  const path=`${this.api}/empleado`;
  return this.httpClient.post(path,vehiculo);
}

updateEmpleados(vehiculo:Empleado){
  const path=`${this.api}/empleado/${vehiculo.cedula}`;
  return this.httpClient.put<Empleado[]>(path,vehiculo);

}

deleteEmpleados(cedula:number){
const path=`${this.api}/empleado/${cedula}`;
return this.httpClient.delete(path);

}



//////////////////////////////////////////TIKETE
getAllTikete(){
  const path=`${this.api}/tikete`;
  return this.httpClient.get<Tikete[]>(path);
}

createTikete(vehiculo:Tikete){
  const path=`${this.api}/tikete`;
  return this.httpClient.post(path,vehiculo);
}

// updateTikete(vehiculo:Tikete){
//   const path=`${this.api}/tikete/${vehiculo.cedula}`;
//   return this.httpClient.put<Tikete[]>(path,vehiculo);

// }

deleteTikete(cedula:number){
const path=`${this.api}/tikete/${cedula}`;
return this.httpClient.delete(path);

}




 takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });


}
}
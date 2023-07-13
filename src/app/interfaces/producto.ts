export interface Cliente {
    cedula:number,
    nombres:string,
    apellidos:string,
    celular:string,
    direccion:string
}

export interface Vehiculo {
    placa:string,
    modelo:number,
    marca:string,
    color:string,
    cliente:string
}


export interface Empleado {
    cedula:number,
    nombre:string,
    edad:number,
    cargo:string,
    celular:string
}

export interface Tikete {
    codigo_tikete:number,
    hora_entrada:Date,
    hora_salida:Date,
    // tipo_reserva:string,
    vehiculo:string,
    empleado:string,
    parqueadero:string,
    tarifa:string,
}



// export interface Vehiculo {
//     cedula:int,
//     nombre:number,
//     edad:int,
//     cargo:string,
//     celular:Producto[];
// }


// codigo_tikete: {type: String, unique: true, required: [true, 'Codigo Tikete es requerido']},
// hora_entrada: {type:Date, required: [true, 'Hora Entrada es requerido']},
// hora_salida: {type: Date, required: [true, 'Hora Salida es requerido']},
// tipo_reserva: {type: String, required: [true, 'Tipo Reserva es requerido']},
// vehiculo: {type: Schema.Types.ObjectId, ref: 'vehiculo', required: true},
// empleado: {type: Schema.Types.ObjectId, ref: 'empleado', required: true},
// parqueadero: {type: Schema.Types.ObjectId, ref: 'parqueadero', required: true},
// tarifa: {type: Schema.Types.ObjectId, ref: 'tarifa', required: true},



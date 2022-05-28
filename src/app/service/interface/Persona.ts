export interface Persona {
    idpersona:String;
    nombre:String;
    apellido:String;
    correo:String;
    titulo:String;
    telefono:String;
    ubicacion:String;
    acerca:String;
    fotourl:String;
    token?:String;
}

export interface Login{
    username:string
    password:string
}
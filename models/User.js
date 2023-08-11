import { model, Schema } from "mongoose";

//lo primero que necesitamss crear es el espacio vitutla donde se van a guardar todos los documentos/modelos
//es decir LA COLECCION (conjunto de documentos/modelos de datos)

let collection = 'users'

//lo siguiente es decifinir el schema de datos del modelo
//es decir EL MOLDE/LA FORMA que tiene que tener mi modelo de datos

let schema = new Schema({
    name: {type: String, required: true}, //por default TODOS los datos son opcionales (required: false)
    lastname: {type: String},             //si es opcionalNO NECESITO agregar el required
    mail: {type: String, required: true, unique: true}, //unique:true comprueba que el mail SEA UNICO (no hay mails duplicados)
    photo: {type: String, default: 'https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg' },      //default convierte el parametro en opcional, en caso que el cliente mande la foto la usa, si no va una url por default
    password: {type: String, required: true},
    country: {type: String, required: true}
})

let User = model(collection, schema);

export default User;
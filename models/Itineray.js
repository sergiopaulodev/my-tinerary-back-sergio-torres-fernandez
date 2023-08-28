 import { model, Schema, Types } from "mongoose";

 let collection = 'itineraries';

 let schema = new Schema({
    name: {type: String, required: true},
    // city: {type: Types.ObjectId, required: true, ref: 'cities'},
    price: {type: Number, required: true},
    duration: {type: Number},
    photo: {type: String, required: true},
    tags: {type: Array},
    comments: {type: String},
    city_id: {type: Types.ObjectId, required: true, ref: 'cities'}

 })

 let Itinerary = model(collection, schema);

 export default Itinerary;


//  TAREA MONGO
// Definir el modelo Itinerary con las propiedades
//name,
//price,
//duration,
//tags,
//photo 
//y se referencia con la colección cities con la propiedad city_id

// Luego definir el modelo Activity con las propiedades name,photo y se relaciona con la colección iteneraries con la propiedad itinerary_id
// Les paso el archivo con los 4 arrays de datos a cargar a mongo: users,cities,itineraries,activities
import {model, Schema, Types} from "mongoose";

let collection = 'activities'

let schema = new Schema({
    name: {type: String, required: true },
    photo: {type: String, required: true},
})

let Activity = model(collection, schema);

export default Activity;
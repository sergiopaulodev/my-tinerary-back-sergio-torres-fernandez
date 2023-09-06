import joi from "joi";

let signInSchema = joi.object({
   //obligatorio
    mail:joi.string().required().min(3).max(20).messages({
        "string.min":"name must have at least 3 characters please",
        "string.max":"name must be less than 21 characters please",
        "any.required": "name is required", //cuando no se envia el dato
        "string.empty": "name is required" // cuando se envie vacio
    }),
    password: joi.string().required().min(8).max(20).messages({
        'string.min': "password must have at least 8 characters please!",
        "string.max": "password must be less than 21 characters please!",
        "any.required": "password is required",
        "string.empty": "password is required" 

    }),
})

export default signInSchema
import joi from "joi";

let registerSchema = joi.object({
   //obligatorio
    name:joi.string().required().min(3).max(20).messages({
        "string.min":"name must have at least 3 characters please",
        "string.max":"name must be less than 21 characters please",
        "any.required": "name is required", //cuando no se envia el dato
        "string.empty": "name is required" // cuando se envie vacio
    }),
    mail:joi.string().required(),
    password: joi.required(),
    country: joi.required(),
    //no obligatorio
    photo: joi.string().required().uri(),
    lastName: joi.string().min(3).max(20).empty('').messages({
     "string.min":"name must have at least 3 characters please",
     "string.max":"name must be less than 21 characters please"
    })
})

export default registerSchema
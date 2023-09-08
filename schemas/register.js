import joi from "joi";

let registerSchema = joi.object({
    name:joi.string().required().alphanum().min(3).max(20).messages({
        "string.min":"name must have at least 3 characters please",
        "string.max":"name must be less than 21 characters please",
        "any.required": "name is required", //cuando no se envia el dato
        "string.empty": "name is required" // cuando se envie vacio
    }),
    mail:joi.string().required().min(3).max(20)
        .email({
                minDomainSegments: 2
            })
        .messages({
            "string.min":"mail must have at least 3 characters please",
            "string.max":"mail must be less than 21 characters please",
            "any.required": "mail is required",
            "string.empty": "mail is required"

        }),        
    password: joi.string().required().min(7).max(50).alphanum()
        .messages({
            "string.min":"password must have at least 7 characters please",
            "string.max":"password must be less than 50 characters please",
            "any.required": "password is required",
            "string.empty": "password is required",
            "string.alphanum":"password is required"
    }),

    country: joi.string().required()
        .messages({
            "any.required": "password is required",
            "string.empty": "password is required"
        }),
    photo: joi.string().required().uri()
        .messages({
            "any.required": "photo is required",
            "string.empty": "photo is required",
            "string.uri":"invalid url"
        }),
    lastName: joi.string().min(3).max(20).empty('').messages({
     "string.min":"last name must have at least 3 characters please",
     "string.max":"last name must be less than 21 characters please"
    })
})

export default registerSchema
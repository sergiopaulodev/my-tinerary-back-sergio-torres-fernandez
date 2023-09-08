import joi from "joi";

let signInSchema = joi.object({
    mail:joi.string().required()
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
})

export default signInSchema
import Joi from "joi";

const userValidator =
    Joi.object({
        title: Joi.string()
            .min(3)
            .max(126)
            .required()
            .messages({
                "string.min" : "title must have more than 3 chars",
                "string.max" : "title mush have less than 126 chars"
            }),
        body: Joi.string()
            .min(6)
            .max(55)
            .required()
            .messages({
                "string.min" : "body must have than 3 chars",
                "string.max" : "body must have less then 55 chars"
            })
    })

export default userValidator
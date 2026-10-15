const Joi = require("joi");

module.exports.positionSchema = Joi.object({
    product: Joi.string().required(),
    name: Joi.string().required(),
    qty: Joi.number().positive().required(),
    avg: Joi.number().positive().required(),
    price: Joi.number().positive().required(),
    net: Joi.string().required(),
    day: Joi.string().required(),
    isLoss: Joi.boolean(),
});

module.exports.userSchema = Joi.object({
    user: Joi.object({
        fullname: Joi.string().optional(),
        fullName: Joi.string().optional(),
        username: Joi.string().optional(),
        email: Joi.string().email().required(),
        phone: Joi.string().optional().allow(""),
        password: Joi.string().required(),
        pin: Joi.string().optional().allow(""),
    }).required().or("fullname", "fullName", "username"),
});
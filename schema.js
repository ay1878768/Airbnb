const Joi=require('joi');
module.exports.listingSchema=Joi.object({
    listing : Joi.object({
        title:Joi.string().required(),
        description:Joi.string().required(),
        image:Joi.string().allow("",null),
        location:Joi.string().required(),
        category:Joi.string().allow(""),
        country:Joi.string().required(),
        price:Joi.number().required().min(0)
    }).required()
});


module.exports.reviewSchema=Joi.object({
    review : Joi.object({
        rating:Joi.number().required(),
        comment:Joi.string().required(),
    }).required()
});
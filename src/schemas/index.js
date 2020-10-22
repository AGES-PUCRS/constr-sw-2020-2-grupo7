const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  phones: Joi.array() // TODO
    .required(),

  cpf: Joi.string()
    .min(11)
    .max(11)
    .required(),

  rg: Joi.string()
    .min(10)
    .max(10)
    .required(),

  registration: Joi.string()
    .min(9)
    .max(9)
    .required(),

  birthdate: Joi.date()
    .raw()
    .required(),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'br'] } }),

  classes: Joi.array(),

  evaluations: Joi.array()
})

const schemaUpdate = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3),

  phones: Joi.array(), // TODO

  cpf: Joi.string()
    .min(11)
    .max(11),

  rg: Joi.string()
    .min(10)
    .max(10),

  registration: Joi.string()
    .min(9)
    .max(9),

  birthdate: Joi.date()
    .raw(),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'br'] } }),
  
  classes: Joi.array(),

  evaluations: Joi.array()
})


module.exports = {
  schema, schemaUpdate
}

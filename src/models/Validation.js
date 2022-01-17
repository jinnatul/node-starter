import Joi from "joi";

export const ValidateSignupStudent = Joi.object({
  name: Joi.string().required().error(new Error('Please provide your name!')),
  email: Joi.string().email().required().error(new Error('Please provide your email!')),
  phone: Joi.string().required().error(new Error('Please provide your phone!')),
  dob: Joi.string().required().error(new Error('Please provide your dob!')),
  gender: Joi.string().required().error(new Error('Please provide your gender!')),
  address: Joi.string().required().error(new Error('Please provide your address!')),
  district: Joi.string().required().error(new Error('Please provide your district!')),
  occupation: Joi.string().required().error(new Error('Please provide your occupation!')),
  institute_name: Joi.string().required().error(new Error('Please provide your institute name!')),
  user_name: Joi.string().required().error(new Error('Please provide your username!')),
  password: Joi.string().required().error(new Error('Please provide your password!')),
  group_name: Joi.string().required().error(new Error('Please provide your group name!')),
  class_name: Joi.string().required().error(new Error('Please provide your class name!')),
});

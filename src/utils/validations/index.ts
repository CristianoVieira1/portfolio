import Joi from 'joi'

const fieldsValidations = {
  username: Joi.string().min(5).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  confirm_password: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({ 'any.only': 'confirm password does not match with password' })
}

export type FieldErrors = {
  [key: string]: string
}

function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

type ResetValidateParams = {
  password: string
  confirm_password: string
}

export function resetValidate(values: ResetValidateParams) {
  const { password, confirm_password } = fieldsValidations
  const schema = Joi.object({ password, confirm_password })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

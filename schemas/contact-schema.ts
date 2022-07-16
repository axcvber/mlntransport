import * as yup from 'yup'
import useLocale from '../hooks/useLocale'

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const ContactFormSchema = () => {
  const t = useLocale()
  return yup
    .object({
      email: yup.string().email(t.form.validation.email.email).required(t.form.validation.email.required),
      fullName: yup
        .string()
        .max(20, t.form.validation.fullName.max)
        .required(t.form.validation.fullName.required)
        .matches(/^[a-zA-ZА-Яа-я\s]+$/, t.form.validation.fullName.matches)
        .trim(),
      phone: yup
        .string()
        .required(t.form.validation.phone.required)
        .matches(phoneRegExp, t.form.validation.phone.matches),
      service: yup.string().required(t.form.validation.service.required),
      message: yup.string().max(300, t.form.validation.message.max).trim(),
    })
    .required()
}

import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
  name: yup
    .string()
    .required(`Name is required.`)
    .max(12, `name cannot exceed 12 characters.`),
  user_mail: yup
    .string()
    .email(`Please enter a valid email`)
    .required("Email is required"),
  message: yup.string(),
});

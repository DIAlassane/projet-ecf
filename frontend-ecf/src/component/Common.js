const Yup = require("yup");

const formSchema = Yup.object({
    email: Yup.string()
    .required("Email : Ce champ est requis")
    .min(5, "Trop court")
    .max(50, "Trop long !"),
    password: Yup.string()
    .required("Password : Ce champ est requis")
    .min(3, "Trop court")
    .max(28, "Trop long !"),
})

module.exports = { formSchema };
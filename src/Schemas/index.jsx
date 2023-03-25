import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
  
});



export const registrationSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
  accountName: Yup.string().min(2).max(25).required("Please enter your shop name"),
  phoneNumber: Yup.string().min(9).max(11).required("Please enter your Phone number"),
  cnic: Yup.string().min(15).max(15).required("Please enter your CNIC"),
  address: Yup.string().min(5).max(30).required("Please enter your address"),
});
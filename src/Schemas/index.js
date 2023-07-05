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
  phoneNumber: Yup.string().min(9).max(11).required("Please enter your phone number"),
  cnic: Yup.string().min(15).max(15).required("Please enter your CNIC"),
  address: Yup.string().min(5).max(30).required("Please enter your address"),
});



export const postSchema = Yup.object({
  title: Yup.string().min(2).max(25).required("Please enter title"),
  detail: Yup.string().min(2).max(500).required("Please enter detail"),
  amount: Yup.number().required("Please enter amount"),
  category:Yup.string().required("Please select category"),
  dueDate:Yup.string().required("Please select due date"),
  city:Yup.string().required("Please select city"),
  address:Yup.string().required("Please enter your address"),

});

export const bidSchema = Yup.object({
  amount: Yup.number().min(2).required("Please enter amount"),
});


export const addProductSchema = Yup.object({
  title: Yup.string().min(2).max(25).required("Please enter title"),
  detail: Yup.string().min(2).max(500).required("Please enter detail"),
  amount: Yup.number().required("Please enter amount"),
  category:Yup.string().required("Please select category"),
});
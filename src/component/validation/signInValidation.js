import * as Yup from "yup";

// validation for signin form
export const SignInValidation = Yup.object().shape({
  // email:Yup.string().required("Email is required"),
    username:Yup.string().required("Username is required"),
    password:Yup.string().required("Password is required"),
  });



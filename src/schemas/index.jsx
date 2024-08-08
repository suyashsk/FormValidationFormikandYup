import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(25,"Name can be maxiumum of 25 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .matches(/@gmail\.com$/, "Email must end with @gmail.com")
    .matches("regex@gmail.com", "Email name must be regex@gmail.com")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches("rishiME@199", "Password must start with r__M_9")
    .required("Password is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

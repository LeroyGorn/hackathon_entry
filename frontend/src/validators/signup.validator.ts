import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  first_name: Yup.string().min(1, "Too short").required("Required"),
  last_name: Yup.string().min(1, "Too short").required("Required"),
  password: Yup.string().min(3, "Too short").required("Required"),
  check_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

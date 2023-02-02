export enum ErrorMessage {
  DEFAULT = "Oops, something went wrong!",
}

export const loginInitialValues = {
  email: "",
  password: "",
};

export const loginFormData = {
  title: "LOGIN",
  inputs: [
    {
      id: 1,
      type: "email",
      label: "Email",
      name: "email",
    },
    {
      id: 2,
      type: "password",
      label: "Password",
      name: "password",
    },
  ],
  buttonText: "Login",
};

export const signUpInitialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  check_password: "",
};

export const signUpData = {
  title: "SIGN UP",
  inputs: [
    {
      id: 1,
      type: "text",
      name: "first_name",
      label: "First Name",
    },
    {
      id: 2,
      type: "text",
      name: "last_name",
      label: "Last Name",
    },
    {
      id: 3,
      type: "email",
      name: "email",
      label: "Email",
    },

    {
      id: 4,
      type: "password",
      name: "password",
      label: "Password",
    },
    {
      id: 5,
      type: "password",
      name: "check_password",
      label: "Retype password",
    },
  ],
  buttonText: "Sign up",
};

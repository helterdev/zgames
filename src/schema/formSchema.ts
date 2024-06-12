import zod from "zod";

export const registerSchema = zod.object({
  name: zod
    .string({ required_error: "Username is required" })
    .min(3, { message: "Minímo 3 carácteres" })
    .max(20),
  email: zod
    .string({ required_error: "Email is required" })
    .email({ message: "Correo invalido" }),
  password: zod
    .string({ required_error: "Password is required" })
    .min(6, { message: "Minímo 4 carácteres" })
    .max(20),
  confirmPassword: zod
    .string({ required_error: "Password is required" })
    .min(6, { message: "Minímo 4 carácteres" })
    .max(20),
});

export const loginSchema = zod.object({
  email: zod
    .string({ required_error: "Email is required" })
    .email({ message: "Correo invalido" }),
  password: zod
    .string({ required_error: "Password is required" })
    .min(4, { message: "Minímo 4 carácteres" })
    .max(15),
});

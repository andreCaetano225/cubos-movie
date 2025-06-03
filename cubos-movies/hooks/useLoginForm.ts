import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginFormSchema } from "../types/loginFormSchema";

export const useLoginForm = () => {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Login enviado:", data);
  };

  return {
    ...form,
    onSubmit,
  };
};

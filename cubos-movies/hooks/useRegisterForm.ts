import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormData, registerFormSchema } from "../types/registerFormSchema";
import { useForm } from "react-hook-form";

export const useRegisterForm = () => {
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("Dados do formulário:", data);
  };

  return {
    ...form,
    onSubmit,
  };
};
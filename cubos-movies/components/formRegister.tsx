"use client";
import { InputField } from "./inputFiel";
import { ButtonApp } from "./buttonApp";
import { useRegisterForm } from "../hooks/useRegisterForm";
import Link from "next/link";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
  } = useRegisterForm();

  return (
    <div className="fixed inset-0 flex items-center justify-center px-4 z-30 ">
      <div className="bg-[#232225] p-6 rounded-sm text-white w-[28rem] ">
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <InputField
            id="name"
            label="Nome"
            placeholder="Digite seu nome"
            {...register("name")}
            error={errors.name?.message}
          />
          <InputField
            id="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />
          <InputField
            id="password"
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
            error={errors.password?.message}
          />
          <InputField
            id="confirmPassword"
            label="Confirme a Senha"
            type="password"
            placeholder="Confirme sua senha"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />

          <div className="flex justify-end">
            <Link href={"/movies"}>
              <ButtonApp type="button">Cadastrar</ButtonApp>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

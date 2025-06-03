"use client";
import Link from "next/link";
import { useLoginForm } from "../hooks/useLoginForm";
import { ButtonApp } from "./buttonApp";
import { InputField } from "./inputFiel";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
  } = useLoginForm();
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center px-4 z-30">
        <div className="w-full max-w-md bg-[#232225] p-6 rounded-sm text-white">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <InputField
              id="email"
              label="Nome/E-mail"
              placeholder="Digite seu nome/E-mail"
              type="text"
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
            <div className=" flex flex-row items-center justify-between ">
              <Link
                href="/register"
                className="text-sm text-primary hover:underline text-center sm:text-left"
              >
                Esqueci minha senha
              </Link>
              <Link href={"/movies"}>
                <ButtonApp type="button">Entrar</ButtonApp>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

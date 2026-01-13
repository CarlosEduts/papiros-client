"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import {
  RegisterCredentials,
  registerSchema,
} from "@/schemas/authenticationSchema";

interface RegisterFormProps extends React.ComponentProps<"div"> {
  onSubmitAction: (data: RegisterCredentials) => void;
  isLoading?: boolean;
}

export function RegisterForm({
  className,
  onSubmitAction,
  isLoading,
  ...props
}: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCredentials>({
    resolver: zodResolver(registerSchema),
  });

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Crie sua conta</CardTitle>
          <CardDescription>
            Crie uma nova conta para começar a usar
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* O handleSubmit do react-hook-form valida os dados antes de chamar sua função */}
          <form onSubmit={handleSubmit(onSubmitAction)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Nome</FieldLabel>
                <Input {...register("name")} id="name" placeholder="Seu nome" />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="username">Nome de usuário</FieldLabel>
                <Input
                  {...register("username")}
                  id="username"
                  placeholder="Seu nome de usuário"
                />
                {errors.username && (
                  <span className="text-red-500 text-sm">
                    {errors.username.message}
                  </span>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Senha</FieldLabel>
                <Input
                  {...register("password")}
                  id="password"
                  type="password"
                />
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </Field>

              <Field>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Carregando..." : "Cadastrar"}
                </Button>
                <FieldDescription className="text-center">
                  Já tem uma conta? <Link href="/login">Faça login</Link>.
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

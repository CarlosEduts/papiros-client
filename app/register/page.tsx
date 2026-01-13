"use client";

import { ScrollText } from "lucide-react";

import { RegisterForm } from "@/components/register-form";
import { RegisterCredentials } from "@/schemas/authenticationSchema";
import { authenticationService } from "@/services/authenticationService";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const handlerRegister = async (data: RegisterCredentials) => {
    try {
      await authenticationService.register(data);
      toast.success("Usuário registrado com sucesso!");
      router.push("/login");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro ao registrar usuário.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-full">
            <ScrollText className="size-4" />
          </div>
          Papiros
        </a>
        <RegisterForm onSubmitAction={handlerRegister} />
      </div>
    </div>
  );
}

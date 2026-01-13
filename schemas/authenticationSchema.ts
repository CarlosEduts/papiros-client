import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, "O nome de usuário é obrigatório"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export type LoginCredentials = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  username: z.string().min(1, "O nome de usuário é obrigatório"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export type RegisterCredentials = z.infer<typeof registerSchema>;

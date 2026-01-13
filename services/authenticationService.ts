import {
  LoginCredentials,
  RegisterCredentials,
} from "@/schemas/authenticationSchema";
import api from "./api";

const routeBase = "/auth";

export const authenticationService = {
  login: async (credentials: LoginCredentials): Promise<string> => {
    const response = await api.post<{ token: string }>(
      `${routeBase}/login`,
      credentials
    );
    return response.data.token;
  },

  register: async (credentials: RegisterCredentials): Promise<void> => {
    await api.post(`${routeBase}/register`, credentials);
  },
};

import { create } from "zustand";
import type { AuthStore } from "@/types/auth.types";

export const useAuthStore = create<AuthStore>((set) => ({
  token: localStorage.getItem("token"),
  user: null,
  setToken: (token: string) => {
    localStorage.setItem("token", token);
    set({ token });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ token: null, user: null });
  },
  setUser: (user: any) => {
    set({ user })
  }
}));

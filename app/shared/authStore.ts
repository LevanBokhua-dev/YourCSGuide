// app/shared/authStore.ts
"use client";

let listeners: (() => void)[] = [];

export const authStore = {
  getSnapshot: () => {
    if (typeof window === "undefined") return false; // SSR safety
    return !!localStorage.getItem("user");
  },

  subscribe: (callback: () => void) => {
    listeners.push(callback);
    return () => {
      listeners = listeners.filter((l) => l !== callback);
    };
  },

  login: (user: string) => {
    if (typeof window === "undefined") return; // SSR safety
    localStorage.setItem("user", user);
    listeners.forEach((cb) => cb());
  },

  logout: () => {
    if (typeof window === "undefined") return; // SSR safety
    localStorage.removeItem("user");
    listeners.forEach((cb) => cb());
  },
};

"use client";
import { useSyncExternalStore } from "react";
import { authStore } from "@/app/shared/authStore";

export const useAuthStatus = () => {
  return useSyncExternalStore(
    authStore.subscribe,
    authStore.getSnapshot,
    () => false, // getServerSnapshot fallback for SSR
  );
};

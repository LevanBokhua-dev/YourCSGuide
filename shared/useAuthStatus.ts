"use client";
import { useSyncExternalStore } from "react";
import { authStore } from "@/shared/authStore";

export const useAuthStatus = () => {
  return useSyncExternalStore(
    authStore.subscribe,
    authStore.getSnapshot,
    () => false,
  );
};

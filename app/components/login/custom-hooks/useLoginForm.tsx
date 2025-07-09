"use client";
import { useState } from "react";
import { loginUser } from "@/app/services/auth";
import { useRouter } from "next/navigation";
import { authStore } from "@/app/shared/authStore";

export const useLoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const user = await loginUser({
        username: formData.username,
        password: formData.password,
      });

      authStore.login(
        JSON.stringify({
          username: user.username,
          role: user.role,
        }),
      );

      router.push("/user");
    } catch (err) {
      console.error("Login failed:", (err as Error).message);
      alert("ავტორიზაცია ვერ შედგა: " + (err as Error).message);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

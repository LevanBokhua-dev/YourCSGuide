"use client";
import { useState } from "react";
import { registerUser } from "@/services/registration";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/auth";

export const useRegistrationForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "talent",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      await loginUser({
        username: formData.fullName,
        password: formData.password,
      });
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: formData.fullName,
          role: formData.role.toUpperCase() as "TALENT" | "COMPANY",
        }),
      );
      router.push("/user");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Registration error:", error.message);
      } else {
        console.error("Unknown error occurred during registration");
      }
    }
  };
  const handleRoleSelect = (role: string) => {
    setFormData((prev) => ({ ...prev, role }));
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    handleRoleSelect,
  };
};

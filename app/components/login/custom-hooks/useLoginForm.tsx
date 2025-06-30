// hooks/useLoginForm.ts
"use client";
import { useState } from "react";

export const useLoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", formData);

    // TODO: Add fetch/axios POST request to your backend login API
    // fetch("/api/login", { ... })
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

"use client";
import { useState } from "react";

export const useRegistrationForm = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Add POST request logic here
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

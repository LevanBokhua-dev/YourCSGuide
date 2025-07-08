"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AddTalentForm from "@/app/components/talents/AddTalentForm";

export default function TalentPage() {
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      router.replace("/login");
      return;
    }

    const user = JSON.parse(storedUser);

    if (user.role !== "TALENT") {
      router.replace("/unauthorized");
    }
  }, []);

  return (
    <div className="py-10 px-6">
      <AddTalentForm />
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { BriefcaseIcon, UserIcon } from "@heroicons/react/24/solid";

const UserPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      router.replace("/login");
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    setUsername(parsedUser.username);
    setRole(parsedUser.role);
  }, [router]);

  const handleAddTalent = () => router.push("/add-as-talent");
  const handleAddJob = () => router.push("/add-job");

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <div className="bg-white shadow-md rounded-lg p-6 border border-blue-100">
        <h1 className="text-3xl font-bold mb-2">
          {username || "მომხმარებელი"}
        </h1>
        <p className="text-gray-700 mb-6">
          შენი როლია:{" "}
          <span className="font-semibold text-blue-600">{role}</span>
        </p>

        <div className="mb-6">
          <div className="bg-gray-50 p-4 rounded-md border text-gray-800">
            <p>
              👤 <strong>მომხმარებლის სახელი:</strong> {username}
            </p>
            <p>
              🧩 <strong>როლი:</strong>{" "}
              {role === "TALENT" ? "ტალანტი" : "კომპანია"}
            </p>
            {/* Add more account-related data here if needed */}
          </div>
        </div>

        <div className="mt-8">
          {role === "TALENT" && (
            <div className="text-center">
              <UserIcon className="w-10 h-10 mx-auto text-blue-500" />
              <p className="mt-2">გსურს შენი თავი ტალანტად დაამატო?</p>
              <button
                onClick={handleAddTalent}
                className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
              >
                გადადი ტალანტის დამატებაზე
              </button>
            </div>
          )}

          {role === "COMPANY" && (
            <div className="text-center">
              <BriefcaseIcon className="w-10 h-10 mx-auto text-blue-500" />
              <p className="mt-2">გსურს ვაკანსიის დამატება?</p>
              <button
                onClick={handleAddJob}
                className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
              >
                დაამატე ვაკანსია
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPage;

"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";

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
  }, []);

  const handleAddTalent = () => {
    router.push("/add-as-talent");
  };
  const handleAddJob = () => {
    router.push("/add-job");
  };

  return (
    <div className="p-10 text-xl">
      <h1 className="text-2xl font-bold mb-4 capitalize">
        👋 Welcome, {username || "User"}!
      </h1>

      {role === "TALENT" && (
        <React.Fragment>
          <p className="capitalize">
            {username} შენ შეგიძლია დაამატო შენი თავი ტალანტად
          </p>
          <button
            onClick={handleAddTalent}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            გადადი ტალანტის დამატებაზე
          </button>
        </React.Fragment>
      )}
      {role === "COMPANY" && (
        <React.Fragment>
          <p className="capitalize">{username} შენ შეგიძლია დაამატო ვაკანსია</p>
          <button
            onClick={handleAddJob}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            დაამატე ვაკანსია
          </button>
        </React.Fragment>
      )}
    </div>
  );
};

export default UserPage;

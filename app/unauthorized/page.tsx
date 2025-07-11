"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    alert("თავის ტალანტად დასამატებლად, შედით როგორც ტალანტი");
    router.push("/login");
  }, [router]);

  return null;
};

export default Page;

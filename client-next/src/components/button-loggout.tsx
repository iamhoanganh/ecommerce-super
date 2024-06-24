"use client";
import React from "react";
import { Button } from "./ui/button";
import authApiRequest from "@/apiRequests/auth";
import { useRouter } from "next/navigation";
import { handleErrorApi } from "@/lib/utils";

export default function ButtonLogout() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await authApiRequest.logoutFormNextClientToNextServer("");
      router.push("/login");
    } catch (error) {
        // handleErrorApi(error)
    }
  };
  return (
    <Button size="sm" onClick={handleLogout}>
      Logout
    </Button>
  );
}

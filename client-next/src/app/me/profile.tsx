"use client";
import envConfig from "@/config";
import React, { useEffect } from "react";
import { useAppContext } from "../AppProvider";

export default function Profile() {
  // const { sessionToken } = useAppContext();
  // useEffect(() => {
  //   if (sessionToken) {
  //     const fetchRequest = async () => {
  //       const result = await fetch(
  //         `${envConfig.NEXT_PUBLIC_API_URL}/user/current`,
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${sessionToken}`,
  //           },
  //         }
  //       ).then(async (res) => {
  //         const payload = await res.json();
  //         const data = {
  //           status: res.status,
  //           payload,
  //         };
  //         if (!res.ok) {
  //           throw data;
  //         }
  //         return data;
  //       });
  //     };
  //     fetchRequest();
  //   }
  // }, []);
  return <div>Profile</div>;
}

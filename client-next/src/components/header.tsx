import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import ButtonLogout from "./button-loggout";

export default function Header() {
  return (
    <div className="flex justify-between items-center mx-3 my-2"> 
      <ul className="flex gap-2 ">
        <li className="text-blue-600">
          <Link href="/">Trang chủ</Link>
        </li>
        <li>
          <Link href="/login">Đăng nhập</Link>
        </li>
        <li>
          <ButtonLogout />
        </li>
      </ul>
      <ModeToggle />
    </div>
  );
}

import React from 'react';
import LoginForm from "@/components/login-form";
export default function LoginPage() {

    return (
        <>
            <h2 className="text-center text-xl font-semibold">Đăng Nhập</h2>
            <div className="flex mx-auto justify-center">
                <LoginForm/>
            </div>
        </>
    );
}

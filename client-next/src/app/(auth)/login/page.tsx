'use client'
import { useEffect, useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("hoanganh@gmail.com")
    useEffect(() => {
        const idTimeOut = setTimeout(() => {
            setEmail("quoac quoac")
        }, 5000)
        return () => {
            clearTimeout(idTimeOut)
        }
    }, [])
    
    return (
        <>
            <div>Login Page</div>
            <span>{email}</span>
        </>
    );
}

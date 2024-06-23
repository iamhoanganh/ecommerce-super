"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginBody, LoginBodyType } from "@/schemaValidations/auth.schema";
import envConfig from "@/config";
import { useToast } from "@/components/ui/use-toast";
import { useAppContext } from "@/app/AppProvider";
import authApiRequest from "@/apiRequests/auth";
import {useRouter} from "next/navigation";

export default function LoginForm() {
  const { toast } = useToast();
  const {setSessiontoken} = useAppContext()
  const router = useRouter()


  // 1. Define your form.
  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: "iamhoanganh13@gmail.com",
      password: "Nguyenanh1101",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: LoginBodyType) {
    try {
      const result = await authApiRequest.login(values)
      toast({
        description: result.status === 200 ? "Dang nhap thanh cong" : "Dang nhap that bai",
      })
      const resultFromNextServer = await authApiRequest.auth({sessionToken: result.payload.accessToken});
      setSessiontoken(resultFromNextServer.payload.sessionToken)
      router.push('/me')
    } catch (error: any) {
      const {payload} = error
      const status = error.status;
      if (status === 401) {
        toast({
          description: payload.mes,
        });
      }
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 max-w-[400px] w-full"
        noValidate
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="shadcn@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mật khẩu</FormLabel>
              <FormControl>
                <Input type="password" placeholder="123456" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="!mt-8 w-full" onClick={(e) => {
            // e.preventDefault();
        }}>
          Submit
        </Button>
      </form>
    </Form>
  );
}

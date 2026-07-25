"use client"

import { authClient } from "@/lib/auth-client";
import { Button, Card, Checkbox, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const LoginPage = () => {

    const router = useRouter()
    const [isClosed, setIsClosed] = useState(true)

    const handleLogin = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const loginData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: loginData.email,
            password: loginData.password
        })

        if (data) {
            toast.success('Successfully login your account');
            router.push('/')
        }
        else {
            toast.error(error.message)
        }
    }

    const handleGoogleSignIn = async () => {
        const { data, error } = await authClient.signIn.social({
            provider: "google",
        });

        if (data) {
            router.push('/')
        }

    }


    return (
        <div className='min-h-screen w-11/12 max-w-7xl mx-auto py-30'>
            <h2 className='text-center text-2xl md:text-3xl font-semibold tracking-wide'>Welcome Back</h2>
            <p className='max-w-sm mx-auto text-center text-sm  text-[#6C696D] mt-1'>Your ideas missed you.</p>
            <div className="border border-(--color-primary) shadow-2xl shadow-amber-600 rounded-2xl max-w-md mx-auto p-10 mt-6 space-y-4">

                <Form
                    onSubmit={handleLogin}
                    className="flex w-full flex-col gap-6" >

                    <TextField
                        isRequired
                        name="email"
                        type="email"

                    >
                        <Label>Email</Label>
                        <Input
                            className={"rounded-full border border-(--color-primary)/60 shadow-none"}
                            placeholder="Enter your email" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="password"
                        type={isClosed ? "password" : "text"}
                        className={'relative'}

                    >
                        <Label>Password</Label>
                        <Input
                            className={"rounded-full  border border-(--color-primary) shadow-none"}
                            placeholder="Enter your password" />

                        <FieldError />
                        <Button
                            size="sm"
                            isIconOnly
                            variant="light"
                            onClick={() => { setIsClosed(!isClosed) }}
                            className={'absolute top-6.5 right-1'}>
                            {isClosed ? <FaRegEyeSlash /> : <FaRegEye />}
                        </Button>
                    </TextField>

                    <div className="space-x-1 flex justify-between items-center text-(--color-text-muted)">
                        <div className="space-x-1">
                            <input type="checkbox" />
                            <label className="text-sm font-medium">Remember Me</label>
                        </div>

                        <Link href={'#'} className="text-sm font-medium">Forgot Password</Link>
                    </div>

                    <Button
                        type="submit"
                        className={'w-full rounded-full bg-(--color-primary)'}>
                        Login
                    </Button>

                </Form>

                <div className="flex justify-center items-center gap-1 w-full text-sm text-[#6C696D]">
                    <Separator className="flex-1" />
                    <p>Or continue with</p>
                    <Separator className="flex-1" />
                </div>

                <Button onClick={handleGoogleSignIn} variant="outline" className="w-full rounded-full border border-(--color-primary)">
                    <FcGoogle />
                    Sign Up With Google
                </Button>

                <div className="text-center space-x-2">
                    <span className='text-sm text-(--color-text-muted)'>Don't have an account?</span>
                    <Link href={'/register'} className={'text-(--color-primary) font-medium'}>Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
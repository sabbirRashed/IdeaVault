"use client"

import { Button, Card, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";


const LoginPage = () => {

    const handleLogin = (e)=>{
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const loginData = Object.fromEntries(formData.entries());
        console.log(loginData);
    }
    return (
        <div className='min-h-screen w-11/12 max-w-7xl mx-auto py-30'>
            <h2 className='text-center text-2xl md:text-3xl font-semibold tracking-wide'>Welcome back <br /> to your Nest</h2>
            <p className='max-w-sm mx-auto text-center text-sm  text-[#6C696D] mt-1'>Log in to keep building on the ideas you've started - and see what the community's been up to.</p>
            <div className="border border-(--color-primary)! shadow-2xl! shadow-amber-600! rounded-2xl max-w-md mx-auto p-10 mt-6 space-y-4">

                <Form
                    onSubmit={handleLogin}
                    className="flex w-full flex-col gap-6" >

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}

                    >
                        <Label>Email</Label>
                        <Input
                            className={"rounded-full border border-(--color-primary)/60 shadow-none"}
                            placeholder="Enter your email" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                    >
                        <Label>Password</Label>
                        <Input
                            className={"rounded-full  border border-(--color-primary) shadow-none"}
                            placeholder="Enter your password" />

                        <FieldError />
                    </TextField>

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

                <Button  variant="outline" className="w-full rounded-full border border-(--color-primary)">
                    <FcGoogle />
                    Sign Up With Google
                </Button>

                <div className="text-center space-x-2">
                    <span className='text-sm text-[#6C696D]'>Don't have an account?</span>
                    <Link href={'/signUp'} className={'text-(--color-primary) font-medium'}>Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
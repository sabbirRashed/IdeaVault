"use client"
import { authClient } from '@/lib/auth-client';
import { Button, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';


const RegisterPage = () => {
    const [isClosed, setIsClosed] = useState(true)
    const router = useRouter();

    const handleForm = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const registerData = Object.fromEntries(formData.entries());
        const { name, email, password, imageUrl } = registerData;

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image: imageUrl,
        });
        
        if(error){
            toast.error(error.message)
            return
        }

        if(data?.user){
            toast.success('Account created successfully')
            router.push('/')
        }
        

    };

    const handleGoogleSignIn = async () => {
        const { data: googleData, error } = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div className='min-h-screen w-11/12 max-w-7xl mx-auto py-30'>
            <h2 className='text-center text-2xl md:text-3xl font-semibold tracking-wide'>Let's build your nest</h2>
            <p className='max-w-sm mx-auto text-center text-sm  text-[#6C696D] mt-1'>Share your idea. Get real feedback. Start today.</p>
            <div className="border border-(--color-primary) shadow-2xl shadow-amber-600 rounded-2xl max-w-md mx-auto p-10 mt-6 space-y-4">

                <Form
                    onSubmit={handleForm}
                    className="flex w-full flex-col gap-6" >

                    <TextField
                        isRequired
                        name="name"
                        type="text"

                    >
                        <Label>Name</Label>
                        <Input
                            className={"rounded-full border border-(--color-primary)/60 shadow-none"}
                            placeholder="Enter your name" />
                        <FieldError />
                    </TextField>

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
                        name="imageUrl"
                        type="url"

                    >
                        <Label>Image URL</Label>
                        <Input
                            className={"rounded-full border border-(--color-primary)/60 shadow-none"}
                            placeholder="Enter your image link" />
                        <FieldError />
                    </TextField>

                    <TextField
                        className={'relative'}
                        isRequired
                        minLength={6}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 6) {
                                return "Password must be at least 6 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input
                            className={"rounded-full  border border-(--color-primary) shadow-none"}
                            placeholder="Enter your password" />
                        <Button
                            size="sm"
                            isIconOnly
                            variant="light"
                            onClick={() => { setIsClosed(!isClosed) }}
                            className={'absolute top-6.5 right-1'}>
                            {isClosed ? <FaRegEyeSlash /> : <FaRegEye />}
                        </Button>

                        <FieldError />
                    </TextField>

                    <Button
                        type="submit"
                        className={'w-full rounded-full bg-(--color-primary)'}>
                        Create Account
                    </Button>

                </Form>

                <div className="flex justify-center items-center gap-1 w-full text-sm text-[#6C696D]">
                    <Separator className="flex-1" />
                    <p>Or continue with</p>
                    <Separator className="flex-1" />
                </div>

                <Button variant="outline" onClick={handleGoogleSignIn} className="w-full rounded-full border border-(--color-primary)">
                    <FcGoogle />
                    Sign Up With Google
                </Button>

                <div className="text-center space-x-2">
                    <span className='text-sm text-(--color-text-muted)'>Already have an account? </span>
                    <Link href={'/login'} className={'text-(--color-primary) font-medium'}>Log in</Link>
                </div>
            </div>
        </div>
    )
};


export default RegisterPage;
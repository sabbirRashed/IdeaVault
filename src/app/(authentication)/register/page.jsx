"use client"
import { Button, Checkbox, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const RegisterPage = () => {

    const handleForm = (e)=>{
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const registerData = Object.fromEntries(formData.entries());
        console.log(registerData);
    }
    return (
        <div className='min-h-screen w-11/12 max-w-7xl mx-auto py-30'>
            <h2 className='text-center text-2xl md:text-3xl font-semibold tracking-wide'>Let's build your nest</h2>
            <p className='max-w-sm mx-auto text-center text-sm  text-[#6C696D] mt-1'>Share your idea. Get real feedback. Start today.</p>
            <div className="border border-(--color-primary)! shadow-2xl! shadow-amber-600! rounded-2xl max-w-md mx-auto p-10 mt-6 space-y-4">

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
                        Create Account
                    </Button>

                </Form>

                <div className="flex justify-center items-center gap-1 w-full text-sm text-[#6C696D]">
                    <Separator className="flex-1" />
                    <p>Or continue with</p>
                    <Separator className="flex-1" />
                </div>

                <Button variant="outline" className="w-full rounded-full border border-(--color-primary)">
                    <FcGoogle />
                    Sign Up With Google
                </Button>

                <div className="text-center space-x-2">
                    <span className='text-sm text-[#6C696D]'>Already have an account? </span>
                    <Link href={'/login'} className={'text-(--color-primary) font-medium'}>Log in</Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
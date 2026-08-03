"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Input, Label, TextArea } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaArrowLeft } from 'react-icons/fa6';

const EditProfilePage = () => {
    const router = useRouter();
    const [saving, setSaving] = useState(false);

    const { data, isPending } = authClient.useSession();
    const user = data?.user;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const editedUserData = Object.fromEntries(formData.entries());
        const { name, title, bio, location, imgUrl } = editedUserData;

        try {
            const { data, error } = await authClient.updateUser({
                name,
                title,
                image: imgUrl,
                bio,
                location,
            })

            if (error) {
                toast.error(error.message)
                return
            }
            if (data?.status) {
                toast.success('Successfully update your account')
                router.refresh()
                router.push('/profile')
            }

        } finally {
            setSaving(false);
        }
    };

    return (
        <div className='w-11/12 max-w-2xl mx-auto my-10 md:my-16'>
            <Button
                onClick={() => router.back()}
                variant='ghost'
                className={'flex items-center gap-2 text-(--color-text)/60 hover:text-(--color-primary) transition-colors duration-300'}>
                <FaArrowLeft size={12} />
                Back to Profile
            </Button>

            <h1 className='text-2xl md:text-3xl font-bold font-sora mt-6'>Edit Profile</h1>

            <div className='mt-8 '>
                <form
                    onSubmit={handleSubmit}
                    className='space-y-5 idea-card p-6 md:p-8 rounded-2xl'>
                    <div className="flex flex-col gap-1.5">
                        <Label
                            className='text-(--color-text)/80'
                            htmlFor="name">
                            Full Name
                        </Label>
                        <Input
                            className="w-full rounded-xl border border-(--color-border) px-4 py-2.5
                             focus:ring-(--color-primary)/30  shadow-none"
                            id="name"
                            placeholder="Enter your full name"
                            type="text"
                            name='name'
                            defaultValue={user?.name} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label
                            className='text-(--color-text)/80'
                            htmlFor="image">
                            Profile Image
                        </Label>
                        <Input
                            className="w-full rounded-xl border border-(--color-border) px-4 py-2.5 focus:ring-(--color-primary)/30  shadow-none"
                            id="image"
                            placeholder="Paste your new image link"
                            type="url"
                            name='imgUrl'
                            defaultValue={user?.image} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <Label
                            className='text-(--color-text)/80'
                            htmlFor="title">
                            Title
                        </Label>
                        <Input
                            className="w-full rounded-xl border border-(--color-border) px-4 py-2.5 focus:ring-(--color-primary)/30  shadow-none"
                            id="title"
                            placeholder="e.g Frontend Developer"
                            type="text"
                            name='title'
                            defaultValue={user?.title || 'Idea Creator'} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <Label
                            className='text-(--color-text)/80'
                            htmlFor="bio">
                            Bio
                        </Label>
                        <TextArea
                            className="w-full rounded-xl border border-(--color-border) px-4 py-2.5 focus:ring-(--color-primary)/30  shadow-none"
                            name="bio"
                            id="bio"
                            defaultValue={user?.bio || ''}
                            placeholder='Write about yourself'
                            cols={1} rows={3} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <Label
                            className='text-(--color-text)/80'
                            htmlFor="email">
                            Email
                        </Label>
                        <Input
                            className="w-full rounded-xl border border-(--color-border) px-4 py-2.5 focus:ring-(--color-primary)/30  shadow-none"
                            id="email"
                            placeholder="Enter your email"
                            type="email"
                            name='email'
                            readOnly
                            defaultValue={user?.email || ''} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <Label
                            className='text-(--color-text)/80'
                            htmlFor="location">
                            Location
                        </Label>
                        <Input
                            className="w-full rounded-xl border border-(--color-border) px-4 py-2.5 focus:ring-(--color-primary)/30  shadow-none"
                            id="location"
                            placeholder="e.g. Dhaka, Bangladesh"
                            type="text"
                            name='location'
                            defaultValue={user?.location || ""} />
                    </div>

                    {/* buttons */}
                    <div className="flex justify-end gap-3">
                        <Button
                            variant='ghost'
                            onClick={() => router.back()}
                            className="px-5 py-2.5 rounded-xl text-(--color-text)/70 hover:bg-(--color-text)/5 transition-colors"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            disabled={saving}
                            className="btn-primary px-6 py-2.5 rounded-xl text-sm font-medium disabled:opacity-50"
                        >
                            {saving ? 'Saving...' : 'Save Changes'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfilePage;
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Separator } from '@heroui/react';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaEdit } from 'react-icons/fa';
import { FaChevronDown, FaComments, FaLightbulb, FaUser } from 'react-icons/fa6';


const ProfileDropDown = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    const handleLogout = async () => {
        const { data, error } = await authClient.signOut()

        if (data.success) {
            toast.success('Logout successfully')
            redirect('/')
        }
        if (error) {
            toast.error(error.message)
        }
    }

    return (
        <div className='relative'>
            <Button
                onClick={() => setIsOpen(!isOpen)}
                variant='ghost'
                className='flex justify-between items-center gap-3 rounded-full pl-1 pr-2 py-1 ring-1 ring-(--color-text)/30'>
                <Avatar size="sm">
                    <Avatar.Image
                        src={user?.image}
                        alt={user?.name} />
                    <Avatar.Fallback className='bg-(--color-primary)/10 text-(--color-primary) text-sm font-medium'>{user?.name[0]}</Avatar.Fallback>
                </Avatar>
                <FaChevronDown className={`${isOpen ? "rotate-180" : ""} transition-transform duration-300 text-(--color-text)/50`} />
            </Button>

            {
                isOpen && <div className='absolute right-0 mt-3 border border-(--color-text)/10 idea-card rounded-2xl shadow-xl z-10 w-64 p-4 animate-in fade-in slide-in-from-top-2 transition-all duration-300 space-y-2'>
                    <div className='flex flex-col justify-center items-center text-center'>
                        <Avatar >
                            <Avatar.Image
                                src={user?.image}
                                alt={user?.name} />
                            <Avatar.Fallback className='bg-(--color-primary)/10 text-(--color-primary) text-sm font-medium'>{user?.name[0]}</Avatar.Fallback>
                        </Avatar>
                        <div>
                            <p className='text-sm font-semibold font-sora'>{user?.name}</p>
                            <p className='text-xs text-(--color-text)/60 truncate'>{user?.email}</p>
                        </div>
                    </div>
                    <Separator className={`bg-(--color-border)`} />

                    <ul className='text-sm font-medium text-(--color-text)/90 space-y-1'>
                        <li onClick={()=> setIsOpen(false)}>
                            <Link href={'/profile'} className='flex items-center gap-3 hover:bg-(--color-secondary)/10 py-1 rounded-xl '><FaUser size={14} />My Profile</Link>
                        </li>
                        <li onClick={()=> setIsOpen(false)}>
                            <Link href={'/profile/edit-Profile'} className='flex items-center gap-3 hover:bg-(--color-secondary)/10 py-1 rounded-xl'><FaEdit size={14} />Edit Profile</Link>
                        </li>
                        <li onClick={()=> setIsOpen(false)}>
                            <Link href={'/my-ideas'} className='flex items-center gap-3 hover:bg-(--color-secondary)/10 py-1 rounded-xl'><FaLightbulb size={14} />My Ideas</Link>
                        </li>
                        <li onClick={()=> setIsOpen(false)}>
                            <Link href={'/my-interactions'} className='flex items-center gap-3 hover:bg-(--color-secondary)/10 py-1 rounded-xl'><FaComments size={14} />My Interactions</Link>
                        </li>
                    </ul>

                    <Separator className='bg-(--color-border)' />
                    <Button
                        size="sm"
                        className={'bg-(--color-danger) hover:bg-(--color-danger)/90 transition-colors duration-300 text-xs'}
                        onPress={handleLogout}
                    >
                        Log out
                    </Button>

                </div>
            }
        </div>
    );
};

export default ProfileDropDown;
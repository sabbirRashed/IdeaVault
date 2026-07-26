import { auth } from '@/lib/auth';
import { getIdeaByUserId } from '@/lib/data';
import { Button, Chip } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { FaArrowRightLong } from 'react-icons/fa6';
import { LiaTrashAlt } from 'react-icons/lia';

const MyIdeasPage = async () => {

    const {user} = await auth.api.getSession({
        headers: await headers()
    })
    
    const myIdeas = await getIdeaByUserId(user.id);
    console.log('my ideas:', myIdeas);
    return (
        <div className='w-11/12 max-w-7xl mx-auto py-20 md:py-30'>
            <h2 className='text-2xl md:text-4xl font-bold font-sora'>My Ideas</h2>
            <p className='max-w-xl mt-2 text-sm md:text-base text-(--color-text-muted)'>Manage everything you've shared with the SparkNest community — edit, update, or remove anytime.</p>

            {/* my idea container and heading*/}
            <h3 className='text-xl md:text-2xl font-medium font-sora text-foreground/70 mt-10'>Total ideas ()</h3>
            <div className='border min-h-200 mt-4 p-4 bg-white'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 p-4 border border-(--color-border) bg-(--color-bg) hover:shadow-lg hover:shadow-amber-600/20 hover:-translate-y-1 transition-all duration-300'>
                    <div className='md:flex-1 w-full relative'>
                        <Image src={'/assets/hero.png'}
                            alt=''
                            height={200}
                            width={400}
                            className=' w-full h-40 md:h-full'></Image>
                        <Chip className='bg-(--color-secondary)/90 text-white absolute top-2 left-2'>Education</Chip>
                    </div>

                    {/* card content */}
                    <div className='md:flex-3 space-y-4'>
                        <div className=''>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-xl md:text-2xl font-medium font-sora text-foreground/70'>MediConnect</h2>
                                <div className='flex justify-between items-center gap-4 '>
                                    <Button size='sm' isIconOnly className={'bg-(--color-secondary)/20 text-(--color-secondary) hover:bg-(--color-secondary)/30 hover:text-(--color-secondary-hover) transition-colors duration-300'}>
                                        <AiOutlineEdit className='w-5 h-5' />
                                    </Button>
                                    <Button size='sm' isIconOnly className={'bg-danger/20 text-danger hover:bg-danger/30 transition-colors duration-300'}><LiaTrashAlt className='w-5 h-5 ' /></Button>
                                </div>
                            </div>
                            <p className='text-lg md:text-xl font-medium font-sora text-foreground/70 line-clamp-1 mt-3'>A telemedicine platform connecting patients with healthcare professionals.</p>
                        </div>
                        <p className='text-foreground/70 line-clamp-2'>MediConnect is a comprehensive digital healthcare platform that enables patients to book appointments, consult doctors through secure video calls, receive digital prescriptions, and maintain lifelong electronic medical records. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, officiis.</p>
                        <div className='flex justify-between items-center'>
                            <h3><span className='font-medium'>createdAt: </span>12 jully, 2026</h3>
                            <Link href={`/ideaDetails/`}>
                                <Button size='sm' className={'text-xs btn-primary duration-300 transition-colors'}>
                                    View Details <FaArrowRightLong />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyIdeasPage;
import { allIdeas } from '@/lib/data';
import { Avatar, Button, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const AllIdeasPage = async () => {
    const ideas = await allIdeas();
    console.log('all idea', ideas);
    return (
        <div className='w-11/12 max-w-7xl mx-auto py-20 md:py-30'>
            <h2 className='text-2xl md:text-4xl font-bold font-sora'>Explore innovative ideas</h2>
            <h3 className='max-w-xl mt-2 text-sm md:text-base '>Browse ideas from innovators around the world, share your thoughts, and help great concepts grow.</h3>

            {/* idea cards */}
            <div className=' mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10'>
                <div className=' space-y-6 border idea-card p-4 rounded-2xl'>
                    <div className='relative'>
                        <Image src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b"
                            alt='image'
                            width={160}
                            height={160}
                            className='w-full h-40'></Image>
                        <Chip className='bg-(--color-secondary)/90 text-white absolute top-2 left-2'>IOT</Chip>
                    </div>

                    <div className=''>
                        <h3 className='text-lg md:text-xl font-semibold font-sora '>EcoBin AI</h3>
                        <p className='text-sm line-clamp-1 mt-1'>An AI-powered smart waste management system for cities.</p>

                        <div className='mt-2 space-x-2'><Chip>IOT</Chip><Chip>AI</Chip></div>

                        <div className='flex justify-between items-center mt-2'>
                            <div className='flex items-center gap-1'>
                                <Avatar size="sm" className='w-6 h-6'>
                                    <Avatar.Image

                                        alt={''} />
                                    <Avatar.Fallback className='text-xs'>M</Avatar.Fallback>
                                </Avatar>
                                <span className='text-sm font-medium'>Sabbir Rahman</span>
                            </div>

                            <Button size='sm' className={'text-xs btn-primary duration-300 transition-colors'}>View Details</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllIdeasPage;
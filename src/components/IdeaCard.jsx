import { Avatar, Button, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const IdeaCard = ({ idea }) => {
    const { _id, ideaTitle, shortDescription, detailedDescription, category, tags, imageURL, } = idea
    return (
        <div className=' space-y-6 border idea-card p-4 rounded-2xl'>
            <div className='relative'>
                <Image src={imageURL}
                    alt='image'
                    width={160}
                    height={160}
                    className='w-full h-40'></Image>
                <Chip className='bg-(--color-secondary)/90 text-white absolute top-2 left-2'>{category}</Chip>
            </div>

            <div className=''>
                <h3 className='text-lg md:text-xl font-semibold font-sora '>{ideaTitle}</h3>
                <p className='text-sm text-(--color-text-muted) line-clamp-1 mt-1'>{shortDescription}</p>


                <div className='mt-2 space-x-2'>
                    {tags.slice(0, 3).map((item, ind) => <Chip key={ind} className='bg-(--color-primary)/10 text-(--color-primary)'>{item}</Chip>)}
                </div>

                <div className='flex justify-between items-center mt-2'>
                    <div className='flex items-center gap-1'>
                        <Avatar size="sm" className='w-6 h-6'>
                            <Avatar.Image
                                // src={}
                                alt={''} />
                            <Avatar.Fallback className='text-xs'>M</Avatar.Fallback>
                        </Avatar>
                        <span className='text-sm font-medium'>Sabbir Rahman</span>
                    </div>

                    <Link href={`/ideaDetails/${_id}`}>
                        <Button size='sm' className={'text-xs btn-primary duration-300 transition-colors'}>
                            View Details <FaArrowRightLong />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default IdeaCard;
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { LiaTrashAlt } from 'react-icons/lia';

const MyInteractionCard = ({comment}) => {
    return (
        <div className='flex items-center gap-4 idea-card p-4 rounded-2xl group'>
            <Image src={'/assets/hero.png'}
                alt='image'
                width={56}
                height={56}
                className='h-14 w-14 shrink-0 rounded-lg object-cover'>
            </Image>

            <div className='flex-1'>
                <h3 className='text-sm text-(--color-text)/60'>You commented on
                    <Link href={`/ideaDetails/`}
                        className='font-medium text-(--color-text) hover:text-(--color-primary)'>{comment?.ideaTitle}</Link>
                </h3>
                <p className='text-sm text-(--color-text)/80 line-clamp-1 mt-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, sint.</p>

                <div className='flex justify-between items-center mt-2'>
                    <span className='text-sm text-(--color-text)/40 py-1'>12 jully, 2026</span>
                    <div className='flex md:hidden group-hover:flex items-center gap-2'>
                        <Button size='sm' isIconOnly className={'w-7 h-7 bg-(--color-secondary)/20 text-(--color-secondary) hover:bg-(--color-secondary)/30 hover:text-(--color-secondary-hover) transition-colors duration-300'}>
                            <AiOutlineEdit className='w-4 h-4' />
                        </Button>
                        <Button size='sm' isIconOnly className={'w-7 h-7 bg-danger/20 text-danger hover:bg-danger/30 transition-colors duration-300'}>
                            <LiaTrashAlt className='w-4 h-4 ' />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyInteractionCard;
import MyInteractionCard from '@/components/MyInteractionCard';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { LiaTrashAlt } from 'react-icons/lia';

const MyInterActions = () => {
    return (
        <div className='min-h-[80vh] w-11/12 max-w-7xl mx-auto py-20 md:py-30'>
            <h2 className='text-2xl md:text-4xl font-bold font-sora'>My Interactions (0)</h2>
            <p className='max-w-xl mt-2 text-sm md:text-base text-(--color-text-muted)'>Every idea you've weighed in on, all in one place.</p>

            {/* interactions container */}
            <div className='min-h-20 max-w-3xl mx-auto mt-10 md:mt-15'>

                <MyInteractionCard/>
            </div>
        </div>
    );
};

export default MyInterActions;
import { getIdeaById } from '@/lib/data';
import { Avatar, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { BiUserPlus } from 'react-icons/bi';
import { FaMoneyBillWave, FaRegCommentDots, FaUserPlus } from 'react-icons/fa';
import { FaSackDollar } from 'react-icons/fa6';
import { MdOutlineTimer } from 'react-icons/md';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { TbTargetArrow, TbUserPlus } from 'react-icons/tb';

const IdeaDetails = async ({ params }) => {
    const { id } = await params;
    const idea = await getIdeaById(id);
    const {
        _id,
        ideaTitle,
        shortDescription,
        detailedDescription,
        category,
        tags,
        imageURL,
        estimatedBudget,
        targetAudience,
        problemStatement,
        proposedSolution,
    } = idea;
    return (
        <div className='w-11/12 max-w-7xl mx-auto py-20 md:py-30'>
            <div className='relative overflow-hidden'>
                <Image
                    src={imageURL}
                    alt={ideaTitle}
                    width={400}
                    height={400}
                    className='w-full h-65 md:h-80 object-cover '></Image>

                <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/20'></div>
                <Chip className='bg-(--color-secondary)/90 text-white absolute top-2 left-2 md:top-6 md:left-6'>{category}</Chip>

                <div className='absolute left-1/2 -translate-x-1/2 bottom-6 text-white'>
                    <h1 className='text-2xl md:text-4xl font-semibold font-sora text-center'>{ideaTitle}</h1>
                </div>
                <div className='absolute top-12 left-1/2 -translate-x-1/2 space-x-2 md:space-x-10 flex items-center'>
                    {tags.map((item, ind) => {
                        return (
                            <Chip key={ind} className='bg-(--color-primary)/40 text-(--color-primary)'>{item}</Chip>
                        )
                    })}
                </div>
            </div>

            <div className='border border-(--color-border) mt-6 space-y-4 p-4 bg-'>
                <div className='space-y-1'>
                    <h3 className='flex gap-2 items-center font-semibold'> <TbUserPlus size={18} /> Innovator:</h3>
                    <div className='flex items-center gap-1 ml-6'>
                        <Avatar size="sm" className='w-6 h-6'>
                            <Avatar.Image
                                // src={}
                                alt={''} />
                            <Avatar.Fallback className='text-xs'>M</Avatar.Fallback>
                        </Avatar>
                        <span className='text-sm font-medium'> Sabbir Rahman</span>
                    </div>
                </div>

                <div className='space-y-1'>
                    <div className='flex items-center gap-2 font-semibold'>
                        <RiMoneyDollarBoxLine size={16} /> estimatedBudget
                    </div>
                    <p className='text-sm ml-6'>{estimatedBudget}</p>
                </div>

                <div className='space-y-1'>
                    <h3 className='flex items-center gap-2 font-semibold'><TbTargetArrow size={16} /> targetAudience</h3>
                    <p className='text-sm ml-6'>{targetAudience}</p>
                </div>

                <div className='space-y-1'>
                    <h3 className='flex items-center gap-2 font-semibold'><MdOutlineTimer size={16} /> Posted date</h3>
                    <p className='text-sm ml-6'>20 Jully, 2026; 10.15 AM</p>
                </div>

                <div className='space-y-1'>
                    <h3 className='flex items-center gap-2 font-semibold'><FaRegCommentDots size={16} /> Comment count</h3>
                    <p className='text-sm ml-6'>15</p>
                </div>

            </div>
        </div>
    );
};

export default IdeaDetails;
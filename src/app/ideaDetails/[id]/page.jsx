import CommentSection from '@/components/CommentSection';
import { getAllComments, getIdeaById } from '@/lib/data';
import { Avatar, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { BiCategory } from 'react-icons/bi';
import { FaRegCommentDots, } from 'react-icons/fa';
import { FcIdea } from 'react-icons/fc';
import { IoWarningOutline } from 'react-icons/io5';
import { LiaTagsSolid } from 'react-icons/lia';
import { MdOutlineTimer } from 'react-icons/md';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { TbTargetArrow, TbUserPlus } from 'react-icons/tb';

const IdeaDetails = async ({ params }) => {
    const { id } = await params;

    const allComments = await getAllComments(id);

    const idea = await getIdeaById(id);
    const {
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
        creatorName,
        creatorImage,
        createdAt
    } = idea;

    const createdDate = new Date(createdAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })


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
                <Chip className='bg-(--color-secondary)/90 text-white absolute top-2 left-2 md:top-6 md:left-6'>{category.toUpperCase()}</Chip>

                <div className='absolute left-1/2 -translate-x-1/2 bottom-6 text-white'>
                    <h1 className='text-2xl md:text-4xl font-semibold font-sora text-center'>{ideaTitle}</h1>
                </div>
                <div className='absolute top-12 left-1/2 -translate-x-1/2 space-x-2 md:space-x-10 flex items-center'>
                    {tags && tags.map((item, ind) => {
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
                                src={creatorImage}
                                alt={creatorName} />
                            <Avatar.Fallback className='text-xs'>{creatorName && creatorName[0]}</Avatar.Fallback>
                        </Avatar>
                        <span className='text-sm font-medium'> {creatorName}</span>
                    </div>
                </div>

                <div className='space-y-1'>
                    <div className='flex items-center gap-2 font-semibold'>
                        <RiMoneyDollarBoxLine size={16} /> Estimated Budget
                    </div>
                    <p className='text-sm ml-6'>${estimatedBudget}</p>
                </div>

                <div className='space-y-1'>
                    <h3 className='flex items-center gap-2 font-semibold'><TbTargetArrow size={16} /> targetAudience</h3>
                    <p className='text-sm ml-6'>{targetAudience}</p>
                </div>

                <div className='space-y-1'>
                    <h3 className='flex items-center gap-2 font-semibold'><MdOutlineTimer size={16} /> Posted date</h3>
                    <p className='text-sm ml-6'>{createdDate}</p>
                </div>

                <div className='space-y-1'>
                    <h3 className='flex items-center gap-2 font-semibold'><FaRegCommentDots size={16} /> Comment count</h3>
                    <p className='text-sm ml-6'>{allComments.length}</p>
                </div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 items-start gap-20 mt-20 md:mt-30'>
                {/* left */}
                <div className=' minh-20 md:col-span-2 space-y-10'>
                    <div className='space-y-4  px-4'>
                        <h2 className='text-xl md:text-2xl font-medium font-sora text-foreground/70 max-w-2xl'>{shortDescription}</h2>
                        <p className='text-foreground/70  text-justify'>{detailedDescription}</p>
                    </div>

                    <div className='space-y-4 border-l-2 border-l-(--color-warning) p-4'>
                        <h2 className='text-xl md:text-2xl font-medium font-sora text-foreground/70 flex items-center gap-2'><IoWarningOutline className='text-(--color-warning)' /> The Problem</h2>
                        <p className='text-foreground/70 '>{problemStatement}</p>
                    </div>

                    <div className='space-y-4 border-l-2 border-l-(--color-success) p-4'>
                        <h2 className='text-xl md:text-2xl font-medium font-sora text-foreground/70 flex items-center gap-2'><FcIdea /> The Solution</h2>
                        <p className='text-foreground/70 '>{proposedSolution}</p>
                    </div>

                </div>

                {/* right */}
                <div className=' border w-full p-4 space-y-4 sticky top-24'>
                    <div>
                        <h3 className='flex items-center gap-2 font-semibold'><BiCategory />Category</h3>
                        <Chip className='bg-(--color-secondary)/90 text-white ml-6'>{category}</Chip>
                    </div>

                    <div>
                        <h2 className='flex items-center gap-2 font-semibold'><LiaTagsSolid />Tags</h2>
                        <div className='space-x-2 ml-6'>
                            {tags && tags.map((item, ind) => {
                                return (
                                    <Chip key={ind} className='bg-(--color-primary)/10 text-(--color-primary)'>{item}</Chip>
                                )
                            })}
                        </div>
                    </div>

                    <div className='space-y-1'>
                        <div className='flex items-center gap-2 font-semibold'>
                            <RiMoneyDollarBoxLine size={16} /> Budget
                        </div>
                        <p className='text-sm ml-6'>{estimatedBudget}</p>
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
                        <h3 className='flex gap-2 items-center font-semibold'> <TbUserPlus size={18} /> Innovator:</h3>
                        <div className='flex items-center gap-1 ml-6'>
                            <Avatar size="sm" className='w-6 h-6'>
                                <Avatar.Image
                                    src={creatorImage}
                                    alt={creatorName} />
                                <Avatar.Fallback className='text-xs'>{creatorName[0]}</Avatar.Fallback>
                            </Avatar>
                            <span className='text-sm font-medium'> {creatorName}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* comment */}
            <CommentSection allComments={allComments} idea={idea} />
        </div>
    );
};

export default IdeaDetails;
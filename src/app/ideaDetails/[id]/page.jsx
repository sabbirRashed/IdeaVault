import { getIdeaById } from '@/lib/data';
import { Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

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

            <div className='border mt-6'>
                <h3></h3>

            </div>
        </div>
    );
};

export default IdeaDetails;
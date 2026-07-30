import IdeaCard from '@/components/IdeaCard';
import SearchFilterBar from '@/components/SearchFilterBar';
import { getAllIdeas } from '@/lib/data';
import { Input, ListBox, Select } from '@heroui/react';
import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

export const metadata = {
    title: "Explore Ideas || SparkNest",
    description: "Browse startup ideas across tech, health, education, and more. Search, filter, and find the next big thing before it happens.",
};

const AllIdeasPage = async ({ searchParams }) => {
   const search_params = await searchParams
    const query = new URLSearchParams(search_params).toString()

    const ideas = await getAllIdeas(query);

    return (
        <div className='w-11/12 max-w-7xl mx-auto py-20 md:py-30'>
            <h2 className='text-2xl md:text-4xl font-bold font-sora'>Explore innovative ideas</h2>
            <p className='max-w-xl mt-2 text-sm md:text-base text-(--color-text-muted)'>Browse ideas from innovators around the world, share your thoughts, and help great concepts grow.</p>

            <SearchFilterBar />

            {/* idea cards */}
            <div className='mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10'>
                {
                    ideas.map(idea => <IdeaCard key={idea._id} idea={idea}></IdeaCard>)
                }
            </div>

        </div>
    );
};

export default AllIdeasPage;
import IdeaCard from '@/components/IdeaCard';
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
                {
                    ideas.map(idea => <IdeaCard key={idea._id} idea={idea}></IdeaCard>)
                }
            </div>

        </div>
    );
};

export default AllIdeasPage;
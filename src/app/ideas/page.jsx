import IdeaCard from '@/components/IdeaCard';
import { getAllIdeas } from '@/lib/data';
import React from 'react';

const AllIdeasPage = async () => {
    const ideas = await getAllIdeas();

    return (
        <div className='w-11/12 max-w-7xl mx-auto py-20 md:py-30'>
            <h2 className='text-2xl md:text-4xl font-bold font-sora'>Explore innovative ideas</h2>
            <p className='max-w-xl mt-2 text-sm md:text-base text-(--color-text-muted)'>Browse ideas from innovators around the world, share your thoughts, and help great concepts grow.</p>

            {/* idea cards */}
            <div className='mt-10 md:mt-15 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10'>
                {
                    ideas.map(idea => <IdeaCard key={idea._id} idea={idea}></IdeaCard>)
                }
            </div>

        </div>
    );
};

export default AllIdeasPage;
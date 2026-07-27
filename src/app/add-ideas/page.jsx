import AddIdeaCard from '@/components/AddIdeaCard';
import React from 'react';

export const metadata = {
    title: "Share Your Idea || SparkNest",
    description: "Got a startup idea? Post it to SparkNest and get feedback from a community that helps ideas grow.",
};

const AddIdeasPage = () => {
    return (
        <div className='w-11/12 max-w-7xl mx-auto py-20 md:py-30'>
            <h2 className='text-2xl md:text-4xl font-bold font-sora'>Share Your Next Big Idea</h2>
            <p className='max-w-xl mt-2 text-sm md:text-base text-(--color-text-muted)'>Turn your vision into something others can discover, discuss, and build upon.</p>

            <AddIdeaCard/>
        </div>
    );
};

export default AddIdeasPage;
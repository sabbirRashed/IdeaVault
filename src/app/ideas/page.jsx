import IdeaCard from '@/components/IdeaCard';
import SearchFilterBar from '@/components/SearchFilterBar';
import { getAllIdeas } from '@/lib/data';
import { Button, } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FcIdea } from 'react-icons/fc';

export const metadata = {
    title: "Explore Ideas || SparkNest",
    description: "Browse startup ideas across tech, health, education, and more. Search, filter, and find the next big thing before it happens.",
};

const AllIdeasPage = async ({ searchParams }) => {
    const search_params = await searchParams
    const query = new URLSearchParams(search_params).toString()

    const ideas = await getAllIdeas(query);

    return (
        <div className='w-11/12 max-w-7xl mx-auto py-15 md:py-30'>
            <h2 className='text-2xl md:text-4xl font-bold font-sora'>Explore innovative ideas</h2>
            <p className='max-w-xl mt-2 text-sm md:text-base text-(--color-text-muted)'>Browse ideas from innovators around the world, share your thoughts, and help great concepts grow.</p>

            <SearchFilterBar />

            {/* idea cards */}
            {
                ideas.length > 0 ?
                    <div className='mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10'>
                        {ideas.map(idea => <IdeaCard key={idea._id} idea={idea}></IdeaCard>)}
                    </div>
                    : <>
                        <div className="idea-card rounded-2xl p-10 text-center flex flex-col items-center justify-center mt-6 md:mt-10">
                            <div className="w-16 h-16 rounded-full bg-(--color-secondary)/20 text-(--color-secondary) flex items-center justify-center mb-4">
                                <Image
                                src={'/assets/updateLogo.png'}
                                alt='Idea-icon'
                                width={40}
                                height={40}></Image>
                            </div>

                            <h2 className="text-2xl font-semibold mb-2">
                                No ideas found
                            </h2>

                            <p className="text-(--color-text-muted) max-w-md mb-6">
                                We couldn't find any ideas matching your search or selected category. Try a different keyword or clear the filters.
                            </p>
                        </div>
                    </>
            }

        </div>
    );
};

export default AllIdeasPage;
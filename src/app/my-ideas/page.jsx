import MyIdeaCard from '@/components/MyIdeaCard';
import { auth } from '@/lib/auth';
import { getIdeaByUserId } from '@/lib/data';
import { headers } from 'next/headers';
import React from 'react';


const MyIdeasPage = async () => {

    const { user } = await auth.api.getSession({
        headers: await headers()
    })

    const myIdeas = await getIdeaByUserId(user.id);
    console.log('my ideas:', myIdeas);
    return (
        <div className='w-11/12 max-w-7xl mx-auto py-20 md:py-30'>
            <h2 className='text-2xl md:text-4xl font-bold font-sora'>My Ideas</h2>
            <p className='max-w-xl mt-2 text-sm md:text-base text-(--color-text-muted)'>Manage everything you've shared with the SparkNest community — edit, update, or remove anytime.</p>

            {/* my idea container and heading*/}
            <h3 className='text-xl md:text-2xl font-medium font-sora text-foreground/70 mt-10'>Total ideas ()</h3>
            <div className='border min-h-200 mt-4 p-4 bg-white space-y-4'>
                {
                    myIdeas.length > 0 ? <>
                        {
                            myIdeas.map(idea => <MyIdeaCard key={idea._id}
                                idea={idea}></MyIdeaCard>)
                        }
                    </> : <>

                    </>
                }
            </div>
        </div>
    );
};

export default MyIdeasPage;
import MyIdeaCard from '@/components/MyIdeaCard';
import { auth } from '@/lib/auth';
import { getIdeaByUserId } from '@/lib/data';
import { Button, Link } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';
import { FcIdea } from 'react-icons/fc';


const MyIdeasPage = async () => {

    const { user } = await auth.api.getSession({
        headers: await headers()
    })

    const myIdeas = await getIdeaByUserId(user.id);
    console.log('my ideas:', myIdeas);
    return (
        <div className='min-h-[80vh] w-11/12 max-w-7xl mx-auto py-20 md:py-30'>
            <h2 className='text-2xl md:text-4xl font-bold font-sora'>My Ideas ({myIdeas.length})</h2>
            <p className='max-w-xl mt-2 text-sm md:text-base text-(--color-text-muted)'>Manage everything you've shared with the SparkNest community — edit, update, or remove anytime.</p>

            {/* my idea container*/}
            <div className='border mt-10 md:mt-15  p-4 idea-card space-y-4'>
                {
                    myIdeas.length > 0 ? <>
                        {
                            myIdeas.map(idea => <MyIdeaCard key={idea._id}
                                idea={idea}></MyIdeaCard>)
                        }
                    </> : <>
                        <div className="border border-(--color-border) bg-(--color-bg) rounded-2xl p-10 text-center flex flex-col items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-(--color-secondary-light) flex items-center justify-center mb-4">
                                <FcIdea size={32} />
                            </div>

                            <h2 className="text-2xl font-semibold mb-2">
                                No Ideas Yet
                            </h2>

                            <p className="text-(--color-text-muted) max-w-md mb-6">
                                You haven't shared any ideas yet. Start by creating your first idea and inspire the community.
                            </p>

                            <Link href="/add-ideas">
                                <Button className="btn-primary">
                                    Create Your First Idea
                                </Button>
                            </Link>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default MyIdeasPage;
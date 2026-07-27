import MyInteractionCard from '@/components/MyInteractionCard';
import { auth } from '@/lib/auth';
import { getCommentsByUserId } from '@/lib/data';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Link from 'next/link';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';

export const metadata = {
    title: "My Interactions || SparkNest",
    description: "See every idea you've commented on, all in one place.",
};

const MyInterActions = async () => {

    const { user } = await auth.api.getSession({
        headers: await headers()
    });

    const myInterActions = await getCommentsByUserId(user.id);
    console.log('my-comments:', myInterActions);


    return (
        <div className='min-h-[80vh] w-11/12 max-w-7xl mx-auto py-20 md:py-30'>
            <h2 className='text-2xl md:text-4xl font-bold font-sora'>My Interactions ({myInterActions.length})</h2>
            <p className='max-w-xl mt-2 text-sm md:text-base text-(--color-text-muted)'>Every idea you've weighed in on, all in one place.</p>

            {/* interactions container */}
            <div className='min-h-20 max-w-3xl mx-auto mt-10 md:mt-15 space-y-4'>
                {
                    myInterActions.length > 0 ? <>
                        {
                            myInterActions.map(comment => {
                                return <MyInteractionCard key={comment._id}
                                commentData={comment} />
                            })
                        }
                    </> : <>
                        <div className="idea-card rounded-2xl p-10 text-center flex flex-col items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-(--color-secondary)/20 text-(--color-secondary) flex items-center justify-center mb-4">
                                <HiOutlineChatBubbleLeftRight size={32} />
                            </div>

                            <h2 className="text-2xl font-semibold mb-2">
                                No interactions yet
                            </h2>

                            <p className="text-(--color-text-muted) max-w-md mb-6">
                                Comment on an idea to start the conversation — your feedback helps shape someone's next big thing.
                            </p>

                            <Link href="/ideas">
                                <Button className="btn-primary">
                                    Explore Ideas
                                </Button>
                            </Link>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default MyInterActions;
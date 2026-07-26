'use client'
import { postComment } from '@/lib/action';
import { authClient } from '@/lib/auth-client';
import { getAllComments } from '@/lib/data';
import { Avatar, Button, Input } from '@heroui/react';
import { div } from 'framer-motion/client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { LuDot } from 'react-icons/lu';

const CommentSection = ({ allComments, ideaId }) => {


    const [comment, setComment] = useState('');
    const router = useRouter();

    const { data } = authClient.useSession();
    const user = data?.user;

    const handleComment = async (e) => {
        e.preventDefault();

        const commentAndInfo = {
            ideaId,
            userId: user?.id,
            userName: user?.name,
            userImage: user?.image,
            comment: comment,
        }
        const result = await postComment(commentAndInfo, ideaId);

        if (result.acknowledged) {
            toast.success('successfully added a comment');
            setComment('')
            router.refresh()

        }
        else {
            toast.error('something went wrong!')
        }

    }
    return (
        <div className='mt-20 md:mt-30 border border-(--color-border)'>
            <div className='p-4 bg-(--color-primary)/10 space-y-4'>
                <h3 className='text-xl font-medium font-sora'>Comments ({allComments.length})</h3>

                {/* comment input area */}
                {
                    user ? <div className='flex items-start gap-2'>
                        <Avatar size="sm" className=''>
                            <Avatar.Image
                                src={user?.image}
                                alt={user?.name} />
                            <Avatar.Fallback className='text-xs bg-white'>{user?.name[0]}</Avatar.Fallback>
                        </Avatar>
                        <form onSubmit={handleComment} className='flex-1'>
                            <textarea
                                cols={1}
                                rows={1}
                                value={comment}
                                onChange={(e) => { setComment(e.target.value) }}
                                placeholder="Add your comment"
                                className={'shadow-none w-full py-1 px-4 bg-white rounded-xl focus:outline-(--color-primary)/80'} />

                            <div className='flex justify-end gap-3 mt-2'>
                                {
                                    comment && <>
                                        <Button onClick={() => { setComment('') }} size='sm' variant='light' className={'text-xs border-(--color-danger) text-(--color-danger) hover:bg-(--color-danger)/20 transition-colors duration-300'}>Cancel</Button>
                                        <Button type='submit' size='sm' className={'text-xs btn-primary transition-colors duration-300'}>Comment</Button>
                                    </>
                                }

                            </div>
                        </form>
                    </div>: <div>
                        <h2>Please login to share your thougths!</h2>
                    </div>
                }

            </div>

            {/* all comments */}
            <div className='grid grid-cols-1 p-4 space-y-6'>
                {
                    allComments.length > 0 ? <>
                        {
                            allComments.map(comment => <div key={comment._id} className=' flex items-start gap-2 md:gap-4 '>
                                <div>
                                    <Avatar className=''>
                                        <Avatar.Image
                                            src={comment.userImage}
                                            alt={comment.userName} />
                                        <Avatar.Fallback className='text-xs'>{comment.userName[0]}</Avatar.Fallback>
                                    </Avatar>
                                </div>

                                <div className='space-y-1'>
                                    <div className='flex items-center gap-1 text-xs'>
                                        <h2 className='text-sm font-bold '>{comment.userName}</h2>
                                        <LuDot />
                                        <p>{new Date(comment.createdAt).toLocaleDateString("en-GB", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric"
                                        })}</p>
                                    </div>
                                    <p>{comment.comment}</p>
                                </div>
                            </div>)
                        }
                    </> : <>
                        <div className='space-y-1 p-4'>
                            <h3 className='font-medium'>No comments yet.</h3>
                            <p className='text-sm'>Be the first to share your thoughts!</p>
                        </div>
                    </>
                }


            </div>

        </div>
    );
};

export default CommentSection;
'use client'
import { postComment } from '@/lib/action';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Input } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { LiaTrashAlt } from 'react-icons/lia';
import { LuDot } from 'react-icons/lu';
import CommentEditModal from './CommentEditModal';

const CommentSection = ({ allComments, idea }) => {
    const [comment, setComment] = useState('');
    const router = useRouter()

    const { data } = authClient.useSession();
    const user = data?.user;
    const { _id, ideaTitle, imageURL } = idea;

    const handleComment = async (e) => {
        e.preventDefault();

        const commentAndInfo = {
            ideaId: _id,
            ideaTitle,
            ideaImage: imageURL,
            userId: user?.id,
            userName: user?.name,
            userImage: user?.image,
            comment: comment,
        }
        const result = await postComment(commentAndInfo, _id);

        if (result.acknowledged) {
            router.refresh()
            toast.success('successfully added a comment');
            setComment('')

        }
        else {
            toast.error('something went wrong!')
        }

    }

    return (
        <div className='mt-20 md:mt-30 '>
            <div className='p-4 bg-(--color-secondary)/10 space-y-4'>
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
                                className={'shadow-none w-full py-2 px-4 bg-white rounded-xl focus:outline-(--color-primary)/80'} />

                            <div className='flex justify-end gap-3 mt-2'>
                                {
                                    comment && <>
                                        <Button onClick={()=> {setComment('')}} type='reset' size='sm' className={'text-xs bg-danger/10 hover:bg-danger/20 text-danger transition-colors duration-300'}>Cancel</Button>
                                        <Button type='submit' size='sm' className={'text-xs btn-primary transition-colors duration-300'}>Comment</Button>
                                    </>
                                }

                            </div>
                        </form>
                    </div> : <div>
                        <h2>Please login to share your thougths!</h2>
                    </div>
                }

            </div>

            {/* all comments */}
            <div className='grid grid-cols-1 p-4 space-y-6 idea-card'>
                {
                    allComments.length > 0 ? <>
                        {
                            allComments.map(comment => <div key={comment._id} className=' flex items-start gap-2 md:gap-4 border p-4 rounded-2xl'>
                                <div>
                                    <Avatar className=''>
                                        <Avatar.Image
                                            src={comment.userImage}
                                            alt={comment.userName} />
                                        <Avatar.Fallback className='text-xs'>{comment.userName[0]}</Avatar.Fallback>
                                    </Avatar>
                                </div>

                                <div className='flex-1 flex justify-between items-start'>
                                    <div className='space-y-1'>
                                        <div className='flex justify-between items-start'>
                                            <div className='flex flex-col md:flex-row items-start md:items-center gap-1 text-xs'>
                                                <h2 className='text-sm font-bold '>{comment.userName}</h2>
                                                <LuDot className='hidden md:inline-block' />
                                                <p className='text-(--color-text)/60'>{new Date(comment.createdAt).toLocaleDateString("en-GB", {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric"
                                                })}</p>
                                            </div>
                                        </div>
                                        <p className='text-sm md:text-base'>{comment.comment}</p>
                                    </div>

                                    {
                                        comment.userId === user?.id && <div className='flex items-center gap-2'>
                                            <CommentEditModal comment={comment} ideaId={_id}/>
                                            <Button size='sm' isIconOnly className={'w-7 h-7 bg-danger/20 text-danger hover:bg-danger/30 transition-colors duration-300'}>
                                                <LiaTrashAlt className='w-4 h-4 ' />
                                            </Button>
                                        </div>
                                    }
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
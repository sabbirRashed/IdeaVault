'use client'
import { Avatar, Button, Input } from '@heroui/react';
import React, { useState } from 'react';

const CommentSection = () => {
    const [comment, setComment] = useState('');
    console.log('comment:', comment);

    const handleComment = (e) => {
        e.preventDefault();

        if (comment) {
            console.log("condition is true");
        }
        else {
            console.log('condition false');
        }

    }
    return (
        <div className='mt-20 md:mt-30 border border-(--color-border)'>
            <div className='p-4 bg-(--color-primary)/10 rounded-b-2xl space-y-4'>
                <h3 className='text-xl font-medium font-sora'>Comments (12)</h3>

                {/* comment input area */}
                <div className='flex items-start gap-2'>
                    <Avatar size="sm" className=''>
                        <Avatar.Image
                            // src={}
                            alt={''} />
                        <Avatar.Fallback className='text-xs bg-white'>M</Avatar.Fallback>
                    </Avatar>
                    <form onSubmit={handleComment} className='flex-1'>
                        <textarea
                            cols={1}
                            rows={1}
                            value={comment}
                            onChange={(e) => { setComment(e.target.value) }}
                            placeholder="Write your comment"
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
                </div>

            </div>

            <div className='min-h-20'>

            </div>
        </div>
    );
};

export default CommentSection;
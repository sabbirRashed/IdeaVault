'use client'
import { Avatar, Button, Input } from '@heroui/react';
import React, { useState } from 'react';
import { LuDot } from 'react-icons/lu';

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
            <div className='p-4 bg-(--color-primary)/10 space-y-4'>
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
                </div>

            </div>

            {/* all comments */}
            <div className='grid grid-cols-1 gap-4'>
                <div className=' flex gap-2 md:gap-4 px-2 py-4 md:p-4 '>
                    <div>
                        <Avatar className=''>
                            <Avatar.Image
                                // src={}
                                alt={''} />
                            <Avatar.Fallback className='text-xs'>S</Avatar.Fallback>
                        </Avatar>
                    </div>

                    <div className='space-y-1'>
                        <div className='flex items-center gap-1 text-xs'>
                            <h2 className='text-sm font-bold '>Sabbir Rahman</h2>
                            <LuDot />
                            <p>12 jully, 2026</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolor beatae quidem eos placeat magnam laudantium debitis obcaecati hic expedita!</p>
                    </div>
                </div>

                <div className=' flex gap-2 md:gap-4 p-2 md:p-4'>
                    <div>
                        <Avatar className=''>
                            <Avatar.Image
                                // src={}
                                alt={''} />
                            <Avatar.Fallback className='text-xs'>S</Avatar.Fallback>
                        </Avatar>
                    </div>

                    <div className='space-y-1'>
                        <div className='flex items-center gap-1 text-xs'>
                            <h2 className='text-sm font-bold '>Sabbir Rahman</h2>
                            <LuDot />
                            <p>12 jully, 2026</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolor beatae quidem eos placeat magnam laudantium debitis obcaecati hic expedita!</p>
                    </div>
                </div>
                <div className=' flex gap-2 md:gap-4 p-2 md:p-4 '>
                    <div>
                        <Avatar className=''>
                            <Avatar.Image
                                // src={}
                                alt={''} />
                            <Avatar.Fallback className='text-xs'>S</Avatar.Fallback>
                        </Avatar>
                    </div>

                    <div className='space-y-1'>
                        <div className='flex items-center gap-1 text-xs'>
                            <h2 className='text-sm font-bold '>Sabbir Rahman</h2>
                            <LuDot />
                            <p>12 jully, 2026</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolor beatae quidem eos placeat magnam laudantium debitis obcaecati hic expedita!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentSection;
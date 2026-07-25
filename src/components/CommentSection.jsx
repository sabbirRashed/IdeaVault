import { Avatar, Button, Input } from '@heroui/react';
import React from 'react';

const CommentSection = () => {
    return (
        <div className='mt-20 md:mt-30 border border-(--color-border)'>
            <div className='p-4 bg-(--color-primary)/10 rounded-b-2xl space-y-4'>
                <h3 className='text-xl font-medium font-sora'>Comments (12)</h3>
                <div className='flex items-start gap-2'>
                    <Avatar size="sm" className=''>
                        <Avatar.Image
                            // src={}
                            alt={''} />
                        <Avatar.Fallback className='text-xs bg-white'>M</Avatar.Fallback>
                    </Avatar>
                    <form className='flex-1'>
                        <textarea
                            cols={1}
                            rows={1}
                            placeholder="Write your comment"
                            className={'shadow-none w-full py-1 px-4 bg-white rounded-xl focus:outline-(--color-primary)/80'} />
                    </form>
                </div>
                <div className='flex justify-end gap-3'>
                    <Button size='sm' variant='outline' className={'text-xs border-(--color-danger) text-(--color-danger)'}>Cancel</Button>
                    <Button size='sm' className={'text-xs btn-primary'}>Comment</Button>

                </div>
            </div>

            <div className='min-h-20'>

            </div>
        </div>
    );
};

export default CommentSection;
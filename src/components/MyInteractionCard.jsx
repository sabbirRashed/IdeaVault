import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { LiaTrashAlt } from 'react-icons/lia';
import CommentEditModal from './CommentEditModal';
import DeleteCommentAlert from './DeleteCommentAlert';

const MyInteractionCard = ({ commentData }) => {
    const {ideaId, ideaTitle, ideaImage, comment, createdAt } = commentData;
    const createdDate = new Date(createdAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    return (
        <div className='flex items-center gap-4 idea-card p-4 rounded-2xl group'>
            <Image src={ideaImage}
                alt={ideaTitle}
                width={56}
                height={56}
                className='h-14 w-14 shrink-0 rounded-lg object-cover'>
            </Image>

            <div className='flex-1'>
                <h3 className='text-sm text-(--color-text)/60'>You commented on
                    <Link href={`/ideaDetails/${ideaId}`}
                        className='font-medium text-(--color-text) hover:text-(--color-primary)'> {ideaTitle}</Link>
                </h3>
                <p className='text-sm text-(--color-text)/80 line-clamp-1 mt-1'>{comment}</p>

                <div className='flex justify-between items-center mt-2'>
                    <span className='text-sm text-(--color-text)/40 py-1'>{createdDate}</span>
                    <div className='flex md:hidden group-hover:flex items-center gap-2'>
                        <CommentEditModal comment={commentData}/>
                       <DeleteCommentAlert comment={commentData}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyInteractionCard;
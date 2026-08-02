import { formatDistanceToNow } from 'date-fns';
import { p } from 'framer-motion/client';
import React from 'react';
import { FaFire } from 'react-icons/fa6';

const ActivityItem = ({item}) => {
    
    const timeAgo = formatDistanceToNow(new Date(item.createdAt), {addSuffix:true})
    return (
        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-(--color-primary)/5 transition-colors duration-300">
            <span className="text-(--color-primary)"><FaFire size={16} /></span>
            {
                item.comment
                    ? <p className='text-sm text-(--color-text)/70'>{`You commented on ${item.ideaTitle}`}</p>
                    : <p className='text-sm text-(--color-text)/70'>{`You posted ${item.ideaTitle}`}</p>
            }
            <span className="text-xs text-(--color-text)/60 ml-auto">{timeAgo}</span>
        </div>
    );
};

export default ActivityItem;
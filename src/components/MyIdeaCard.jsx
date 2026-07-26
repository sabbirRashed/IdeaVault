import { Button, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineEdit } from 'react-icons/ai';
import { FaArrowRightLong } from 'react-icons/fa6';
import { LiaTrashAlt } from 'react-icons/lia';
import EditIdeaModal from './EditIdeaModal';

const MyIdeaCard = ({ idea }) => {

    const {
        ideaTitle,
        shortDescription,
        detailedDescription,
        category,
        tags,
        imageURL,
        estimatedBudget,
        targetAudience,
        problemStatement,
        proposedSolution,
        creatorName,
        creatorImage,
        createdAt
    } = idea;

    const createdDate = new Date(createdAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })


    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 p-4 border border-(--color-border) bg-(--color-bg) hover:shadow-lg hover:shadow-amber-600/20 hover:-translate-y-1 transition-all duration-300'>
            <div className='md:flex-1 w-full relative'>
                <Image src={imageURL}
                    alt={ideaTitle}
                    height={200}
                    width={400}
                    className=' w-full h-full'></Image>
                <Chip className='bg-(--color-secondary)/90 text-white absolute top-2 left-2'>{category.toUpperCase()}</Chip>
            </div>

            {/* card content */}
            <div className='md:flex-3 space-y-4'>
                <div className=''>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-xl md:text-2xl font-medium font-sora text-foreground/70'>{ideaTitle}</h2>
                        <div className='flex justify-between items-center gap-4 '>

                            <EditIdeaModal idea={idea} />
                            <Button size='sm' isIconOnly className={'bg-danger/20 text-danger hover:bg-danger/30 transition-colors duration-300'}>
                                <LiaTrashAlt className='w-5 h-5 ' />
                            </Button>

                        </div>
                    </div>
                    <p className='text-lg md:text-xl font-medium font-sora text-foreground/70 line-clamp-1 mt-3'>{shortDescription}</p>
                </div>

                <p className='text-foreground/70 line-clamp-2'>{detailedDescription}</p>

                <div className='flex justify-between items-center'>
                    <h3><span className='font-medium'>createdAt: </span>{createdDate}</h3>
                    <Link href={`/ideaDetails/`}>
                        <Button size='sm' className={'text-xs btn-primary duration-300 transition-colors'}>
                            View Details <FaArrowRightLong />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyIdeaCard;
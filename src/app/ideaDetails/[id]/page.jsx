import { getIdeaById } from '@/lib/data';
import { Avatar, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { BiCategory, BiUserPlus } from 'react-icons/bi';
import { FaMoneyBillWave, FaRegCommentDots, FaUserPlus } from 'react-icons/fa';
import { FaSackDollar } from 'react-icons/fa6';
import { FcIdea } from 'react-icons/fc';
import { IoWarningOutline } from 'react-icons/io5';
import { LiaTagsSolid } from 'react-icons/lia';
import { MdOutlineTimer } from 'react-icons/md';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { TbTargetArrow, TbUserPlus } from 'react-icons/tb';

const IdeaDetails = async ({ params }) => {
    const { id } = await params;
    const idea = await getIdeaById(id);
    const {
        _id,
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
    } = idea;
    return (
        <div className='w-11/12 max-w-7xl mx-auto py-20 md:py-30'>
            <div className='relative overflow-hidden'>
                <Image
                    src={imageURL}
                    alt={ideaTitle}
                    width={400}
                    height={400}
                    className='w-full h-65 md:h-80 object-cover '></Image>

                <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/20'></div>
                <Chip className='bg-(--color-secondary)/90 text-white absolute top-2 left-2 md:top-6 md:left-6'>{category}</Chip>

                <div className='absolute left-1/2 -translate-x-1/2 bottom-6 text-white'>
                    <h1 className='text-2xl md:text-4xl font-semibold font-sora text-center'>{ideaTitle}</h1>
                </div>
                <div className='absolute top-12 left-1/2 -translate-x-1/2 space-x-2 md:space-x-10 flex items-center'>
                    {tags.map((item, ind) => {
                        return (
                            <Chip key={ind} className='bg-(--color-primary)/40 text-(--color-primary)'>{item}</Chip>
                        )
                    })}
                </div>
            </div>

            <div className='border border-(--color-border) mt-6 space-y-4 p-4 bg-'>
                <div className='space-y-1'>
                    <h3 className='flex gap-2 items-center font-semibold'> <TbUserPlus size={18} /> Innovator:</h3>
                    <div className='flex items-center gap-1 ml-6'>
                        <Avatar size="sm" className='w-6 h-6'>
                            <Avatar.Image
                                // src={}
                                alt={''} />
                            <Avatar.Fallback className='text-xs'>M</Avatar.Fallback>
                        </Avatar>
                        <span className='text-sm font-medium'> Sabbir Rahman</span>
                    </div>
                </div>

                <div className='space-y-1'>
                    <div className='flex items-center gap-2 font-semibold'>
                        <RiMoneyDollarBoxLine size={16} /> Estimated Budget
                    </div>
                    <p className='text-sm ml-6'>{estimatedBudget}</p>
                </div>

                <div className='space-y-1'>
                    <h3 className='flex items-center gap-2 font-semibold'><TbTargetArrow size={16} /> targetAudience</h3>
                    <p className='text-sm ml-6'>{targetAudience}</p>
                </div>

                <div className='space-y-1'>
                    <h3 className='flex items-center gap-2 font-semibold'><MdOutlineTimer size={16} /> Posted date</h3>
                    <p className='text-sm ml-6'>20 Jully, 2026; 10.15 AM</p>
                </div>

                <div className='space-y-1'>
                    <h3 className='flex items-center gap-2 font-semibold'><FaRegCommentDots size={16} /> Comment count</h3>
                    <p className='text-sm ml-6'>15</p>
                </div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 items-start gap-6 mt-20 md:mt-30'>
                {/* left */}
                <div className=' minh-20 col-span-2 space-y-10'>
                    <div className='space-y-4  px-4'>
                        <h2 className='text-xl md:text-2xl font-medium text-foreground/70'>{shortDescription}</h2>
                        <p className='text-foreground/70  max-w-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nam quo nesciunt neque qui ratione, soluta voluptatem iure velit aspernatur error esse fugit repudiandae eum quos deserunt obcaecati. Vitae inventore eaque suscipit laborum aliquid iste ducimus temporibus aspernatur alias, magni ullam, et quos rerum ipsum veritatis dolor consequatur dolorem enim voluptatum perspiciatis laboriosam quis molestiae sint sapiente! Autem harum debitis delectus veritatis optio cum cumque sint accusamus iure veniam possimus dolorum consequuntur officia, eaque quod eveniet culpa quibusdam earum, ullam reprehenderit mollitia obcaecati odit ad. Quisquam dolore nihil animi eos libero, corporis tenetur enim illum sed fuga magnam sunt aliquid voluptatem odio autem accusantium deserunt consequatur inventore a. Sint doloribus commodi veritatis, repellat ex suscipit molestiae nesciunt modi optio, totam, veniam sequi illo? Similique soluta impedit doloribus repudiandae cum, pariatur amet necessitatibus nulla eveniet assumenda quas ad consequuntur. Voluptates sit fugit, ea praesentium excepturi error rem minima dolores debitis sint impedit corporis perspiciatis tempora, blanditiis mollitia quas eos eius sapiente aperiam omnis voluptate aliquam doloremque ex. Corporis molestiae explicabo maxime culpa vel excepturi minima distinctio perferendis voluptas? Ipsam totam iure veniam explicabo adipisci quo voluptatum! Asperiores excepturi voluptatem vitae magni exercitationem tempore optio, et sapiente aperiam dolorem ipsa? Odio molestias eaque in iusto officia. Eius nesciunt id perspiciatis amet unde a asperiores quia blanditiis vel deleniti, natus vitae, hic iure autem obcaecati. Inventore aliquam sit repellat necessitatibus in quas assumenda hic quia? Dignissimos ducimus alias voluptatibus, velit, eum est iste ullam nulla minus incidunt aperiam modi, quos dolorem inventore. Dolor perspiciatis aliquam culpa rem alias, praesentium minima saepe molestias vitae blanditiis labore sit, iusto recusandae. Voluptatem repellendus, quae sunt expedita nostrum accusamus recusandae perferendis corrupti quos quisquam repellat iure ut dolores, animi laudantium. Quae cupiditate modi sit quo exercitationem ipsa unde iure harum, ipsum corrupti dignissimos voluptas illo temporibus ab mollitia veritatis libero asperiores voluptatum nihil itaque! Dignissimos excepturi exercitationem, doloremque at quae cum sapiente quis consequuntur sint quam porro velit ullam maiores iure ea iusto nulla odio mollitia in distinctio itaque. Totam ea perferendis dignissimos libero voluptatibus veniam natus doloremque explicabo molestias non possimus eum quisquam voluptate aut, quod quae recusandae quis fugiat, rerum blanditiis reprehenderit! Excepturi ipsa aperiam reprehenderit perferendis vero quisquam, cupiditate, obcaecati iste nihil minima eos quibusdam. Libero magnam aperiam cum quidem vel, doloremque ex maxime similique officia consequuntur iure numquam tenetur sint amet tempora assumenda atque voluptate recusandae porro deleniti! Molestiae, nulla? Nam natus, dicta neque dolorum doloremque repellendus ipsa veniam. Consequuntur labore, expedita eius sapiente consequatur alias recusandae qui! Tempora error quisquam ex! Obcaecati, sed veritatis velit reprehenderit accusantium, officiis nemo dignissimos modi nostrum reiciendis ipsa libero hic dolor. Est quam amet sunt corrupti illo tempore aut dolorem praesentium aliquid quasi ut laboriosam beatae, pariatur cum. Itaque, quisquam! Accusantium quisquam enim minus. Architecto officiis expedita dignissimos obcaecati illum. Doloribus blanditiis reprehenderit alias voluptatum temporibus omnis laboriosam cupiditate quae asperiores, eaque, voluptatem ex quis pariatur architecto natus commodi quasi et? Qui, quasi amet deserunt obcaecati rem voluptatem recusandae debitis quod modi est molestiae quis libero.</p>
                    </div>

                    <div className='space-y-4 border-l-2 border-l-(--color-warning) p-4'>
                        <h2 className='text-xl md:text-2xl font-medium text-foreground/70 flex items-center gap-2'><IoWarningOutline className='text-(--color-warning)' /> The Problem</h2>
                        <p className='text-foreground/70 max-w-xl'>{problemStatement}</p>
                    </div>

                    <div className='space-y-4 border-l-2 border-l-(--color-success) p-4'>
                        <h2 className='text-xl md:text-2xl font-medium text-foreground/70 flex items-center gap-2'><FcIdea /> The Solution</h2>
                        <p className='text-foreground/70 max-w-xl'>{proposedSolution}</p>
                    </div>

                </div>

                {/* right */}
                <div className='min-h-20 border p-4 space-y-4 sticky top-24'>
                    <div>
                        <h3 className='flex items-center gap-2 font-semibold'><BiCategory />Category</h3>
                        <Chip className='bg-(--color-secondary)/90 text-white ml-6'>{category}</Chip>
                    </div>

                    <div>
                        <h2 className='flex items-center gap-2 font-semibold'><LiaTagsSolid />Tags</h2>
                        <div className='space-x-2 ml-6'>
                            {tags.map((item, ind) => {
                                return (
                                    <Chip key={ind} className='bg-(--color-primary)/10 text-(--color-primary)'>{item}</Chip>
                                )
                            })}
                        </div>
                    </div>

                    <div className='space-y-1'>
                        <div className='flex items-center gap-2 font-semibold'>
                            <RiMoneyDollarBoxLine size={16} /> Budget
                        </div>
                        <p className='text-sm ml-6'>{estimatedBudget}</p>
                    </div>

                    <div className='space-y-1'>
                        <div className='flex items-center gap-2 font-semibold'>
                            <RiMoneyDollarBoxLine size={16} /> estimatedBudget
                        </div>
                        <p className='text-sm ml-6'>{estimatedBudget}</p>
                    </div>

                    <div className='space-y-1'>
                        <h3 className='flex items-center gap-2 font-semibold'><TbTargetArrow size={16} /> targetAudience</h3>
                        <p className='text-sm ml-6'>{targetAudience}</p>
                    </div>

                    <div className='space-y-1'>
                        <h3 className='flex gap-2 items-center font-semibold'> <TbUserPlus size={18} /> Innovator:</h3>
                        <div className='flex items-center gap-1 ml-6'>
                            <Avatar size="sm" className='w-6 h-6'>
                                <Avatar.Image
                                    // src={}
                                    alt={''} />
                                <Avatar.Fallback className='text-xs'>M</Avatar.Fallback>
                            </Avatar>
                            <span className='text-sm font-medium'> Sabbir Rahman</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IdeaDetails;
'use client'
import ActivityItem from '@/components/ActivityItem';
import MyIdeaCard from '@/components/MyIdeaCard';
import { authClient } from '@/lib/auth-client';
import { getCommentsByUserId, getIdeaByUserId } from '@/lib/data';
import { Avatar, Button } from '@heroui/react';
import { div } from 'framer-motion/client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaLightbulb, FaPen } from 'react-icons/fa6';
import { GiAutoRepair } from 'react-icons/gi';

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('my-ideas')
    const [loading, setLoading] = useState(true);
    const [myIdeas, setMyIdeas] = useState([])
    const [interActions, setInterActions] = useState([]);
    const { data, isPending } = authClient.useSession();
    const user = data?.user;

    useEffect(() => {
        if (!user) {
            return
        }

        const fetchData = async () => {
            setLoading(true);

            try {
                const { data } = await authClient.token()

                if (activeTab === "my-ideas") {
                    const myIdeas = await getIdeaByUserId(user.id, data?.token);
                    setMyIdeas(myIdeas)
                }
                if (activeTab === "activity") {
                    const myInterActions = await getCommentsByUserId(user.id, data?.token);
                    setInterActions(myInterActions)
                }

            }
            finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [user, activeTab])

    const allActivity = [...myIdeas, ...interActions].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
   



    return (
        <div className="w-11/12 max-w-6xl mx-auto mt-10">
            {/* banner */}
            <div className="h-40 md:h-56 rounded-3xl bg-gradient-to-br from-(--color-primary) via-orange-400 to-(--color-secondary) relative overflow-hidden">
            </div>

            {/* Profile info  */}
            <div className="px-4 md:px-8 -mt-14 md:-mt-16 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div className="flex items-end gap-4">
                        <Avatar className="w-28 h-28 md:w-32 md:h-32 border-4 border-white shadow-lg">
                            <Avatar.Image src={user?.image} alt={'image'} />
                            <Avatar.Fallback className="bg-(--color-primary)/10 text-(--color-primary) text-3xl font-semibold">
                                {user?.name?.[0]}
                            </Avatar.Fallback>
                        </Avatar>
                        <div className="pb-2">
                            <h1 className="text-xl md:text-2xl font-bold font-sora">{user?.name}</h1>
                            <p className="text-sm text-(--color-text)/60">{user?.title || 'Idea Creator'}</p>
                        </div>
                    </div>

                    <Button className="btn-primary transition-colors duration-300 px-5">
                        Edit Profile <FaPen size={12} />
                    </Button>
                </div>

                <p className="text-sm text-(--color-text)/70 mt-4 max-w-2xl">
                    {user?.bio || 'No bio added yet.'}
                </p>
            </div>

            {/* tabs */}
            <div className='flex items-center gap-2 md:gap-4 px-4 md:px-8 mt-6'>
                <Button
                    onClick={() => setActiveTab('my-ideas')}
                    className={`${activeTab === 'my-ideas'
                        ? 'bg-(--color-primary) text-white '
                        : 'bg-(--color-primary)/5 hover:bg-(--color-primary)/10 text-(--color-text)/60'}`}>My Ideas</Button>
                <Button
                    onClick={() => setActiveTab('saved')}
                    className={`${activeTab === 'saved'
                        ? 'bg-(--color-primary) text-white '
                        : 'bg-(--color-primary)/5 hover:bg-(--color-primary)/10 text-(--color-text)/60'}`}>Saved</Button>
                <Button
                    onClick={() => setActiveTab('activity')}
                    className={`${activeTab === 'activity'
                        ? 'bg-(--color-primary) text-white '
                        : 'bg-(--color-primary)/5 hover:bg-(--color-primary)/10 text-(--color-text)/60'}`}>Activity</Button>
            </div>

            {/* container of tabs item */}
            <div className='px-4 md:px-8 my-6'>
                {
                    activeTab === 'my-ideas' && <div className=' grid grid-cols-1 gap-4'>
                        {
                            myIdeas.length > 0 ? <>
                                {
                                    myIdeas.map(idea => <MyIdeaCard key={idea._id} idea={idea} />)
                                }
                            </> :
                                <div className="rounded-2xl p-10 text-center flex flex-col items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-(--color-secondary)/20 flex items-center justify-center mb-4">
                                        <Image
                                            src={'/assets/updateLogo.png'}
                                            alt='Idea-icon'
                                            width={40}
                                            height={40}></Image>
                                    </div>

                                    <h2 className="text-2xl font-semibold mb-2">
                                        No Ideas Yet
                                    </h2>

                                    <p className="text-(--color-text-muted) max-w-md mb-6">
                                        You haven't shared any ideas yet. Start by creating your first idea and inspire the community.
                                    </p>

                                    <Link href="/add-ideas">
                                        <Button className="btn-primary">
                                            Create Your First Idea
                                        </Button>
                                    </Link>
                                </div>

                        }
                    </div>
                }
                {
                    activeTab === "saved" && <div className="rounded-2xl p-10 text-center flex flex-col items-center justify-center">

                        <GiAutoRepair size={42} className='mx-auto text-(--color-primary)' />
                        <h2 className="text-2xl text-(--color-text)/80 font-semibold mt-2">
                            This feature is coming soon!
                        </h2>

                        <p className="text-(--color-text-muted) max-w-md mb-6 mt-2">
                            We're working on a feature that lets you save ideas and access them anytime from your profile. Stay tuned!
                        </p>
                    </div>
                }

                {
                    activeTab === "activity" && <div>
                        {
                            allActivity.length > 0 ? <>
                                {
                                    allActivity.map(item => <ActivityItem key={item._id} item={item} />)
                                }
                            </> : <>

                            </>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default ProfilePage;
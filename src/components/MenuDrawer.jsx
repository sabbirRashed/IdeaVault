"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Drawer, Separator, useOverlayState } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMdTrendingUp } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { TbActivity, TbBulb, TbHome, TbNotebook, TbSquareRoundedPlus } from 'react-icons/tb';

const MenuDrawer = () => {
    const state = useOverlayState({ defaultOpen: false })

    const { data, isPending } = authClient.useSession();
    const user = data?.user;

    return (
        <Drawer>
            <Button variant="secondary">Open filters</Button>
            <Drawer.Backdrop variant="blur">
                <Drawer.Content placement="right">
                    <Drawer.Dialog
                        // onClick={()=>state.close()}
                        className="border-l border-border/80 bg-surface p-0">
                        <Drawer.CloseTrigger />
                        <Drawer.Header >
                            <div className="flex items-center gap-0.5 px-5 pt-4 pb-2">
                                <Image
                                    src={'/assets/updateLogo.png'}
                                    alt="logo"
                                    width={20}
                                    height={20}
                                    className="w-auto"></Image>
                                <p className="font-bold text-lg text-(--color-secondary)"><span className="text-(--color-primary)">Spark</span>Nest</p>
                            </div>
                            <Separator className=' border-b border-(--color-border)' />
                            <div className='flex items-center gap-2.5 px-5 py-2'>
                                <Avatar size="" >
                                    <Avatar.Image
                                        src={user?.image}
                                        alt={user?.name} />
                                    <Avatar.Fallback className='text-xs'>{user?.name && user?.name[0]}</Avatar.Fallback>
                                </Avatar>
                                <div>
                                    <p className='text-sm font-medium'>{user?.name}</p>
                                    <Link href={'/profile'}><span className='text-xs text-(--color-secondary)'>View Profile</span></Link>
                                </div>
                            </div>
                            <Separator className=' border-b border-(--color-border)' />
                        </Drawer.Header>
                        <Drawer.Body >
                            <div className='px-4 py-2'>
                                <ul className=' text-sm font-medium '>
                                    <li className=' hover:bg-(--color-primary)/10 rounded-2xl hover:text-(--color-primary) px-5'><Link href={'/'} className='flex items-center gap-3 py-4 '><TbHome size={18} />Home</Link></li>
                                    <li className=' hover:bg-(--color-primary)/10 rounded-2xl hover:text-(--color-primary) px-5'><Link href={'/ideas'} className='flex items-center gap-3 py-4 '><TbBulb size={18} />Ideas</Link></li>
                                    <li className=' hover:bg-(--color-primary)/10 rounded-2xl hover:text-(--color-primary) px-5'><Link href={'/add-ideas'} className='flex items-center gap-3 py-4 '><TbSquareRoundedPlus size={18} /> Add-Idea</Link></li>
                                </ul>
                                {
                                    user && <ul className=' text-sm font-medium'>
                                        <li className=' hover:bg-(--color-primary)/10 rounded-2xl hover:text-(--color-primary) px-5'><Link href={'/ideas'} className='flex items-center gap-3 py-4 '><TbNotebook size={18} /> My Ideas</Link></li>
                                        <li className=' hover:bg-(--color-primary)/10 rounded-2xl hover:text-(--color-primary) px-5'><Link href={'/add-ideas'} className='flex items-center gap-3 py-4 '><TbActivity size={18} /> My Interactions</Link></li>
                                    </ul>
                                }
                            </div>
                            <Separator className=' border-b border-(--color-border) mt-3' />
                        </Drawer.Body>

                        <Drawer.Footer>
                            <Button slot="close" variant="secondary">
                                Cancel
                            </Button>
                            <Button slot="close">Apply</Button>
                        </Drawer.Footer>
                    </Drawer.Dialog>
                </Drawer.Content>
            </Drawer.Backdrop>
        </Drawer>
    );
};

export default MenuDrawer;
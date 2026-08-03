"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Drawer, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MenuDrawer = () => {

    const { data, isPending } = authClient.useSession();
    const user = data?.user;

    return (
        <Drawer>
            <Button variant="secondary">Open filters</Button>
            <Drawer.Backdrop variant="blur">
                <Drawer.Content placement="right">
                    <Drawer.Dialog className="border-l border-border/80 bg-surface p-0">
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
                            <Separator className=' border-b border-(--color-border)'/>
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
                             <Separator className=' border-b border-(--color-border)'/>
                        </Drawer.Header>
                        <Drawer.Body>
                            <ul>
                                <li><Link href={'/'}>Home</Link></li>
                            </ul>
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
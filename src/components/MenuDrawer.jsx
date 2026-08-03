"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Drawer, Separator, useOverlayState } from '@heroui/react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';
import { FiMoon } from 'react-icons/fi';
import { IoMdTrendingUp } from 'react-icons/io';
import { IoHomeOutline, IoLogOutOutline, IoSunnyOutline } from 'react-icons/io5';
import { TbActivity, TbBulb, TbHome, TbNotebook, TbSquareRoundedPlus } from 'react-icons/tb';

const MenuDrawer = () => {
    const state = useOverlayState({ defaultOpen: false })
    const { resolvedTheme, setTheme } = useTheme();

    const isDark = resolvedTheme === "dark";
    console.log(isDark, ':menu');

    const { data, isPending } = authClient.useSession();
    const user = data?.user;

    const handleLogout = async () => {
        const { data, error } = await authClient.signOut()

        if (data.success) {
            toast.success('Logout successfully')
        }
        if (error) {
            toast.error(error.message)
        }
    }

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
                            {
                                user && <div className='flex items-center gap-2.5 px-5 py-2'>
                                    <Avatar size="" >
                                        <Avatar.Image
                                            src={user?.image}
                                            alt={user?.name} />
                                        <Avatar.Fallback className="bg-(--color-primary)/10 text-(--color-primary) text-sm font-medium">{user?.name && user?.name[0] || "U"}</Avatar.Fallback>
                                    </Avatar>
                                    <div>
                                        <p className='text-sm font-medium'>{user?.name}</p>
                                        <Link href={'/profile'}><span className='text-xs text-(--color-secondary)'>View Profile</span></Link>
                                    </div>
                                </div>
                            }
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

                            <div className='flex justify-between items-center px-5 py-4'>
                                <h2 className='font-medium'>Theme</h2>
                                <div className='ring-1 ring-(--color-text)/30 p-0.5 rounded-full'>

                                    <Button
                                        isIconOnly
                                        size='sm'
                                        variant='light'
                                        onClick={() => setTheme("light")}
                                        className={` ${isDark ? " text-(--color-text)/20" : "bg-gray-200"}`}>
                                        <IoSunnyOutline className=" h-5 w-5 cursor-pointer" />
                                    </Button>

                                    <Button
                                        isIconOnly size='sm'
                                        variant='light'
                                        onClick={() => setTheme("dark")}
                                        className={`${isDark ? "bg-white/10" : "text-(--color-text)/20"}`}>
                                        <FiMoon className=" h-5 w-5 cursor-pointer" />
                                    </Button>

                                </div>
                            </div>

                            {/* authentication */}
                            <div className='px-5 py-4'>
                                {
                                    user ? <>
                                        <Button
                                            variant='outline'
                                            className={' hover:bg-(--color-danger)/90 text-danger hover:text-white transition-colors duration-200 w-full rounded-md py-5 '}
                                            onPress={handleLogout}
                                        >
                                            <IoLogOutOutline />
                                            Log out
                                        </Button>
                                    </> : <>
                                        <Link href={'/login'}>
                                            <Button
                                                size="sm"
                                                className={'rounded-md w-full py-5 btn-secondary transition-colors duration-300'}
                                            >
                                                Log in
                                            </Button>
                                        </Link>
                                        <Link href={'/register'}>
                                            <Button
                                                size="sm"
                                                className={'rounded-md w-full py-5 btn-primary transition-colors duration-300 mt-2'}
                                            >
                                                Register
                                            </Button>
                                        </Link>
                                    </>
                                }
                            </div>
                        </Drawer.Body>

                        <Drawer.Footer>

                        </Drawer.Footer>
                    </Drawer.Dialog>
                </Drawer.Content>
            </Drawer.Backdrop>
        </Drawer>
    );
};

export default MenuDrawer;
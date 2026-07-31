import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className=' py-30 bg-(--color-footer-bg)'>

            <div className='w-11/12 max-w-7xl mx-auto'>
                <div className='grid items-start grid-cols-1 md:grid-cols-5 gap-6'>
                    <div className='md:col-span-2'>
                        <div className="flex items-center">
                            <Image
                                src={'/assets/sparkNestLogo.png'}
                                alt="logo"
                                width={80}
                                height={80}
                                className='w-auto'></Image>
                            <p className="font-bold text-4xl text-(--color-secondary)"><span className="text-(--color-primary)">Spark</span>Nest</p>
                        </div>
                        <p className='text-white/50'>Discover, share, and grow innovative ideas with a community of creators and problem solvers.</p>
                    </div>

                    <ul>
                        <h2 className='mb-3 tracking-wide text-white'>QUICK LINKS</h2>
                        <ul className='flex flex-col gap-2'>
                            <li className='text-white/50 hover:text-white'> <Link href={'/'}>Home</Link></li>
                            <li className='text-white/50 hover:text-white'> <Link href={'/ideas'}>Ideas</Link></li>
                            <li className='text-white/50 hover:text-white'><Link href={'/add-ideas'}>Add Ideas</Link></li>
                            <li className='text-white/50 hover:text-white'><Link href={'/my-ideas'}>My Ideas</Link></li>
                            <li className='text-white/50 hover:text-white'><Link href={'/my-interactions'}>My Interactions</Link></li>
                        </ul>
                    </ul>

                    <div>
                        <h3 className=" mb-3 tracking-wide text-white">SUPPORT</h3>
                        <ul className="space-y-2">
                            <li className="text-white/50 hover:text-white cursor-pointer">Help Center</li>
                            <li className="text-white/50 hover:text-white cursor-pointer">
                                Terms of Service
                            </li>
                            <li className="text-white/50 hover:text-white cursor-pointer">
                                Privacy Policy
                            </li>
                        </ul>
                    </div>

                    <ul>
                        <h2 className='mb-3 tracking-wide text-white'>CONTACT US</h2>
                        <li className='text-white/50 '>786 901 1622</li>
                        <li className='text-white/50 '>info@sparknest.com</li>
                    </ul>

                </div>

                <div className="border-t border-foreground/20 mt-12 pt-6 flex flex-col md:flex-row justify-around items-center gap-4">
                    <p className="text-sm text-white/50">
                        © 2026 SparkNest. All rights reserved.
                    </p>

                    <div className='flex justify-between items-center gap-6 md:gap-10'>
                        <Link href={'#'}>
                            <div className='w-8 h-8 font-medium bg-white/10 hover:bg-white/30 transition-all duration-300 text-white/50 rounded-full flex justify-center items-center'>X</div>
                        </Link>
                        <Link href={'#'}>
                            <div className='w-8 h-8 font-medium bg-white/10 hover:bg-white/30 transition-all duration-300 text-white/50 rounded-full flex justify-center items-center'>f</div>
                        </Link>
                        <Link href={'#'}>
                            <div className='w-8 h-8 font-medium bg-white/10 hover:bg-white/30 transition-all duration-300 text-white/50 rounded-full flex justify-center items-center'>in</div>
                        </Link>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
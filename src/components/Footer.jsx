import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='border border-green-500 py-30'>

            <div className='w-11/12 max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                    <h2 className="text-5xl font-semibold text-(--color-primary)">SparkNest</h2>

                    <ul>
                        <h2 className='mb-3 tracking-wide'>QUICK LINKS</h2>
                        <ul className='flex flex-col gap-2'>
                            <li className='text-foreground/60 hover:text-foreground'> <Link href={'/'}>Home</Link></li>
                            <li className='text-foreground/60 hover:text-foreground'> <Link href={'/ideas'}>Ideas</Link></li>
                            <li className='text-foreground/60 hover:text-foreground'><Link href={'/add-ideas'}>Add Ideas</Link></li>
                            <li className='text-foreground/60 hover:text-foreground'><Link href={'/my-ideas'}>My Ideas</Link></li>
                            <li className='text-foreground/60 hover:text-foreground'><Link href={'/my-interactions'}>My Interactions</Link></li>
                        </ul>
                    </ul>

                    <div>
                        <h3 className=" mb-3 tracking-wide">SUPPORT</h3>
                        <ul className="space-y-2">
                            <li className="text-foreground/60 hover:text-foreground cursor-pointer">Help Center</li>
                            <li className="text-foreground/60 hover:text-foreground cursor-pointer">
                                Terms of Service
                            </li>
                            <li className="text-foreground/60 hover:text-foreground cursor-pointer">
                                Privacy Policy
                            </li>
                        </ul>
                    </div>

                    <ul>
                        <h2 className='mb-3 tracking-wide'>CONTACT US</h2>
                        <li className='text-foreground/60 '>info@sparknest.com</li>
                        <li className='text-foreground/60 '>786 901 1622</li>
                    </ul>

                </div>

                <div className="border-t border-foreground/20 mt-12 pt-6 flex flex-col md:flex-row justify-around items-center gap-4">
                    <p className="text-sm">
                        © 2026 SparkNest. All rights reserved.
                    </p>

                    <div className='flex justify-between items-center gap-6 md:gap-10'>
                        <Link href={'#'}>
                            <div className='w-8 h-8 font-medium bg-foreground/10 hover:bg-foreground/30 transition-all duration-300 text-foreground/60 rounded-full flex justify-center items-center'>X</div>
                        </Link>
                        <Link href={'#'}>
                            <div className='w-8 h-8 font-medium bg-foreground/10 hover:bg-foreground/30 transition-all duration-300 text-foreground/60 rounded-full flex justify-center items-center'>f</div>
                        </Link>
                        <Link href={'#'}>
                            <div className='w-8 h-8 font-medium bg-foreground/10 hover:bg-foreground/30 transition-all duration-300 text-foreground/60 rounded-full flex justify-center items-center'>in</div>
                        </Link>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
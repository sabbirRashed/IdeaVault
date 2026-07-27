import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import Home from './page';
import { BiCompass } from 'react-icons/bi';

const notFoundPage = () => {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4">

            <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-(--color-primary)/10 blur-3xl" />
            <div className="absolute bottom-0 -right-24 h-80 w-80 rounded-full bg-(--color-secondary)/10 blur-3xl" />

            <div className="relative text-center max-w-md">

                <div className="relative inline-block">
                    <h1 className="font-sora text-8xl md:text-9xl font-bold  leading-none">
                        4
                        <span className="relative inline-block text-(--color-primary)">
                            0
                            <span
                                className="absolute -top-3 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full
                           bg-(--color-accent) animate-bounce"
                            />
                        </span>
                        4
                    </h1>
                </div>

                <h2 className="mt-4 text-xl md:text-2xl font-semibold font-sora ">
                    This idea hasn&apose;t sparked yet
                </h2>
                <p className="mt-3 text-sm md:text-base text-(--color-text)/60">
                    The page you&apose;re looking for doesn&apose;t exist, may have been moved, or the idea
                    behind it is still waiting to be born.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link href="/">
                        <Button
                            startContent={<Home size={18} />}
                            className="font-semibold w-full sm:w-auto rounded-full bg-(--color-primary)"
                        >
                            Back to Home
                        </Button>
                    </Link>
                    <Link href="/ideas">
                        <Button
                        variant='outline'
                            startContent={<BiCompass size={18} />}
                            className="font-medium w-full sm:w-auto text-(--color-secondary) rounded-full"
                        >
                            Explore Ideas
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default notFoundPage
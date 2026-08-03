import Image from 'next/image';
import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center min-h-[80vh]'>
            <div className='relative rounded-full p-4 '>

                <div className="absolute inset-0 rounded-full border-2 border-(--color-primary)/40 animate-ping" />
                <div className="absolute inset-0 rounded-full border-2 border-(--color-primary)/30 animate-ping [animation-delay:0.3s]" />

                <Image src={'/assets/updateLogo.png'}
                    alt='spinnerLogo'
                    width={40}
                    height={40}></Image>
            </div>
        </div>
    );
};

export default LoadingSpinner;
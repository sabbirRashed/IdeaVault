import Image from 'next/image';
import React from 'react';

const SpinnerForClientCompo = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='relative rounded-full p-3 md:p-4 '>

                <div className="absolute inset-0 rounded-full border-2 border-(--color-primary)/40 animate-ping" />
                <div className="absolute inset-0 rounded-full border-2 border-(--color-primary)/30 animate-ping [animation-delay:0.3s]" />

                <Image src={'/assets/updateLogo.png'}
                    alt='spinnerLogo'
                    width={40}
                    height={40}
                    className='h-6 w-6 md:h-10 md:w-10'></Image>
            </div>
        </div>
    );
};

export default SpinnerForClientCompo;
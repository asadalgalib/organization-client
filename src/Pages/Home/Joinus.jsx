import React from 'react';
import tree from '../../assets/Plant-tree.jpg'

const Joinus = () => {
    return (
        <div className='xl:px-20 lg:px-12 py-12 lg:py-20 md:px-10 px-4 grid grid-cols-1 lg:grid-cols-2 items-center justify-center xl:gap-20 lg:gap-10 gap-5'>
            <div className=''>
                <img src={tree} className='w-full h-full' alt="" />
            </div>
            <div className='flex flex-col items-start justify-center'>
                <h1 className='text-2xl lg:text-3xl xl:text-5xl font-semibold text-black dark:text-white'>What will you do for nature? Choose an activity and join us to build a better world!</h1>
                <p className='text-black dark:text-white mt-5'>Every action counts. Whether you spread awareness, adopt sustainable habits, or support conservation efforts, you can be part of the solution. Together, we can protect our planet for future generations.</p>
                <div className='flex items-center justify-start gap-5 mt-4 md:mt-8 lg:mt-12 xl:mt-10'>
                <button className='px-6 py-[8px] mt-2 bg-accent rounded text-white font-medium'>Join as Donor</button>
                <button className='px-6 py-[8px] mt-2 bg-primary rounded text-white font-medium'>Join as Volunteer </button>
                </div>
            </div>
        </div>
    );
};

export default Joinus;
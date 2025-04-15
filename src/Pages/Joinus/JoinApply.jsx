import React from 'react';

const JoinApply = () => {
    return (
        <div className='min-h-[calc(100vh-72px)] bg-slate-100 flex items-center justify-center'>
            <div className='p-5 lg:p-10 bg-drawerDarkBg text-white'>
                <h1 className='text-2xl lg:3xl xl:text-4xl font-semibold text-center'>Apply Now</h1>
                <div className='flex items-center justify-start gap-5 mt-4'>
                    <button className='px-6 py-[8px] mt-2 bg-accent rounded text-white font-medium'>Join as Donor</button>
                    <button className='px-6 py-[8px] mt-2 bg-primary rounded text-white font-medium'>Join as Volunteer </button>
                </div>
            </div>
        </div>
    );
};

export default JoinApply;
import React from 'react';
import Marquee from "react-fast-marquee";
import microsoft from '../../assets/microsoft.png'
import cocacola from '../../assets/coca-cola.png'

const Partner = () => {
    return (
        <div className='text-black dark:text-white xl:px-20 lg:px-12 pb-12 lg:pb-20 md:px-10 px-4'>
            <div>
                <h1
                    className='text-2xl lg:text-3xl xl:text-5xl text-center font-semibold text-black dark:text-white uppercase'
                >
                    Our Partners
                </h1>
            </div>
            <div className='mt-5 lg:mt-10'>
                <Marquee>
                    <div className='flex items-center justify-around gap-20'>

                        <div
                            className='w-60 flex flex-col items-center text-white dark:text-black'
                        >
                            <div>
                                <img
                                    src={microsoft}
                                    alt=""
                                    className='w-16 h-16'
                                />
                            </div>
                            <h1 className='text-black dark:text-white text-xl font-semibold'>Microsoft</h1>
                        </div>

                        <div
                            className='w-60 flex flex-col items-center text-white dark:text-black'
                        >
                            <div>
                                <img
                                    src={cocacola}
                                    alt=""
                                    className='w-16 h-16'
                                />
                            </div>
                            <h1 className='text-black dark:text-white text-xl font-semibold'>Coca-Cola</h1>
                        </div>

                        <div  className='w-60 flex flex-col items-center text-white dark:text-black'>
                        <div>
                                <img
                                    src={cocacola}
                                    alt=""
                                    className='w-16 h-16'
                                />
                            </div>
                            <h1 className='text-black dark:text-white text-xl font-semibold'>Unilever</h1>
                        </div>

                        <div  className='w-60 flex flex-col items-center text-white dark:text-black'>
                        <div>
                                <img
                                    src={cocacola}
                                    alt=""
                                    className='w-16 h-16'
                                />
                            </div>
                            <h1 className='text-black dark:text-white text-xl font-semibold'>Nestlé</h1>
                        </div>

                        <div  className='w-60 flex flex-col items-center text-white dark:text-black'>
                        <div>
                                <img
                                    src={cocacola}
                                    alt=""
                                    className='w-16 h-16'
                                />
                            </div>
                            <h1 className='text-black dark:text-white text-xl font-semibold'>Tata Group</h1>
                        </div>

                        <div  className='w-60 flex flex-col items-center text-white dark:text-black'>
                        <div>
                                <img
                                    src={cocacola}
                                    alt=""
                                    className='w-16 h-16'
                                />
                            </div>
                            <h1 className='text-black dark:text-white text-xl font-semibold'>Apple</h1>
                        </div>

                        <div  className='w-60 flex flex-col items-center text-white dark:text-black'>
                        <div>
                                <img
                                    src={cocacola}
                                    alt=""
                                    className='w-16 h-16'
                                />
                            </div>
                            <h1 className='text-black dark:text-white text-xl font-semibold'>Bajaj</h1>
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>
    )
}

export default Partner;
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Link, useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className='h-[70vh] lg:h-[90vh] flex items-center'>
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                loop={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="bg-slide1 flex items-center justify-center lg:justify-end px-4 h-[70vh] lg:h-[90vh] lg:px-32 bg-cover bg-center">
                        <div className="flex items-center justify-center lg:justify-end gap-10">
                            <div className='flex-1 p-5 lg:p-10 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded bg-black bg-opacity-45 text-white'>
                                <h1 className='text-2xl lg:text-4xl font-semibold max-w-lg text-white'>Try and leave this world a little better than you found it.</h1>
                                <p className='text-lg lg:text-xl font-semibold'><i>- Lord Baden-Powell</i></p>
                                <p className='mt-2 text-white'>Every action we take shapes the future of our planet. A small step—reducing waste, saving energy, or planting a tree—can spark a wave of change. When we choose sustainability, we protect nature and secure a greener world for generations to come. The earth gives us life; let’s give it a future
                                </p>
                                <button onClick={()=>navigate('/joinus')} className='px-6 py-[8px] mt-2 bg-accent rounded text-white font-medium'>Join us Today</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-slide2 flex items-center justify-center lg:justify-start px-4 h-[70vh] lg:h-[90vh] lg:px-32 bg-cover bg-center">
                        <div className="flex items-center justify-center lg:justify-start gap-10">
                            <div className='flex-1 p-5 lg:p-10 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded bg-black bg-opacity-45 text-white'>
                                <h1 className='text-2xl lg:text-4xl font-semibold max-w-lg text-white'>The greatest threat to our planet is the belief that someone else will save it.</h1>
                                <p className='text-lg lg:text-xl font-semibold'><i>- Robert Swan</i></p>
                                <p className='mt-2 text-white'>Climate change is a global issue, but the solution starts with us. Waiting for others to act only delays progress. Every small effort—reducing plastic, conserving water, and supporting sustainability—adds up to a collective impact. The responsibility lies with each of us to protect our planet before it’s too late.
                                </p>
                                <button onClick={()=>navigate('/joinus')} className='px-6 py-[8px] mt-2 bg-accent rounded text-white font-medium'>Join us Today</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-slide3 flex items-center justify-center lg:justify-end px-4 h-[70vh] lg:h-[90vh] lg:px-32 bg-cover bg-center">
                        <div className="flex items-center justify-center lg:justify-end gap-10">
                            <div className='flex-1 p-5 lg:p-10 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded bg-black bg-opacity-45 text-white'>
                                <h1 className='text-2xl lg:text-4xl font-semibold max-w-lg text-white'>We do not inherit the earth from our ancestors; we borrow it from our children.</h1>
                                <p className='text-lg lg:text-xl font-semibold'><i>- Native American Proverb</i></p>
                                <p className='mt-2 text-white'>The earth is not just ours to use—it belongs to future generations too. Our actions today will determine the quality of life for those who come after us. By choosing eco-friendly habits, preserving nature, and reducing pollution, we ensure that our children inherit a cleaner, healthier world.
                                </p>
                                <button onClick={()=>navigate('/joinus')} className='px-6 py-[8px] mt-2 bg-accent rounded text-white font-medium'>Join us Today</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-slide4 flex items-center justify-center lg:justify-start px-4 h-[70vh] lg:h-[90vh] lg:px-32 bg-cover bg-center">
                        <div className="flex items-center justify-center lg:justify-start gap-10">
                            <div className='flex-1 p-5 lg:p-10 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded bg-black bg-opacity-45 text-white'>
                                <h1 className='text-2xl lg:text-4xl font-semibold max-w-lg text-white'>What we do today, right now, will have an accumulated effect on all our tomorrows.</h1>
                                <p className='text-lg lg:text-xl font-semibold'><i>- Alexandra Stoddard</i></p>
                                <p className='mt-2 text-white'>Every choice we make—big or small—shapes the future of our planet. A single decision, like switching to renewable energy or planting trees, can have lasting effects. The fight against climate change isn’t about massive leaps; it’s about consistent, mindful actions that build a sustainable tomorrow.
                                </p>
                                <button onClick={()=>navigate('/joinus')} className='px-6 py-[8px] mt-2 bg-accent rounded text-white font-medium'>Join us Today</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;
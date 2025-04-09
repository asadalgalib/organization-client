import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination,Mousewheel } from 'swiper/modules';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import lowCarbon from '../../assets/low-carbon.jpg'
import food from '../../assets/food.jpg'
import forest from '../../assets/forest.jpg'
import water from '../../assets/water.jpg'
import ocen from '../../assets/ocen.jpg'
import wild from '../../assets/wild.jpg'

const HowWeWork = () => {
    return (
        <div className='xl:px-20 lg:px-12 pb-12 lg:pb-20 md:px-10 px-4'>
            <div>
                <h1 className='text-2xl lg:text-3xl xl:text-5xl font-semibold text-black dark:text-white'>How we work</h1>
                <p className='max-w-5xl text-left mt-2 text-black dark:text-white'>We are committed to creating a sustainable future where nature and people thrive together. Through education, advocacy, and action, we address the urgent environmental challenges of our time. Our efforts focus on raising awareness, driving change, and inspiring individuals and communities to take meaningful steps toward a greener planet.</p>
            </div>
            <div className='mt-5'>
                <div>
                    <h1 className='text-xl lg:text-2xl xl:text-4xl font-semibold text-black dark:text-white'>Our Goals</h1>
                    <p className='max-w-5xl text-left mt-2 text-black dark:text-white'>To tackle the world's most pressing environmental issues, we focus on six key areas. By working together, we can build a healthier, more sustainable future for generations to come.</p>
                </div>
                <div className='mt-8'>
                    <Swiper
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        grabCursor={true}
                        loop={true}
                        modules={[FreeMode, Pagination,Mousewheel]}
                        mousewheel={{ forceToAxis: true }}
                        speed={800}
                        className="mySwiper"
                        autoplay={{
                            delay: 3000, 
                            disableOnInteraction: false, 
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        <SwiperSlide className='pb-10'>
                            <Card className='dark:bg-[#0a0e15]'>
                                <CardActionArea>
                                    <CardContent>
                                        <div className='h-[425px]'>
                                            <div>
                                                <img src={lowCarbon} alt="" />
                                            </div>
                                            <div className='mt-2'>
                                                <Typography gutterBottom component="div">
                                                    <h1 className='font-semibold text-xl dark:text-white'>Build a Climate-Resilient and Low-Carbon World</h1>
                                                </Typography>
                                                <ul className='list-disc ml-4 mt-2'>
                                                    <Typography variant="body2" className='dark:text-white' sx={{ color: 'text.secondary' }}>
                                                        <li>Advocate for clean energy and sustainable practices.</li>
                                                        <li>Educate communities on climate adaptation and resilience.</li>
                                                        <li>Support policies that drive carbon reduction and environmental protection.</li>
                                                    </Typography>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        </SwiperSlide>

                        <SwiperSlide className='pb-10'>
                            <Card className='dark:bg-[#0a0e15]'>
                                <CardActionArea>
                                    <CardContent>
                                        <div className='h-[425px]'>
                                            <div>
                                                <img src={food} alt="" />
                                            </div>
                                            <div className='mt-2'>
                                                <Typography gutterBottom component="div">
                                                    <h1 className='font-semibold text-xl dark:text-white'>Transform Food Systems for People and the Planet</h1>
                                                </Typography>
                                                <ul className='list-disc ml-4 mt-2'>
                                                    <Typography variant="body2" className='dark:text-white' sx={{ color: 'text.secondary' }}>
                                                        <li>Promote sustainable farming and responsible food production.</li>
                                                        <li>Raise awareness about food waste and eco-friendly diets.</li>
                                                        <li>Encourage plant-based and locally sourced food choices.</li>
                                                    </Typography>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </SwiperSlide>

                        <SwiperSlide className='pb-10'>
                            <Card className='dark:bg-[#0a0e15]'>
                                <CardActionArea>
                                    <CardContent>
                                        <div className='h-[425px]'>
                                            <div>
                                                <img src={forest} alt="" />
                                            </div>
                                            <div className='mt-2'>
                                                <Typography gutterBottom component="div">
                                                    <h1 className='text-xl font-semibold dark:text-white'>Protect and Restore Forests</h1>
                                                </Typography>
                                                <ul className='list-disc ml-4 mt-2'>
                                                    <Typography variant="body2" className='dark:text-white' sx={{ color: 'text.secondary' }}>
                                                        <li>Lead reforestation and afforestation projects.</li>
                                                        <li>Prevent deforestation through advocacy and sustainable solutions.</li>
                                                        <li>Support responsible land management and conservation efforts.</li>
                                                    </Typography>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </SwiperSlide>

                        <SwiperSlide className='pb-10'>
                            <Card className='dark:bg-[#0a0e15]'>
                                <CardActionArea>
                                    <CardContent>
                                        <div className='h-[425px]'>
                                            <div>
                                                <img src={water} alt="" />
                                            </div>
                                            <div className='mt-2'>
                                                <Typography gutterBottom component="div">
                                                    <h1 className='text-xl font-semibold dark:text-white'>Conserve Freshwater Resources and Ecosystems</h1>
                                                </Typography>
                                                <ul className='list-disc ml-4 mt-2'>
                                                    <Typography variant="body2" className='dark:text-white' sx={{ color: 'text.secondary' }}>
                                                        <li>Protect rivers, lakes, and wetlands from pollution.</li>
                                                        <li>Promote responsible water use and conservation.</li>
                                                        <li>Advocate for clean water access and sustainable management.</li>
                                                    </Typography>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </SwiperSlide>

                        <SwiperSlide className='pb-10'>
                            <Card className='dark:bg-[#0a0e15]'>
                                <CardActionArea>
                                    <CardContent>
                                        <div className='h-[425px]'>
                                            <div>
                                                <img src={ocen} alt="" />
                                            </div>
                                            <div className='mt-2'>
                                                <Typography gutterBottom component="div">
                                                    <h1 className='text-xl font-semibold dark:text-white'>Preserve Oceans and Marine Biodiversity</h1>
                                                </Typography>
                                                <ul className='list-disc ml-4 mt-2'>
                                                    <Typography variant="body2" className='dark:text-white' sx={{ color: 'text.secondary' }}>
                                                        <li>Combat plastic pollution and protect marine life.</li>
                                                        <li>Support sustainable fishing and coastal conservation.</li>
                                                        <li>Restore coral reefs and ocean ecosystems.</li>
                                                    </Typography>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </SwiperSlide>

                        <SwiperSlide className='pb-10'>
                            <Card className='dark:bg-[#0a0e15]'>
                                <CardActionArea>
                                    <CardContent>
                                        <div className='h-[425px]'>
                                            <div>
                                                <img src={wild} alt="" />
                                            </div>
                                            <div className='mt-2'>
                                                <Typography gutterBottom component="div">
                                                    <h1 className='text-xl font-semibold dark:text-white'>Protect Wildlife and Natural Habitats</h1>
                                                </Typography>
                                                <ul className='list-disc ml-4 mt-2'>
                                                    <Typography variant="body2" className='dark:text-white' sx={{ color: 'text.secondary' }}>
                                                        <li>Raise awareness about endangered species and biodiversity loss.</li>
                                                        <li>Fight against illegal wildlife trade and habitat destruction.</li>
                                                        <li>Promote wildlife conservation and eco-friendly tourism.</li>
                                                    </Typography>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default HowWeWork;
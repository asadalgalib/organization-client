import React from 'react';
import Banner from '../Pages/Home/Banner';
import Joinus from '../Pages/Home/Joinus';
import HowWeWork from '../Pages/Home/HowWeWork';
import Faq from '../Pages/Home/Faq';

const HomeLayout = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='bg-lightbg dark:bg-darkbgImage bg-cover'>
            <Joinus></Joinus>
            <HowWeWork></HowWeWork>
            <Faq></Faq>
            </div>
        </div>
    );
};

export default HomeLayout;
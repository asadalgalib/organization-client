import React from 'react';
import Banner from '../Pages/Home/Banner';
import Joinus from '../Pages/Home/Joinus';
import HowWeWork from '../Pages/Home/HowWeWork';
import Faq from '../Pages/Home/Faq';
import Partner from '../Pages/Home/Partner';

const HomeLayout = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='bg-lightbg dark:bg-darkbgImage bg-cover'>
            <Joinus></Joinus>
            <HowWeWork></HowWeWork>
            <Faq></Faq>
            <Partner></Partner>
            </div>
        </div>
    );
};

export default HomeLayout;
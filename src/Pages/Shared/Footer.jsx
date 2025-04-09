import React from 'react';
import logo from '../../assets/icons8-earth-planet-64.png'
import { Link } from 'react-router-dom';
import { Facebook, Instagram, X, YouTube } from '@mui/icons-material';

const Footer = () => {

    return (
        <div className='bg-[#0a0e15] xl:px-20 lg:px-12 py-12 lg:py-20 md:px-10 px-4 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            <div className='flex flex-col md:flex-row items-center md:items-start justify-center xl:justify-start gap-3'>
                <div className='flex items-center'>
                    <img src={logo} className='w-12 h-12 lg:w-16 lg:h-16' alt="logo" />
                </div>
                <div className='text-center lg:text-left'>
                    <h1 className='text-xl lg:text-2xl font-semibold '>GREEN PULSE</h1>
                    <p className='mt-2'>1250 24th Street, N.W. <br />
                        Washington, DC 20037</p>
                </div>
            </div>
            <div className='flex items-start justify-center  gap-3'>
                <div>
                    <div>
                        <h1 className='text-lg lg:text-xl font-semibold text-center lg:text-left'>Join US Today to make a better World</h1>
                    </div>
                    <div className='flex items-center justify-start gap-5 mt-4'>
                        <button className='px-6 py-[8px] mt-2 bg-accent rounded text-white font-medium'>Join as Donor</button>
                        <button className='px-6 py-[8px] mt-2 bg-primary rounded text-white font-medium'>Join as Volunteer </button>
                    </div>
                </div>
            </div>
            <div className='flex items-start justify-center gap-3'>
                <div>
                    <h1 className='text-lg lg:text-xl font-semibold '>Quick Links</h1>
                    <ul className='mt-2'>
                        <Link><li className='bg-[#1e283a] px-2 py-[2px] rounded'>Home</li></Link>
                        <Link><li className='bg-[#1e283a] px-2 py-[2px] rounded mt-1'>Events</li></Link>
                        <Link><li className='bg-[#1e283a] px-2 py-[2px] rounded mt-1'>About Us</li></Link>
                        <Link><li className='bg-[#1e283a] px-2 py-[2px] rounded mt-1'>Contact</li></Link>
                        <Link><li className='bg-primary px-2 py-[2px] rounded mt-1'>Login</li></Link>
                    </ul>
                </div>
            </div>
            <div className='flex items-end lg:items-start justify-center'>
                <div>
                    <h1 className='text-lg lg:text-xl font-semibold text-center lg:text-left'>Follow US on</h1>
                    <div className='mt-5 flex items-center justify-center gap-2'>
                        <Facebook sx={{ fontSize: 32 }} />
                        <Instagram sx={{ fontSize: 32 }} />
                        <X sx={{ fontSize: 32 }} />
                        <YouTube sx={{ fontSize: 32 }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
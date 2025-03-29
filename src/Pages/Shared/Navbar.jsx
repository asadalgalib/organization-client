import React from 'react';
import TemporaryDrawer from '../../Components/TemporaryDrawer';
import { NavLink } from 'react-router-dom';
import useTheme from '../../Hooks/useTheme';
import { IoMoon, IoSunnySharp } from 'react-icons/io5';
import logo from '../../assets/icons8-earth-planet-64.png'
import { BiPlus } from 'react-icons/bi';

const Navbar = () => {
    const { theme, controlTheme } = useTheme();

    return (
        <div className='bg-primary'>
            <div className='lg:px-20 px-4 flex items-center justify-between'>
                <div className='flex justify-start items-center gap-8'>
                    <div>
                        <div className='lg:hidden'><TemporaryDrawer></TemporaryDrawer></div>
                        <div className='hidden lg:inline'>
                            <img src={logo} className='w-12 h-12' alt="logo" />
                        </div>
                    </div>
                    <div className='hidden lg:inline'>
                        <ul className='flex items-center gap-2 uppercase font-medium text-white'>
                            <NavLink to={'/'} className='pt-6 pb-4 px-4 border-b-8 border-transparent hover:border-accent'><li>Home</li></NavLink>
                            <NavLink className='pt-6 pb-4 px-4 border-b-8 border-transparent hover:border-accent'><li>Events</li></NavLink>
                            <NavLink className='pt-6 pb-4 px-4 border-b-8 border-transparent hover:border-accent'><li>About US</li></NavLink>
                            <NavLink className='pt-6 pb-4 px-4 border-b-8 border-transparent hover:border-accent'><li>Contact</li></NavLink>
                        </ul>
                    </div>
                    

                </div>
                <div className='flex items-center gap-3 py-3'>
                    <button className={`w-40 hidden rounded lg:flex items-center justify-center py-2 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} font-medium`} onClick={controlTheme}>
                        {
                            theme === 'dark' ? <p className='flex items-center gap-2'> Dark Mood <IoMoon className='text-2xl text-yellow-400 ' /></p> :
                                <p className='flex items-center gap-2'> Light Mood <IoSunnySharp className='text-2xl text-yellow-400 ' /></p>
                        }
                    </button>
                    <div className='flex items-center gap-3 '>
                        <button className='px-6 py-2 bg-accent rounded text-white font-medium flex items-center gap-1'>Donate <BiPlus></BiPlus></button>
                        <div>
                            <button className='px-6 py-2 bg-accent rounded text-white font-medium'>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
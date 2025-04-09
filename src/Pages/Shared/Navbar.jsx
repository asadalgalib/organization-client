import React from 'react';
import TemporaryDrawer from '../../Components/TemporaryDrawer';
import { Link, NavLink } from 'react-router-dom';
import useTheme from '../../Hooks/useTheme';
import { IoMoon, IoSunnySharp } from 'react-icons/io5';
import logo from '../../assets/icons8-earth-planet-64.png'
import { BiPlus } from 'react-icons/bi';
import useAuth from '../../Hooks/useAuth';
import AccountMenu from '../../Components/AccountMenu';

const Navbar = () => {
    const { theme, controlTheme } = useTheme();
    const { user, logOutUser } = useAuth()

    return (
        <div className=' top-0 z-50 bg-darkbg bg-opacity-50 w-full'>
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
                <div className='flex items-center gap-2 py-2'>
                    <button className={`w-40 hidden rounded lg:flex items-center justify-center py-[5px] ${theme === 'dark' ? 'bg-darkbg text-white' : 'bg-lightbg text-black'} font-medium`} onClick={controlTheme}>
                        {
                            theme === 'dark' ? <p className='flex items-center gap-2'> Dark Mood <IoMoon className='text-2xl text-yellow-400 ' /></p> :
                                <p className='flex items-center gap-2'> Light Mood <IoSunnySharp className='text-2xl text-yellow-400 ' /></p>
                        }
                    </button>
                    <div className='flex items-center gap-2 '>
                        <button className='px-6 py-[5px] bg-accent rounded text-white font-medium flex items-center gap-1'>Donate <BiPlus></BiPlus></button>
                        <div>
                            {
                                user ?
                                    <AccountMenu />
                                    :
                                    <Link to={'/login'}>
                                        <button className='px-6 py-[5px] bg-primary rounded text-white font-medium'>Login</button>
                                    </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
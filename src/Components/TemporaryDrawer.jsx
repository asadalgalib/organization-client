import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import useCustomTheme from '../Hooks/useCustomTheme';
import { IoMoon, IoSunnySharp } from 'react-icons/io5';
import logo from '../assets/icons8-earth-planet-64.png'
import { useNavigate } from 'react-router-dom';
import { ContactMail, Event, Home, Info } from '@mui/icons-material';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const { theme, controlTheme } = useCustomTheme();
  const navigate = useNavigate()

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const routes = [
    {
      id: 1,
      text: 'Home',
      path: '/',
      icon: <Home />
    },
    {
      id: 2,
      text: 'Events',
      path: '/events',
      icon: <Event />
    },
    {
      id: 3,
      text: 'About Us',
      path: '/about',
      icon: <Info />
    },
    {
      id: 4,
      text: 'Contact',
      path: '/contact',
      icon: <ContactMail />
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} className='dark:bg-drawerDarkBg dark:text-white h-full' role="presentation" onClick={toggleDrawer(false)}>
      <div className='h-[64px] bg-primary pl-4 flex items-center justify-start gap-2'>
        <img src={logo} className='w-10 h-10' alt="logo" />
        <h1 className='text-white font-medium uppercase'>Green pulse</h1>
      </div>
      <List>
        {routes.map((route) => (
          <ListItem key={route.id} disablePadding>
            <ListItemButton onClick={()=>navigate(route.path)}>
              <ListItemIcon className='dark:text-white'>
                {route.icon}
              </ListItemIcon>
              <ListItemText primary={route.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <div>
        <button className={`w-full border-t border-b pl-4 flex items-center justify-start py-2 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} font-medium`} onClick={controlTheme}>
          {
            theme === 'dark' ? <p className='flex items-center gap-2'> Dark Mood <IoMoon className='text-2xl text-yellow-400 ' /></p> :
              <p className='flex items-center gap-2'> Light Mood <IoSunnySharp className='text-2xl text-yellow-400 ' /></p>
          }
        </button>
      </div>
    </Box>
  );

  return (
    <div>
      <button onClick={toggleDrawer(true)}>
        <FormatAlignLeftIcon style={{ fontSize: "32px" }} className='dark:text-white text-black' />
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useMediaQuery } from '@mui/material';
import logo from '../assets/icons8-earth-planet-64.png'
import { ContactMail, Event, Home, Info, ListAlt, Money, MoneyOff, MoneyOffCsredRounded, MoneyRounded, MoneySharp, MoneyTwoTone, VolunteerActivism, WalletSharp } from '@mui/icons-material';
import { Outlet, useNavigate } from 'react-router-dom';
import useCustomTheme from '../Hooks/useCustomTheme';
import { IoMoon, IoSunnySharp } from 'react-icons/io5';
import useAuth from '../Hooks/useAuth';
import AccountMenu from '../Components/AccountMenu';
import { BiSolidUser, BiStats } from 'react-icons/bi';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': closedMixin(theme),
                },
            },
        ],
    }),
);

const adminRoutes = [
    {
        id: 1,
        text: 'Stats',
        path: '/stats',
        icon: <BiStats className='text-2xl' />
    },
    {
        id: 2,
        text: 'Add Event',
        path: '/addevents',
        icon: <Event />
    },
    {
        id: 3,
        text: 'All Events',
        path: '/addevents',
        icon: <ListAlt />
    },
    {
        id: 4,
        text: 'Donors',
        path: '/donor',
        icon: <WalletSharp />
    },
    {
        id: 5,
        text: 'Volunteers',
        path: '/contact',
        icon: <VolunteerActivism />
    },
    {
        id: 6,
        text: 'All User',
        path: '/dashboard/admin/user',
        icon: <BiSolidUser className='text-2xl' />
    },
    {
        id: 7,
        text: 'Back to Home',
        path: '/',
        icon: <Home />
    },
];

export default function Dashboardlayout() {
    const theme = useTheme();
    const { theme: customTheme, controlTheme } = useCustomTheme();
    const navigate = useNavigate()
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
    const [open, setOpen] = React.useState(isLargeScreen);
    const isAdmin = true;
    const { user } = useAuth()

    React.useEffect(() => {
        setOpen(isLargeScreen);
    }, [isLargeScreen]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }} className='dark:bg-darkbg min-h-screen'>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar className='bg-accent w-full'>
                    <div className='flex items-center justify-start'>
                        <div>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={[
                                    {
                                        marginRight: 5,
                                    },
                                    open && { display: 'none' },
                                ]}
                            >
                                <MenuIcon />
                            </IconButton>
                        </div>
                        <div className='flex items-center justify-between'>
                            {
                                !open &&
                                <div className='pl-4 flex items-center justify-start gap-2'>
                                    <img src={logo} className='w-10 h-10' alt="logo" />
                                    <h1 className='text-white font-medium uppercase'>Green pulse</h1>
                                </div>
                            }
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open} >
                <div className='dark:bg-drawerDarkBg min-h-screen dark:text-white'>
                    <DrawerHeader className='bg-primary mx-0 text-white h-[56px] lg:h-[64px] flex items-center justify-between gap-2'>
                        <div className='pl-4 flex items-center justify-start gap-2'>
                            <img src={logo} className='w-10 h-10' alt="logo" />
                            <h1 className='text-white font-medium uppercase'>Green pulse</h1>
                        </div>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon className='text-white' /> : <ChevronLeftIcon className='text-white' />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    {
                        isAdmin &&
                        <List>
                            {
                                adminRoutes?.map((route) => (
                                    <ListItem key={route.id} disablePadding sx={{ display: 'block' }}>
                                        <ListItemButton
                                            onClick={() => navigate(route.path)}
                                            sx={[
                                                {
                                                    minHeight: 48,
                                                    px: 2.5,
                                                },
                                                open
                                                    ? {
                                                        justifyContent: 'initial',
                                                    }
                                                    : {
                                                        justifyContent: 'center',
                                                    },
                                            ]}
                                        >
                                            <ListItemIcon
                                                className='dark:text-white'
                                                sx={[
                                                    {
                                                        minWidth: 0,
                                                        justifyContent: 'center',
                                                    },
                                                    open
                                                        ? {
                                                            mr: 3,
                                                        }
                                                        : {
                                                            mr: 'auto',
                                                        },
                                                ]}
                                            >
                                                {route.icon}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={route.text}
                                                sx={[
                                                    open
                                                        ? {
                                                            opacity: 1,
                                                        }
                                                        : {
                                                            opacity: 0,
                                                        },
                                                ]}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                ))
                            }
                        </List>
                    }
                    {
                        user &&
                        <div className='mb-3 flex items-center gap-3'>
                            <AccountMenu />
                            <p>{user.displayName}</p>
                        </div>
                    }
                    <Divider />
                    {
                        open &&
                        <div>
                            <button className={`w-full border-t border-b pl-4 flex items-center justify-start py-2 ${customTheme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} font-medium`} onClick={controlTheme}>
                                {
                                    customTheme === 'dark' ? <p className='flex items-center gap-2'> Dark Mood <IoMoon className='text-2xl text-yellow-400 ' /></p> :
                                        <p className='flex items-center gap-2'> Light Mood <IoSunnySharp className='text-2xl text-yellow-400 ' /></p>
                                }
                            </button>
                        </div>
                    }
                </div>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1}} className='dark:bg-darkbg min-h-screen pt-16'>
                <Outlet />
            </Box>
        </Box>
    );
}

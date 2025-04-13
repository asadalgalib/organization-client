import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import useAuth from '../Hooks/useAuth';
import { Dashboard } from '@mui/icons-material';
import Swal from 'sweetalert2';
import { Link, useLocation } from 'react-router-dom';

export default function AccountMenu() {
    const { user, logOutUser } = useAuth()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const location = useLocation();
    console.log(location.pathname);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I want!"
        }).then((result) => {
            if (result.isConfirmed) {
                setAnchorEl(null);
                logOutUser()
                Swal.fire({
                    title: "Logout!",
                    text: "You has been Logged Out!.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
            >
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 1 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 36, height: 36 }}>
                            <img src={user?.photoURL} alt="" />
                        </Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            bgcolor: () =>
                                document.documentElement.classList.contains('dark')
                                && '#131618',
                            color: () =>
                                document.documentElement.classList.contains('dark')
                                && '#fff',
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <Avatar sx={{ width: 24, height: 24 }}>
                        <img src={user?.photoURL} alt="" />
                    </Avatar> <span className='ml-2'>My Profile</span>
                </MenuItem>
                <Divider />
                {
                    location.pathname !== '/dashboard' &&
                    <Link to={'/dashboard/admin/user'}>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <Dashboard fontSize="small" className='dark:text-white' />
                            </ListItemIcon>
                            Dashboard
                        </MenuItem>
                    </Link>
                }
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small" className='dark:text-white' />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}

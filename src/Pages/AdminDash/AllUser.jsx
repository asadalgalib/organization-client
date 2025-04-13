import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, CircularProgress } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#4CAF50',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.white,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const AllUser = () => {
    const axiosSecure = useAxiosSecure();
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const feching = async () => {
            const res = await axiosSecure.get('/users');
            setUserData(res.data);
        }
        feching()
    }, [])

    if(!userData){
        return (
            <Box sx={{ display: 'flex' }}>
              <CircularProgress className='text-accent' />
            </Box>
          );
    }
    return (
        <div className='xl:px-20 lg:px-12 py-6 lg:py-12 md:px-10 px-2 flex items-center justify-center'>
            <TableContainer
                component={Paper}
                sx={{
                    maxWidth: { xs: 320, lg: '100%' },
                    overflowX: 'scroll'
                }}
            >
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead > 
                        <TableRow sx={{ backgroundColor: '#44a75d' }}>
                            <StyledTableCell>Photo</StyledTableCell>
                            <StyledTableCell align="left">User Name</StyledTableCell>
                            <StyledTableCell align="left">Email</StyledTableCell>
                            <StyledTableCell align="left">Role</StyledTableCell>
                            <StyledTableCell align="left">Promote/Demote</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className='dark:bg-drawerDarkBg'>
                        {userData?.map((user) => (
                            <StyledTableRow  key={user._id}>
                                <StyledTableCell component="th" scope="row">
                                    <img src={user.authorImage} className='w-12 h-12 rounded-full' alt="" />
                                </StyledTableCell>
                                <StyledTableCell align="left"><p className='dark:text-white'>{user.name}</p></StyledTableCell>
                                <StyledTableCell align="left"><p className='dark:text-white'>{user.email}</p></StyledTableCell>
                                <StyledTableCell align="left"><p className='dark:text-white'></p></StyledTableCell>
                                <StyledTableCell align="left">
                                    <button className='bg-accent px-6 py-2 text-white font-semibold'>Make Admin</button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AllUser;
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
import Progress from '../../Components/Progress';

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
    const [dataLoading, setDataLoading] = useState(true);

    useEffect(() => {
        const feching = async () => {
            const res = await axiosSecure.get('/users');
            setUserData(res.data);
            setDataLoading(false);
        }
        feching()
    }, [])

    if (dataLoading) {
        return <div className='flex items-center justify-center min-h-[calc(100vh-64px)]'><Progress></Progress></div>
    }
    return (
        <div className='xl:px-20 lg:px-12 py-6 lg:py-12 md:px-10 px-2 flex items-center justify-center'>
            <TableContainer
                component={Paper}
                sx={{
                    maxWidth: "80vw",
                    overflowX: 'scroll'
                }}
            >
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead >
                        <TableRow sx={{ backgroundColor: '#44a75d', fontWeight: 600 }}>
                            <StyledTableCell>Photo</StyledTableCell>
                            <StyledTableCell align="left">User Name</StyledTableCell>
                            <StyledTableCell align="left">Email</StyledTableCell>
                            <StyledTableCell align="left">Role</StyledTableCell>
                            <StyledTableCell align="left">Promote/Demote</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className='dark:bg-drawerDarkBg'>
                        {userData?.map((user) => (
                            <StyledTableRow key={user._id}>
                                <StyledTableCell component="th" scope="row">
                                    <div className='rounded-full'>
                                        <img src={user.authorImage} className='w-12 h-12' alt="" />
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell align="left"><p className='dark:text-white'>{user.name}</p></StyledTableCell>
                                <StyledTableCell align="left"><p className='dark:text-white'>{user.email}</p></StyledTableCell>
                                <StyledTableCell align="left"><p className='dark:text-white'>{user.role ? user.role : "N/A"}</p></StyledTableCell>
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
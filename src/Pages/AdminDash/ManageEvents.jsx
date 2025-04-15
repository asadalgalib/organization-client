import React from 'react';
import useAllEvents from '../../Hooks/useAllEvents';
import {
    ArrowRight,
    Delete,
    Update
} from '@mui/icons-material';
import {
    Paper,
    styled,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
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

const ManageEvents = () => {
    const [allEvent, isLoading, error, refetch] = useAllEvents();

    if (isLoading) {
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
                            <StyledTableCell align="left">Title</StyledTableCell>
                            <StyledTableCell align="left">Contact Email</StyledTableCell>
                            <StyledTableCell align="left">Date</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className='dark:bg-drawerDarkBg'>
                        {allEvent?.map((event) => (
                            <StyledTableRow key={event._id}>
                                <StyledTableCell component="th" scope="row">
                                    <div className='rounded-full'>
                                        <img src={event.eventImage} className='w-12 h-12' alt="" />
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell align="left"><p className='dark:text-white'>{event.title}</p></StyledTableCell>
                                <StyledTableCell align="left"><p className='dark:text-white'>{event.contactEmail}</p></StyledTableCell>
                                <StyledTableCell align="left"><p className='dark:text-white'>{event.date}</p></StyledTableCell>
                                <StyledTableCell align="left">
                                    <div className='flex items-center justify-center gap-2'>
                                        <button className='bg-primary px-6 py-2 text-white font-semibold'>View <ArrowRight /> </button>
                                        <button className='bg-accent px-6 py-2 text-white font-semibold'>Update <Update />  </button>
                                        <button className='bg-red-600 px-6 py-2 text-white font-semibold'>Delete <Delete />  </button>
                                    </div>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageEvents;
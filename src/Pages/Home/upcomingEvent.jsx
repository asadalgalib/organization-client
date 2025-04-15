import React from 'react';
import useAllEvents from '../../Hooks/useAllEvents';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const UpcomingEvent = () => {
    const [allEvent, isLoading, error, refetch] = useAllEvents()

    return (
        <div className='xl:px-20 lg:px-12 pt-12 lg:pt-20 md:px-10 px-4'>
            <div>
                <h1 className='text-5xl text-center font-semibold mb-8'>Upcoming Events</h1>
            </div>
            <div className='grid grid-cols-4 gap-5 items-center justify-center'>
                {
                    allEvent?.map(event => <div>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={event.eventImage}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                       {event.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {event.description}
                                    </Typography>
                                    <div>
                                    <button className='px-6 py-[8px] mt-2 bg-accent rounded text-white font-medium'>Learn More</button>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UpcomingEvent;
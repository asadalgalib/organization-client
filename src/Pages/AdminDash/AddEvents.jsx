import { Button, FormControl, InputLabel, OutlinedInput, styled, TextField } from '@mui/material';
import React, { useState } from 'react';
import useCustomTheme from '../../Hooks/useCustomTheme';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import DatePickerValue from '../../Components/DatePickerValue';
import { Upload } from '@mui/icons-material';
import axios from 'axios';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddEvents = () => {
    const { register,reset, handleSubmit, formState: { errors } } = useForm();
    const { theme } = useCustomTheme();
    const [dateValue, setDateValue] = useState(dayjs());
    const [uploadedPhoto, setUploadedPhoto] = useState('');
    const [photoError, setPhotoError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [changed,setChanged] = useState(false)
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    let eventImage;

    const VisuallyHiddenInput = styled('input')({
        display: 'none',
    });

    const onSubmit = async (eventData) => {
        if (!uploadedPhoto) {
            return setPhotoError(true);
        }
        if (!changed) {
            return setDateError(true);
        }

        if (uploadedPhoto.length > 0) {
            const imageFile = { image: uploadedPhoto[0] }
            const res = await axios.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            eventImage = res.data.data.display_url;
        }

        const dateTime = dateValue.$d;
       
        const date = dayjs(dateValue).format('YYYY-MM-DD');
        const time = dayjs(dateValue).format('h:mm A');
        const category = 'Upcoming';

        const { title, location, contactEmail, sponsoredBy, participants, description } = eventData;

        const allData = {category, eventImage, title, location, contactEmail, sponsoredBy, participants, description, dateTime, date, time };
        console.log(allData);

        axiosSecure.post('/addevents', allData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Event created Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    reset();
                    navigate('/dashboard/admin/allevents');
                }
            })
            .catch(err =>{
                toast.error(err.code)
            })

    }

    return (
        <div className='xl:px-20 lg:px-12 py-6 lg:py-12 md:px-10 px-2 flex items-start md:items-center justify-center min-h-[calc(100vh-64px)]'>
            <div className='bg-drawerDarkBg p-5 lg:p-10 rounded'>
                <div className='mb-4'>
                    <h1 className='lg:text-3xl text-2xl text-white font-semibold text-center'>Create an Event</h1>
                </div>
                <div className="w-full max-w-xl">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center'>
                            <div className='grid grid-cols-1 gap-4'>
                                <div>
                                    <TextField
                                        className='w-full text-black dark:text-white'
                                        label="Title"
                                        id="outlined-start-adornment"
                                        InputProps={{
                                            sx: {
                                                color: theme === 'dark' && 'white',
                                                '& input': {
                                                    color: 'white',
                                                },
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'white',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'white',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'white',
                                                },
                                            },
                                        }}
                                        InputLabelProps={{
                                            sx: {
                                                color: 'white',
                                            },
                                        }}
                                        {...register('title',
                                            {
                                                required: 'Name is required',
                                            })}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        className='w-full text-black dark:text-white'
                                        label="Location"
                                        id="outlined-start-adornment"
                                        InputProps={{
                                            sx: {
                                                color: theme === 'dark' && 'white',
                                                '& input': {
                                                    color: 'white',
                                                },
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'white',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'white',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'white',
                                                },
                                            },
                                        }}
                                        InputLabelProps={{
                                            sx: {
                                                color: 'white',
                                            },
                                        }}
                                        {...register('location',
                                            {
                                                required: 'Location is required',
                                            })}
                                    />
                                </div>
                                <div>
                                    <DatePickerValue
                                        dateValue={dateValue}
                                        setDateValue={setDateValue}
                                        setDateError={setDateError}
                                        setChanged={setChanged}
                                    />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 gap-4'>
                                <div>
                                    <FormControl className='w-full' variant="outlined">
                                        <InputLabel
                                            htmlFor="outlined-adornment-password"
                                            sx={{ color: 'white' }}
                                        >
                                            Contact Email
                                        </InputLabel>
                                        <OutlinedInput
                                            className="text-white rounded"
                                            id="outlined-adornment-password"
                                            type={'text'}
                                            label="Contact Email"
                                            sx={{
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'white',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'white',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'white',
                                                },
                                                '& input': {
                                                    color: 'white',
                                                },
                                            }}
                                            inputProps={{
                                                style: {
                                                    color: 'white',
                                                },
                                            }}
                                            {...register('contactEmail', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                    message: 'Enter a valid email address',
                                                },
                                            })}
                                        />
                                    </FormControl>
                                </div>
                                <div>
                                    <TextField
                                        className='w-full text-black dark:text-white'
                                        label="Sponsored by"
                                        id="outlined-start-adornment"
                                        InputProps={{
                                            sx: {
                                                color: theme === 'dark' && 'white',
                                                '& input': {
                                                    color: 'white',
                                                },
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'white',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'white',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'white',
                                                },
                                            },
                                        }}
                                        InputLabelProps={{
                                            sx: {
                                                color: 'white',
                                            },
                                        }}
                                        {...register('sponsoredBy',
                                            {
                                                required: 'Sponsor is required',
                                            })}
                                    />
                                </div>
                                <div>
                                    <FormControl className='w-full' variant="outlined">
                                        <InputLabel
                                            htmlFor="outlined-adornment-password"
                                            sx={{ color: 'white' }}
                                        >
                                            Participants
                                        </InputLabel>
                                        <OutlinedInput
                                            className="text-white rounded"
                                            id="outlined-adornment-password"
                                            type={'text'}
                                            label="Participants"
                                            sx={{
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'white',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'white',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'white',
                                                },
                                                '& input': {
                                                    color: 'white',
                                                },
                                            }}
                                            inputProps={{
                                                style: {
                                                    color: 'white',
                                                },
                                            }}
                                            {...register('participants', {
                                                required: 'Participants is required',
                                                pattern: {
                                                    value: /^[0-9]+$/,
                                                    message: 'Only numeric values are allowed',
                                                },
                                            })}
                                        />
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <TextField
                                className='w-full text-black dark:text-white'
                                label="Description"
                                id="outlined-start-adornment"
                                InputProps={{
                                    sx: {
                                        color: theme === 'dark' && 'white',
                                        '& input': {
                                            color: 'white',
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'white',
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'white',
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'white',
                                        },
                                    },
                                }}
                                InputLabelProps={{
                                    sx: {
                                        color: 'white',
                                    },
                                }}
                                {...register('description',
                                    {
                                        required: 'Description is required',
                                    })}
                            />
                        </div>
                        <div className='mt-4'>
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                startIcon={<Upload />}
                            >
                                Upload a Photo
                                <VisuallyHiddenInput
                                    type="file"
                                    onChange={(event) => { setUploadedPhoto(event.target.files); setPhotoError(false) }}
                                    multiple
                                />
                            </Button>
                        </div>
                        <div className="form-control mt-5">
                            <button className="bg-accent font-semibold w-full py-3 text-white lg:text-lg rounded-md">Post</button>
                        </div>
                        <div className='my-1'>
                            {errors.title && <span className='flex text-red-500'>Title is required</span>}
                            {photoError ? <span className='flex text-red-500'>Photo is required</span> : ""}
                            {errors.location && <span className='flex text-red-500'>Location is required</span>}
                            {errors.contactEmail && <span className='flex text-red-500'>Email is required</span>}
                            {errors.sponsoredBy && <span className='flex text-red-500'>Sponsore is required</span>}
                            {errors.participants && <span className='flex text-red-500'>Participants is required</span>}
                            {errors.description && <span className='flex text-red-500'>Description is required</span>}
                            {dateError ? <span className='flex text-red-500'>Date is required</span> : ""}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEvents;
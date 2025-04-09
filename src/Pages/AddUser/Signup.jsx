import { Google, Upload, Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useTheme from '../../Hooks/useTheme';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import General from './General';

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, logOutUser, user, setUser } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [uploadedPhoto, setUploadedPhoto] = useState('');
    const [photoError, setPhotoError] = useState(false);
    const { theme } = useTheme();
    let authorImage;
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic()

    const VisuallyHiddenInput = styled('input')({
        display: 'none',
    });

    const onSubmit = async (userData) => {
        if (!uploadedPhoto) {
            return setPhotoError(true);
        }

        if (user) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You are already loged in!",
            });
        }

        if (uploadedPhoto.length > 0) {
            const imageFile = { image: uploadedPhoto[0] }
            console.log(imageFile);
            const res = await axios.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            authorImage = res.data.data.display_url;
        }
        const { name, email, password } = userData;
        console.log(name, email, password, authorImage);

        createUser(userData.email, userData.password)
            .then(result => {
                setUser(result.user);
                updateUserProfile({ displayName: name, photoURL: authorImage });

                axiosPublic.post('/users', { name, email, authorImage })
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Account created Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            logOutUser();
                            navigate('/login');
                        }
                    })
                    .catch(err => {
                        toast.error(err.code);
                    })
            })
            .catch(err => {
                toast.error(err.code);
                console.log(err);
            })

    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };


    return (
        <div className='bg-accent py-20 px-4 min-h-[calc(100vh-50px)] lg:min-h-[calc(100vh-71.55px)] flex items-center justify-center'>
            <div className=' bg-white py-10 px-5 rounded dark:bg-[#0a0e15] max-w-4xl mx-auto flex flex-col items-center justify-center'>
                <div className='mb-2'>
                    <h1 className='lg:text-3xl text-2xl text-black dark:text-white font-semibold text-center'>Create Your Account</h1>
                    <p className='text-black dark:text-white mt-2 text-center'>Use your credentials to access your account.</p>
                </div>
                <div className="w-full max-w-md">
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                        <TextField
                            className='w-full text-black dark:text-white'
                            label="Name"
                            id="outlined-start-adornment"
                            InputProps={{
                                sx: {
                                    color: theme === 'dark' && 'white',
                                    '& input': {
                                        color: theme === 'dark' && 'white',
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: theme === 'dark' ? 'white' : 'black',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: theme === 'dark' ? 'white' : 'black',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: theme === 'dark' ? 'white' : 'black',
                                    },
                                },
                            }}
                            InputLabelProps={{
                                sx: {
                                    color: theme === 'dark' && 'white',
                                },
                            }}
                            {...register('name',
                                {
                                    required: 'Name is required',
                                })}
                        />
                        <FormControl sx={{ mt: 2 }} className='w-full' variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password" className='text-black dark:text-white'>Email</InputLabel>
                            <OutlinedInput
                                className="text-black dark:text-white rounded"
                                id="outlined-adornment-password"
                                type={'text'}
                                label="Email"
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: theme === 'dark' ? 'white' : 'black',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: theme === 'dark' ? 'white' : 'black',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: theme === 'dark' ? 'white' : 'black',
                                    },
                                    color: theme === 'dark' ? 'white' : 'black',
                                }}
                                {...register('email',
                                    {
                                        required: 'Email is required',
                                        pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ }
                                    })}
                            />
                        </FormControl>
                        <FormControl sx={{ mt: 2 }} className='w-full' variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password" className='text-black dark:text-white'>Password</InputLabel>
                            <OutlinedInput
                                className="text-black dark:text-white rounded"
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            onMouseUp={handleMouseUpPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff className='text-black dark:text-white' /> : <Visibility className='text-black dark:text-white' />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: theme === 'dark' ? 'white' : 'black',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: theme === 'dark' ? 'white' : 'black',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: theme === 'dark' ? 'white' : 'black',
                                    },
                                    color: theme === 'dark' ? 'white' : 'black',
                                }}
                                {...register('password',
                                    {
                                        required: 'Password is required',
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/
                                        },
                                    })}
                            />
                        </FormControl>
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
                            <button className="bg-primary font-semibold w-full py-3 text-white text-lg rounded-md">Signup</button>
                        </div>
                        <div className='my-1'>
                            {errors.name && <span className='flex text-red-500'>Name is required</span>}
                            {photoError ? <span className='flex text-red-500'>Photo is required</span> : ""}
                            {errors.email && <span className='flex text-red-500'>Please enter a valid Email</span>}
                            {errors.password && <span className='flex text-red-500'>Password must have an uppercase, a lowercase & at least 6 character long</span>}
                        </div>
                    </form>
                    <div>
                        <div className="flex items-center justify-center my-4 text-black dark:text-white">OR</div>
                        <div className="mt-5">
                            <General></General>
                        </div>
                        <div className='mt-4'>
                            <p className='text-black dark:text-white text-center'>
                                Already have an account?
                                <Link to={'/login'}><span className='text-black dark:text-white p-1 underline font-semibold'>Login here</span></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
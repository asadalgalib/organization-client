import { Google } from '@mui/icons-material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const General = () => {
    const { user, setUser, auth, provider } = useAuth()
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleGoogle = () => {
        if (user) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You are already loged in!",
            });
        }
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user);
                const name = result.user.displayName;
                const email = result.user.email;
                const authorImage = result.user.photoURL
                axiosPublic.post('/users', { name, email, authorImage })
                    .then(res => {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Login Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/')
                    })
                    .catch(err => {
                        toast.error(err.code);
                        console.log(err);
                    })
            })
    }

    return (
        <div>
            <button onClick={handleGoogle} className="bg-accent font-semibold w-full py-3 text-white text-lg rounded-md flex items-center gap-1 justify-center"><Google /> <span>Continue with Google</span></button>
        </div>
    );
};

export default General;
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000"
})

// https://organization-server.vercel.app/

const useAxiosPublic = () => {
    return axiosInstance;
};

export default useAxiosPublic;
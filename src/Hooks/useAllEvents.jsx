import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllEvents = () => {
    const axiosSecure = useAxiosSecure();

    const { data: allEvent, isLoading, error, refetch } = useQuery({
        queryKey: ['allEvent'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allevents');
            return res.data;
        }
    })
    return [allEvent, isLoading, error, refetch];
};

export default useAllEvents;
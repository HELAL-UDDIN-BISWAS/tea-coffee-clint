import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const allCartData = () => {
    const { data: cartDatas=[], refetch, isLoading } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await axios.get('https://tea-coffee-server.vercel.app/cartdata')
            return res.data

        }
    })
    return [refetch, isLoading, cartDatas]

};

export default allCartData;
import { useQuery } from '@tanstack/react-query';

const allCartData = () => {
    const { data: cartDatas, refetch, isLoading } = useQuery({
        queryKey: ['data'],
        queryFn: async () =>
            await fetch('https://tea-coffee-server.vercel.app/cartdata').then(res => res.json())
    })
    return [refetch,isLoading,cartDatas]
   
};

export default allCartData;
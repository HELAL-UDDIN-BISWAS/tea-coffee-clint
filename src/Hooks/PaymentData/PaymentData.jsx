import { useQuery } from "@tanstack/react-query";

const PaymentData = () => {
    const{refetch, isLoading, data:paymentdata = []}=useQuery({
        queryKey:['data'],
        queryFn:async ()=> await fetch('https://tea-coffee-server.vercel.app/userpurchaseproduct')
            .then(res=>res.json())
    
    })
    return [refetch,isLoading,paymentdata]
};

export default PaymentData;
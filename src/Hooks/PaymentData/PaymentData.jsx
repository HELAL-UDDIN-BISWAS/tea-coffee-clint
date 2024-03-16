import { useQuery } from "@tanstack/react-query";

const PaymentData = () => {
    const{refetch, isLoading, data:paymentdata = []}=useQuery({
        queryKey:['data'],
        queryFn:async ()=> await fetch('http://localhost:5000/userpurchaseproduct')
            .then(res=>res.json())
    
    })
    return [refetch,isLoading,paymentdata]
};

export default PaymentData;
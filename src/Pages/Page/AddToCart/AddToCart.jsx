import { useQuery } from "@tanstack/react-query";


const AddToCart = () => {
    const{data:cartData}=useQuery({
        queryKey:['data'],
        queryFn: async()=>
          await fetch('http://localhost:5000/cartdata').then(res=>res.json())
           
    })
    console.log(cartData)

    return (
        <div>
            add to cart
        </div>
    );
};

export default AddToCart;
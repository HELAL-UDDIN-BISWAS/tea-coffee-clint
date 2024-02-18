import { useQuery } from "@tanstack/react-query";

const AllProdect = () => { 
        const {data}=useQuery({
            queryKey:[],
            queryFn:()=>fetch('http://localhost:5000/allproducts')
            .then((res)=>res.json())
            
        })
    console.log(data)
    return (
        <div>
            AllProdect
        </div>
    );
};

export default AllProdect;
import { useQuery } from "@tanstack/react-query";
import Product from "../Product/Product";
import Skeletons from "../../../Components/Skeleton/Skeletons";
import { useState } from "react";

const Prodects = () => {
    const [type,settype]=useState('')
    const {isLoading, data: alldata } = useQuery({
        queryKey: ['type',type],
        queryFn: async() =>{
          const data= await fetch(`https://tea-coffee-server.vercel.app/allproducts?type=${type}`)
          return await data.json()
        }
      
      })
      const types = [
        'Tea',
        'Coffee',
        'Potato'
    ]
      console.log(type)
      if(isLoading == true){
        return <div className="grid max-w-6xl mx-auto lg:grid-cols-3 md:grid-cols-2 md:items-center gap-3 items-center justify-center text-center">
            {
                [1,2,3,4,5,6].map(()=><Skeletons></Skeletons>)
            }
            
        </div>
      }
      console.log(alldata)
    
    return (
        <div className="max-w-6xl mx-auto">
            <div className="my-5 ">
            <select className="border-solid border-2 rounded cursor-pointer border-sky-500 py-2 px-10"
             onChange={(e) => settype(e.target.value)}>
                <option disabled selected>Chose One</option>
                {
                        types.map(pro => <option key={pro}>{pro}</option>)
                    }
             

            </select>
            </div>
            
            <div className="grid  lg:grid-cols-3 md:grid-cols-2 md:items-center w-full mx-auto gap-3 items-center justify-center text-center">
                {
                    alldata?.map(product=><div><Product key={product._id} product={product}></Product>
                    
                      </div>)
                }
            </div>
        </div>
    );
};

export default Prodects;
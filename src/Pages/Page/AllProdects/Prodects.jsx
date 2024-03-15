import { useQuery } from "@tanstack/react-query";
import Product from "../Product/Product";
import Skeletons from "../../../Components/Skeleton/Skeletons";

const Prodects = () => {
    const {isLoading, data: alldata } = useQuery({
        queryKey: ['data'],
        queryFn: async() =>
        await  fetch('http://localhost:5000/allproducts').then((res) =>
            res.json(),
          ),
      })
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
            <div className="grid lg:grid-cols-3 md:grid-cols-2 md:items-center w-full mx-auto gap-3 items-center justify-center text-center">
                {
                    alldata?.map(product=><div><Product key={product._id} product={product}></Product>
                    
                      </div>)
                }
            </div>
        </div>
    );
};

export default Prodects;
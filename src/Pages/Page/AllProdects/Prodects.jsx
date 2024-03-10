import { useQuery } from "@tanstack/react-query";
import Product from "../Product/Product";
const Prodects = () => {
    const { data: alldata } = useQuery({
        queryKey: ['data'],
        queryFn: async() =>
        await  fetch('http://localhost:5000/allproducts').then((res) =>
            res.json(),

          ),
      })
      console.log(alldata)
    
    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 md:grid-cols-1 w-full mx-auto gap-3 items-center justify-center text-center">
                {
                    alldata?.map(product=><div><Product key={product._id} product={product}></Product>
                    
                      </div>)
                }
            </div>
        </div>
    );
};

export default Prodects;
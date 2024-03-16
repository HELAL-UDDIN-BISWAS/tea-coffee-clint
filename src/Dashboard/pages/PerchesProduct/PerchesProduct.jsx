import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Proveider/Proveider";
import { Link } from "react-router-dom";
import { Button } from "keep-react";

const PerchesProduct = () => {
    const{user}=useContext(AuthContext);
    const {data:perchesDatas}=useQuery({
        queryKey: ['data'],
        queryFn: ()=> fetch('http://localhost:5000/userpurchaseproduct')
        .then(res=>res.json())
    })
    const perchesData=perchesDatas?.filter(data=>data?.userEmail === user?.email)
    console.log(perchesData)
    return (
        <div>
           {
            perchesData?.length >=1 ? <div>
            
            <div className="p-2">
                <div className="max-w-screen-md mx-auto">
                    <div className="flex justify-around text-center items-center my-6">
                        <h2>Total Item: </h2>
                        <h2>Total Price</h2>
                        <Link to={"/userpayment"}>
                        <Button className="items-center justify-center " size="md" color="success">PAY NOW</Button>
                        </Link>
                    </div>
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Image</th>
                                <th className="py-2 px-4 border-b">Name</th>
                                <th className="py-2 px-4 border-b">Location</th>
                                <th className="py-2 px-4 border-b">Password</th>
                                 <th className="py-2 px-4 border-b">Product</th>
                                <th className="py-2 px-4 border-b">States</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                perchesData?.map((datas)=><tr key={datas._id}>
                                <td className="py-2 px-4 border-b"><img className="h-10 w-10 rounded" src={datas?.image}></img></td>
                                <td className="py-2 px-4 border-b">{datas?.userName}</td>
                                <td className="py-2 px-4 border-b">{datas?.location}</td>
                                <td className="py-2 px-4 border-b">{datas?.price}</td>
                                <td className="py-2 px-4 border-b">{datas?.type}</td>
                                <td className="py-2 px-4 border-b">pendng</td>
                                
                                
                            </tr>)
                            }                   
                        </tbody>
                    </table>
                </div>
            </div>
            </div>:<div>You Have No Item</div>
           }
        </div>
    );
};

export default PerchesProduct;
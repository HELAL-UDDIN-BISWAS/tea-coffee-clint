import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AllProdect = () => {
   const {refetch, data } = useQuery({
        queryKey: [],
        queryFn: () => fetch('http://localhost:5000/allproducts')
            .then((res) => res.json())
    })
    const deleteData=(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })
            .then((result) => {
              if (result.isConfirmed) {
                fetch(`http://localhost:5000/deleteproduct/${id}`, {
                  method: "DELETE",
                })
                  .then(res => res.json())
                  .then(data => {
                    if (data.deletedCount > 0) {
                      refetch()
                      Swal.fire({
                        title: 'success',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'DELETE'
                      })
                    }
                  })
              }
            });
    }
    console.log(data)
    return (
        <div className="p-2">
            <div className="max-w-screen-md mx-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Image</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Origin</th>
                            <th className="py-2 px-4 border-b">Price</th>
                            <th className="py-2 px-4 border-b">Flavor</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((datas)=><tr>
                            <td className="py-2 px-4 border-b"><img className="h-10 w-10 rounded" src={datas.image_url}></img></td>
                            <td className="py-2 px-4 border-b">{datas.name}</td>
                            <td className="py-2 px-4 border-b">{datas.origin}</td>
                            <td className="py-2 px-4 border-b">{datas.price}</td>
                            <td className="py-2 px-4 border-b">{datas.flavor}</td>
                            <td className="py-2 px-4 border-b">
                                <button className="text-blue-500">Edit</button>
                                <button onClick={()=>deleteData(datas._id)} className="text-red-500 ml-2">Delete</button>
                            </td>
                        </tr>)
                        }                   
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProdect;
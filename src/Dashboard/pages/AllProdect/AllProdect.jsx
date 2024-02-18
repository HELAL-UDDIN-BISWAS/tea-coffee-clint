import { useQuery } from "@tanstack/react-query";

const AllProdect = () => {
    const { data } = useQuery({
        queryKey: [],
        queryFn: () => fetch('http://localhost:5000/allproducts')
            .then((res) => res.json())

    })
    console.log(data)
    return (
        <div className="p-2">
            <div class="max-w-screen-md mx-auto">
                <table class="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th class="py-2 px-4 border-b">ID</th>
                            <th class="py-2 px-4 border-b">Name</th>
                            <th class="py-2 px-4 border-b">Email</th>
                            <th class="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2 px-4 border-b">1</td>
                            <td class="py-2 px-4 border-b">John Doe</td>
                            <td class="py-2 px-4 border-b">john@example.com</td>
                            <td class="py-2 px-4 border-b">
                                <button class="text-blue-500">Edit</button>
                                <button class="text-red-500 ml-2">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProdect;
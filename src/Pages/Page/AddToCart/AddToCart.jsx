import { useQuery } from "@tanstack/react-query";
import {
    ArrowsOutSimple,
    Bed,
    Heart,
    MapPinLine,
    Shower,
    Users,
} from "phosphor-react";
import { Button, Card } from "keep-react";
import { Link } from "react-router-dom";
import {useContext } from "react";
import { AuthContext } from "../../../Proveider/Proveider";
import allCartData from "../../../Components/CartData/allCartData";


const AddToCart = () => {
    const [refetch,isLoading,cartDatas]=allCartData();
    const{user}=useContext(AuthContext);
    // const { data: cartData=[] } = useQuery({
    //     queryKey: ['data'],
    //     queryFn: async () =>
    //         await fetch('https://tea-coffee-server.vercel.app/cartdata').then(res => res.json())
    // })

    const userCartData =cartDatas?.filter(data=>data?.email === user?.email)
    console.log(userCartData)
    console.log(cartDatas)

    return (
        <div className=" max-w-6xl mx-auto items-center justify-center">
           {userCartData? <div className="grid md:grid-cols-2 items-center justify-center gap-3"> {
                userCartData?.map((datas) => <Card key={datas?._id}
                    className="!max-w-xs overflow-hidden rounded-md md:!max-w-[478px]"
                    imgSrc={datas?.image_url}
                    imgSize="md"
                    horizontal={true}>
                    <Card.Container className="space-y-4 p-6">
                        <Card.Title className="flex items-center gap-2 text-body-5 font-medium text-metal-500 md:!text-body-4">                         
                            <span>Name: {datas?.name}</span>
                        </Card.Title>
                        <Card.Container className="flex items-center justify-between">
                            <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
                                <Bed size={20} color="#5E718D" />
                                <span> {datas?.caffeine_content}</span>
                                <br></br>
                            </Card.Title>
                            <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
                           
                                <span>flavor: {datas.flavor}</span>
                            </Card.Title>
                        </Card.Container>
                        <Card.Container className="flex items-center justify-between">
                            <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
                                <ArrowsOutSimple size={20} color="#5E718D" />
                                <span>{datas?.origin}</span>
                            </Card.Title>
                            <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
                                <Users size={20} color="#5E718D" />
                                <span>Family</span>
                            </Card.Title>
                        </Card.Container>
                        <Card.Container className="my-3 flex items-center justify-between">
                            <Card.Title className="text-body-3 m-3 font-medium text-metal-500">${datas?.price}</Card.Title>
                            <Link to={`/detailsproduct/${datas?.id}`}>
                                <Button type="primary" size="sm">
                                    Check Out
                                </Button>
                            </Link>

                        </Card.Container>
                    </Card.Container>
                </Card>)
            }</div>:<div>You Have No Cart Data</div>} 
        </div>
    );
};

export default AddToCart;
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
    Badge,
    Button,
    Card,
} from "keep-react";
import {
    Heart,
    ShoppingCart,
} from "phosphor-react";
import { Link } from "react-router-dom";
import Skeletons from "../../../../Components/Skeleton/Skeletons";
const LastAddProduct = () => {
        const {isLoading, data: lastAddData } = useQuery({
            queryKey: ['data'],
            queryFn: async() =>
            await fetch('https://tea-coffee-server.vercel.app/lastedproduct').then((res) =>
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
    // isLoading? console.log('loading'):console.log('no loding')
    console.log(lastAddData)
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:items-center w-full mx-auto gap-3 items-center justify-center text-center">
            {
                lastAddData?.map(data=> <Card
                    className="max-w-xs w-96 overflow-hidden rounded-md"
                    imgSrc={data?.image_url}
                    imgSize="md">
                    <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
                        <Heart size={20} weight="bold" color="white" />
                    </Card.Container>
                    <Card.Container className="p-6">
                        <Card.Container className="flex items-center justify-between">
                            <Badge size="xs" colorType="light" color="gray">
                                For Sale
                            </Badge>
                            <Card.Title>{data?.price}</Card.Title>
                        </Card.Container>
                        <Card.Container className="my-3">
                            <Card.Title>{data.name}</Card.Title>
                            <Card.Description>
                                {data?.short_description}
                            </Card.Description>
                        </Card.Container>
                        <Card.Container className="flex items-center justify-start gap-5">  
                            <Link to={`/detailsproduct/${data?._id}`}>
                                <Button size="sm" type="outlineGray">
                                    By Now
                                </Button>
                            </Link>
                        </Card.Container>
                    </Card.Container>
                </Card>)
            }
           
        </div>
    );
};

export default LastAddProduct;
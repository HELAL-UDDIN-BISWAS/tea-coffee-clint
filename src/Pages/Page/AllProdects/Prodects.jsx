import { useQuery } from "@tanstack/react-query";
import { Badge,
    Button,
    Card,
 } from "keep-react";
    import {
      Heart,
      ShoppingCart,
    } from "phosphor-react";
import { Link } from "react-router-dom";  
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
                    alldata?.map(product=><div><Card
                        className="max-w-xs w-96 overflow-hidden rounded-md"
                        imgSrc={product.image_url}
                        imgSize="md">
                        <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
                          <Heart size={20} weight="bold" color="white" />
                        </Card.Container>
                        <Card.Container className="p-6">
                          <Card.Container className="flex items-center justify-between">
                            <Badge size="xs" colorType="light" color="gray">
                              For Sale
                            </Badge>
                            <Card.Title>{product.price}</Card.Title>
                          </Card.Container>
                          <Card.Container className="my-3">
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Description>
                             {product.short_description}
                            </Card.Description>
                          </Card.Container>
                          <Card.Container className="flex items-center justify-start gap-5">       
                            <Link to={`/detailsproduct/${product._id}`}>
                            <Button size="sm" type="outlineGray">
                              <span className="pr-2">
                                <ShoppingCart size={24} />
                              </span>
                              Add To Cart
                            </Button>
                            </Link>                         
                          </Card.Container>
                        </Card.Container>
                      </Card></div>)
                }
            </div>
        </div>
    );
};

export default Prodects;
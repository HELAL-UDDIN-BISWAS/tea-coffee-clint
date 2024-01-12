import { useQuery } from "@tanstack/react-query";
import { Badge,
    Button,
    Card,
 } from "keep-react";
    import {
      Heart,
      ShoppingCart,
    } from "phosphor-react";
const Prodects = () => {
    const { data } = useQuery({
        queryKey: ['data'],
        queryFn: () =>
          fetch('/data.json').then((res) =>
            res.json(),

          ),
      })
      console.log(data)
    
    return (
        <div>
            <div>
                {
                    data?.map(product=><div>     <Card
                        className="max-w-xs overflow-hidden rounded-md"
                        imgSrc="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
                        imgSize="md">
                        <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
                          <Heart size={20} weight="bold" color="white" />
                        </Card.Container>
                        <Card.Container className="p-6">
                          <Card.Container className="flex items-center justify-between">
                            <Badge size="xs" colorType="light" color="gray">
                              For Sale
                            </Badge>
                            <Card.Title>$9.99</Card.Title>
                          </Card.Container>
                          <Card.Container className="my-3">
                            <Card.Title>Men Nike Shoe</Card.Title>
                            <Card.Description>
                              This can save time and effort, and it can also help to reduce the risk of errors.
                            </Card.Description>
                          </Card.Container>
                          <Card.Container className="flex items-center justify-start gap-5">
                            <Button size="sm" type="outlineGray">
                              <span className="pr-2">
                                <ShoppingCart size={24} />
                              </span>
                              Add To Cart
                            </Button>
                          </Card.Container>
                        </Card.Container>
                      </Card></div>)
                }
            </div>
        </div>
    );
};

export default Prodects;
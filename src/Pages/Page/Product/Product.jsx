import {
    Badge,
    Button,
    Card,
} from "keep-react";
import {
    Heart,
    ShoppingCart,
} from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Proveider/Proveider";
import axios from "axios";

const Product = ({ product }) => {
    const { image_url, price, name, short_description, _id, origin, flavor, caffeine_content, long_description } = product || []
    const { user } = useContext(AuthContext);
    console.log(user)
    const addCartData = {
        image_url:image_url,
        price:price,
         name:name,
        short_description:short_description,
        id:_id,
        origin:origin,
        flavor:flavor,
        caffeine_content:caffeine_content,
        long_description:long_description,
        email: user?.email
    }
    const addCart = () => {
        axios.post('https://tea-coffee-server.vercel.app/addcartproduct',addCartData)
        .then(res=>console.log(res))
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <Card
                className="max-w-xs w-96 overflow-hidden rounded-md"
                imgSrc={image_url}
                imgSize="md">
                <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
                    <Heart size={20} weight="bold" color="white" />
                </Card.Container>
                <Card.Container className="p-6">
                    <Card.Container className="flex items-center justify-between">
                        <Badge size="xs" colorType="light" color="gray">
                            For Sale
                        </Badge>
                        <Card.Title>{price}</Card.Title>
                    </Card.Container>
                    <Card.Container className="my-3">
                        <Card.Title>{name}</Card.Title>
                        <Card.Description>
                            {short_description}
                        </Card.Description>
                    </Card.Container>
                    <Card.Container className="flex items-center justify-start gap-5">

                        <Button onClick={addCart} size="sm" type="outlineGray">
                            <span className="pr-2">
                                <ShoppingCart size={24} />
                            </span>
                            Add to Cart
                        </Button>

                        <Link to={`/detailsproduct/${_id}`}>
                            <Button size="sm" type="outlineGray">
                                By Now
                            </Button>
                        </Link>
                    </Card.Container>
                </Card.Container>
            </Card>
        </div>
    );
};

export default Product;
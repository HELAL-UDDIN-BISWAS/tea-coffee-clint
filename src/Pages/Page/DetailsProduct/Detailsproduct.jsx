import { useLoaderData } from "react-router-dom";

const Detailsproduct = () => {
    const productData=useLoaderData();
    console.log(productData)
    return (
        <div>
            <img src={productData.image_url} alt="" />
            deta
        </div>
    );
};

export default Detailsproduct;
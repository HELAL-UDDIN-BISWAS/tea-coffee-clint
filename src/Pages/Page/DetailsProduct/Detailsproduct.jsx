import { useLoaderData } from "react-router-dom";
import { GrShop } from "react-icons/gr";
import { useState } from "react";
import { Button, Modal } from "keep-react";
import { CloudArrowUp } from "phosphor-react";


const Detailsproduct = () => {
    const productData = useLoaderData();
        const [showModalX, setShowModalX] = useState(false);
    const onClickOne = () => {
        console.log('Hello World')
        setShowModalX(!showModalX);
      };
    const onClickTwo = () => {
        setShowModalX(!showModalX);
    };
        return (
        <div className="max-w-6xl mx-auto">
            <div className="md:flex">
                <div className="flex-1">
                    <img className="rounded" src={productData.image_url} alt="" />
                </div>
                <div className="flex-1 ml-10">
                    <p className="text-2xl text-slate-600 ">Type: <span className="text-black">{productData.type}</span></p>
                    <p className="text-2xl text-slate-600">Flavor: <span className="text-black">{productData.flavor}</span></p>
                    <p className="text-2xl text-slate-600">Caffeine Content: <span className="text-black">{productData.caffeine_content}</span></p>
                    <h3 className="text-2xl text-slate-600">Price: <span className="text-black">{productData.price}</span></h3>

                    {/* <button className=" hover:bg-slate-400 bg-slate-300 py-2 px-4 rounded">BY NOW</button> */}
                    <Button className="items-center justify-center my-8" onClick={onClickTwo} size="md" color="success"><GrShop className="mx-1 items-center" />BY NOW</Button>
                  <Modal
                        icon={<CloudArrowUp size={28} color="#1B4DFF" />}
                        size="md"
                        show={showModalX}
                        onClose={onClickTwo}
                    >
                        <Modal.Header>Do you want to upload this file?</Modal.Header>
                        <Modal.Body>
                            <div className="space-y-6">
                                <p className="text-body-5 md:text-body-4 leading-relaxed text-metal-500">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                </p>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="outlineGray" onClick={onClickTwo}>
                                Cancel
                            </Button>
                            <Button type="primary" onClick={onClickOne}>
                                Confirm
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
            <div className="">
                <h2 className="text-2xl py-5">{productData?.short_description}</h2>
                <p className="max-w-4xl ">{productData?.long_description}</p>
                deta
            </div>

        </div>
    );
};

export default Detailsproduct;
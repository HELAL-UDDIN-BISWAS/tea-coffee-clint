import { useContext } from "react";
import PaymentData from "../../../Hooks/PaymentData/PaymentData";
import { AuthContext } from "../../../Proveider/Proveider";


const CheckoutForm = () => {
    const [refetch,isLoading,paymentdata]=PaymentData();
      const {user}=useContext(AuthContext);
    const perchesData=paymentdata?.filter(data=>data?.userEmail === user?.email)
console.log(perchesData)
    return (
        <div>
            Hello
        </div>
    );
};

export default CheckoutForm;
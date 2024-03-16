import { useContext, useEffect, useState } from "react";
import PaymentData from "../../../Hooks/PaymentData/PaymentData";
import { AuthContext } from "../../../Proveider/Proveider";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";


const CheckoutForm = () => {
    const [refetch,isLoading,paymentdata]=PaymentData();
      const {user}=useContext(AuthContext);
  const [transactionId, settransactionId] = useState('')
  const [error, seterror] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe();
  const element = useElements();
  const perchesData=paymentdata?.filter(data=>data?.userEmail === user?.email)

  const totalPrice = perchesData.reduce((total, item) => total + parseInt(item.price), 0);
  console.log(totalPrice)
  useEffect(() => {
    if(totalPrice > 0){
      axios.post('https://y-tau-one.vercel.app/create-payment-intent', { price: 10 })
      .then(res => {
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
      })
    }
   
  }, [totalPrice])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!stripe || !element) {
      return
    }
    const card = element.getElement(CardElement);
    if (card == null) {
      return
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      console.log('[error]', error)
      seterror(error.message)
    } else {
      seterror('')
      console.log('[paymentMethod]', paymentMethod)
    }

    //confim messege
    const { paymentIntent, error: confimError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user.email || 'anonymous',
          name: user.displayName || 'anonymous'
        }
      }
    })
    if (confimError) {
      console.log('confirm error')
    } else {
      console.log('payment intent', paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id)
        settransactionId(paymentIntent.id)
        // const payment = {
        //   email: user.email,
        //   price: totalPrice,
        //   transactionId: paymentIntent.id,
        //   date: new Date(),
        // //   cartIds: cart.map(item => item._id),
          
        //   status: 'pending'
        // }

        // const res = await axios.post('/payments', payment);
        // console.log('payment saved', res.data);
        // refetch();
        // if (res.data?.paymentResult?.insertedId) {
        //   Swal.fire({
        //     position: "top-end",
        //     icon: "success",
        //     title: "Thank you payment",
        //     showConfirmButton: false,
        //     timer: 1500
        //   });
        //   navigate('/dashboard/paymentHistory')
        // }
      }
    }

  }
// console.log(perchesData)
    return (
      
            <form className="w-[400px]  p-4" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="bg-red-400 px-2 py-1 hover:cursor-pointer rounded" type="submit" disabled={!stripe || !clientSecret}>
        Pay Now
      </button>
      <p className="text-red-500 ">{error}</p>
      <p>{transactionId}</p>
    </form>
              
    );
};

export default CheckoutForm;
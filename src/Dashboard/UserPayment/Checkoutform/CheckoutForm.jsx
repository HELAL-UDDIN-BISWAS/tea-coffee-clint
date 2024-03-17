import { useContext, useEffect, useState } from "react";
import PaymentData from "../../../Hooks/PaymentData/PaymentData";
import { AuthContext } from "../../../Proveider/Proveider";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import Swal from "sweetalert2";


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
      axios.post('https://tea-coffee-server.vercel.app/create-payment-intent', { price: totalPrice })
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
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartIds: perchesData.map(item => item._id),
          
          status: 'pending'
        }

        const res = await axios.post('https://tea-coffee-server.vercel.app/payments', payment);
        console.log('payment saved', res.data);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you payment",
            showConfirmButton: false,
            timer: 1500
          });
          // navigate('/dashboard/paymentHistory')
        }
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
              color: '#1B4DFF',
              '::placeholder': {
                color: '#3085d6',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="bg-lime-100 text-lime-500 hover:text-white hover:bg-lime-600 py-2 px-3 rounded my-8" type="submit" disabled={!stripe || !clientSecret}>
        Pay Now
      </button>
      <p className="text-red-500 ">{error}</p>
      <p>{transactionId}</p>
    </form>
              
    );
};

export default CheckoutForm;
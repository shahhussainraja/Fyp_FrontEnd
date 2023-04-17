import React, { useEffect, useState } from 'react'
import DropIn from "braintree-web-drop-in-react";
import authServices from '../../Services/AuthServices';

function Payment() {

    const [clientToken,setClientToken] = useState(null);

    useEffect(()=>{

        const getToken = async()=>{
            authServices.getToken().then((res)=>{
                setClientToken(res.json())
            }).catch((e)=>{
                console.log(e.message)
            })
        }

        getToken();

    },[])




  return (
    <div>Payment</div>
  )
}

export default Payment
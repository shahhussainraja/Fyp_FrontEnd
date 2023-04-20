import React from 'react'
import styled from 'styled-components'
import "./Success.css"
import inboxImage from "../../images/PaymentDone.png"
import { useEffect, useRef } from 'react';




let container = styled.div`
    display:flex;
    height: 50vh;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    color: green;
    background-color: yellow;

`


function Success() {

  const messageRef = useRef(null);

  useEffect(() => {
    // messageRef.current.classList.add('transaction-message-show');
    setTimeout(() => {
      messageRef.current.classList.add('transaction-message-show');
    }, 1000);
  }, []);








  return (
    // <div className="containerSuccess">
    //      Payment done Successfully
    // </div>
    <div className="transaction-message" ref={messageRef}>
      <img src={inboxImage} className='paymentImage' alt="" />
      Transaction done!
    </div>
  )
}

export default Success
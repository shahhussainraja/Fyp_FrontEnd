import React, { useEffect, useState } from 'react'
import "./SingleConverstion.css"
import imgCover from "../../images/about2.png"
import authServices from '../../Services/AuthServices'
import { useSelector } from 'react-redux'

function SingleCoversation({conversationData , userId}) {
const loginprofile  = useSelector((state)=> state.userDetail)

  const [activeChat , setActiveChat] = useState(null)
  const activeChatId = conversationData?.members.find((m)=> m !== userId   )
  // console.log("active chat id " +activeChatId)
  // // console.log("Current User ", userId)
  

  useEffect(()=>{
    const fetchBuyerDetail = ()=>{
      if(loginprofile.userType === "buyer"){  
      authServices.get("/sellerDetail/"+ activeChatId).then((res)=>{
        // console.log(res)
        setActiveChat(res)
      }).catch((e)=>{
        console.log(e.message)
      })
    }else{
      authServices.get("/buyerDetail/"+ activeChatId).then((res)=>{
        // console.log(res)
        setActiveChat(res)
      }).catch((e)=>{
        console.log(e.message)
      })


    }
  }

    fetchBuyerDetail();

  },[activeChatId,conversationData])


  return (
    <>
    <div className="SingleCoversation">
        <div className="chatImageDiv">
            <img src={`http://localhost:8080${activeChat?.image}`}  className="chatImage"  alt="" />
            <span className='chatSpan'> {activeChat?.name}</span>
        </div>
        <div className="chatText">
          
        </div>
    </div>
    </>
  )
}

export default SingleCoversation
import React, { useEffect, useState } from 'react'
import "./SingleConverstion.css"
import imgCover from "../../images/about2.png"
import authServices from '../../Services/AuthServices'

function SingleCoversation({conversationData , userId}) {
  const [activeChatName , setActiveChatName] = useState(null)
  const activeChatId = conversationData?.members.find((m)=> m !== userId   )
  // console.log("active chat id " +activeChatId)
  // // console.log("Current User ", userId)
  

  useEffect(()=>{
    const fetchBuyerDetail = ()=>{
      authServices.get("/buyerDetail/"+ activeChatId).then((res)=>{
        // console.log(res)
        setActiveChatName(res)
      }).catch((e)=>{
        console.log(e.message)
      })
    }

    fetchBuyerDetail();

  },[activeChatId,conversationData])


  return (
    <>
    <div className="SingleCoversation">
        <div className="chatImageDiv">
            <img src={imgCover} className="chatImage"  alt="" />
        </div>
        <div className="chatText">
           {activeChatName?.name}
        </div>
    </div>
    </>
  )
}

export default SingleCoversation
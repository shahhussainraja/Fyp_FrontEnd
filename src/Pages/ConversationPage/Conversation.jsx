import React, { useEffect, useRef, useState } from 'react'
import SingleCoversation from '../../Components/chat/SingleCoversation'
import Message from '../../Components/message/Message'
import "./Conversation.css"
import Button from 'react-bootstrap/Button';
import authServices from '../../Services/AuthServices';

function Conversation() {

  const [currentUser , setCurrentUser] = useState(null);
  const [conversation , setConversation] = useState(null);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage , setNewMessage] = useState("");
  const scrollRef = useRef()
   

  useEffect(()=>{

   const fetchUser = ()=>{
      authServices.currentUser().then(res=>{
        // console.log(res)
        setCurrentUser(res.id)
      }).catch(e=>{
        console.log(e.message)
      })
    }
    fetchUser();
  },[])

  useEffect(()=>{
    const fetchConversation = ()=>{
      authServices.conversation(currentUser).then((res)=>{
        setConversation(res)
        // console.log(res)
      }).catch((e)=>{
        console.log(e.message)
      })
    }
    fetchConversation();
  },[currentUser])

useEffect(()=>{
  const fetchCoversationMessage = ()=>{
        authServices.get("/fetchMessage/"+currentChat?._id).then((res)=>{
          setMessages(res);
          // console.log(res);
        }).catch((e)=>{
          console.log(e.message)
        })
  }

  fetchCoversationMessage()
},[currentChat])

useEffect(()=>{
  scrollRef.current?.scrollIntoView({behavior : "smooth" })
},[messages])


 
const handleSubmit =async(e)=>{
    const data = {
      senderId : currentUser,
      message : newMessage,
      conversationId : currentChat._id 
    }


   authServices.sendMessage(data).then((res)=>{
    setMessages([...messages , res]);
    console.log(messages);
    setNewMessage("");
    }).catch((e)=>{
      console.log(e.message)
    })
}

  return (
    <>
      <div className='conversation'>
        <div className="chatList">
            <div className="chatListWrapper">
            {
            conversation?.map((e)=>(
              <div onClick={()=>{setCurrentChat(e)}}>
              <SingleCoversation conversationData={e} userId={currentUser}  /> 
              </div>
            ))}     
            </div>
        </div>
        <div className="chatMenu">
     { currentChat ? <> 
           <div className="chatMenuWrapper">
                <div className="chatBoxTop">
                {
                  messages?.map((e)=>(
                    <div ref={scrollRef}>
                    <Message message={e} userId = {currentUser} />
                    </div>
                  ))
                }
                </div>
                <div className="chatBoxBottom">
                  <textarea name="" className='chatMessageInput' id="" cols="30" rows="3" onChange={(e)=>(setNewMessage(e.target.value))} value={newMessage} placeholder="Message"></textarea>
                  <Button className='SendButton' onClick={()=>{handleSubmit()}}>Send</Button>
                </div>
            </div>
     </> : <>  
      <span className='chatTitle'>Click to open Conversation</span>
      </>
}
        </div>
    </div>
    </>  
  )
}

export default Conversation
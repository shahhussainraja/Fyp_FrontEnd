import React from 'react'
import SingleCoversation from '../../Components/chat/SingleCoversation'
import Message from '../../Components/message/Message'
import "./Conversation.css"
import Button from 'react-bootstrap/Button';

function Conversation() {
  return (
    <>
      <div className='conversation'>
        <div className="chatList">
            <div className="chatListWrapper">
            <SingleCoversation  /> 
            <SingleCoversation  /> 
            <SingleCoversation  /> 
            <SingleCoversation  /> 
            <SingleCoversation  /> 
            <SingleCoversation  /> 
            </div>
        </div>
        <div className="chatMenu">
            <div className="chatMenuWrapper">
                <div className="chatBoxTop">
                  <Message />
                  <Message own={true} />
                  <Message />
                  <Message />
                  <Message />
                  <Message own={true} />
                  <Message own={true} />
                  <Message own={true} />
                  <Message own={true} />
                </div>
                <div className="chatBoxBottom">
                  <textarea name="" className='chatMessageInput' id="" cols="30" rows="3"></textarea>
                  <Button className='SendButton'  >Send</Button>
                </div>
            </div>
        </div>
    </div>
    </>  
  )
}

export default Conversation
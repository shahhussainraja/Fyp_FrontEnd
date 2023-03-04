import "./Message.css"
import imgCover from "../../images/about2.png"
import { format } from 'timeago.js'

export default function Message({message , userId}) {
  return (
    <div className={ message.senderId === userId ? "message own" : "message" }>
        <div className="messageTop">
        <img src={imgCover} className="messageImg" alt="" />
         <p className="messageText">{message.message}</p>
        </div>
        <div className="messageBottom">
            {format(message.createdAt)}
        </div>
    </div>
    
  )
}

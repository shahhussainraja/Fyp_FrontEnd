import "./Message.css"
import imgCover from "../../images/about2.png"

export default function Message({own}) {
  return (
    <div className={ own ? "message own" : "message" }>
        <div className="messageTop">
        <img src={imgCover} className="messageImg" alt="" />
         <p className="messageText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo reiciendis, qui eos ea dolore, fuga molestias debitis assumenda facilis ex consequuntur tempora in omnis est laborum quia quam quae voluptates.</p>
        </div>
        <div className="messageBottom">
            1 hour ago
        </div>
    </div>
    
  )
}

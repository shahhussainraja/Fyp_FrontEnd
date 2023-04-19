import "./Message.css"
import imgCover from "../../images/about2.png"
import { format } from 'timeago.js'
import { Button } from "react-bootstrap"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import authServices from "../../Services/AuthServices"


export default function Message({message , userId}) {

const navigate = useNavigate();
const Loginprofile = useSelector((state) => state.userDetail)

const handleAcceptOffer = ()=>{
  Swal.fire({
    title: 'Do you want to save Accept offer?',
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: 'Accept',
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Offer Accepted Proceed to Payment', '', 'success').then(()=>{
        authServices.makePayment(message).then((res)=>{
        if(res.url){
            console.log(res.url);
            window.location.href = res.url;
          }
        
        }).catch((e)=>{
          console.log(e.message)
        })



      })
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
}



  return (
    <div className={ message.senderId === userId ? "message own" : "message" }>
        <div className="messageTop">
        <img src={imgCover} className="messageImg" alt="" />
         <p className="messageText">{message.message}

      { Loginprofile.userType === "buyer"  && message.offerMessage === "true" &&
         <div style={{display:"flex",justifyContent:"center"}}>
          <Button variant="warning" size="sm"  onClick={handleAcceptOffer} >Accept offer </Button>
          </div>
      }
        </p>

        </div>

        <div className="messageBottom">
            {format(message.createdAt)}
        </div>
    </div>
    
  )
}

import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt, FaClock, FaCircle} from 'react-icons/fa';
import './PostCard.css'
import user from '../../images/userProfile.png'
import Popup from 'react-widgets/cjs/Popup';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import sellerServices from '../../Services/SellerServices';
import { Button } from 'react-bootstrap';
import { Image } from 'antd';

export function Products({content}) {

  const Loginprofile = useSelector((state) => state.userDetail)

  let   inputValue = "";

const Popup = () => {

const { value: amount } = Swal.fire({
  title: 'Enter your expected price',
  input: 'number',
  inputLabel: 'Asstimated Amount',
  inputValue: inputValue,
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return 'Please enter amount!'
    }else{
      const message = `Dear ${content.buyerName} I’m writing this to hear back from you about My offer ${value} On your post ${content.postTitle}. We would like to know if you’re still interested and how you’d like to move forward. Looking forward to hearing back from you soon.`
      sellerServices.newConversation({senderId:Loginprofile.id,receiverId:content.buyerId}).then((res)=>{
        if(res){
          sellerServices.sendBidMessage({senderId:Loginprofile.id,message:message,conversationId:res._id,offerMessage:true,sellerId:Loginprofile.id,sellerName:Loginprofile.name,buyerId:content.buyerId,buyerName:content.buyerName,postTitle:content.postTitle,postDetail:content.postDetail,amount:value,city:content.city,deliveryLocation:content.deliveryLocation,image:content.image,postId:content._id}).
          then((res)=>{
            if(res){
              Swal.fire({
                title: 'Your offer is successfully sent',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
            }
          }).catch((e)=>console.log(e.message))
        }
      }).catch((e)=>console.log(e.message))
    }
  }
})
    
if (amount) {
  Swal.fire(`Your asstimated amount is ${amount}`)
}
 }
    
    return(
        <div className='productList'>
            <div key={content.id} className='productCard'>
                <div className='cardTop'>
                    <div style={{display:"flex"}}>
                    <img style={{height:"1.5rem", width:"1.5rem"}} src={user}></img>
                    <p style={{padding:"5px", fontSize:"15px", marginTop:"0px"}}>{content.buyerName}</p>
                    </div>
                    <div style={{display:"flex"}}>
                      <p className='time'>{content.dueDate}</p>
                      <FaClock className={"productCard__clock"} /><br/>
                      </div>
                      <div style={{display:"flex", marginTop:"25px", padding:"3px"}} >
                      <p className='status'>Status</p>
                      <FaCircle className={"status-activity"} />
                    </div>
                    
                </div>
               <div className='imgContainer'>
                {/* <img src={`http://localhost:8080${content?.image}`} alt='product-img' className='productImage'></img> */}
                <Image  src={`http://localhost:8080${content?.image}`}  width={260} height={220} />
                </div>
                <div className='productCard__content'>
                    <h5>{content.postTitle}</h5>
                    <div className='displayStack__1'>
                        <div className='productPrice'>{content.price}/Rs</div>
                        <div className='productSales'>{content.city}</div>
                    </div >
                </div>
                <div className='postCardBtn'>
                    <Link to="/PostDetails" state={content} style={{ color: "white", textDecoration: "inherit" }} className='postCard-btn' >Open</Link>
                    {
                      Loginprofile.userType === "seller" &&
                      <Link className='postCard-btn' style={{color:"inherit", textDecoration: "inherit" }} onClick={Popup} >Make Offer</Link>
                    }
                    </div>
            </div>
        </div>  
    )
}
import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt, FaClock, FaCircle} from 'react-icons/fa';
import './PostCard.css'
import user from '../../images/userProfile.png'
import Popup from 'react-widgets/cjs/Popup';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

export function Products({content}) {

    const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

    const Popup = () => {

const { value: amount } = Swal.fire({
  title: 'Enter your expected price',
  input: 'text',
  inputLabel: 'Asstimated Amount',
  inputValue: inputValue,
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return 'You need to write something!'
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
                      <div style={{display:"flex", marginTop:"25px", padding:"3px"}}>
                      <p className='status'>Status</p>
                      <FaCircle className={"status-activity"} />
                    </div>
                    
                </div>
               <div className='imgContainer'>
                <img src={`http://localhost:8080${content.image}`} alt='product-img' className='productImage'></img>
                </div>
                <div className='productCard__content'>
                    <h5>{content.postTitle}</h5>
                    <div className='displayStack__1'>
                        <div className='productPrice'>{content.price}/Rs</div>
                        <div className='productSales'>{content.city}</div>
                    </div >
                </div>
                <div className='postCardBtn'>
                    <button className='postCard-btn' ><Link to="/PostDetails" state={content} style={{ color: "inherit", textDecoration: "inherit" }}>Open</Link></button>
                    <button className='postCard-btn' onClick={Popup} >Make Offer</button>
                    </div>
            </div>
        </div>
    )
}
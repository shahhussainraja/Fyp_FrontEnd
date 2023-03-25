import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt, FaClock } from 'react-icons/fa';
import './PostCard.css'
import user from '../../images/userProfile.png'
import Popup from 'react-widgets/cjs/Popup';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

export function Products(props) {

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
            <div key={props.id} className='productCard'>
                <div className='cardTop'>
                    <div style={{display:"flex"}}>
                    <img style={{height:"1.5rem", width:"1.5rem"}} src={user}></img>
                    <p style={{padding:"5px", fontSize:"15px", marginTop:"0px"}}>@uesrname</p>
                    </div>
                    <div>
                    <p className='time'>30 days</p>
                <FaClock className={"productCard__clock"} />
                </div>
                </div>
               <div style={{height:"250px", width:"280px", justifyContent:"center"}}>
                <img src={props.image} alt='product-img' className='productImage'></img>
                </div>
                <div className='productCard__content'>
                    <h5>Title</h5>
                    <div className='displayStack__1'>
                        <div className='productPrice'>{props.price}/Rs</div>
                        <div className='productSales'>Lahore</div>
                    </div >
                </div>
                <div className='postCardBtn'>
                    <a className='postCard-btn' ><Link to="/PostDetails" style={{ color: "inherit", textDecoration: "inherit" }}>open</Link></a>
                    <a className='postCard-btn' onClick={Popup} >Make Offer</a>
                    </div>
            </div>
        </div>
    )
}
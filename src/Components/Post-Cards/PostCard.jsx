import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt, FaClock } from 'react-icons/fa';
import './PostCard.css'

export function Products(props) {
    return(
        <div className='productList'>
            <div key={props.id} className='productCard'>
                <div className='cardTop'>
                    <p className='time'>30 days</p>
                <FaClock className={"productCard__clock"} />
                </div>
                <img src={props.image} alt='product-img' className='productImage'></img>
                <div className='productCard__content'>
                    <h5 className='productName'>{props.title}</h5>
                    <div className='displayStack__1'>
                        <div className='productPrice'>{props.price}/Rs</div>
                        <div className='productSales'>Lahore</div>
                    </div >
                </div>
                <div className='postCardBtn'>
                    <a className='postCard-btn' href='/PostDetails' >Open</a>
                    <a className='postCard-btn' href='/PostDetails' >Make Offer</a>
                    </div>
            </div>
        </div>
    )
}
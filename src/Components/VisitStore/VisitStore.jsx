import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./VisitStore.css"
import sellerServices from '../../Services/SellerServices';

function VisitStore() {
    const { id } = useParams();


    const [editing, setEditing] = useState(false);
    const [username, setUsername] = useState('');
    const [shopName, setShopName] = useState('');
    const [email, setEmail] = useState ('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [CNIC, setCNIC] = useState('');
    const [category, setCategory] = useState('');
    const [bio, setBio] = useState(' bio includes professional experiences and accomplishments gained over the course of their career.');
  
    const [data,setData] = useState([])
  

    const getProfileData = ()=>{
        sellerServices.getSellerProfile(id).then((res)=>{
          console.log(res)
          setData(res)
          setUsername(res.name);
          setShopName(res.shopName);
          setEmail(res.email);
          setPhoneNumber(res.phone || "N/A") ;
          setCNIC(res.CNIC || "N/A");
          setCategory(JSON.stringify(res.category) || "N/A")
        }).catch((e)=>console.log(e.message))
      }
      
      useEffect(getProfileData,[]);

  return (
    <div className='container'>
         <div classname='' style={{display:"flex", borderBottom:"solid black 1px", padding: "10px", marginTop:"70px" ,justifyContent:"space-around"}}>
                <div>
                  <img src={`http://localhost:8080${data?.image}`}  
                    className="rounded-circle mb-3"
                    style={{height:"150px", width:"150px", objectFit:"cover"}}
                  />
                  </div>
                  <div className="profileName">
                  <h3 className="pnh3">{data?.name}</h3>
                  <h2>Welcome to Our Web Store!</h2>
                    <p style={{maxWidth:"400px"}}>Thank you for visiting our web store. We offer a wide range of products to meet your needs.</p>
                  </div>
              </div>
              <div className="profileFlex">
                <div>
                <p className="p"><b>Shop Name</b></p>
                <p className="p"><b>Email</b></p>
                <p className="p"><b>Phone Number</b></p>
                <p className="p"><b>Specialities</b></p>   
              </div>
              <div className="pdata">
                  <p className="p">{shopName}</p>
                  <p className="p">{email}</p>
                  <p className="p">{phoneNumber}</p>
                  <p className="p">{bio}</p>
                </div>
              </div>

              <div style={{}}>
                <h5 style={{color:"#2693b2"}}>Reviews</h5>
                <p>Under Development</p>
              </div>
    </div>

  )
}

export default VisitStore
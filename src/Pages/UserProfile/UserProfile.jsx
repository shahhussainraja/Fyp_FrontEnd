import React, { useEffect, useState } from 'react';
import { FaEdit} from 'react-icons/fa';
import { Descriptions , } from "antd";
import { useSelector } from 'react-redux';
import authServices from '../../Services/AuthServices';
import { Spin } from 'antd';
import { Steps } from 'antd'
import { format } from 'timeago.js'


const stepsDetail = [
  {
    title: 'Assigned',
    description :"Order has been Assigned",
  },
  {
    title: 'Processing',
    description :"Order is Processing",
  },
  {
    title: 'Complete',
    description :"Order is Completed",
  },
  {
    title: 'Shipped',
    description: "Order has been Shipped",
  },
]



export default function UserProfile() {


const user = useSelector((state)=>state.userDetail)
const [data,setData] = useState([]);
const [loading , isLoading] = useState(true)

const getAllorder = ()=>{
  authServices.getOrderDetails(user.id).then((res)=>{
    setData(res)
    console.log(res)
    isLoading(false);
  }).catch((e)=>{
    console.log(e.message);
  })
}
useEffect(getAllorder,[]);

  return (
    <div className="container">
    
      <div className="py-5 h-100">
        <div className="justify-content-center align-items-center h-100"  style={{marginTop:"1rem",borderRadius:"5px" ,padding:"25px", backgroundColor:"ghostwhite" }}>
          <div lg="6" className="mb-4 mb-lg-0">
            
            <div className="mb-3" style={{ borderRadius: '.5rem' }}>
              <div className="g-0">
              
                <div md="4" className="gradient-custom text-center text-black"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' , marginTop:"50px" }}>
                    <h4 style={{color:"#2693b2", fontWeight:"bold"}}>Personal Profile</h4>
                  <img src={`http://localhost:8080${user?.image}`} 
                    alt="Avatar" className="my-5" style={{ width: '100px',height:"100px",borderRadius:"50px" }} fluid />
                  <h5 style={{color:"#E3BE00"}}>{user.name}</h5>
                  <p style={{color:"#2693b2"}}>Verified user</p>
                  <div style={{display:"flex", padding:"10px", justifyContent:"center"}}>
                  <p style={{color:"#2693b2"}}>Edit your profile by click on this icon</p>
                  <FaEdit style={{color:"#2693b2", margin:"3px", marginLeft:"10px"}} far icon="edit mb-5" />
                  </div>
                </div>
                <div md="8">
                  <div className="p-4">
                    <h5 style={{fontWeight:"bold", color:"#2693b2"}}>Information</h5>
                    <hr className="mt-0 mb-4" />
                    <div className="pt-1">
                    
                    <div size="6" className="mb-3">
                        <p style={{color:"#E3BE00"}}>Username</p>
                        <p className="text-muted">{user.name}</p>
                      </div>
                      <div size="6" className="mb-3">
                        <p style={{color:"#E3BE00"}}>Email</p>
                        <p className="text-muted">{user.email}</p>
                      </div>
                      <div size="6" className="mb-3">
                        <p style={{color:"#E3BE00"}}>Phone</p>
                        <p className="text-muted">123 456 789</p>
                      </div>
                      
                      <div size="6" className="mb-3">
                        <p style={{color:"#E3BE00"}}>City</p>
                        <p className="text-muted">Lahore</p>
                      </div>
                    </div>
                    <h5 style={{fontWeight:"bold", color:"#2693b2"}}> Order History</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        

      <div>
        <h3 className="mb-4 title">Pending Orders </h3>
        {loading && <Spin />}
        {data?.map((data)=>{
            if(data.orderStatus === "Processing"){
              return  (  <>
                <div style={{marginBottom:"50px"}}  key={data._id} >
                 <Descriptions title={`Order Id : ${data._id}`}  style={{marginBottom:"0px"}} layout="horizontal" size="middle" bordered="true">
                 <Descriptions.Item label="BuyerName">{data.sellerName}</Descriptions.Item>
                 <Descriptions.Item label="Delivery address">{data.deliveryAddress}</Descriptions.Item>
                 <Descriptions.Item label="City">{data.city}</Descriptions.Item>
                 <Descriptions.Item label="Postal code">{data.postalCode}</Descriptions.Item>
                 <Descriptions.Item label="Total Amount ">
                   {data.totalAmount/100}
                 </Descriptions.Item>
                 <Descriptions.Item label="Payment Status" contentStyle={{color:"red" , fontWeight:"bolder"}} >
                   Paid
                 </Descriptions.Item>
                 <Descriptions.Item label="Transaction Id">
                   {data.paymentIntentId}
                 </Descriptions.Item>
                 <Descriptions.Item label="Order Status" contentStyle={{color:"green" , fontWeight:"bolder"}}>
                   {data.orderStatus}
                 </Descriptions.Item> 
                 <Descriptions.Item label="Date" >
                   {format(data.createdAt)}
                 </Descriptions.Item>
                 </Descriptions>
                 {data?.products?.map((product)=>(
                   <>
                   <Descriptions title="" layout="vertical" key={product._id}>
                     <Descriptions.Item label="Product Title">{product.postTitle}</Descriptions.Item>
                     <Descriptions.Item label="Description">{product.postDetail}</Descriptions.Item>
                     <Descriptions.Item label="Amount">{product.amount}</Descriptions.Item>
                     <Descriptions.Item label="Quantity">{product.quantity || 1}</Descriptions.Item>
                   </Descriptions>
                   </>
                 ))}
                  <Steps current={1} items={stepsDetail} />
                 </div>
     
                </>)      
            }
           
         
})}

        
      <h3 className="mb-4 title">Complete Orders </h3> 
      {data?.map((data)=>{
        if(data.orderStatus === "Shipped"){
          return (<>
           <div style={{marginBottom:"50px"}}  key={data._id} >
            <Descriptions title={`Order Id : ${data._id}`}  style={{marginBottom:"0px"}} layout="horizontal" size="middle" bordered="true">
            <Descriptions.Item label="BuyerName">{data.sellerName}</Descriptions.Item>
            <Descriptions.Item label="Delivery address">{data.deliveryAddress}</Descriptions.Item>
            <Descriptions.Item label="City">{data.city}</Descriptions.Item>
            <Descriptions.Item label="Postal code">{data.postalCode}</Descriptions.Item>
            <Descriptions.Item label="Total Amount ">
              {data.totalAmount/100}
            </Descriptions.Item>
            <Descriptions.Item label="Payment Status" contentStyle={{color:"red" , fontWeight:"bolder"}} >
              Paid
            </Descriptions.Item>
            <Descriptions.Item label="Transaction Id">
              {data.paymentIntentId}
            </Descriptions.Item>
            <Descriptions.Item label="Order Status" contentStyle={{color:"green" , fontWeight:"bolder"}}>
              {data.orderStatus}
            </Descriptions.Item>
            </Descriptions>
            {data?.products?.map((product)=>(
              <>
              <Descriptions title="" layout="vertical" key={product._id}>
                <Descriptions.Item label="Product Title">{product.postTitle}</Descriptions.Item>
                <Descriptions.Item label="Description">{product.postDetail}</Descriptions.Item>
                <Descriptions.Item label="Amount">{product.amount}</Descriptions.Item>
                <Descriptions.Item label="Quantity">{product.quantity || 1}</Descriptions.Item>
              </Descriptions>
              </>
            ))}
            <Steps current={3} items={stepsDetail} />
            </div>

            </>)

            }
          })}
            </div>
        </div>
      </div>
    </div>
  );
}
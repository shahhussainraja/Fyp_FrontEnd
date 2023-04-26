import React, { useEffect, useState } from "react";
import { Table , Descriptions , Button , Dropdown ,message} from "antd";
import { useDispatch, useSelector } from "react-redux";
import sellerServices from "../../../Services/SellerServices";
import { Spin } from 'antd';
import { Display } from "react-bootstrap-icons";
import Swal from "sweetalert2";



const Orders = () => {

const user = useSelector((state)=>state.userDetail)
const [data,setData] = useState([]);
const [loading , isLoading] = useState(true)

const getAllorder = ()=>{
  sellerServices.getOrderDetails(user.id).then((res)=>{
    setData(res)
    console.log(res)
    isLoading(false);
  }).catch((e)=>{
    console.log(e.message);
  })
}
useEffect(getAllorder,[]);




const changeOrderStatus = (orderId)=>{
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Change it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Order Complete!',
        'Order status has been changed',
        'success'
      ).then(()=>{
        sellerServices.changeOrderStatus(orderId,{status :"Shipped"}).then((e)=>{
          console.log(e).catch(e=>console.log(e.message))
        })
      })
    }
  })

}

  return (
    <div>
        <h3 className="mb-4 title">Pending Orders </h3>
        {loading && <Spin />}
        {data?.map((data)=>{
            if(data.orderStatus === "Processing"){
              return  (  <>
                <div style={{marginBottom:"50px"}}  key={data._id} >
                 <Descriptions title={`Order Id : ${data._id}`}  style={{marginBottom:"0px"}} layout="horizontal" size="middle" bordered="true">
                 <Descriptions.Item label="BuyerName">{data.buyerName}</Descriptions.Item>
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
                 <Descriptions layout="vertical" bordered="true">
                 <Descriptions.Item label="Action"  labelStyle={{color:"black",fontWeight:"bolder"}}>
                   Change order status 
                   <Button style={{background:"green",color:"white",marginLeft:"5px"}} onClick={()=>{changeOrderStatus(data._id)}} >complete</Button>
                 </Descriptions.Item>
                 </Descriptions>
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
            <Descriptions.Item label="BuyerName">{data.buyerName}</Descriptions.Item>
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
            <Descriptions layout="vertical" bordered="true">
            <Descriptions.Item label="Action"  labelStyle={{color:"Green",fontWeight:"bolder"}}>
              Order Complete 
            </Descriptions.Item>
            </Descriptions>
            </div>

            </>)

            }
          })}
    </div>
  );
};

export default Orders;

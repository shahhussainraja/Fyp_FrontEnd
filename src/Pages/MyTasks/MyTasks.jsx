import { React, useState, useEffect } from 'react'
import Footer from '../../Components/Footer/Footer'
import { FaEdit } from 'react-icons/fa';
import { Descriptions, Image, } from "antd";
import { useSelector } from 'react-redux';
import authServices from '../../Services/AuthServices';
import { Spin } from 'antd';
import { Steps } from 'antd'
import { format } from 'timeago.js'
import { Button, Modal, Input } from 'antd';
import Swal from 'sweetalert2';
import { Table } from 'antd';
import "./MyTasks.css"
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import sellerServices from '../../Services/SellerServices';


const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Due date",
    dataIndex: "duedate",
  },
  {
    title: "Image",
    dataIndex: "image",
  },
  {
    title: "Status",
    dataIndex: "status"
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];



const MyTasks = () => {


  const stepsDetail = [
    {
      title: 'Assigned',
      description: "Order has been Assigned",
    },
    {
      title: 'Processing',
      description: "Order is Processing",
    },
    {
      title: 'Complete',
      description: "Order is Completed",
    },
    {
      title: 'Shipped',
      description: "Order has been Shipped",
    },
  ]



  const user = useSelector((state) => state.userDetail)
  const [data, setData] = useState([]);
  const [postdata, setPostData] = useState([]);
  const [loading, isLoading] = useState(true)

  const [review, setReview] = useState("")
  const { TextArea } = Input;
  const [forceupadate, setForceUpdate] = useState(0)

  const getAllorder = () => {
    authServices.getOrderDetails(user.id).then((res) => {
      setData(res)
      console.log(res)
      isLoading(false);
    }).catch((e) => {
      console.log(e.message);
    })
  }
  useEffect(getAllorder, [forceupadate]);

 const getPost = () => {
    authServices.getPost(user.id).then((res) => {
      setPostData(res)
      console.log(res)
      isLoading(false);
    }).catch((e) => {
      console.log(e.message);
    })
  }
  useEffect(getPost, [forceupadate]);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = (id) => {
    if (review !== "") {
      console.log(review)
      authServices.addReview(id, { review: review }).then((res) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Review Submitted Succesfully",
          showConfirmButton: true,
        }).then(() => {
          setIsModalOpen(false);
          setForceUpdate(Math.random() * 10000);
          setReview("");
        })
      })
    }
  };
  const handleCancel = () => {
    setReview("");
    setIsModalOpen(false);
  };


  const deletPost = (postId,status)=>{
    console.log(postId)
    if(status === "Assigned"){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error!',
        text:"Once order is assigned. It can not be delete.",
        showConfirmButton: true,
      })
    }else{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Task delete Successfully',
          'success'
        ).then(()=>{
          authServices.deletPost(postId).then((e)=>{
            setForceUpdate(Math.random() * 10000);
            console.log(e);
          }).catch(e=>console.log(e.message))
        })
      }
    })
  }

}
  
  const data1 = [];
  if(postdata){
  for (let i = 0; i < postdata.length; i++) {
    data1.push({
      key: i+1 ,
      title: `${postdata[i].postTitle}`,
      price: `${postdata[i].price}`,
      duedate: `${postdata[i].dueDate}`,
      image: <><Image  src={`http://localhost:8080${postdata[i]?.image}`}  width={40} height={40} /></>,
      status: `${postdata[i].Status}`,
      action: (
        <>
          <button  className=" fs-3 text-danger">
            <BiEdit />
          </button>
          <button className="ms-3 fs-3 text-danger" onClick={()=>deletPost(postdata[i]?._id,postdata[i].Status)} >
            <AiFillDelete  />
          </button>
        </>
      ),
    });
  }
}




  return (
    <>
      <div className='MyTaskcontainer'>
        <div style={{ marginTop: "100px", marginBottom: "100px",padding: "10px" }}>
          <h4 style={{ color: "#E3BE00", fontWeight: "bold" }}>My Tasks</h4>
          <div className='details1' > 
            <Table columns={columns} dataSource={data1} />
            <h5 style={{fontWeight:"bold", color:"#2693b2"}}> Order History</h5>
            <div>
              <h3 className="mb-4 title">Pending Orders </h3>
              {loading && <Spin />}
              {data?.map((data) => {
                if (data.orderStatus === "Processing") {
                  return (<>
                    <div style={{ marginBottom: "50px" }} key={data._id} >
                      <Descriptions title={`Order Id : ${data._id}`} style={{ marginBottom: "0px" }} layout="horizontal" size="middle" bordered="true">
                        <Descriptions.Item label="BuyerName">{data.sellerName}</Descriptions.Item>
                        <Descriptions.Item label="Delivery address">{data.deliveryAddress}</Descriptions.Item>
                        <Descriptions.Item label="City">{data.city}</Descriptions.Item>
                        <Descriptions.Item label="Postal code">{data.postalCode}</Descriptions.Item>
                        <Descriptions.Item label="Total Amount ">
                          {data.totalAmount / 100}
                        </Descriptions.Item>
                        <Descriptions.Item label="Payment Status" contentStyle={{ color: "red", fontWeight: "bolder" }} >
                          Paid
                        </Descriptions.Item>
                        <Descriptions.Item label="Transaction Id">
                          {data.paymentIntentId}
                        </Descriptions.Item>
                        <Descriptions.Item label="Order Status" contentStyle={{ color: "green", fontWeight: "bolder" }}>
                          {data.orderStatus}
                        </Descriptions.Item>
                        <Descriptions.Item label="Date" >
                          {format(data.createdAt)}
                        </Descriptions.Item>
                      </Descriptions>
                      {data?.products?.map((product) => (
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
              {data?.map((data) => {
                if (data.orderStatus === "Shipped") {
                  return (<>
                    <div style={{ marginBottom: "50px" }} key={data._id} >
                      <Descriptions title={`Order Id : ${data._id}`} style={{ marginBottom: "0px" }} layout="horizontal" size="middle" bordered="true">
                        <Descriptions.Item label="BuyerName">{data.sellerName}</Descriptions.Item>
                        <Descriptions.Item label="Delivery address">{data.deliveryAddress}</Descriptions.Item>
                        <Descriptions.Item label="City">{data.city}</Descriptions.Item>
                        <Descriptions.Item label="Postal code">{data.postalCode}</Descriptions.Item>
                        <Descriptions.Item label="Total Amount ">
                          {data.totalAmount / 100}
                        </Descriptions.Item>
                        <Descriptions.Item label="Payment Status" contentStyle={{ color: "red", fontWeight: "bolder" }} >
                          Paid
                        </Descriptions.Item>
                        <Descriptions.Item label="Transaction Id">
                          {data.paymentIntentId}
                        </Descriptions.Item>
                        <Descriptions.Item label="Order Status" contentStyle={{ color: "green", fontWeight: "bolder" }}>
                          {data.orderStatus}
                        </Descriptions.Item>
                        <Descriptions.Item label="Review" contentStyle={{ color: "green", fontWeight: "bolder" }}>
                          {data.review === "false" ?
                            <>
                              <Button type="primary" onClick={showModal} >
                                Add Review
                              </Button>
                              <Modal title="Add Review" open={isModalOpen}
                                footer={[
                                  <Button key="back" onClick={handleCancel}>
                                    cancel
                                  </Button>,
                                  <Button key="submit" type="primary" onClick={() => { handleOk(data._id) }}>
                                    Submit
                                  </Button>,
                                ]}>
                                <TextArea rows={4} onChange={(e) => setReview(e.target.value)} value={review} placeholder='Enter Review here' />
                              </Modal>
                            </> : <>submitted</>
                          }
                        </Descriptions.Item>
                      </Descriptions>
                      {data?.products?.map((product) => (
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
                      {data?.review !== "false" && <>
                        <Descriptions title="" layout="vertical" style={{ paddingBottom: "1px" }}>
                          <Descriptions.Item label="Review" className='ReviewText'>{data.review}</Descriptions.Item>
                        </Descriptions>
                      </>}
                    </div>
                  </>)
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer style={{ justifyContent: "bottom" }}></Footer>
    </>
  )
}

export default MyTasks

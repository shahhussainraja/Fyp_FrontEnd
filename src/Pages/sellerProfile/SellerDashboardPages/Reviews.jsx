import React, { useEffect, useState } from 'react'
import sellerServices from '../../../Services/SellerServices';
import { useSelector } from 'react-redux';
import Review from '../../../Components/Review/Review';

function Reviews() {
const [data, setdata] = useState([]);
const userId = useSelector((state)=>state.userDetail.id)
const getAllReviews = ()=>{
    sellerServices.getAllReviews(userId).then((res)=>{
        setdata(res);
    }).catch(e=>console.log(e.message))   
}

useEffect(getAllReviews,[]);
console.log(data)
  return (
    <div>
      {data[0]?.reviews?.length === 0 ? <><h3>Data Not found</h3></>: <>
        {data[0]?.reviews?.map((rev)=>(
            <>
            <Review data = {rev}></Review>
            </>
        ))}
      
      </>}

    </div>
  )
}

export default Reviews
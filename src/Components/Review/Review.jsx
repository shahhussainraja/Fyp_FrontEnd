import React from "react";
import {
  Card,
  CardSubtitle,
  CardText,
  CardTitle,
  CardBody,
  CardImg,
} from "reactstrap";
import "./Review.css"
import StarRating from "../StarRating/StarRating";

function Review({data ,}) {
  return (
    <div>
    <Card>
      <CardBody>
        <div className="reviews-top">
          <div className="user-details">
            <CardImg
              className="avatar1"
              src={
               ` https://images.pexels.com/photos/7129713/pexels-photo-7129713.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`
              }
              alt="user avatar"
            />
            <CardSubtitle className="m-2 text-muted" tag="h6">
              {data.buyerName}
            </CardSubtitle>
          </div>
          <div className="reviews-body">
          <StarRating style={{marginTop:"10px"}}></StarRating>
            <CardSubtitle style={{fontWeight:"bold",padding:"5px"}}>
              Purchased Product :  {data?.products?.map((val)=>(<>{val.postTitle }</>))}
            </CardSubtitle>
            <CardText className="cardText">
             
              {" Review : " + data.review}
            </CardText>
          </div>
          <CardText>
            <small className="text-muted text-bold">
              {"3 mins ago"}
            </small>
          </CardText>
        </div>
      </CardBody>
    </Card></div>
  )
}

export default Review
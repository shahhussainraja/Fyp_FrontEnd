import React, { useEffect , useState} from "react";
import { Image, Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import sellerServices from "../../../Services/SellerServices";
import Swal from "sweetalert2";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Category",
    dataIndex: "category",
    sorter: (a, b) => a.category.length - b.category.length,
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
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

const Productlist = () => {

  const [data,setData] = useState(null)
  const user = useSelector((state)=>state.userDetail)
  const [forceupadate , setForceUpdate]  = useState(0)
const getAllData = ()=>{
  sellerServices.getAllItems(user.id).then((res)=>{
    setData(res[0].products)
    console.log(res[0].products)
  }).catch((e)=>{
    console.log(e.message)
  })
}

useEffect(getAllData,[forceupadate])

const deleteitem = (sellerId,productId)=>{
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
        'Product delete Successfully',
        'success'
      ).then(()=>{
        sellerServices.deleteItem(sellerId,productId).then((e)=>{
          setForceUpdate(Math.random()  *   10000);
          console.log(e);
        }).catch(e=>console.log(e.message))
      })
    }
  })
}

  const data1 = [];
  if(data){
  for (let i = 0; i < data.length; i++) {
    data1.push({
      key: i ,
      title: `${data[i].productName}`,
      category: `${data[i].productCategory}`,
      price: `${data[i].productAmount}`,
      image: <><Image  src={`http://localhost:8080${data[i]?.ProductImage}`}  width={40} height={40} /></>,
      status: (
        <>
         <select
            name="status"
            className="form-control py-3 mb-3"
            id=""
          >
            <option value="" disabled>
              Select Status
            </option>
            <option value="active">In Stock</option>
            <option value="inactive">Out of Stock</option>
            {/* <option value="special">Special</option> */}
          </select>
        </>
      ),
      action: (
        <>
          <button  className=" fs-3 text-danger">
            <BiEdit />
          </button>
          <button className="ms-3 fs-3 text-danger" >
            <AiFillDelete  onClick={()=>{deleteitem(user.id,data[i]._id)}}/>
          </button>
        </>
      ),
    });
  }
}
  // console.log(data1);



  return (
    <div>
      <h3 className="mb-4 title">Products</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Productlist;

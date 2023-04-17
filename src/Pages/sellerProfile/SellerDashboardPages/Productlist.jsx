import React, { useEffect , useState} from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/product/productSlice";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
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
  // {
  //   title: "Brand",
  //   dataIndex: "brand",
  //   sorter: (a, b) => a.brand.length - b.brand.length,
  // },
  {
    title: "Category",
    dataIndex: "category",
    sorter: (a, b) => a.category.length - b.category.length,
  },
  // {
  //   title: "Color",
  //   dataIndex: "color",
  // },
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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const productState = useSelector((state) => state.product.products);
  const data1 = [];
  for (let i = 0; i < 20; i++) {
    data1.push({
      key: i ,
      title: `Food ${i}`,
      // brand: productState[i].brand,
      category: `stauts ${i}`,
      // color: productState[i].color,
      price: 45,
      image: `null ${i}`,
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
          <Link to='/' className=" fs-3 text-danger">
            <BiEdit />
          </Link>
          <Link className="ms-3 fs-3 text-danger" to="/">
            <AiFillDelete />
          </Link>
        </>
      ),
    });
  }
  console.log(data1);
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

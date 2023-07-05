import React, { useEffect, useState } from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
import { useSelector } from "react-redux";
import sellerServices from "../../../Services/SellerServices";


const Dashboard = () => {

  const [dashInfo, setDashInfo] = useState(null);
  const [graphData, setgraphData] = useState([]);
  const user = useSelector((state)=>state.userDetail)

  const getInfo = () => {
    sellerServices.getDashBoardInfo(user.id).then((res) => {
      setDashInfo(res)
      setgraphData(res.graphInfo);
    }).catch((err) => console.log(err.message))
  }
  useEffect(getInfo, []);

  let data = graphData

  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Income",
      },
    },
  };
  return (
    <div>
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total Income</p>
            <h4 className="mb-0 sub-title">Rs {dashInfo?.totalRevenue}</h4>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total Orders</p>
            <h4 className="mb-0 sub-title">{dashInfo?.totalorder}</h4>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Completed Orders</p>
            <h4 className="mb-0 sub-title">{dashInfo?.completedOrder}</h4>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-5 title">Income Statics</h3>
        <div>
          <Column {...config} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

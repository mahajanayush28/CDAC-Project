import React, { useRef, useState } from "react";
import "./Table.css";
import { ReactToPrint, useReactToPrint } from "react-to-print";
import topics from "./hms.jpg";
import moment from "moment";
import Axios from "axios";
//rafce
const Table = () => {
  const componentRef = useRef();
  const handleprint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [data, setemp] = useState([]);
  const [P_ID, setP_ID] = useState("");
  const column = [
    { heading: "P_ID", value: "P_ID" },
    { heading: "Doctor", value: "Doctor_Name" },
    { heading: "Net Price", value: "Consultant_Fee" },
    { heading: "(Tax %)", value: "Status" },
    { heading: "Bill Amount (R.S)", value: "Consultant_Fee" },
  ];
  const handle = () => {
    Axios.post("http://localhost:2000/getReceipt", { P_ID }).then((res) => {
      setemp(res.data);
    });
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setP_ID(e.target.value);
        }}
        placeholder="enter your P_ID"
      />
      <button onClick={handle}>click here</button>
      <div className="tables" ref={componentRef}>
        <b className="headingg">BILL OF SUPPLY</b>
        <div>
          <img src={topics} width={50} alt="logo" className="ml-100"></img>{" "}
        </div>

        
        <table className="headingg">
            <tbody>
              <tr>
                {data.map((item, index) => (
                  <td className="mr-20">
                    <span className="upper">Patient Name : </span>
                    {item.Name}
                  </td>
                ))}
              </tr>
              <tr>
                {data.map((item, index) => (
                  <td>
                    {" "}
                    <span className="upper">Patient Address : </span>{" "}
                    {item.Address}
                    <span className="okkkk"> okkk</span>
                    <span> </span>
                    <span> </span>
                    <span className="ml-10">Bill Number : </span> {item.BillNo}
                  </td>
                ))}
              </tr>
              <tr>
                {data.map((item, index) => (
                  <td>
                    {" "}
                    <span className="upper"> Gender : </span> {item.Gender}
                    <span className="okkkk"> okkk</span>
                    <span> </span>
                    <span> </span>
                    <span className="ml-40">
                      {moment().format("MMMM Do YYYY, h:mm:ss a")}
                    </span>
                  </td>
                ))}
              </tr>
            </tbody>
         
        </table>
        <table>
          <thead background-color="blue">
            <tr>
              {column.map((item, index) => (
                <TableHeadItem item={item} />
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <TableRow item={item} column={column} />
            ))}
          </tbody>
        </table>
        <hr></hr>
        <div className="mr-30">
          {data.map((item, index) => {
            return (
              <div>
                <div className="spans">
                  Total:
                  <span className="ml-10">{item.Consultant_Fee}</span>
                </div>
              </div>
            );
          })}
          <hr></hr>
        </div>
        {data.map((item, index) => {
          return (
            <div className="ml-60">
              <span className="spans">Paid By Patient: </span>
              {item.Consultant_Fee}
            </div>
          );
        })}

        {/* </div> */}
      </div>
      <div>
        <button onClick={handleprint} type="submit">
          print
        </button>
      </div>
    </div>
  );
};
const TableHeadItem = ({ item }) => <th>{item.heading}</th>;
const TableRow = ({ item, column }) => (
  <tr>
    {column.map((itemItem, index) => {
      return <td>{item[`${itemItem.value}`]}</td>;
    })}
  </tr>
);


export default Table;

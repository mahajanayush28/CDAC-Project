import React, { useRef } from "react";
import "./Table.css";
import { ReactToPrint, useReactToPrint } from "react-to-print";
import topics from "./hms.jpg";
import moment from "moment";
//rafce
const Table = ({ data, column }) => {
  // console.log(data.P_ID);
  // console.log("tableeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
  const componentRef = useRef();
  const handleprint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="tables" ref={componentRef}>
      <b>BILL OF SUPPLY</b>

      <div className="container emp-profile">
        <form method="">
          <div className="row">
            <div className="col-md-3">
              <h1></h1>
            </div>
          </div>
        </form>
      </div>
      <table className="borderr">
        <thead background-color="blue">
          <tr>
            {" "}
            <img src={topics} width={50} alt="logo" className="ml-100"></img>
            <b className="cap">Ananya Multispeciality Hospital</b>
          </tr>
        </thead>
        <tbody>
          {/* {data.map((item, index) => (
            <TableRow item={item} column={column} />
          ))} */}
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
                  <span className="ml-10">
                    <span className="ml-40">Bill Number : </span> {item.BillNo}
                  </span>
                </td>
              ))}
            </tr>
            <tr>
              {data.map((item, index) => (
                <td>
                  {" "}
                  <span className="upper"> Gender : </span> {item.Gender}
                  <span className="ml-40">
                    {moment().format("MMMM Do YYYY, h:mm:ss a")}
                  </span>
                </td>
              ))}
            </tr>
          </tbody>
        </tbody>
      </table>
      <table>
        <thead background-color="blue">
          <tr>
            {/* <th colSpan={500}></th> */}
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
                <span className="ml-40">{item.Consultant_Fee}</span>
              </div>
            </div>
          );
        })}
        ----------------------------------------------------------------------------
      </div>
      {data.map((item, index) => {
        return (
          <div className="ml-60">
            <span className="spans">Paid By Patient: </span>
            {item.Consultant_Fee}
          </div>
        );
      })}
      <div>
        <button onClick={handleprint} type="submit">
          print
        </button>
      </div>
      {/* </div> */}
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

{
  /* <script type="text/javascript">function printfunc(){window.print()}</script>; */
}
export default Table;

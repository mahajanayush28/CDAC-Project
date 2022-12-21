import React, { useState } from "react";
import "./status.css"

import Axios from "axios";

const Status = () => {
  const [data, setemp] = useState([]);
  const [P_ID, setP_ID] = useState("");
  const column = [
    { heading: "P_ID", value: "P_ID" },
    { heading: "Doctor", value: "Doctor_Name" },
    { heading: "Dept", value: "Specialization" },
    { heading: "Status", value: "Status" },
    { heading: "Amount", value: "Consultant_Fee" },
    { heading: "Payment", value: "Payment" },
  ];
  const handle = () => {
    Axios.post("http://localhost:2000/confirmation", { P_ID }).then((res) => {
      setemp(res.data);
    });
  };
  return (
    <div className="status">
      <input
        type="text"
        onChange={(e) => {
          setP_ID(e.target.value);
        }}
        placeholder="enter Patients P_ID"
      />
      <button onClick={handle}>click here</button>
      <div>
        <table>
          <thead>
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

export default Status;


















































































































































// import React, { useState } from "react";
// import "./status.css"
// import Axios from "axios";

// const Status = () => {
//   const [data, setemp] = useState([]);
//   const [P_ID, setP_ID] = useState("");
//   const column = [
//     { heading: "P_ID", value: "P_ID" },
//     { heading: "Doctor", value: "Doctor_Name" },
//     { heading: "Dept", value: "Specialization" },
//     { heading: "Amount", value: "Consultant_Fee" },
//     { heading: "Status", value: "Status" },
//   ];
//   const handle = () => {
//     Axios.post("http://localhost:2000/confirmation", {P_ID }).then((res) => {
//       setemp(res.data);
//     });
//   };
//   return (
//     <div className="status">
//       <input
//         type="text"
//         onChange={(e) => {
//           setP_ID(e.target.value);
//         }}
//         placeholder="enter Patients P_ID"
//       />
//       <button onClick={handle}>click here</button>
//       <div>
//         <table>
//           <thead>
//             <tr>
//               {column.map((item, index) => (
//                 <TableHeadItem item={item} />
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <TableRow item={item} column={column} />
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
// const TableHeadItem = ({ item }) => <th>{item.heading}</th>;
// const TableRow = ({ item, column }) => (
//   <tr>
//     {column.map((itemItem, index) => {
//       return <td>{item[`${itemItem.value}`]}</td>;
//     })}
//   </tr>
// );

// export default Status;

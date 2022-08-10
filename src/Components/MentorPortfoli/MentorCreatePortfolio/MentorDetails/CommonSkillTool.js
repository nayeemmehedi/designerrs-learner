// import React, { useEffect, useState } from "react";
// import { IoMdAdd } from "react-icons/io";
// import cross from "../../../../Assets/Images/mentors/cross.svg";
// import Tooltip from "@mui/material/Tooltip";

// function CommonSkillTool({ value, setValue }) {
//   const [form, setForm] = useState("");
//   const [btnVanis, setbtnVanis] = useState(false);

//   //   const [value, setValue] = useState([]);

//   const valueDelete = (id) => {
//     let newArray = value.filter((v, idx) => idx !== id);
//     setValue(newArray);
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();

//     if (form.length > 0) {
//       setValue([...value, form]);
//     }
//     setbtnVanis(!btnVanis);
//   };

//   console.log("value word");

//   return (
//     <div>
//       <div className="child-skills row">
//         {value?.map((value, idx) => (
//           <div className={value.length > 6 ? "col-2" : "col-1"}>
//             {value.length > 7 ? (
//               <div className="d-flex  justify-content-between   bg-danger text-light p-2 ">
//                 <div>
//                   <Tooltip title={value || "No Value"} placement="top-start">
//                     <p style={{ margin: "0", padding: "0" }}>
//                       {value.substring(0, 9) + "..."}
//                     </p>
//                   </Tooltip>
//                 </div>
//                 <span className="cursor " onClick={() => valueDelete(idx)}>
//                   <img
//                     src={cross}
//                     style={{ height: "12px", width: "12px" }}
//                     alt=""
//                   />
//                 </span>
//               </div>
//             ) : (
//               <div className="d-flex word-break fit   bg-danger text-light  ">
//                 <p style={{ margin: "0", padding: "0" }} className=" gg p-2">
//                   {value}
//                 </p>
//                 <span className="cursor p-2 " onClick={() => valueDelete(idx)}>
//                   <img
//                     src={cross}
//                     style={{ height: "12px", width: "12px" }}
//                     alt=""
//                   />
//                 </span>
//               </div>
//             )}
//           </div>
//         ))}

//         <div className=" col-4">
//           {btnVanis ? (
//             <form onSubmit={onSubmit}>
//               <div className="d-flex">
//                 <input
//                   type="text"
//                   name="box"
//                   onChange={(e) => setForm(e.target.value)}
//                   className="w-50"
//                 />

//                 <input type="submit" className="btn btn-main" />
//               </div>
//             </form>
//           ) : (
//             <div>
//               <button
//                 onClick={() => setbtnVanis(!btnVanis)}
//                 className="btn btn-main"
//               >
//                 {" "}
//                 <IoMdAdd style={{ color: "red !important" }}></IoMdAdd> Add
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CommonSkillTool;

import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import cross from "../../../../Assets/Images/mentors/cross.svg";
import Tooltip from "@mui/material/Tooltip";

function CommonSkillTool({ value, setValue }) {
  const [form, setForm] = useState("");
  const [btnVanis, setbtnVanis] = useState(false);

  //   const [value, setValue] = useState([]);

  const valueDelete = (id) => {
    let newArray = value.filter((v, idx) => idx !== id);
    setValue(newArray);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.length > 0) {
      setValue([...value, form]);
    }
    setbtnVanis(!btnVanis);
  };

  console.log("value word");

  return (
    <div>
      {/* <div className="child-skills row">
        {value?.map((value, idx) => (
          <div className={value.length > 6 ? "col-2" : "col-1"}>
            {value.length > 7 ? (
              <div className="d-flex  justify-content-between   bg-danger text-light p-2 ">
                <div>
                  <Tooltip title={value || "No Value"} placement="top-start">
                    <p style={{ margin: "0", padding: "0" }}>
                      {value.substring(0, 9) + "..."}
                    </p>
                  </Tooltip>
                </div>
                <span className="cursor " onClick={() => valueDelete(idx)}>
                  <img
                    src={cross}
                    style={{ height: "12px", width: "12px" }}
                    alt=""
                  />
                </span>
              </div>
            ) : (
              <div className="d-flex word-break fit   bg-danger text-light  ">
                <p style={{ margin: "0", padding: "0" }} className=" gg p-2">
                  {value}
                </p>
                <span className="cursor p-2 " onClick={() => valueDelete(idx)}>
                  <img
                    src={cross}
                    style={{ height: "12px", width: "12px" }}
                    alt=""
                  />
                </span>
              </div>
            )}
          </div>
        ))}

        <div className=" col-4">
          {btnVanis ? (
            <form onSubmit={onSubmit}>
              <div className="d-flex">
                <input
                  type="text"
                  name="box"
                  onChange={(e) => setForm(e.target.value)}
                  className="w-50"
                />

                <input type="submit" className="btn btn-main" />
              </div>
            </form>
          ) : (
            <div>
              <button
                onClick={() => setbtnVanis(!btnVanis)}
                className="btn btn-main"
              >
                {" "}
                <IoMdAdd style={{ color: "red !important" }}></IoMdAdd> Add
              </button>
            </div>
          )}
        </div>
      </div> */}

      {/* new part start here  */}

      <div id="skill-main">
        {value?.map((v, idx) => (
          <div className="mx-3 mt-3">
            <div className="d-flex  justify-content-between   bg-danger text-light px-2 pt-2 ">
              <div>
                <Tooltip title={v || "No Value"} placement="top-start">
                  <p style={{ margin: "0", padding: "0" }}>
                    {v.substring(0, 16)}
                    {v.length > 10 ? "..." : ""}
                  </p>
                </Tooltip>
              </div>
              <span className="cursor ms-3 " onClick={() => valueDelete(idx)}>
                <img
                  src={cross}
                  style={{ height: "15px", width: "15px" }}
                  alt=""
                />
              </span>
            </div>
          </div>
        ))}

        <div className="my-3   ms-3">
          {btnVanis ? (
            <form onSubmit={onSubmit}>
              <div className="d-flex">
                <input
                  type="text"
                  name="box"
                  onChange={(e) => setForm(e.target.value)}
                  className="w-50"
                />

                <input type="submit" className="btn btn-main" />
              </div>
            </form>
          ) : (
            <div>
              <button
                onClick={() => setbtnVanis(!btnVanis)}
                className="btn btn-main  "
              >
                {" "}
                <IoMdAdd
                  size={30}
                  className='pb-1'
                  style={{ color: "red !important" }}
                ></IoMdAdd>{" "}
               <span className="fs-5"> Add</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommonSkillTool;

// import React from "react";
// import { AiOutlineEye } from "react-icons/ai";
// import { useFormik } from "formik";
// import { useContext, useEffect, useState } from "react";
// // import { WorkExperienceSchema } from "../../common/YupValidation";
// import { GrFormClose } from "react-icons/gr";
// import CustomInputField from "../../../Common/CustomInputField";
// import { Form, Input, Label } from "reactstrap";
// import moment from "moment";
// // import PortfolioService from "../../../../services/Portfolio.service";
// import swal from "sweetalert";
// // import { PortfolioContextMade } from "../PortfolioContext";
// import { useDispatch, useSelector } from "react-redux";
// import { WorkExperienceSchemas } from "../../../../Valid/mentorPortfolio";
// // import { getPortfolio } from "../../../../Store/Portfolio/Action";

// const sessions = [
//   { name: "One Session", value: "1" },
//   { name: "Two Sessions", value: "2" },
//   { name: "Three Sessions", value: "3" },
//   { name: "Four Sessions", value: "4" },
//   { name: "Five Sessions", value: "5" },
// ];

// function ViewSections() {
//   const [sweet, setSweet] = useState(false);

//   const [dateError, setDateError] = useState(false);
//   const [currentlyWorking, setcurrentlyWorking] = useState(false);

//   const initialValues = {
//     designation: "",
//     companyName: "",
//     annualCTC: "",
//     domain: "",
//   };

//   const [filter, setFilter] = useState({});
//   const dispatch = useDispatch();

//   const onSubmit = (values) => {
//     if (Object.keys(filter).length > 1) {
//       setDateError(false);

//       const mainValue = { ...values, ...filter, currentlyWorking };

//       // let value = {
//       //   workExperience: [mainValue, ...portfolioValue.workExperience],
//       // };

//       // PortfolioService.portfolioPost(value).then((v) =>
//       //   swal("Good job!", "Successfully Done!", "success").then((sv) => {
//       //     dispatch(getPortfolio());
//       //     togglModal();
//       //   })
//       // );
//     } else {
//       setDateError(true);
//     }
//   };

//   const sendSchema = useFormik({
//     enableReinitialize: true,
//     initialValues: initialValues,
//     validationSchema: WorkExperienceSchemas,
//     onSubmit,
//   });

//   return (
//     <div className="my-4 w-75">
//       <div>
//         <h5 className="text-danger">Who can view these Sections </h5>
//         <span>
//           {" "}
//           <AiOutlineEye></AiOutlineEye> <span className="ms-1">You, Admin</span>
//         </span>
//       </div>

//       <Form onSubmit={sendSchema.handleSubmit}>
//         <div className="mb-3 mt-3 w47">
//           <CustomInputField
//             name={"annualCTC"}
//             type={"text"}
//             label={"Annual CTC(In Lakhs)(Optional)"}
//             placeholder={""}
//             validationType={sendSchema}
//           />
//         </div>

//         <div className="mb-3 mt-4">
//           <Label className="text-secondary">
//             <small>Select Dates</small>
//           </Label>
//           <div className="row">
//             <div className="col-md-4">
//               <Input
//                 name={"startDate"}
//                 type={"date"}
//                 placeholder={moment(new Date()).format("ll")}
//                 onChange={(e) =>
//                   setFilter({ ...filter, startDate: e.target.value })
//                 }
//                 value={filter.startDate}
//               />
//             </div>
//             <div className="col-md-4">
//               <Input
//                 name={"endDate"}
//                 type={"date"}
//                 placeholder={moment(new Date()).format("ll")}
//                 onChange={(e) =>
//                   setFilter({ ...filter, endDate: e.target.value })
//                 }
//                 value={filter.endDate}
//               />
//             </div>
//             <div className="col-3 mt-2">
//               <div class="form-check">
//                 <input
//                   class="form-check-input text-danger"
//                   type="checkbox"
//                   value=""
//                   id="flexCheckChecked"
//                   onChange={(e) => setcurrentlyWorking(e.target.checked)}
//                 />
//                 <label style={{ fontSize: "12px" }}>
//                   I'm currently working on here
//                 </label>
//               </div>
//             </div>
//             {dateError && (
//               <p className="text-danger">Date value fullfil first</p>
//             )}
//           </div>
//         </div>

//         <div>
//           <button className="btn btn-main2 " type="submit">
//             Submit
//           </button>
//         </div>
//       </Form>
//     </div>
//   );
// }

// export default ViewSections;
import React from 'react'

function ViewSections() {
  return (
    <div>ViewSections</div>
  )
}

export default ViewSections

import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";
import Info from "../../../Assets/Images/info.svg";
import weekChart from "../../../Assets/Images/icons/weekChart.svg";
import stopTimer from "../../../Assets/Images/icons/stopTimer.svg";
import reload from "../../../Assets/Images/icons/reload.svg";
import { Input, Label } from "reactstrap";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import Filter from "./Filter";
import { useHistory } from "react-router-dom";
import checkBord from "../../../Assets/Images/icons/checkBord.svg";
import { BiArrowBack } from "react-icons/bi";
import { profileImg } from "../../../Assets/Images/icons/profileDemo";
import {getMenrotPandingAssignment} from "../../../Store/PandingAssignment/action" 
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";





const PandingAssignment = () => {
  const history = useHistory();
  const [showOption,setShowOption] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const pandingAssignment = useSelector((state) => state.PandingAssignment.mentorData.assignments);

  console.log("state",pandingAssignment);
 
  const [pandingAssignmentData, setPandingAssignmentData] = useState([]);
  const dispatch = useDispatch();
  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };


  useEffect(()=>{
    dispatch(getMenrotPandingAssignment("622aced66ec329001677d572","62662d8412abcc0056249e71"))
  },[])

  return (
    <div className="row pandingAssignment">
      <div className="d-flex">
        <div className="col-md-2">
          <button
            style={{
              color: "#CD2026",
              border: "none",
              marginTop: "20px",
              marginLeft: "30px",
              backgroundColor: "transparent",
            }}
            onClick={() => history.push("/dashboard")}
          >
            <BiArrowBack /> Back to Dashboard
          </button>
        </div>

        <div className="col-md-8 mt-3">
        {pandingAssignment?.map((data, index) => {
          return (
            <div
              style={{ backgroundColor: "white", padding: "40px" }}
              className="my-5"
            >
              <div>
                <small>Session {index + 1}</small>
                <p className="pSessionName">{data?.sessionName}</p>
              </div>

            
                    <div className="row">
                      <hr></hr>
                      <div className="col-8 pandingAssignmentBox">
                        <small style={{ color: "#414141" }}>
                          Assignment {index + 1}
                        </small>
                        <p  className="my-1 mb-3 pAssignmentTitle" style={{ color: "#CD2026" }}>
                          {data?.assignment?.assignmentTitle}
                        </p>




                        <div className="imgSectionOfMentorPandingAssinment">
                        <AvatarGroup total={data?.users?.length}>
                          {data?.users?.map((v) => (
                            <Avatar alt="Remy Sharp" src={v?.profilePicture?.link} />
                          ))}
                        </AvatarGroup>
                      </div>




                        <small style={{ color: "#414141" }}>INSTRUCTIONS</small>
                        <br></br>
                        <small style={{ fontSize: "14px", marginLeft: "20px" }}>
                          {data?.assignment?.assignmentInstructions}
                        </small>
                      </div>
                      <div className="col-4">
                        
                            <div
                              className="d-flex"
                              style={{ marginLeft: "85px" }}
                            >
                             
                                <img
                                className="pImg"
                                  src={
                                    data?.status == "submitted"
                                      ? checkBord
                                      : Info
                                  }
                                  alt="info"
                                  style={{ width: "40px", height: "40px" }}
                                />
                            

                             
                              <div >
                                <p className="mb-0 sessionStatus">Status</p>

                                <h6 className="mb-0 sessionStatus">{data?.status}</h6>
                              </div>
                           
                            </div>
                           
                          
                      </div>
                    </div>
               
            </div>
          );
        })}





       </div>







    







      <div className=" order-md-0">
        {filterOpen && <Filter toggleFilter={toggleFilter} />}
      </div>
    </div>
    </div>
    
  );
};

export default PandingAssignment;

// <div className="my-3">
//   <img
//     className="weekChart"
//     src={weekChart}
//     alt="weekChart"
//     style={{ width: "80%" }}
//   />
// </div>

//api add data

// {allWeekData?.map((data, index) => {
//   return (
//     <div
//       style={{ backgroundColor: "white", padding: "40px" }}
//       className="my-5"
//     >
//       <div>
//         <small>Session {index + 1}</small>
//         <p className="pSessionName">{data?.session?.sessionName}</p>
//       </div>

//       {data?.session?.assignments?.map(
//         (assignment, indexAssignment) => {
//           return (
//             <div className="row">
//               <hr></hr>
//               <div className="col-8">
//                 <small style={{ color: "#414141" }}>
//                   Assignment {indexAssignment + 1}
//                 </small>
//                 <p  className="my-1 mb-3 pAssignmentTitle" style={{ color: "#CD2026" }}>
//                   {assignment?.assignmentTitle}
//                 </p>

//                 <small style={{ color: "#414141" }}>INSTRUCTIONS</small>
//                 <br></br>
//                 <small style={{ fontSize: "14px", marginLeft: "20px" }}>
//                   {assignment?.assignmentInstructions}
//                 </small>
//               </div>
//               <div className="col-4">

//                     <div
//                       className="d-flex"
//                       style={{ marginLeft: "85px" }}
//                     >

//                         <img
//                         className="pImg"
//                           src={
//                             assignment?.status == "submitted"
//                               ? checkBord
//                               : Info
//                           }
//                           alt="info"
//                           style={{ width: "40px", height: "40px" }}
//                         />

//                       <div >
//                         <p className="mb-0 sessionStatus">Status</p>

//                         <h6 className="mb-0 sessionStatus">{assignment?.status}</h6>
//                       </div>

//                     </div>

//               </div>
//             </div>
//           );
//         }
//       )}
//     </div>
//   );
// })}

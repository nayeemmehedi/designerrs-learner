import React, { useEffect } from "react";
import DashBoardComplete from "./DashBoardComplete";
import DashBoardMain from "../DashBoardMain";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Common/Loading";
import { getEnrolledCourses } from "../../../Store/courseOnBoarding/actions";

function DashBoardChild() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEnrolledCourses())
  },[])
  
  const { error, loading, courses } = useSelector((state) => state.courseOnBoarding);
  const role = localStorage.getItem("role")
  if (loading) return <Loading />;
  return (
    <div>
      <DashBoardComplete />
      <DashBoardMain />
      {/* <div style={{ height: "240px", background: "#FFFFFF" }}></div> */}
    </div>
  );
}

export default DashBoardChild;

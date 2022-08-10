import React, { useEffect } from 'react'
import { DiCloud9 } from "react-icons/di";
import course from "../../../../../Assets/Images/icons/course.svg"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getMentorSession } from '../../../../../Store/Mentor/actions';
import Loading from '../../../../Common/Loading';

function StepperChild3() {

    // const {onBoarding} = useSelector(state=> state.courseOnBoarding)
    // console.log(onBoarding)
    const dispatch = useDispatch();
  const { batchId } = useParams();

  const {error, loading,sessions} = useSelector(
    (state) => state.OnBoardingMentor

  );
  
  if (loading) return <Loading />;
  return (
    <div>
      {sessions?.map((v,idx)=>
       <div className='my-3' key={idx}>
       <div className="">
     <div className="p-4 ">
       <div className="text-secondary">
         <p style={{ height: "10px" }}>{idx}</p>
         <p>{v?.sessionName} </p>
       </div>
       <div className="d-flex">
         <img src={course} alt="none" style={{height:'15px',width:'auto'}}  />
         {/* <img src="" alt="" /> */}
         <small className='ms-2 text-secondary'>{v?.sessionType}</small>
       </div>
     </div>
   </div>
   </div>
        )}
    </div>
  )
}

export default StepperChild3
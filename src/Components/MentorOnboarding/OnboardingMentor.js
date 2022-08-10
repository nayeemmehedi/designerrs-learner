import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axiosApi from '../../Helper/api';
import { getEnrolledCourses } from '../../Store/courseOnBoarding/actions';
import { getassigned_course } from '../../Store/Mentor/actions';
import Loading from '../Common/Loading';
import Image from './Image';
import NavigationMain from './Navigation/NavigationMain';
import HeaderOnboarding from './OnboardingDetails/HeaderOnboarding'
import SessionDetails from './OnboardingDetails/SessionDetails'

function OnboardingMentor() {
  useEffect(() => {
    dispatch(getassigned_course())
  },[])
  
  const { courses, error,loading } = useSelector((state) => state.OnBoardingMentor);

  const dispatch = useDispatch();
  if (loading) return <Loading />;
  return (
    <div>
      <div>
      <HeaderOnboarding />
      <SessionDetails />
      {/* <div style={{ height: "240px", background: "#FFFFFF" }}></div> */}
    </div>

    </div>
  )
}

export default OnboardingMentor
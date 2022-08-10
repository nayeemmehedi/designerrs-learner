import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import axiosApi from "../../../Helper/api";
// import {
//   decrement,
//   increment,
// } from "../../../Store/Authentication/Onboarding/Action";
// import "../Onboarding.css";
import { Input } from "reactstrap";
import { useParams } from "react-router-dom";
import { decrement, increment } from "../../../../Store/Authentication/Onboarding/Action";
import axiosApi from "../../../../Helper/api";
import { useHistory } from "react-router-dom";

// import Style from "../../Style/auth.module.scss";
import Style from "../../../../Style/auth.module.scss";



function MentorAgreement() {

  const [process, setProcess] = useState({loading: false});

  const history =useHistory()
  const dispatch = useDispatch();
  const [reason, setReason] = useState([]);
  const getJoinCourse = () => {
    axiosApi
      .get(`/admin/globalsettings/fields?fields=reasonsForJoining`)
      .then((res) => {
        console.log(res);
        setReason(res?.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getJoinCourse();
  }, []);
  console.log(reason);

  const [agreement, setAgreement] = useState({ reason: "", codeOfConduct: "" });
  const handleCheck = (e) => {
    const { checked } = e.target;
    if (checked) {
      setAgreement({ ...agreement, codeOfConduct: true });
    } else {
      setAgreement({ ...agreement, codeOfConduct: false });
    }
  };
  console.log(agreement);

  const {batchId} = useParams()
  console.log(batchId)

  const send = () => {
    console.log("ar",agreement)
   if(agreement.codeOfConduct === true && agreement.reason.length>0){
    setProcess({
      ...process,
      loading: true })

    axiosApi
    .post(`/mentor/courses/${batchId}/onboarding`, agreement)
    .then((res) => {
      console.log(res);

     history.push('/mentor')
     setProcess({
      ...process,
      loading: false })
      dispatch(decrement())
    })
    .catch((err) => {
      console.log(err);
    });

   }
  };

  return (
    <div className="p-4">
      <div className="row">
        <div className="col-7 mt-2">
          <h2>Mentor Agreement</h2>

          <p>What are your goals to mentoring this course?</p>

          <Input
            name="area"
            placeholder="number"
            type="select"
            className="form-control w-40"
            onChange={(e) =>
              setAgreement({ ...agreement, reason: e.target.value })
            }
          >
            {" "}
            <option defaultValue>To learn leadership skills</option>
            {reason?.reasonsForJoining?.map((i) => (
              <option value={i}>{i}</option>
            ))}
          </Input>

          <div className="mt-3">
            <small>
              We have certain guidelines around our courses to ensure a safe and
              smooth learning learning experience for you. Learn more about Code
              Of Conduct
            </small>
          </div>

          <div className="form-check mt-4">
            <Input type="checkbox" onChange={(e) => handleCheck(e)} />
            <label className="form-check-label" for="flexCheckChecked">
              <small> I accept Code of Contract</small>
            </label>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "180px" }} className=" my-4">
        <div className="d-flex justify-content-between whiteColor backBtn">
          <div className="p-3">
            <button
              className="whiteColor ontherbtn"
              onClick={() => dispatch(decrement())}
            >
              back
            </button>
          </div>

          <div className="p-3">
            <button style={{borderRadius:0}}
              onClick={() =>send()}
              className= {`btn p-2 ${Style.button}` }
             
                   disabled={process.loading && true}
            >
              
              {process.loading ? "Going to Mentor Onboarding...." : "Finish"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentorAgreement;

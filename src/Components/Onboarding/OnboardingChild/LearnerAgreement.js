import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axiosApi from "../../../Helper/api";
import {
  decrement,
  increment,
} from "../../../Store/Authentication/Onboarding/Action";
import "../Onboarding.css";
import { Input } from "reactstrap";
import { useParams } from "react-router-dom";
import SackBar from "../../Common/SackBar";
import { useHistory } from "react-router-dom";

function LearnerAgreement() {
  const dispatch = useDispatch();
  const [reason, setReason] = useState([]);
  const history = useHistory();
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

  const { courseId } = useParams();

  const send = () => {
    axiosApi
      .post(`/learner/courses/${courseId}/onboarding`, agreement)
      .then((res) => {
        console.log(res);
        dispatch(increment());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = () => {
    send();
  };
  return (
    <div className="p-4">
      <div className="row">
        <div className="col-7 mt-2">
          <h2>Learner Agreement</h2>

          <p>What are your goals of joining this course?</p>

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
            <option defaultValue>Select Reason</option>
            {reason?.reasonsForJoining?.map((i) => (
              <option value={i}>{i}</option>
            ))}
          </Input>

          <div className="mt-3">
            <small>
              We have certain guidelines around our courses to ensure a safe and
              smooth learning learning experience for you.{" "}
              <p className="txtColor">Learn more about Code Of Conduct</p>
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

      <SackBar
        history={history}
        title={"Next"}
        onSubmit={handleSubmit}
      ></SackBar>
    </div>
  );
}

export default LearnerAgreement;
